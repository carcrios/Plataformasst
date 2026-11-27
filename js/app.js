import { APP_CONFIG } from './config.js';
import { API } from './api.js';
import { Telemetry } from './telemetry.js';
import { COURSES, LEGAL_CATEGORIES } from './catalog.js';
import { esc, fmtCOP, fmtDate, fmtHours, root, toast } from './dom.js';
import { renderLanding, renderCourseInfo, renderDashboard, renderCourse, renderExam, byId } from './student.js';
import { buildVerifyUrl, generateCertificatePDF } from './certificate.js';
import { renderStore, renderCheckout, renderPaymentReturn, renderOrders, cartCount } from './store.js';
import { renderLegal } from './legal.js';
import { renderPermitsGuide } from './permits-guide.js';

const nav = () => document.getElementById('main-nav');
const isDemo = () => !APP_CONFIG.APPS_SCRIPT_URL;
const session = () => API.getSession();
const isAdmin = () => session()?.role === 'admin';

// ----- Utilidades -----
function loading() {
  root().innerHTML = `<div class="iui-card" aria-busy="true"><span class="iui-spinner"></span> Cargando…</div>`;
}

function demoBanner() {
  return isDemo()
    ? `<div class="iui-alert iui-alert-warning">Modo demostración: no hay servidor conectado. Los cursos se pueden revisar, pero no hay tienda, examen ni constancias.</div>`
    : '';
}

function setNav() {
  const s = session();
  const n = cartCount();
  const cart = `Tienda${n ? ` <span class="sst-cart-count" aria-label="${n} en el carrito">${n}</span>` : ''}`;
  let links;
  if (isAdmin()) links = [['#catalog', 'Cursos'], ['#admin', 'Administración'], ['#system-ops', 'Sistema']];
  else if (s) links = [['#catalog', 'Mis cursos'], ['#store', cart], ['#orders', 'Mis compras'], ['#certs', 'Constancias']];
  else links = [['#catalog', 'Cursos'], ['#store', cart], ['#verify', 'Verificar constancia']];
  const here = '#' + (window.location.hash.replace(/^#/, '').split('/')[0] || 'catalog');
  nav().innerHTML =
    links.map(([href, label]) => `<a href="${href}" class="iui-nav-link${href === here ? ' active' : ''}" ${href === here ? 'aria-current="page"' : ''}>${label}</a>`).join('') +
    (s
      ? `<button class="iui-btn iui-btn-ghost iui-btn-sm" id="btn-logout">Salir</button>`
      : `<a href="#login" class="iui-btn iui-btn-primary iui-btn-sm">Ingresar</a>`);
  document.getElementById('btn-logout')?.addEventListener('click', async () => {
    await API.logout();
    toast('Sesión cerrada.');
    window.location.hash = '#catalog';
  });
  closeMenu();
}

function closeMenu() {
  document.body.classList.remove('menu-open');
  document.getElementById('menu-btn')?.setAttribute('aria-expanded', 'false');
}

window.addEventListener('sst:cart', () => setNav());

// Sesión expirada en el servidor: se limpia y se pide ingresar otra vez
window.addEventListener('sst:session-expired', () => {
  localStorage.removeItem('sst_session_v1');
  toast('Su sesión expiró. Ingrese de nuevo.', 'warning');
  setNav();
  if (/^#(course|exam|certs|orders|admin|system-ops)/.test(window.location.hash)) window.location.hash = '#login';
});

// ----- Login -----
function renderLogin() {
  root().innerHTML = `
    <section style="max-width:420px; margin:2rem auto;">
      <div class="iui-card">
        <h1 class="iui-h2">Ingresar</h1>
        <p class="iui-small iui-muted">Use el correo y la contraseña que le dio el administrador SST o las que creó en la compra.</p>
        ${demoBanner()}
        <div id="login-error" class="iui-alert iui-alert-danger" style="display:none;"></div>
        <form id="login-form">
          <div class="iui-field"><label class="iui-label" for="l-email">Correo</label>
            <input class="iui-input" id="l-email" type="email" autocomplete="username" required /></div>
          <div class="iui-field"><label class="iui-label" for="l-pass">Contraseña</label>
            <input class="iui-input" id="l-pass" type="password" autocomplete="current-password" required /></div>
          <button class="iui-btn iui-btn-primary" style="width:100%;" type="submit">Ingresar</button>
        </form>
        <p class="iui-small" style="margin-top:0.5rem;"><a href="#forgot">¿Olvidó su contraseña?</a></p>
        <p class="iui-small" style="margin-top:1rem;">¿Aún no tiene cuenta? <a href="#store">Vea la tienda</a>.</p>
      </div>
    </section>`;

  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const err = document.getElementById('login-error');
    err.style.display = 'none';
    try {
      const s = await API.login({
        email: document.getElementById('l-email').value,
        password: document.getElementById('l-pass').value
      });
      setNav();
      toast(`Bienvenido, ${s.fullName}`, 'success');
      window.location.hash = s.role === 'admin' ? '#admin' : '#catalog';
    } catch (ex) {
      err.textContent = ex.message;
      err.style.display = 'block';
    }
  });
}

// ----- Constancias -----
async function renderCerts() {
  if (!session()) return (window.location.hash = '#login');
  loading();
  const certs = await API.getMyCertificates();
  root().innerHTML = `
    <section>
      <h1 class="iui-h1">Mis constancias</h1>
      ${certs.length === 0
        ? `<div class="iui-empty">Aún no tiene constancias. Apruebe una evaluación para emitir una.</div>`
        : `<p class="iui-muted">Descargue el PDF o comparta el enlace de verificación con su empleador o contratista.</p><div class="sst-dash-grid">${certs.map(certCard).join('')}</div>`}
    </section>`;
  root().querySelectorAll('.btn-copy').forEach((btn) =>
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.url);
        toast('Enlace copiado.', 'success');
      } catch {
        window.prompt('Copie el enlace de verificación:', btn.dataset.url);
      }
    })
  );
  root().querySelectorAll('.btn-pdf').forEach((btn) =>
    btn.addEventListener('click', async () => {
      const cert = certs.find((c) => c.code === btn.dataset.code);
      const course = byId[cert.courseId];
      const syllabus = cert.syllabus || (course ? course.modules.map((m) => m.title) : []);
      try {
        await generateCertificatePDF({ ...cert, syllabus });
      } catch (e) {
        toast(e.message, 'danger');
      }
    })
  );
}

function certCard(c) {
  const url = buildVerifyUrl(c.code);
  return `
    <article class="sst-dash-card">
      <div class="sst-dash-top"><span class="sst-course-icon sm">✓</span><span class="iui-badge iui-badge-success">Puntaje ${esc(c.score)} %</span></div>
      <h3 class="sst-course-title">${esc(c.courseTitle)}</h3>
      <p class="iui-xs iui-muted" style="margin:0;">Emitida el ${fmtDate(c.issuedAt)} · ${fmtHours(c.hours)}</p>
      <p class="iui-xs" style="margin:0;">Código <strong style="font-family:var(--iui-font-mono);">${esc(c.code)}</strong></p>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;">
        <button class="iui-btn iui-btn-primary btn-pdf" data-code="${esc(c.code)}">Descargar PDF</button>
        <button class="iui-btn iui-btn-secondary btn-copy" data-url="${esc(url)}">Copiar enlace de verificación</button>
      </div>
    </article>`;
}

// ----- Verificación pública -----
async function renderVerify(initialCode) {
  root().innerHTML = `
    <section style="max-width:560px; margin:0 auto;">
      <h1 class="iui-h2">Verificar constancia</h1>
      <p class="iui-muted">Escriba el código que aparece en la constancia o escanee su código QR.</p>
      <form id="verify-form" class="iui-form">
        <input class="iui-input" id="v-code" placeholder="CERT-2026-XXXX-XXXXXXXX" value="${esc(initialCode || '')}" required />
        <button class="iui-btn iui-btn-primary" type="submit">Verificar</button>
      </form>
      <div id="verify-result" style="margin-top:1rem;"></div>
    </section>`;
  const check = async (code) => {
    const out = document.getElementById('verify-result');
    out.innerHTML = `<span class="iui-spinner"></span>`;
    const cert = await API.verifyCertificate(code.trim().toUpperCase());
    out.innerHTML = cert
      ? `<div class="sst-verify ${cert.vigente === false ? 'warn' : 'ok'}">
          <div class="sst-verify-head"><span class="sst-verify-icon">${cert.vigente === false ? '!' : '✓'}</span>
            <div><strong>${cert.vigente === false ? 'Constancia auténtica, curso no vigente' : 'Constancia auténtica y vigente'}</strong>
            <span>${cert.vigente === false ? 'Fue emitida por esta plataforma, pero la vigencia de 12 meses del curso terminó o el acceso fue retirado.' : 'Emitida y registrada por Academia SST Colombia.'}</span></div></div>
          <dl class="sst-verify-data">
            <dt>Nombre</dt><dd>${esc(cert.studentName)}</dd>
            <dt>Documento</dt><dd>${esc(cert.documentId)}</dd>
            <dt>Curso</dt><dd>${esc(cert.courseTitle)}</dd>
            <dt>Intensidad</dt><dd>${fmtHours(cert.hours)} · formación teórica</dd>
            ${cert.score ? `<dt>Calificación</dt><dd>${esc(cert.score)} %</dd>` : ''}
            <dt>Fecha de emisión</dt><dd>${fmtDate(cert.issuedAt)}</dd>
            ${cert.trainerName ? `<dt>Formador</dt><dd>${esc(cert.trainerName)}${cert.trainerLicense ? ` · Licencia ${esc(cert.trainerLicense)}` : ''}</dd>` : ''}
            <dt>Código</dt><dd style="font-family:var(--iui-font-mono);">${esc(cert.code)}</dd>
          </dl>
          <p class="iui-xs iui-muted" style="margin:0.75rem 0 0;">Constancia de formación teórica. No reemplaza el entrenamiento práctico en sitio, la aptitud médica ni el permiso de trabajo.</p>
        </div>`
      : `<div class="iui-alert iui-alert-danger">No encontramos una constancia con ese código.</div>`;
  };
  document.getElementById('verify-form').addEventListener('submit', (e) => {
    e.preventDefault();
    check(document.getElementById('v-code').value);
  });
  if (initialCode) check(initialCode);
}

// ----- Mis compras -----
// (renderOrders viene de store.js)

// ----- Administración -----
function randomPassword() {
  const alphabet = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const bytes = new Uint32Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('');
}

// La contraseña solo se muestra una vez, para entregarla por canal privado
function credentialCard(email, password, fullName) {
  return `
    <div class="iui-alert iui-alert-warning" id="cred-card">
      <strong>Credenciales de ${esc(fullName)}</strong><br/>
      Correo: <code>${esc(email)}</code><br/>
      Contraseña: <code>${esc(password)}</code><br/>
      <span class="iui-xs">Entréguelas por un canal privado. No se guardan en esta pantalla ni se envían por correo.</span>
    </div>`;
}

async function renderAdmin() {
  if (!isAdmin()) return (window.location.hash = session() ? '#catalog' : '#login');
  loading();
  let users = [];
  let listError = '';
  try {
    users = await API.adminListUsers();
  } catch (e) {
    listError = e.message;
  }
  root().innerHTML = `
    <section>
      <h1 class="iui-h1">Administración</h1>
      ${demoBanner()}
      ${listError ? `<div class="iui-alert iui-alert-warning">No se pudo cargar la lista de alumnos: ${esc(listError)}</div>` : ''}
      <div class="iui-card" style="margin-bottom:1rem;">
        <h2 class="iui-h3">Registrar alumno</h2>
        <form id="reg-form" class="iui-form">
          <input class="iui-input" name="fullName" placeholder="Nombre completo" required />
          <input class="iui-input" name="documentId" placeholder="Documento" required />
          <input class="iui-input" name="email" type="email" placeholder="Correo" required />
          <input class="iui-input" name="company" placeholder="Empresa" />
          <fieldset><legend class="iui-small">Cursos a habilitar</legend>
            ${COURSES.map((c) => `<label class="iui-checkbox-row"><input type="checkbox" name="courses" value="${esc(c.id)}" /> <span>${esc(c.title)}</span></label>`).join('')}
          </fieldset>
          <button class="iui-btn iui-btn-primary" type="submit">Crear y generar contraseña</button>
        </form>
        <div id="reg-card"></div>
      </div>
      <h2 class="iui-h3">Alumnos (${users.length})</h2>
      <div class="iui-table-wrap"><table class="iui-table"><thead><tr><th>Nombre</th><th>Correo</th><th>Cursos</th><th>Acciones</th></tr></thead><tbody>
        ${users
          .map(
            (u) => `<tr>
            <td>${esc(u.fullName)}</td><td>${esc(u.email)}</td>
            <td class="iui-small">${(u.allowedCourses || []).map((id) => `${esc(byId[id]?.title || id)}${byId[id]?.workshops?.length ? ` · <a href="#entregas/${esc(u.id)}/${esc(id)}">entregas</a>` : ''}`).join('<br/>')}</td>
            <td style="white-space:nowrap;">
              <button class="iui-btn iui-btn-ghost iui-btn-sm" data-act="reset" data-id="${esc(u.id)}" data-email="${esc(u.email)}" data-name="${esc(u.fullName)}">Nueva contraseña</button>
              <button class="iui-btn iui-btn-ghost iui-btn-sm" data-act="mail" data-email="${esc(u.email)}" data-name="${esc(u.fullName)}" data-courses="${esc((u.allowedCourses || []).map((id) => byId[id]?.title || id).join('|'))}">Enviar correo</button>
              <button class="iui-btn iui-btn-ghost iui-btn-sm" data-act="attempts" data-id="${esc(u.id)}">Restablecer intentos</button>
            </td></tr>`
          )
          .join('')}
      </tbody></table></div>
    </section>`;

  document.getElementById('reg-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const password = randomPassword();
    const email = String(fd.get('email')).trim().toLowerCase();
    let res;
    try {
      res = await API.adminRegisterUser({
      fullName: fd.get('fullName'),
      documentId: fd.get('documentId'),
      email,
      company: fd.get('company'),
      password,
      allowedCourses: fd.getAll('courses')
      });
    } catch (err) {
      return toast(err.message, 'danger');
    }
    if (!res) return toast('No se pudo registrar.', 'danger');
    document.getElementById('reg-card').innerHTML = res.created
      ? credentialCard(email, password, fd.get('fullName'))
      : `<div class="iui-alert iui-alert-info">Cuenta existente: se añadieron los cursos. La contraseña no cambió.</div>`;
  });

  root().querySelectorAll('[data-act]').forEach((btn) =>
    btn.addEventListener('click', async () => {
      if (btn.dataset.act === 'reset') {
        if (!confirm('¿Generar una nueva contraseña? La anterior dejará de funcionar y las sesiones abiertas se cerrarán.')) return;
        const password = randomPassword();
        let res;
        try {
          res = await API.adminResetPassword(btn.dataset.id, password);
        } catch (err) {
          return toast(err.message, 'danger');
        }
        if (!res) return toast('No se pudo restablecer.', 'danger');
        toast('Contraseña restablecida.', 'success');
        root().insertAdjacentHTML('afterbegin', credentialCard(btn.dataset.email, password, btn.dataset.name));
      } else if (btn.dataset.act === 'attempts') {
        const courseId = (window.prompt('ID del curso (por ejemplo: andamiero)') || '').trim();
        if (!courseId) return;
        try {
          const r = await API.adminResetAttempts(btn.dataset.id, courseId);
          toast(r ? 'Intentos restablecidos.' : 'No se pudo restablecer.', r ? 'success' : 'danger');
        } catch (err) {
          toast(err.message, 'danger');
        }
      } else {
        const courses = btn.dataset.courses ? btn.dataset.courses.split('|') : [];
        const ok = await API.sendCredentialsEmail({ email: btn.dataset.email, fullName: btn.dataset.name, courseTitles: courses });
        toast(ok ? 'Correo enviado (sin contraseña).' : 'No se pudo enviar el correo.', ok ? 'success' : 'danger');
      }
    })
  );
}

// ----- Expediente del alumno: talleres y proyecto final -----
async function renderStudentWork(userId, courseId) {
  if (!isAdmin()) return (window.location.hash = session() ? '#catalog' : '#login');
  const c = byId[courseId];
  if (!c) return (window.location.hash = '#admin');
  loading();
  let r;
  try {
    r = await API.adminStudentWork(userId, courseId);
  } catch (e) {
    root().innerHTML = `<div class="iui-alert iui-alert-danger">${esc(e.message)}</div><a href="#admin">← Administración</a>`;
    return;
  }
  const w = r.works || {};
  const block = (title, fields, saved) => `
    <article class="iui-card" style="margin-bottom:1rem;">
      <h2 class="iui-h3">${esc(title)}</h2>
      ${saved
        ? `<p class="iui-xs iui-muted">Entregado el ${esc(new Date(saved.savedAt).toLocaleString('es-CO'))}</p>
           ${fields.map((f, j) => `<p class="iui-small" style="margin-bottom:0.25rem;"><strong>${esc(f.label)}</strong></p><p style="white-space:pre-wrap; margin-top:0;">${esc(saved.answers[j] || '')}</p>`).join('')}`
        : `<p class="iui-small iui-muted">Sin entregar.</p>`}
    </article>`;
  root().innerHTML = `
    <section style="max-width:900px; margin:0 auto;">
      <a href="#admin" class="iui-small">← Administración</a>
      <h1 class="iui-h1">Entregas de ${esc(r.student.fullName)}</h1>
      <p class="iui-muted">${esc(c.title)} · Documento ${esc(r.student.documentId)}${r.student.company ? ' · ' + esc(r.student.company) : ''}</p>
      <button class="iui-btn iui-btn-secondary iui-btn-sm" onclick="window.print()" style="margin-bottom:1rem;">Imprimir o guardar en PDF</button>
      ${c.project ? block(c.project.title, c.project.sections, w.project) : ''}
      ${(c.workshops || []).map((t, i) => block(t.title, t.fields, w['workshop:' + i])).join('')}
    </section>`;
}

// ----- Sistema: telemetría opt-in y registros técnicos -----
function renderSystemOps() {
  if (!isAdmin()) return (window.location.hash = session() ? '#catalog' : '#login');
  const on = Telemetry.isOptedIn();
  const logs = on ? Telemetry.getLogs() : [];
  root().innerHTML = `
    <section>
      <h1 class="iui-h1">Sistema</h1>
      <div class="iui-card">
        <label class="iui-checkbox-row"><input type="checkbox" id="tel-opt" ${on ? 'checked' : ''} />
          <span>Registrar errores técnicos en este navegador para diagnóstico (opcional).</span></label>
        <p class="iui-xs iui-muted">Por defecto no se registra nada. Los registros no incluyen contraseñas ni respuestas.</p>
        ${on ? `<button class="iui-btn iui-btn-ghost iui-btn-sm" id="tel-clear">Borrar registros</button>` : ''}
      </div>
      ${on
        ? `<div class="iui-card" style="margin-top:1rem;"><pre class="iui-xs" style="white-space:pre-wrap;">${esc(JSON.stringify(logs.slice(-50), null, 2))}</pre></div>`
        : ''}
    </section>`;
  document.getElementById('tel-opt').addEventListener('change', (e) => {
    Telemetry.setOptIn(e.target.checked);
    renderSystemOps();
  });
  document.getElementById('tel-clear')?.addEventListener('click', () => {
    Telemetry.clearLogs();
    renderSystemOps();
  });
}

// ----- Router -----
const PUBLIC = new Set(['login', 'catalog', 'info', 'store', 'checkout', 'verify', 'legal-privacy', 'legal-terms', 'legal-refunds', 'legal-ip', 'legal-security', 'legal-consent']);

// ----- Recuperar acceso / crear contraseña -----
function renderForgot() {
  root().innerHTML = `
    <section style="max-width:420px; margin:2rem auto;">
      <div class="iui-card">
        <h1 class="iui-h2">Recuperar acceso</h1>
        <p class="iui-small iui-muted">Escriba el correo de su cuenta. Si existe, le enviaremos un enlace para crear o cambiar su contraseña (vence en 48 horas).</p>
        <div id="forgot-msg" class="iui-alert" style="display:none;"></div>
        <form id="forgot-form">
          <div class="iui-field"><label class="iui-label" for="f-email">Correo</label>
            <input class="iui-input" id="f-email" type="email" autocomplete="username" required /></div>
          <button class="iui-btn iui-btn-primary" style="width:100%;" type="submit">Enviar enlace</button>
        </form>
        <p class="iui-small" style="margin-top:1rem;"><a href="#login">Volver a ingresar</a></p>
      </div>
    </section>`;

  document.getElementById('forgot-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const msg = document.getElementById('forgot-msg');
    btn.disabled = true;
    try {
      await API.requestSetup(document.getElementById('f-email').value);
      msg.className = 'iui-alert iui-alert-success';
      msg.textContent = 'Si el correo está registrado, recibirá el enlace en unos minutos. Revise también la carpeta de spam.';
    } catch (ex) {
      msg.className = 'iui-alert iui-alert-danger';
      msg.textContent = ex.message;
    }
    msg.style.display = 'block';
    btn.disabled = false;
  });
}

function renderSetPassword(token) {
  root().innerHTML = `
    <section style="max-width:420px; margin:2rem auto;">
      <div class="iui-card">
        <h1 class="iui-h2">Crear contraseña</h1>
        <p class="iui-small iui-muted">Elija una contraseña de al menos 8 caracteres. El enlace solo sirve una vez.</p>
        <div id="sp-error" class="iui-alert iui-alert-danger" style="display:none;"></div>
        ${token ? `<form id="sp-form">
          <div class="iui-field"><label class="iui-label" for="sp-pass">Nueva contraseña</label>
            <input class="iui-input" id="sp-pass" type="password" minlength="8" autocomplete="new-password" required /></div>
          <div class="iui-field"><label class="iui-label" for="sp-pass2">Repita la contraseña</label>
            <input class="iui-input" id="sp-pass2" type="password" minlength="8" autocomplete="new-password" required /></div>
          <button class="iui-btn iui-btn-primary" style="width:100%;" type="submit">Guardar contraseña</button>
        </form>` : '<p class="iui-small">El enlace no es válido. Solicite uno nuevo.</p>'}
        <p class="iui-small" style="margin-top:1rem;"><a href="#forgot">Solicitar un enlace nuevo</a></p>
      </div>
    </section>`;

  const form = document.getElementById('sp-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const err = document.getElementById('sp-error');
    err.style.display = 'none';
    const p1 = document.getElementById('sp-pass').value;
    if (p1 !== document.getElementById('sp-pass2').value) {
      err.textContent = 'Las contraseñas no coinciden.';
      err.style.display = 'block';
      return;
    }
    try {
      await API.setPassword(token, p1);
      toast('Contraseña creada. Ya puede ingresar.', 'success');
      window.location.hash = '#login';
    } catch (ex) {
      err.textContent = ex.message;
      err.style.display = 'block';
    }
  });
}

function route() {
  setNav();
  const hash = window.location.hash.replace(/^#/, '') || 'catalog';
  const [name, arg, arg2] = hash.split('/');
  window.scrollTo(0, 0);

  // Retorno desde Wompi: la URL trae ?id=
  const params = new URLSearchParams(window.location.search);
  if (params.has('id') && !params.has('verify')) return renderPaymentReturn();

  if (name === 'permisos') return renderPermitsGuide();
  if (name === 'verify') {
    return renderVerify(params.get('verify') || '');
  }
  if (hash.startsWith('forgot')) return renderForgot();
  if (hash.startsWith('set-password')) {
    return renderSetPassword(new URLSearchParams(hash.split('?')[1] || '').get('token') || '');
  }
  if (name.startsWith('legal-')) return renderLegal(name);

  if (!PUBLIC.has(name) && !['course', 'exam', 'certs', 'orders', 'admin', 'system-ops', 'entregas'].includes(name)) {
    return (window.location.hash = '#catalog');
  }
  if (!session() && ['course', 'exam', 'certs', 'orders', 'admin', 'system-ops', 'entregas'].includes(name)) {
    return (window.location.hash = '#login');
  }

  switch (name) {
    case 'login': return renderLogin();
    case 'catalog': return session() ? renderDashboard() : renderLanding();
    case 'info': return renderCourseInfo(arg);
    case 'store': return renderStore();
    case 'checkout': return renderCheckout();
    case 'orders': return renderOrders();
    case 'course': return renderCourse(arg, arg2);
    case 'exam': return renderExam(arg);
    case 'certs': return renderCerts();
    case 'admin': return renderAdmin();
    case 'system-ops': return renderSystemOps();
    case 'entregas': return renderStudentWork(arg, arg2);
    default: return session() ? renderDashboard() : renderLanding();
  }
}

function boot() {
  Telemetry.init();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  setNav();
  document.getElementById('menu-btn')?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    document.getElementById('menu-btn').setAttribute('aria-expanded', String(open));
  });
  window.addEventListener('hashchange', route);
  route();
}

boot();
