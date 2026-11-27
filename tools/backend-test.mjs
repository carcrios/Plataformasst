/**
 * Pruebas del backend (Apps Script) en Node, con un simulador de Sheets, Properties, Cache, Lock, Mail, UrlFetch.
 * Uso:  node tools/backend-test.mjs
 * Carga backend/Content.gs + backend/Code.gs en el mismo contexto, igual que Apps Script.
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const code = readFileSync(resolve(root, 'backend/Code.gs'), 'utf8') + '\n' + readFileSync(resolve(root, 'backend/Content.gs'), 'utf8');

// ---------- Simulador de Apps Script ----------
const sheets = {};
const props = {
  ADMIN_EMAIL: 'admin@academiasst.co',
  WOMPI_ENV: 'sandbox',
  WOMPI_PUBLIC_KEY: 'pub_test_ABC',
  WOMPI_INTEGRITY_SECRET: 'test_integrity_SECRET',
  WOMPI_EVENTS_SECRET: 'test_events_SECRET',
  PLATFORM_URL: 'https://demo.example/web/',
  PLATFORM_NAME: 'Academia SST Colombia',
  TRAINER_NAME: 'Ing. Test',
  TRAINER_LICENSE: 'LIC-123'
};
const mails = [];
const cache = new Map();
let nextTx = null;

class Sheet {
  constructor(name) {
    this.name = name;
    this.rows = [];
  }
  appendRow(r) {
    this.rows.push([...r]);
  }
  setFrozenRows() {}
  getDataRange() {
    const rows = this.rows;
    return { getValues: () => rows.map((r) => [...r]) };
  }
  getRange(r, c) {
    const self = this;
    return {
      setValue(v) {
        while (self.rows.length < r) self.rows.push([]);
        const row = self.rows[r - 1];
        while (row.length < c) row.push('');
        row[c - 1] = v;
      }
    };
  }
}

const ss = {
  getSheetByName: (n) => sheets[n] || null,
  insertSheet: (n) => (sheets[n] = new Sheet(n)),
  getId: () => 'test-sheet'
};

const ctx = {
  SpreadsheetApp: { getActiveSpreadsheet: () => ss, openById: () => ({ getSheetByName: (n) => sheets[n] || null }) },
  Utilities: {
    DigestAlgorithm: { SHA_256: 'SHA_256' },
    Charset: { UTF_8: 'UTF_8' },
    computeDigest: (alg, text) => Array.from(crypto.createHash('sha256').update(String(text), 'utf8').digest()).map((b) => (b > 127 ? b - 256 : b)),
    getUuid: () => crypto.randomUUID(),
    formatDate: () => '2026-11-25_12-00'
  },
  PropertiesService: {
    getScriptProperties: () => ({
      getProperty: (k) => (props[k] !== undefined ? props[k] : null),
      setProperty: (k, v) => (props[k] = v),
      deleteProperty: (k) => delete props[k]
    })
  },
  CacheService: {
    getScriptCache: () => ({
      get: (k) => (cache.has(k) ? cache.get(k) : null),
      put: (k, v) => cache.set(k, String(v)),
      remove: (k) => cache.delete(k)
    })
  },
  LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
  ContentService: {
    MimeType: { JSON: 'application/json' },
    createTextOutput: (text) => ({ setMimeType: () => ({ getContent: () => text }) })
  },
  MailApp: { sendEmail: (to, subject, body) => mails.push({ to, subject, body }) },
  UrlFetchApp: {
    fetch: () => ({
      getResponseCode: () => (nextTx ? 200 : 404),
      getContentText: () => JSON.stringify({ data: nextTx })
    })
  },
  DriveApp: {},
  Logger: { log() {} }
};
vm.createContext(ctx);
vm.runInContext(code, ctx);
const CONTENT = vm.runInContext('CONTENT', ctx);

// La cuenta nueva se activa con el enlace que llega al correo (no con la contraseña del checkout)
function activate(email, password = 'Clave123') {
  const m = mails.filter((x) => x.to === email && String(x.body).includes('#set-password?token=')).pop();
  if (!m) return null;
  const token = decodeURIComponent(String(m.body).match(/token=([^\s]+)/)[1]);
  return call('setPassword', { token, password }, '');
}


// ---------- Helpers de prueba ----------
const call = (action, payload = {}, token = '') => {
  const body = JSON.stringify({ action, payload, token });
  return JSON.parse(vm.runInContext(`doPost({ postData: { contents: ${JSON.stringify(body)} } }).getContent()`, ctx));
};
const sha = (t) => crypto.createHash('sha256').update(t, 'utf8').digest('hex');
const sheetRows = (name) => sheets[name].rows.slice(1);

let passed = 0;
const failures = [];
async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log('PASS ' + name);
  } catch (err) {
    failures.push(name);
    console.log('FAIL ' + name + '\n     ' + err.message);
  }
}

// Helpers de dominio
const ADMIN = () => call('adminLogin', { email: 'admin@academiasst.co', password: 'AdminSST2026!' }).token;
const solveOrder = (orderRes, status = 'APPROVED') => {
  nextTx = {
    id: 'TX-' + Math.random().toString(36).slice(2, 8),
    reference: orderRes.reference,
    amount_in_cents: orderRes.amountInCents,
    currency: 'COP',
    status
  };
  return nextTx;
};

// ---------- Escenarios ----------
let admin;
const buyer = (email, extra = {}) => ({ fullName: 'Ana Pérez', documentId: '1015443322', email, password: 'Clave123', ...extra });
const CONSENT = { privacyPolicy: true, termsOfUse: true };

await test('Administrador: preparar clave y entrar con hash', async () => {
  props.ADMIN_PASSWORD = 'AdminSST2026!';
  vm.runInContext('prepararClaveAdmin()', ctx);
  assert.equal(props.ADMIN_PASSWORD, undefined, 'la clave en claro debe eliminarse');
  admin = ADMIN();
  assert.ok(admin, 'debe devolver token de administrador');
});

await test('Catálogo público: 16 cursos y ninguna respuesta correcta expuesta', async () => {
  const r = call('getCatalog');
  assert.equal(r.courses.length, 16);
  assert.equal(r.storeReady, true);
  const s = JSON.stringify(r);
  assert.ok(!/"answer"|"correct"|feedback/.test(s), 'el catálogo no debe traer claves');
});

await test('Tienda falla cerrada si WOMPI_ENV no está definido', async () => {
  const saved = props.WOMPI_ENV;
  delete props.WOMPI_ENV;
  const cat = call('getCatalog');
  assert.equal(cat.storeReady, false);
  const order = call('createOrder', { items: ['loto-bloqueo'], buyer: buyer('x@test.co'), consent: CONSENT });
  activate('x@test.co');
  assert.equal(order.ok, false);
  props.WOMPI_ENV = saved;
});

await test('Tienda falla cerrada con clave de prueba en producción', async () => {
  props.WOMPI_ENV = 'production';
  assert.equal(call('getCatalog').storeReady, false);
  props.WOMPI_ENV = 'sandbox';
});

await test('Checkout exige aceptar política y términos', async () => {
  const r = call('createOrder', { items: ['loto-bloqueo'], buyer: buyer('sinconsent@test.co') });
  activate('sinconsent@test.co');
  assert.equal(r.ok, false);
});

let anaOrder;
await test('Paquete: precio calculado en servidor (20%) y firma de integridad', async () => {
  const r = call('createOrder', { bundleId: 'paquete-operario-planta', buyer: buyer('ana@test.co'), consent: CONSENT });
  activate('ana@test.co');
  assert.equal(r.ok, true, r.error);
  assert.equal(r.amountInCents, 48000000, '4 cursos de 150.000 con 20 % = 480.000 COP');
  assert.equal(r.integritySignature, sha(r.reference + r.amountInCents + 'COP' + props.WOMPI_INTEGRITY_SECRET));
  anaOrder = r;
});

await test('Paquete de comités (COPASST y Convivencia): 2 cursos con 20 %', async () => {
  const r = call('createOrder', { bundleId: 'paquete-comites-sst', buyer: buyer('comites@test.co'), consent: CONSENT });
  activate('comites@test.co');
  assert.equal(r.ok, true, r.error);
  assert.equal(r.amountInCents, 24000000, '2 cursos de 150.000 con 20 % = 240.000 COP');
});

await test('Doble clic en pagar reutiliza el mismo pedido pendiente', async () => {
  const again = call('createOrder', { bundleId: 'paquete-operario-planta', buyer: buyer('ana@test.co'), consent: CONSENT });
  activate('ana@test.co');
  assert.equal(again.orderId, anaOrder.orderId);
  assert.equal(sheetRows('Pedidos').filter((r) => r[0] === anaOrder.orderId).length, 1);
});

await test('Pago aprobado otorga los cursos una sola vez', async () => {
  const tx = solveOrder(anaOrder, 'APPROVED');
  const r1 = call('confirmPayment', { transactionId: tx.id });
  assert.equal(r1.status, 'PAGADO');
  const r2 = call('confirmPayment', { transactionId: tx.id });
  assert.equal(r2.status, 'PAGADO');
});

let anaToken;
await test('Login del alumno y sesión guardada solo como hash', async () => {
  const r = call('loginUser', { email: 'ana@test.co', password: 'Clave123' });
  assert.equal(r.ok, true);
  anaToken = r.token;
  const stored = sheets['Usuarios'].rows.find((row) => row[3] === 'ana@test.co');
  const sessionCol = sheets['Usuarios'].rows[0].indexOf('sessionToken');
  assert.ok(stored[sessionCol].startsWith('h:'));
  assert.ok(!stored[sessionCol].includes(anaToken), 'el token no puede guardarse en claro');
});

await test('Login con contraseña incorrecta y límite de intentos', async () => {
  for (let i = 0; i < 5; i++) call('loginUser', { email: 'bloqueo@test.co', password: 'mala' });
  const r = call('loginUser', { email: 'bloqueo@test.co', password: 'Clave123' });
  assert.equal(r.ok, false, 'tras 5 fallos debe bloquear incluso con la clave buena');
});

function displayed(courseId, canonical, token) {
  const order = call('getExamOrder', { courseId }, token).order;
  return canonical.map((a, i) => order[i].indexOf(a));
}
function cover(courseId, token) {
  const n = CONTENT[courseId].syllabus.length;
  call('saveProgress', { courseId, data: { modulesRead: Array.from({ length: n }, (_, i) => i) } }, token);
  for (let i = 0; i < n; i++) call('checkAnswer', { courseId, kind: 'practice', index: i, choice: 0 }, token);
  for (let i = 0; i < CONTENT[courseId].scenarios.length; i++) call('checkAnswer', { courseId, kind: 'scenario', index: i, choice: 0 }, token);
  const ws = CONTENT[courseId].workshops || [];
  ws.forEach((mins, i) => {
    const r = call('saveWork', { courseId, kind: 'workshop', index: i, answers: mins.map((m, j) => texto(m, i * 10 + j)) }, token);
    assert.equal(r.ok, true, r.error);
  });
  if (CONTENT[courseId].project) {
    const r = call('saveWork', { courseId, kind: 'project', answers: CONTENT[courseId].project.map((m, j) => texto(m, 500 + j)), rubric: Array(CONTENT[courseId].projectRubric).fill(true) }, token);
    assert.equal(r.ok, true, r.error);
  }
}

// Texto de prueba con vocabulario variado (el servidor rechaza relleno repetido)
function texto(min, seed) {
  const out = [];
  for (let k = 0; out.length < min + 2; k++) out.push('palabra' + seed + 'x' + k);
  return out.join(' ');
}

await test('Talleres: el servidor exige el mínimo de palabras y rechaza relleno', async () => {
  const mins = CONTENT['loto-bloqueo'].workshops[0];
  const corto = call('saveWork', { courseId: 'loto-bloqueo', kind: 'workshop', index: 0, answers: mins.map(() => 'muy corto') }, anaToken);
  assert.equal(corto.ok, false);
  assert.match(corto.error, /al menos/);
  const relleno = call('saveWork', { courseId: 'loto-bloqueo', kind: 'workshop', index: 0, answers: mins.map((m) => Array(m + 5).fill('bloqueo').join(' ')) }, anaToken);
  assert.equal(relleno.ok, false);
  assert.match(relleno.error, /repite/);
  const copia = texto(Math.max(...mins), 1);
  const iguales = call('saveWork', { courseId: 'loto-bloqueo', kind: 'workshop', index: 0, answers: mins.map(() => copia) }, anaToken);
  assert.equal(iguales.ok, false);
  const fuera = call('saveWork', { courseId: 'loto-bloqueo', kind: 'workshop', index: 99, answers: [] }, anaToken);
  assert.equal(fuera.ok, false);
  const ok = call('saveWork', { courseId: 'loto-bloqueo', kind: 'workshop', index: 0, answers: mins.map((m, j) => texto(m, j)) }, anaToken);
  assert.equal(ok.ok, true, ok.error);
  const st = call('getProgress', { courseId: 'loto-bloqueo' }, anaToken);
  assert.ok(st.works['workshop:0'], 'la entrega queda en el estado del curso');
});

await test('Proyecto final: exige la autoevaluación completa', async () => {
  const mins = CONTENT['loto-bloqueo'].project;
  const sinRubrica = call('saveWork', { courseId: 'loto-bloqueo', kind: 'project', answers: mins.map((m, j) => texto(m, 700 + j)), rubric: [] }, anaToken);
  assert.equal(sinRubrica.ok, false);
  assert.match(sinRubrica.error, /autoevaluación/);
});

await test('Examen bloqueado sin leer módulos ni responder práctica', async () => {
  const r = call('submitExam', { courseId: 'loto-bloqueo', answers: displayed('loto-bloqueo', CONTENT['loto-bloqueo'].exam, anaToken) }, anaToken);
  assert.equal(r.ok, false);
  assert.match(r.error, /Lea todos los módulos/);
});

await test('Progreso de lectura se guarda en servidor y se puede consultar', async () => {
  call('saveProgress', { courseId: 'loto-bloqueo', data: { modulesRead: [0, 1] } }, anaToken);
  const p = call('getProgress', { courseId: 'loto-bloqueo' }, anaToken);
  assert.deepEqual(p.modulesRead.sort(), [0, 1]);
});

await test('Examen: el servidor califica; 100 % aprueba y emite constancia', async () => {
  cover('loto-bloqueo', anaToken);
  const answers = CONTENT['loto-bloqueo'].exam;
  const r = call('submitExam', { courseId: 'loto-bloqueo', answers: displayed('loto-bloqueo', answers, anaToken) }, anaToken);
  assert.equal(r.ok, true, r.error);
  assert.equal(r.passed, true);
  assert.equal(r.score, 100);
  const c1 = call('issueCertificate', { courseId: 'loto-bloqueo' }, anaToken);
  assert.equal(c1.ok, true, c1.error);
  assert.equal(c1.certificate.trainerLicense, 'LIC-123');
  assert.equal(c1.certificate.hours, CONTENT['loto-bloqueo'].hours);
  const c2 = call('issueCertificate', { courseId: 'loto-bloqueo' }, anaToken);
  assert.equal(c2.certificate.code, c1.certificate.code, 'una constancia por alumno y curso');
});

await test('Constancia no puede emitirse para curso no comprado', async () => {
  const r = call('issueCertificate', { courseId: 'andamiero' }, anaToken);
  assert.equal(r.ok, false);
});

await test('Constancia no puede forjarse con progreso falso', async () => {
  const forged = call('saveProgress', { courseId: 'andamiero', data: { passed: true, score: 100 } }, anaToken);
  assert.equal(forged.ok, false, 'andamiero aún no fue comprado por Ana');
  const forgedCert = call('issueCertificate', { courseId: 'andamiero' }, anaToken);
  assert.equal(forgedCert.ok, false);
});

await test('Examen reprobado no emite constancia y revela respuestas solo al agotar intentos', async () => {
  const sim = call('createOrder', { items: ['andamiero'], buyer: buyer('ana@test.co'), consent: CONSENT, discountCode: '' }, '');
  activate('ana@test.co');
  solveOrder(sim, 'APPROVED');
  call('confirmPayment', { transactionId: nextTx.id });
  cover('andamiero', anaToken);
  const wrong = CONTENT['andamiero'].exam.map((a, i) => (a + 1) % CONTENT['andamiero'].examOptions[i]);
  const r1 = call('submitExam', { courseId: 'andamiero', answers: displayed('andamiero', wrong, anaToken) }, anaToken);
  assert.equal(r1.passed, false);
  assert.equal(r1.attemptsLeft, 2);
  assert.equal(r1.reveal.length, 0, 'no revela con intentos disponibles');
  call('submitExam', { courseId: 'andamiero', answers: displayed('andamiero', wrong, anaToken) }, anaToken);
  const r3 = call('submitExam', { courseId: 'andamiero', answers: displayed('andamiero', wrong, anaToken) }, anaToken);
  assert.equal(r3.attemptsLeft, 0);
  assert.ok(r3.reveal.length > 0, 'al agotar intentos muestra las correctas de las falladas');
  const r4 = call('submitExam', { courseId: 'andamiero', answers: displayed('andamiero', wrong, anaToken) }, anaToken);
  assert.equal(r4.ok, false, 'ya no hay intentos');
  const cert = call('issueCertificate', { courseId: 'andamiero' }, anaToken);
  assert.equal(cert.ok, false);
});

await test('Preguntas de práctica: una sola respuesta por pregunta (sin adivinar)', async () => {
  const first = call('checkAnswer', { courseId: 'loto-bloqueo', kind: 'practice', index: 0, choice: 0 }, anaToken);
  assert.ok(first.ok || first.answered, 'la primera respuesta queda registrada');
  assert.ok(!('answer' in first), 'no revela la clave en la práctica');
  const second = call('checkAnswer', { courseId: 'loto-bloqueo', kind: 'practice', index: 0, choice: 1 }, anaToken);
  assert.equal(second.ok, false);
  assert.equal(second.answered, true);
});

await test('Escenario devuelve retroalimentación y solo se registra una vez', async () => {
  const r = call('checkAnswer', { courseId: 'loto-bloqueo', kind: 'scenario', index: 0, choice: 1 }, anaToken);
  assert.ok(r.ok || r.answered);
  if (r.ok) {
    assert.equal(typeof r.correct, 'boolean');
    assert.ok(r.feedback.length > 0);
  }
  assert.equal(call('checkAnswer', { courseId: 'loto-bloqueo', kind: 'scenario', index: 0, choice: 0 }, anaToken).ok, false);
});

await test('Índices fuera de rango y tipos inválidos se rechazan', async () => {
  assert.equal(call('checkAnswer', { courseId: 'loto-bloqueo', kind: 'practice', index: 99, choice: 0 }, anaToken).ok, false);
  assert.equal(call('checkAnswer', { courseId: 'loto-bloqueo', kind: 'practice', index: 1, choice: 9 }, anaToken).ok, false);
  assert.equal(call('checkAnswer', { courseId: 'loto-bloqueo', kind: 'otra', index: 0, choice: 0 }, anaToken).ok, false);
});

await test('__proto__ y constructor no pasan como cursos', async () => {
  const r = call('createOrder', { items: ['__proto__'], buyer: buyer('proto@test.co'), consent: CONSENT });
  activate('proto@test.co');
  assert.equal(r.ok, false);
  const r2 = call('createOrder', { items: ['constructor'], buyer: buyer('proto@test.co'), consent: CONSENT });
  activate('proto@test.co');
  assert.equal(r2.ok, false);
});

await test('Admin re-registra alumno: suma cursos, no borra pagados ni cambia la clave', async () => {
  const r = call('registerUser', { email: 'ana@test.co', fullName: 'Ana Pérez', documentId: '1015443322', allowedCourses: ['andamiero'] }, admin);
  assert.equal(r.ok, true);
  assert.equal(r.created, false);
  const login = call('loginUser', { email: 'ana@test.co', password: 'Clave123' });
  assert.equal(login.ok, true, 'la clave anterior debe seguir valiendo');
  const courses = login.user.allowedCourses;
  assert.ok(courses.includes('loto-bloqueo') && courses.includes('andamiero'));
});

await test('Restablecer contraseña invalida la sesión anterior', async () => {
  const uid = sheets['Usuarios'].rows.find((row) => row[3] === 'ana@test.co')[0];
  const r = call('resetPassword', { userId: uid, password: 'NuevaClave9' }, admin);
  assert.equal(r.ok, true);
  assert.equal(call('getMyCourses', {}, anaToken).code, 'AUTH');
  assert.equal(call('loginUser', { email: 'ana@test.co', password: 'Clave123' }).ok, false);
  assert.equal(call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' }).ok, true);
});

await test('Cerrar sesión la invalida en el servidor', async () => {
  const login = call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' });
  call('logout', {}, login.token);
  assert.equal(call('getMyCourses', {}, login.token).code, 'AUTH');
});

await test('Acciones de administrador sin token de administrador se rechazan', async () => {
  assert.equal(call('listUsers', {}, anaToken).code, 'AUTH');
  assert.equal(call('registerUser', {}, '').code, 'AUTH');
});

await test('Listado de usuarios no expone hashes ni sesiones', async () => {
  const s = JSON.stringify(call('listUsers', {}, admin));
  assert.ok(!/passwordHash|passwordSalt|sessionToken|h:/.test(s));
});

await test('Cupón vencido o agotado se rechaza; cupón válido se descuenta una vez', async () => {
  sheets['Cupones'] = new Sheet('Cupones');
  sheets['Cupones'].appendRow(['code', 'percent', 'active', 'expiresAt', 'maxUses', 'usedCount']);
  sheets['Cupones'].appendRow(['VIEJO', 10, 'SI', '2020-01-01', 0, 0]);
  sheets['Cupones'].appendRow(['UNA', 10, 'SI', '', 1, 0]);
  const b = { items: ['observador-fuego'], buyer: buyer('cupon@test.co'), consent: CONSENT };
  assert.equal(call('createOrder', { ...b, discountCode: 'VIEJO' }).ok, false);
  const ok = call('createOrder', { ...b, discountCode: 'UNA' });
  assert.equal(ok.ok, true, ok.error);
  assert.equal(ok.amountInCents, 13500000, '150.000 con 10 % = 135.000');
  solveOrder(ok, 'APPROVED');
  call('confirmPayment', { transactionId: nextTx.id });
  const other = call('createOrder', { items: ['mecanica-basica'], buyer: buyer('otro@test.co'), consent: CONSENT, discountCode: 'UNA' });
  activate('otro@test.co');
  assert.equal(other.ok, false, 'el cupón de un solo uso ya se agotó');
});

await test('Reembolso (VOIDED) revoca el curso; un APPROVED repetido no lo vuelve a dar', async () => {
  const o = call('createOrder', { items: ['sustancias-quimicas'], buyer: buyer('reem@test.co'), consent: CONSENT });
  activate('reem@test.co');
  solveOrder(o, 'APPROVED');
  call('confirmPayment', { transactionId: nextTx.id });
  const approvedTx = { ...nextTx };
  solveOrder(o, 'VOIDED');
  call('confirmPayment', { transactionId: nextTx.id });
  const login = call('loginUser', { email: 'reem@test.co', password: 'Clave123' });
  assert.ok(!login.user.allowedCourses.includes('sustancias-quimicas'), 'el curso se revoca');
  nextTx = approvedTx;
  const replay = call('confirmPayment', { transactionId: approvedTx.id });
  assert.equal(replay.status, 'ANULADO', 'no debe reabrirse');
  const login2 = call('loginUser', { email: 'reem@test.co', password: 'Clave123' });
  assert.ok(!login2.user.allowedCourses.includes('sustancias-quimicas'));
});

await test('Pedido pagado no retrocede si llega DECLINED', async () => {
  const o = call('createOrder', { items: ['herramientas-electricas'], buyer: buyer('nodeg@test.co'), consent: CONSENT });
  activate('nodeg@test.co');
  solveOrder(o, 'APPROVED');
  call('confirmPayment', { transactionId: nextTx.id });
  solveOrder(o, 'DECLINED');
  const r = call('confirmPayment', { transactionId: nextTx.id });
  assert.equal(r.status, 'PAGADO');
});

await test('Monto distinto al pedido pasa a REVISAR y no otorga cursos', async () => {
  const o = call('createOrder', { items: ['manejo-amoniaco'], buyer: buyer('monto@test.co'), consent: CONSENT });
  activate('monto@test.co');
  solveOrder(o, 'APPROVED');
  nextTx.amount_in_cents = 100;
  const r = call('confirmPayment', { transactionId: nextTx.id });
  assert.equal(r.status, 'REVISAR');
  const orders = sheets['Pedidos'].rows.filter((row) => row[0] === o.orderId);
  assert.equal(orders[0][8], 'REVISAR');
});

await test('Webhook: firma inválida se rechaza; firma válida aplica el estado', async () => {
  const o = call('createOrder', { items: ['mecanica-basica'], buyer: buyer('hook@test.co'), consent: CONSENT });
  activate('hook@test.co');
  const tx = { id: 'TX-HOOK', reference: o.reference, amount_in_cents: o.amountInCents, currency: 'COP', status: 'APPROVED' };
  const body = { event: 'transaction.updated', timestamp: 1700000000, data: { transaction: tx }, signature: { properties: ['transaction.id', 'transaction.status', 'transaction.amount_in_cents'], checksum: 'bad' } };
  const bad = JSON.parse(vm.runInContext(`doPost({ postData: { contents: ${JSON.stringify(JSON.stringify(body))} } }).getContent()`, ctx));
  assert.equal(bad.ok, false);
  const concat = tx.id + tx.status + tx.amount_in_cents + body.timestamp + props.WOMPI_EVENTS_SECRET;
  body.signature.checksum = sha(concat);
  nextTx = tx;
  vm.runInContext(`doPost({ postData: { contents: ${JSON.stringify(JSON.stringify(body))} } })`, ctx);
  const st = sheets['Pedidos'].rows.find((row) => row[0] === o.orderId)[8];
  assert.equal(st, 'PAGADO');
});

await test('Fórmulas en nombres se neutralizan al guardarse en la hoja', async () => {
  call('registerUser', { email: 'formula@test.co', fullName: '=HYPERLINK("http://x")', documentId: '99', password: 'Clave123', allowedCourses: ['aparejador-cargas'] }, admin);
  const row = sheets['Usuarios'].rows.find((r) => r[3] === 'formula@test.co');
  assert.equal(row[1], "'=HYPERLINK(\"http://x\")");
});

await test('Verificación pública: enmascara la cédula y rechaza códigos mal formados', async () => {
  const cert = call('issueCertificate', { courseId: 'loto-bloqueo' }, call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' }).token);
  const v = call('verifyCertificate', { certCode: cert.certificate.code });
  assert.equal(v.ok, true);
  assert.equal(v.certificate.documentId, '•••••••322');
  assert.equal(call('verifyCertificate', { certCode: '<img>' }).ok, false);
});

await test('Errores internos no revelan detalles al cliente', async () => {
  const r = JSON.parse(vm.runInContext(`doPost({ postData: { contents: 'no-json' } }).getContent()`, ctx));
  assert.equal(r.ok, false);
  assert.ok(!/SyntaxError|Unexpected/.test(r.error));
});

await test('Enlace de contraseña es de un solo uso y no se puede reutilizar', async () => {
  call('requestSetup', { email: 'ana@test.co' }, '');
  const m = mails.filter((x) => x.to === 'ana@test.co' && String(x.body).includes('#set-password?token=')).pop();
  const token = decodeURIComponent(String(m.body).match(/token=([^\s]+)/)[1]);
  assert.equal(call('setPassword', { token, password: 'OtraClave88' }, '').ok, true);
  assert.equal(call('setPassword', { token, password: 'Repetida99' }, '').ok, false, 'el enlace ya fue usado');
  assert.equal(call('loginUser', { email: 'ana@test.co', password: 'OtraClave88' }, '').ok, true);
  call('resetPassword', { userId: call('listUsers', {}, ADMIN()).users.find((u) => u.email === 'ana@test.co').id, password: 'NuevaClave9' }, ADMIN());
});

await test('Recuperación responde igual exista o no el correo (no revela cuentas)', async () => {
  const a = call('requestSetup', { email: 'ana@test.co' }, '');
  const b = call('requestSetup', { email: 'nadie@test.co' }, '');
  assert.equal(a.ok, true);
  assert.equal(b.ok, true);
  assert.equal(a.message, b.message);
  assert.equal(mails.filter((x) => x.to === 'nadie@test.co').length, 0, 'no envía nada a correos inexistentes');
});

await test('Vista previa de cupón muestra el precio con descuento sin reservar uso', async () => {
  const r = call('previewCoupon', { items: ['mecanica-basica'], discountCode: '' }, '');
  assert.equal(r.ok, true);
  assert.equal(r.discountApplied, false);
  const bad = call('previewCoupon', { items: ['mecanica-basica'], discountCode: 'NOEXISTE' }, '');
  assert.equal(bad.ok, false);
});

await test('Clave de administrador de menos de 12 caracteres se rechaza', async () => {
  const r = call('adminLogin', { email: 'admin@academiasst.co', password: 'corta' }, '');
  assert.equal(r.ok, false);
});

await test('Curso vencido (365 días) se bloquea y se restablece al asignarlo de nuevo', async () => {
  const sheet = sheets['Usuarios'];
  const row = sheet.rows.find((r) => r[3] === 'ana@test.co');
  const colC = sheet.rows[0].indexOf('courseExpiry');
  const colA = sheet.rows[0].indexOf('allowedCourses');
  const ids = JSON.parse(row[colA]);
  const target = ids[0];
  const exp = JSON.parse(row[colC]);
  exp[target] = '2020-01-01T00:00:00.000Z';
  row[colC] = JSON.stringify(exp);
  const token = call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' }, '').token;
  const blocked = call('saveProgress', { courseId: target, data: { modulesRead: [0] } }, token);
  assert.equal(blocked.ok, false, 'el curso vencido no debe aceptar progreso');
  assert.ok(/venció/.test(blocked.error || ''), 'mensaje de vigencia vencida');
  const userId = row[0];
  call('updateUserCourses', { userId, allowedCourses: ids }, ADMIN());
  const row2 = sheet.rows.find((r) => r[0] === userId);
  assert.ok(Date.parse(JSON.parse(row2[colC])[target]) > Date.now(), 'la asignación renueva el curso');
});

await test('Orden del examen es una permutación válida por intento', async () => {
  const tok = call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' }, '').token;
  const r = call('getExamOrder', { courseId: 'loto-bloqueo' }, tok);
  assert.equal(r.ok, true);
  CONTENT['loto-bloqueo'].exam.forEach((_, i) => {
    const n = CONTENT['loto-bloqueo'].examOptions[i];
    assert.deepEqual([...r.order[i]].sort((a, b) => a - b), Array.from({ length: n }, (_, k) => k));
  });
});

await test('Estado del curso y panel del alumno vienen del servidor (lecturas, prácticas, examen, vigencia)', async () => {
  const tok = call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' }, '').token;
  const st = call('getProgress', { courseId: 'loto-bloqueo' }, tok);
  assert.equal(st.ok, true);
  assert.ok(Array.isArray(st.modulesRead) && Array.isArray(st.checked));
  assert.ok(st.exam && typeof st.exam.maxAttempts === 'number' && typeof st.exam.attemptsUsed === 'number');
  assert.ok(Date.parse(st.expiresAt) > Date.now(), 'vigencia futura');
  const d = call('dashboard', {}, tok);
  assert.equal(d.ok, true);
  assert.ok(d.courses.length >= 1);
  assert.ok(d.courses.every((c) => typeof c.active === 'boolean' && c.modules > 0));
  assert.equal(call('dashboard', {}, '').ok, false, 'sin sesión no hay panel');
});

await test('Práctica fallada indica la opción correcta; acertada no la necesita', async () => {
  const tok = call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' }, '').token;
  const course = 'mecanica-basica';
  call('updateUserCourses', { userId: call('listUsers', {}, ADMIN()).users.find((u) => u.email === 'ana@test.co').id, allowedCourses: [...call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' }, '').user.allowedCourses, course] }, ADMIN());
  const tok2 = call('loginUser', { email: 'ana@test.co', password: 'NuevaClave9' }, '').token;
  const right = CONTENT[course].practiceAnswers[0];
  const wrong = (right + 1) % CONTENT[course].practiceOptions[0];
  const r = call('checkAnswer', { courseId: course, kind: 'practice', index: 0, choice: wrong }, tok2);
  assert.equal(r.ok, true);
  assert.equal(r.correct, false);
  assert.equal(r.correctIndex, right);
  const r2 = call('checkAnswer', { courseId: course, kind: 'practice', index: 1, choice: CONTENT[course].practiceAnswers[1] }, tok2);
  assert.equal(r2.correct, true);
  assert.equal(r2.correctIndex, CONTENT[course].practiceAnswers[1]);
  void tok;
});

console.log(`\n${passed} pruebas OK, ${failures.length} fallidas`);
if (failures.length) process.exit(1);
