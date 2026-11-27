/**
 * Entorno local COMPLETO de Academia SST Colombia.
 *
 * Ejecuta el backend real (backend/Code.gs + backend/Content.gs) en Node, con Sheets, caché,
 * correo y Wompi simulados, y sirve el frontend de web/. Permite probar de punta a punta:
 * compra → pago (Wompi simulado) → activación de cuenta por correo → curso → examen → constancia.
 *
 * Uso:   node tools/local-server.mjs            (puerto 8787)
 *        node tools/local-server.mjs --reset    (borra los datos guardados)
 * Luego: http://localhost:8787            plataforma
 *        http://localhost:8787/correo     correos que la plataforma "envió" (enlaces de activación)
 *
 * Administrador local: admin@academiasst.co / AdminLocal2026!
 * Cupón de prueba: BIENVENIDA10 (10 %)
 *
 * NADA de este archivo se publica. Los datos quedan en tools/.local-data.json.
 */
import http from 'node:http';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { readFileSync, writeFileSync, existsSync, rmSync, statSync } from 'node:fs';
import { dirname, resolve, extname, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const webDir = resolve(root, 'web');
const PORT = Number(process.env.PORT || 8787);
const BASE = `http://localhost:${PORT}/`;
const DATA_FILE = resolve(root, 'tools/.local-data.json');
const ADMIN_EMAIL = 'admin@academiasst.co';
const ADMIN_PASSWORD = 'AdminLocal2026!';
const INTEGRITY_SECRET = 'local_integrity_secret';

if (process.argv.includes('--reset') && existsSync(DATA_FILE)) rmSync(DATA_FILE);

// ---------- Estado persistente ----------
const saved = existsSync(DATA_FILE) ? JSON.parse(readFileSync(DATA_FILE, 'utf8')) : {};
const sheetsData = saved.sheets || {};
const props = saved.props || {};
const mails = saved.mails || [];
const transactions = saved.transactions || {};
const cache = new Map(Object.entries(saved.cache || {}));

function persist() {
  const now = Date.now();
  for (const [k, v] of cache) if (v.exp && v.exp < now) cache.delete(k);
  writeFileSync(DATA_FILE, JSON.stringify({ sheets: sheetsData, props, mails, transactions, cache: Object.fromEntries(cache) }));
}

// ---------- Simulador de Apps Script ----------
class Sheet {
  constructor(name) {
    this.name = name;
    if (!sheetsData[name]) sheetsData[name] = [];
    this.rows = sheetsData[name];
  }
  appendRow(r) { this.rows.push([...r]); }
  setFrozenRows() {}
  getName() { return this.name; }
  getLastRow() { return this.rows.length; }
  getLastColumn() { return Math.max(0, ...this.rows.map((r) => r.length)); }
  getDataRange() { const rows = this.rows; return { getValues: () => rows.map((r) => [...r]) }; }
  getRange(r, c, nr = 1, nc = 1) {
    const self = this;
    const ensure = (rr, cc) => {
      while (self.rows.length < rr) self.rows.push([]);
      const row = self.rows[rr - 1];
      while (row.length < cc) row.push('');
      return row;
    };
    return {
      setValue(v) { ensure(r, c)[c - 1] = v; },
      setValues(vals) { vals.forEach((row, i) => row.forEach((v, j) => (ensure(r + i, c + j)[c + j - 1] = v))); },
      getValues() { return Array.from({ length: nr }, (_, i) => Array.from({ length: nc }, (_, j) => (self.rows[r - 1 + i] || [])[c - 1 + j] ?? '')); },
      clearContent() { for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) { const row = self.rows[r - 1 + i]; if (row) row[c - 1 + j] = ''; } }
    };
  }
}
const sheetObjs = {};
const getSheet = (n) => (sheetsData[n] ? (sheetObjs[n] ||= new Sheet(n)) : null);
const ss = {
  getSheetByName: getSheet,
  insertSheet: (n) => (sheetObjs[n] = new Sheet(n)),
  getId: () => 'local-sheet'
};

const ctx = {
  SpreadsheetApp: { getActiveSpreadsheet: () => ss, openById: () => ss },
  Utilities: {
    DigestAlgorithm: { SHA_256: 'SHA_256' },
    Charset: { UTF_8: 'UTF_8' },
    computeDigest: (alg, text) => Array.from(crypto.createHash('sha256').update(String(text), 'utf8').digest()).map((b) => (b > 127 ? b - 256 : b)),
    getUuid: () => crypto.randomUUID(),
    formatDate: (d) => new Date(d).toISOString().slice(0, 16).replace(/[T:]/g, '_')
  },
  PropertiesService: {
    getScriptProperties: () => ({
      getProperty: (k) => (props[k] !== undefined ? props[k] : null),
      setProperty: (k, v) => { props[k] = String(v); },
      deleteProperty: (k) => { delete props[k]; }
    })
  },
  CacheService: {
    getScriptCache: () => ({
      get: (k) => { const v = cache.get(k); if (!v) return null; if (v.exp && v.exp < Date.now()) { cache.delete(k); return null; } return v.val; },
      put: (k, val, secs = 600) => cache.set(k, { val: String(val), exp: Date.now() + secs * 1000 }),
      remove: (k) => cache.delete(k)
    })
  },
  LockService: { getScriptLock: () => ({ waitLock() {}, tryLock: () => true, releaseLock() {} }) },
  ContentService: {
    MimeType: { JSON: 'application/json' },
    createTextOutput: (text) => ({ setMimeType: () => ({ getContent: () => text }) })
  },
  MailApp: {
    sendEmail: (to, subject, body) => {
      mails.unshift({ to, subject, body, at: new Date().toISOString() });
      console.log(`\n✉  Correo a ${to}: ${subject}`);
    }
  },
  UrlFetchApp: {
    fetch: (url) => {
      const id = decodeURIComponent(String(url).split('/transactions/')[1] || '');
      const tx = transactions[id];
      return { getResponseCode: () => (tx ? 200 : 404), getContentText: () => JSON.stringify({ data: tx || null }) };
    }
  },
  DriveApp: {},
  Logger: { log: (...a) => console.log('[Logger]', ...a) },
  console
};
vm.createContext(ctx);
vm.runInContext(readFileSync(resolve(root, 'backend/Code.gs'), 'utf8') + '\n' + readFileSync(resolve(root, 'backend/Content.gs'), 'utf8'), ctx);

// Propiedades del servidor local (equivalen a las Propiedades del script en Apps Script)
if (!props.ADMIN_PASSWORD_HASH) {
  const salt = crypto.randomBytes(8).toString('hex');
  props.ADMIN_PASSWORD_HASH = salt + '$' + vm.runInContext(`hashPassword(${JSON.stringify(salt)}, ${JSON.stringify(ADMIN_PASSWORD)})`, ctx);
}
Object.assign(props, {
  ADMIN_EMAIL,
  WOMPI_ENV: 'sandbox',
  WOMPI_PUBLIC_KEY: 'pub_test_local',
  WOMPI_INTEGRITY_SECRET: INTEGRITY_SECRET,
  WOMPI_EVENTS_SECRET: 'local_events_secret',
  PLATFORM_URL: BASE,
  PLATFORM_NAME: 'Academia SST Colombia',
  TRAINER_NAME: props.TRAINER_NAME || 'Ing. Formador de Prueba',
  TRAINER_LICENSE: props.TRAINER_LICENSE || 'LIC-SST-LOCAL-0001'
});
// Crea las hojas y un cupón de prueba la primera vez
vm.runInContext('Object.keys(SHEETS).forEach((k) => getOrCreateSheet(SHEETS[k]))', ctx);
if (getSheet('Cupones') && !getSheet('Cupones').rows.some((r) => r[0] === 'BIENVENIDA10')) {
  getSheet('Cupones').appendRow(['BIENVENIDA10', 10, 'SI', '2030-12-31', 0, 0]);
}
persist();

function backend(body) {
  const out = vm.runInContext(`doPost({ postData: { contents: ${JSON.stringify(body)} } }).getContent()`, ctx);
  persist();
  return out;
}

// ---------- Utilidades HTTP ----------
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' };
const escHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const readBody = (req) => new Promise((ok) => { let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => ok(b)); });
const page = (title, body) => `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>
<style>body{font-family:system-ui,sans-serif;max-width:720px;margin:2rem auto;padding:0 1rem;color:#1a2b3c;background:#f5f7fa}
.card{background:#fff;border-radius:12px;padding:1.25rem;box-shadow:0 1px 3px #0002;margin-bottom:1rem}
button{font:inherit;padding:.7rem 1.1rem;border-radius:8px;border:0;cursor:pointer;margin:.25rem .25rem 0 0}
.ok{background:#1a7f37;color:#fff}.no{background:#b42318;color:#fff}.wait{background:#dde3ea}
.tag{display:inline-block;background:#fff3cd;color:#7a5b00;padding:.15rem .5rem;border-radius:6px;font-size:.8rem}
pre{white-space:pre-wrap;word-break:break-word;font-family:inherit;margin:.5rem 0 0}a{color:#0b5cad}</style></head><body>${body}</body></html>`;

// ---------- Wompi simulado ----------
function fakeCheckout(q) {
  const ref = q.get('reference') || '';
  const amount = q.get('amount-in-cents') || '';
  const currency = q.get('currency') || 'COP';
  const expected = crypto.createHash('sha256').update(ref + amount + currency + INTEGRITY_SECRET).digest('hex');
  const okSig = expected === q.get('signature:integrity');
  const fmt = (Number(amount) / 100).toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
  return page('Wompi (simulado)', `<div class="card"><span class="tag">WOMPI SIMULADO · solo pruebas locales</span>
    <h1>Pagar ${escHtml(fmt)}</h1><p>Referencia: <code>${escHtml(ref)}</code><br>Correo: ${escHtml(q.get('customer-data:email') || '')}</p>
    <p>Firma de integridad: ${okSig ? '✅ válida' : '❌ NO válida (Wompi real rechazaría este pago)'}</p>
    ${okSig ? `<form method="post" action="/fake-wompi/pay">
      ${['reference', 'amount-in-cents', 'currency', 'redirect-url', 'customer-data:email'].map((k) => `<input type="hidden" name="${k}" value="${escHtml(q.get(k) || '')}">`).join('')}
      <button class="ok" name="status" value="APPROVED">Aprobar pago</button>
      <button class="no" name="status" value="DECLINED">Rechazar</button>
      <button class="wait" name="status" value="PENDING">Dejar pendiente</button></form>` : ''}</div>`);
}

function fakePay(form) {
  const id = 'LOCAL-' + crypto.randomBytes(5).toString('hex').toUpperCase();
  transactions[id] = {
    id,
    reference: form.get('reference'),
    amount_in_cents: Number(form.get('amount-in-cents')),
    currency: form.get('currency'),
    status: form.get('status'),
    customer_email: form.get('customer-data:email'),
    payment_method_type: 'CARD',
    created_at: new Date().toISOString()
  };
  persist();
  const redirect = new URL(form.get('redirect-url'));
  redirect.searchParams.set('id', id);
  redirect.searchParams.set('env', 'test');
  return redirect.toString();
}

function outbox() {
  const link = (t) => escHtml(t).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1">$1</a>');
  return page('Correos enviados (local)', `<h1>Correos enviados</h1><p><span class="tag">Solo entorno local</span> En producción estos mensajes salen por Gmail (MailApp).</p>
    ${mails.length ? mails.map((m) => `<div class="card"><b>${escHtml(m.subject)}</b><br><small>Para: ${escHtml(m.to)} · ${escHtml(m.at)}</small><pre>${link(m.body)}</pre></div>`).join('') : '<div class="card">Aún no hay correos.</div>'}`);
}

// ---------- Servidor ----------
http
  .createServer(async (req, res) => {
    const url = new URL(req.url, BASE);
    try {
      if (req.method === 'POST' && url.pathname === '/exec') {
        const out = backend(await readBody(req));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(out);
      }
      if (url.pathname === '/fake-wompi/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(fakeCheckout(url.searchParams));
      }
      if (url.pathname === '/fake-wompi/pay' && req.method === 'POST') {
        res.writeHead(303, { Location: fakePay(new URLSearchParams(await readBody(req))) });
        return res.end();
      }
      if (url.pathname === '/correo') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(outbox());
      }
      if (url.pathname === '/js/config.js') {
        // Igual al config.js real, pero apuntando al backend y al Wompi locales
        const real = readFileSync(resolve(webDir, 'js/config.js'), 'utf8');
        const local = real
          .replace(/APPS_SCRIPT_URL:\s*'[^']*'/, `APPS_SCRIPT_URL: '/exec'`)
          .replace(/DEMO_ADMIN_PASSWORD:\s*'[^']*'/, `DEMO_ADMIN_PASSWORD: ''`)
          .replace('export const APP_CONFIG = {', `export const APP_CONFIG = {\n  WOMPI_CHECKOUT_URL: '/fake-wompi/',`);
        res.writeHead(200, { 'Content-Type': MIME['.js'], 'Cache-Control': 'no-store' });
        return res.end(local);
      }
      let path = normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, '');
      if (!path || path.endsWith(sep)) path += 'index.html';
      const file = resolve(webDir, path);
      if (!file.startsWith(webDir + sep) || !existsSync(file) || statSync(file).isDirectory()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('No encontrado');
      }
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(readFileSync(file));
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Error del servidor local: ' + err.message);
    }
  })
  .listen(PORT, () => {
    console.log(`\nAcademia SST Colombia — entorno local completo`);
    console.log(`  Plataforma:  ${BASE}`);
    console.log(`  Correos:     ${BASE}correo`);
    console.log(`  Admin:       ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);
    console.log(`  Cupón:       BIENVENIDA10\n`);
  });
