// Vistas del alumno y vitrina pública: portada, ficha del curso, panel, reproductor del curso y evaluación.
// Regla: el servidor decide (lecturas, respuestas, intentos, aprobación). El navegador solo muestra.
import { API } from './api.js';
import { APP_CONFIG } from './config.js';
import { COURSES, LEGAL_CATEGORIES } from './catalog.js';
import { esc, fmtCOP, fmtDate, fmtHours, richText, readSeconds, cleanTitle, root, toast } from './dom.js';
import { addToCart, getCart } from './store.js';
import { generateSampleCertificatePDF } from './sample-certificate.js';
import { renderCourseScene, renderModuleVisual, renderCourseSimulator, renderMasterySummary, bindInteractiveVisuals, coursePhoto } from './interactive-visuals.js';
import { renderPermitsGuide } from './permits-guide.js';

export const byId = Object.fromEntries(COURSES.map((c) => [c.id, c]));
const session = () => API.getSession();
const isAdmin = () => session()?.role === 'admin';
const isDemo = () => !APP_CONFIG.APPS_SCRIPT_URL;
const MIN_SCORE = 80;

export function hasAccess(courseId) {
  const s = session();
  if (!s) return false;
  return isAdmin() || s.allowedCourses?.includes('*') || s.allowedCourses?.includes(courseId);
}

// Precios: vienen del servidor (única fuente). Se guardan en memoria durante la visita.
let pricesCache = null;
async function prices() {
  if (pricesCache) return pricesCache;
  const cat = await API.getCatalog();
  if (cat) pricesCache = Object.fromEntries(cat.courses.map((c) => [c.id, c.price]));
  return pricesCache || {};
}

const categoryShort = (c) => ({ regimen_especial: 'Requiere práctica reglamentada', gestion_sst: 'Comités del SG-SST' }[c.category] || 'Prevención SST');
const categoryClass = (c) => LEGAL_CATEGORIES[c.category]?.badgeClass || 'iui-badge-neutral';
// Sigla corta de cada curso para la franja de color de la tarjeta (única por curso).
const COURSE_MARKS = {
  'loto-bloqueo': 'LOTO',
  'trabajo-caliente': 'TC',
  'observador-fuego': 'OF',
  'sustancias-quimicas': 'SQ',
  'riesgo-electrico-no-electricistas': 'RE',
  'herramientas-electricas': 'HE',
  'mecanica-basica': 'MB',
  'aislamiento-energias-avanzado': 'AE',
  'seguridad-soldadura-corte': 'SC',
  'aparejador-cargas': 'AC',
  'almacenamiento-apilamiento-cargas': 'AL',
  andamiero: 'AN',
  'manejo-amoniaco': 'NH₃',
  'manipulacion-alimentos': 'BPM',
  copasst: 'CP',
  'comite-convivencia-laboral': 'CCL'
};
const iconFor = (c) => COURSE_MARKS[c.id] || esc(c.title.replace(/\(.*?\)/g, '').trim().split(/\s+/).filter((w) => w.length > 3).slice(0, 2).map((w) => w[0]).join('').toUpperCase() || 'SST');

function progressBar(pct, label) {
  const v = Math.max(0, Math.min(100, Math.round(pct)));
  return `<div class="sst-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${v}" aria-label="${esc(label || 'Avance')}"><span style="width:${v}%"></span></div>`;
}

// =====================================================================
// PORTADA PÚBLICA
// =====================================================================
export async function renderLanding() {
  const legal = APP_CONFIG.legalScopeStatement;
  root().innerHTML = `
    <section class="sst-hero sst-hero-pro">
      <div class="sst-hero-text">
        <span class="sst-eyebrow">Formación Virtual SST · Normativa Colombiana Vigente</span>
        <h1 class="sst-hero-title">Capacitación SST práctica e interactiva para equipos de alto desempeño</h1>
        <p class="sst-hero-sub">Cursos virtuales con diagramas interactivos, simuladores de campo y casos reales de planta. Su equipo aprende de verdad, a su ritmo y con constancia verificable al aprobar.</p>
        <div class="sst-hero-cta">
          <button class="iui-btn iui-btn-primary sst-btn-lg" id="go-courses">Explorar los ${COURSES.length} cursos</button>
          <a class="iui-btn iui-btn-secondary sst-btn-lg" href="#store">Paquetes para empresas</a>
        </div>
      </div>
      <div class="sst-hero-card sst-hero-card-clean">
        <div class="sst-pro-panel sst-pro-panel-light">
          <div class="sst-pro-banner sst-pro-banner-tall">
            <img src="./img/scenes/scene-mgmt.jpg" alt="Equipo SST en capacitación práctica" />
            <div class="sst-pro-banner-overlay">
              <span class="sst-pro-dot"></span>
              <span>Aprende desde celular, tablet o computador</span>
            </div>
          </div>
          <div class="sst-pro-panel-foot sst-pro-panel-foot-clean">
            <span>Escenas reales · Simuladores · Acceso 12 meses</span>
          </div>
        </div>
      </div>
    </section>

    <section class="sst-trust" aria-label="Cómo funciona">
      <div><strong>1. Elija su curso</strong><span>${COURSES.length} cursos y paquetes · 12 meses de acceso</span></div>
      <div><strong>2. Practique en línea</strong><span>Escenas reales, simuladores y casos de planta</span></div>
      <div><strong>3. Presente el examen</strong><span>Aprueba con ${MIN_SCORE} % desde celular o PC</span></div>
      <div><strong>4. Constancia con QR</strong><span>PDF inmediato verificable por empresas</span></div>
    </section>

    <section class="sst-section" id="cursos">
      <div class="sst-section-head">
        <h2 class="sst-section-title">Cursos disponibles</h2>
        <div class="sst-filters">
          <input class="iui-input" id="f-q" type="search" placeholder="Buscar: altura, químicos, soldadura…" aria-label="Buscar cursos" />
          <div class="sst-chips" role="group" aria-label="Filtrar por tipo">
            <button class="sst-chip active" data-cat="">Todos</button>
            <button class="sst-chip" data-cat="prevencion_sst">Prevención SST</button>
            <button class="sst-chip" data-cat="gestion_sst">Comités COPASST y Convivencia</button>
            <button class="sst-chip" data-cat="regimen_especial">Requieren práctica reglamentada</button>
          </div>
        </div>
      </div>
      <div class="sst-course-grid" id="course-grid">${COURSES.map((c) => courseCard(c, {})).join('')}</div>
      <p class="sst-empty-filter" id="no-results" hidden>No hay cursos con ese criterio.</p>
    </section>

    <section class="sst-section sst-company">
      <div>
        <h2 class="sst-section-title">¿Capacita a un equipo?</h2>
        <p>Los paquetes agrupan los cursos que más piden las plantas, con descuento. El administrador SST puede habilitar cursos a cada trabajador y seguir su avance desde el panel.</p>
      </div>
      <a class="iui-btn iui-btn-primary sst-btn-lg" href="#store">Ver paquetes</a>
    </section>

    <section class="sst-section">
      <h2 class="sst-section-title">Preguntas frecuentes</h2>
      <div class="sst-faq">
        <details><summary>¿La constancia me habilita para hacer trabajos de alto riesgo?</summary><p>No. Es una constancia de formación teórica. Para ejecutar tareas de alto riesgo se requiere además el entrenamiento práctico en sitio, la aptitud médica, la autorización del empleador y el permiso de trabajo. En trabajo en alturas, la Res. 4272 de 2021 exige formación presencial en un centro avalado.</p></details>
        <details><summary>¿Cómo verifica una empresa que la constancia es real?</summary><p>Escaneando el código QR o escribiendo el código en la página <a href="#verify">Verificar constancia</a>. Verá el nombre, el curso, la fecha y los últimos dígitos del documento.</p></details>
        <details><summary>¿Cuánto tiempo tengo para hacer el curso?</summary><p>Cada curso queda habilitado 12 meses desde la compra. Puede pausar y continuar en cualquier equipo: el avance se guarda en el servidor.</p></details>
        <details><summary>¿Qué pasa si no apruebo la evaluación?</summary><p>Tiene un número limitado de intentos. Después de cada intento puede repasar los módulos. Si se agotan, el administrador puede habilitar intentos nuevos.</p></details>
        <details><summary>¿Cómo pago?</summary><p>En el checkout seguro de Wompi, con los medios que el comercio tenga habilitados. Esta plataforma no recibe ni guarda datos de tarjetas.</p></details>
        <details><summary>¿Puedo retractarme de la compra?</summary><p>Sí, dentro de los plazos de la Ley 1480 de 2011. Revise la <a href="#legal-refunds">política de devoluciones</a>.</p></details>
      </div>
    </section>

    <p class="sst-scope">${esc(legal)}</p>
    ${waLink()}`;

  document.getElementById('go-courses').addEventListener('click', () => document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' }));
  document.getElementById('btn-sample-pdf')?.addEventListener('click', () => generateSampleCertificatePDF());

  // Filtros
  let cat = '';
  const apply = () => {
    const q = document.getElementById('f-q').value.trim().toLowerCase();
    let shown = 0;
    document.querySelectorAll('#course-grid [data-course-card]').forEach((el) => {
      const c = byId[el.dataset.courseCard];
      const hay = (c.title + ' ' + c.summary + ' ' + c.regulation).toLowerCase();
      const ok = (!cat || c.category === cat) && (!q || hay.includes(q));
      el.hidden = !ok;
      if (ok) shown++;
    });
    document.getElementById('no-results').hidden = shown > 0;
  };
  document.getElementById('f-q').addEventListener('input', apply);
  document.querySelectorAll('.sst-chip').forEach((b) =>
    b.addEventListener('click', () => {
      document.querySelectorAll('.sst-chip').forEach((x) => x.classList.toggle('active', x === b));
      cat = b.dataset.cat;
      apply();
    })
  );

  // Precios desde el servidor (si responde)
  const p = await prices();
  if (!document.getElementById('course-grid')) return;
  document.getElementById('course-grid').querySelectorAll('[data-price]').forEach((el) => {
    const v = p[el.dataset.price];
    el.textContent = v ? fmtCOP(v) : '';
  });
  bindCartButtons(document.getElementById('course-grid'));
}

// Botón de cotización para empresas: solo aparece si config.js tiene un número de WhatsApp real.
function waLink() {
  const n = String(APP_CONFIG.WHATSAPP_NUMBER || '').replace(/\D/g, '');
  if (n.length < 10) return '';
  const msg = 'Hola, quiero cotizar cursos virtuales de SST para los trabajadores de mi empresa.';
  return `<a class="sst-wa-float" href="https://wa.me/${n}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener" aria-label="Cotizar para empresas por WhatsApp">Cotizar para empresas</a>`;
}

const COURSE_SHORT_DESC = {
  'loto-bloqueo': 'Aprende a aislar, bloquear, etiquetar y verificar energía cero paso a paso.',
  'trabajo-caliente': 'Evalúa el área, mide atmósferas inflamables y controla chispas con permiso seguro.',
  'observador-fuego': 'Domina el rol del vigía, el uso de extintores y la guardia posterior de 60 minutos.',
  'sustancias-quimicas': 'Interpreta etiquetas SGA, fichas FDS, matriz de compatibilidad y atención a derrames.',
  'riesgo-electrico-no-electricistas': 'Identifica peligros eléctricos, respeta distancias seguras y actúa ante emergencias.',
  'herramientas-electricas': 'Inspecciona guardas, cables y EPP antes de operar pulidoras, taladros y sierras.',
  'mecanica-basica': 'Previene atrapamientos en partes móviles usando guardas, bloqueo y herramientas seguras.',
  'aislamiento-energias-avanzado': 'Aplica doble bloqueo y purga, bridas ciegas y cajas grupales en sistemas complejos.',
  'seguridad-soldadura-corte': 'Controla cilindros de gas, humos metálicos, radiación del arco y retroceso de llama.',
  'aparejador-cargas': 'Calcula ángulos de eslingas, controla el centro de gravedad y dirige izajes seguros.',
  'almacenamiento-apilamiento-cargas': 'Organiza estanterías, respeta capacidades máximas y mantén pasillos despejados.',
  andamiero: 'Verifica bases, barandas, plataformas completas y tarjeta verde antes de subir.',
  'manejo-amoniaco': 'Detecta fugas de NH₃, evacua según el viento y aplica descontaminación de emergencia.',
  'manipulacion-alimentos': 'Controla higiene, temperaturas seguras y prevención de contaminación cruzada (BPM).',
  copasst: 'Lidera inspecciones planeadas, investigación de accidentes y vigilancia del SG-SST.',
  'comite-convivencia-laboral': 'Gestiona quejas con confidencialidad, escucha imparcial y acuerdos de convivencia.'
};

function courseCard(c, opts) {
  const shortDesc = COURSE_SHORT_DESC[c.id] || c.summary;
  return `
    <article class="sst-course" data-course-card="${esc(c.id)}">
      <div class="sst-course-thumb">
        <img src="${esc(coursePhoto(c.id))}" alt="${esc(c.title)}" loading="lazy" />
        <div class="sst-course-thumb-meta">
          <span class="sst-course-icon">${iconFor(c)}</span>
          <span class="sst-course-hours">${fmtHours(c.hours, true)} · ${c.modules.length} módulos</span>
        </div>
      </div>
      <div class="sst-course-body">
        <span class="iui-badge ${categoryClass(c)}">${esc(categoryShort(c))}</span>
        <h3 class="sst-course-title">${esc(c.title)}</h3>
        <p class="sst-course-summary">${esc(shortDesc)}</p>
        <div class="sst-course-foot">
          <strong class="sst-price" data-price="${esc(c.id)}"></strong>
          <div class="sst-course-actions">
            <a class="iui-btn iui-btn-secondary iui-btn-sm" href="#info/${esc(c.id)}">Ver temario</a>
            ${hasAccess(c.id) && !isAdmin()
              ? `<a class="iui-btn iui-btn-primary iui-btn-sm" href="#course/${esc(c.id)}">Ir al curso</a>`
              : `<button class="iui-btn iui-btn-primary iui-btn-sm" data-add="${esc(c.id)}">${getCart().items.includes(c.id) ? 'En el carrito ✓' : 'Agregar'}</button>`}
          </div>
        </div>
      </div>
    </article>`;
}

function bindCartButtons(scope) {
  scope.querySelectorAll('[data-add]').forEach((btn) =>
    btn.addEventListener('click', () => {
      if (isDemo()) return toast('La tienda no está disponible en el modo demostración.', 'warning');
      addToCart(btn.dataset.add);
      btn.textContent = 'En el carrito ✓';
      toast('Curso agregado al carrito.', 'success');
    })
  );
}

// =====================================================================
// FICHA DEL CURSO (pública)
// =====================================================================
export async function renderCourseInfo(courseId) {
  const c = byId[courseId];
  if (!c) return (window.location.hash = '#catalog');
  const cat = LEGAL_CATEGORIES[c.category];
  root().innerHTML = `
    <article class="sst-info">
      <a href="#catalog" class="iui-small">← Todos los cursos</a>
      <div class="sst-info-head">
        <div>
          <span class="iui-badge ${categoryClass(c)}">${esc(categoryShort(c))}</span>
          <h1 class="iui-h1" style="margin-top:0.5rem;">${esc(c.title)}</h1>
          <p class="sst-hero-sub" style="margin:0;">${esc(c.summary)}</p>
          <ul class="sst-meta">
            <li><strong>${fmtHours(c.hours)}</strong> de intensidad medida</li>
            <li><strong>${c.modules.length}</strong> módulos con práctica</li>
            <li><strong>${(c.scenarios || []).length}</strong> escenarios de decisión</li>
            ${(c.workshops || []).length ? `<li><strong>${c.workshops.length}</strong> talleres aplicados a su planta</li>` : ''}
            ${c.project ? `<li><strong>Proyecto final</strong>: ${esc(c.project.title.replace(/^Proyecto final:\s*/i, ''))}</li>` : ''}
            <li><strong>${c.exam.length}</strong> preguntas de evaluación</li>
          </ul>
        </div>
        <aside class="sst-buy">
          <div class="sst-buy-price" data-price="${esc(c.id)}">&nbsp;</div>
          <p class="iui-xs iui-muted">Precio en COP. Acceso por 12 meses.</p>
          ${hasAccess(c.id) && !isAdmin()
            ? `<a class="iui-btn iui-btn-primary sst-btn-block" href="#course/${esc(c.id)}">Ir al curso</a>`
            : `<button class="iui-btn iui-btn-primary sst-btn-block" data-add="${esc(c.id)}">Agregar al carrito</button>
               <a class="iui-btn iui-btn-secondary sst-btn-block" href="#store">Ir a la tienda</a>`}
        </aside>
      </div>

      ${renderCourseScene(c.id)}

      <section class="sst-section">
        <h2 class="sst-section-title">Qué va a aprender</h2>
        <ol class="sst-syllabus">${c.modules.map((m) => `<li><strong>${esc(cleanTitle(m.title))}</strong>${keyLine(m)}</li>`).join('')}</ol>
      </section>

      ${c.fieldCase ? `
      <section class="sst-section sst-case">
        <h2 class="sst-section-title">El caso real con el que empieza</h2>
        <p>${esc(c.fieldCase)}</p>
        ${c.failureAnalysis ? `<p class="iui-small iui-muted">${esc(c.failureAnalysis)}</p>` : ''}
      </section>` : ''}


      <section class="sst-section">
        <h2 class="sst-section-title">Normativa de referencia</h2>
        <p>${esc(c.regulation)}</p>
        <div class="iui-alert ${c.category === 'regimen_especial' ? 'iui-alert-warning' : 'iui-alert-info'}">${esc(c.legalNotice)}${cat ? `<br/><span class="iui-xs">${esc(cat.description)}</span>` : ''}</div>
        ${c.onSiteClosure ? `<p class="iui-small"><strong>Cierre práctico recomendado en su empresa:</strong> ${esc(c.onSiteClosure)}</p>` : ''}
      </section>
    </article>`;
  bindCartButtons(root());
  bindInteractiveVisuals(root());
  const p = await prices();
  const el = root().querySelector('.sst-buy-price');
  if (el) el.textContent = p[c.id] ? fmtCOP(p[c.id]) : 'Consulte en la tienda';
}

function keyLine(m) {
  const k = (m.keyPoints || []).find((x) => !/^Referencia normativa/i.test(x));
  return k ? `<span>${esc(k.replace(/^Control crítico en campo:\s*/i, ''))}</span>` : '';
}

// =====================================================================
// PANEL DEL ALUMNO
// =====================================================================
function courseUnits(c) {
  return c.modules.length * 2 + (c.scenarios || []).length + (c.workshops || []).length + (c.project ? 1 : 0) + 1;
}

function unitsDone(c, st) {
  if (!st) return 0;
  const read = new Set(st.modulesRead || []);
  const checked = new Set(st.checked || []);
  let n = 0;
  c.modules.forEach((_, i) => {
    if (read.has(i)) n++;
    if (checked.has('practice:' + i)) n++;
  });
  (c.scenarios || []).forEach((_, i) => checked.has('scenario:' + i) && n++);
  const works = st.works || {};
  (c.workshops || []).forEach((_, i) => works['workshop:' + i] && n++);
  if (c.project && works.project) n++;
  if (st.exam?.passed) n++;
  return n;
}

function readyForExam(c, st) {
  return unitsDone(c, st) >= courseUnits(c) - 1;
}

export async function renderDashboard() {
  const s = session();
  if (isAdmin()) return renderAdminCourses();
  root().innerHTML = `<div class="iui-card" aria-busy="true"><span class="iui-spinner"></span> Cargando sus cursos…</div>`;
  const list = await API.dashboard();
  const items = (list || (s.allowedCourses || []).map((id) => ({ id, active: true }))).filter((x) => byId[x.id]);
  const active = items.filter((x) => x.active);
  const expired = items.filter((x) => !x.active);

  root().innerHTML = `
    <section>
      <div class="sst-dash-head">
        <div>
          <h1 class="iui-h1">Hola, ${esc((s.fullName || '').split(' ')[0])}</h1>
          <p class="iui-muted" style="margin:0;">${active.length ? `Tiene ${active.length} curso${active.length > 1 ? 's' : ''} activo${active.length > 1 ? 's' : ''}.` : 'Aún no tiene cursos activos.'}</p>
        </div>
        <a class="iui-btn iui-btn-secondary" href="#store">Comprar más cursos</a>
      </div>
      ${list === null ? `<div class="iui-alert iui-alert-warning">No pudimos consultar su avance en el servidor. Revise su conexión.</div>` : ''}
      ${active.length
        ? `<div class="sst-dash-grid">${active.map((x) => dashCard(byId[x.id], x)).join('')}</div>`
        : `<div class="iui-empty">Cuando compre un curso aparecerá aquí.<br/><a href="#catalog" class="iui-btn iui-btn-primary" style="margin-top:1rem;">Ver cursos</a></div>`}
      ${expired.length ? `
        <h2 class="iui-h2" style="margin-top:2rem;">Cursos vencidos</h2>
        <p class="iui-small iui-muted">La vigencia de 12 meses terminó. Su constancia sigue registrada; para volver a estudiar o presentar la evaluación, renueve el curso.</p>
        <div class="sst-dash-grid">${expired.map((x) => expiredCard(byId[x.id], x)).join('')}</div>` : ''}
    </section>`;
  root().querySelectorAll('[data-renew]').forEach((b) =>
    b.addEventListener('click', () => {
      addToCart(b.dataset.renew);
      window.location.hash = '#store';
    })
  );
}

function dashCard(c, st) {
  const total = courseUnits(c);
  const done = unitsDone(c, st);
  const pct = (done / total) * 100;
  let label = 'Sin empezar';
  let cta = `<a class="iui-btn iui-btn-primary" href="#course/${esc(c.id)}">Empezar</a>`;
  if (st.exam?.passed) {
    label = `Aprobado · ${st.exam.score} %`;
    cta = st.certificateCode
      ? `<a class="iui-btn iui-btn-primary" href="#certs">Ver constancia</a>`
      : `<a class="iui-btn iui-btn-primary" href="#course/${esc(c.id)}/evaluacion">Emitir constancia</a>`;
  } else if (readyForExam(c, st)) {
    label = 'Listo para la evaluación';
    cta = `<a class="iui-btn iui-btn-primary" href="#course/${esc(c.id)}/evaluacion">Ir a la evaluación</a>`;
  } else if (done > 0) {
    label = 'En curso';
    cta = `<a class="iui-btn iui-btn-primary" href="#course/${esc(c.id)}">Continuar</a>`;
  }
  return `
    <article class="sst-dash-card">
      <div class="sst-dash-top"><span class="sst-course-icon sm">${iconFor(c)}</span><span class="iui-badge ${st.exam?.passed ? 'iui-badge-success' : 'iui-badge-neutral'}">${esc(label)}</span></div>
      <h3 class="sst-course-title">${esc(c.title)}</h3>
      ${progressBar(pct, 'Avance del curso')}
      <p class="iui-xs iui-muted" style="margin:0.35rem 0 0;">${Math.round(pct)} % completado${st.expiresAt ? ` · Vigente hasta ${fmtDate(st.expiresAt)}` : ''}</p>
      <div style="margin-top:0.85rem;">${cta}</div>
    </article>`;
}

function expiredCard(c, st) {
  return `
    <article class="sst-dash-card is-expired">
      <div class="sst-dash-top"><span class="sst-course-icon sm">${iconFor(c)}</span><span class="iui-badge iui-badge-warning">Vencido${st.expiresAt ? ` el ${fmtDate(st.expiresAt)}` : ''}</span></div>
      <h3 class="sst-course-title">${esc(c.title)}</h3>
      <button class="iui-btn iui-btn-secondary" data-renew="${esc(c.id)}">Renovar por 12 meses</button>
    </article>`;
}

function renderAdminCourses() {
  root().innerHTML = `
    <section>
      <div class="sst-dash-head"><div><h1 class="iui-h1">Cursos</h1><p class="iui-muted" style="margin:0;">Vista de administrador: puede revisar el contenido. Nada de lo que haga aquí se registra para un alumno.</p></div>
      <a class="iui-btn iui-btn-primary" href="#admin">Ir a administración</a></div>
      <div class="sst-dash-grid">${COURSES.map((c) => `
        <article class="sst-dash-card">
          <div class="sst-dash-top"><span class="sst-course-icon sm">${iconFor(c)}</span><span class="iui-badge ${categoryClass(c)}">${esc(categoryShort(c))}</span></div>
          <h3 class="sst-course-title">${esc(c.title)}</h3>
          <a class="iui-btn iui-btn-secondary" href="#course/${esc(c.id)}">Revisar contenido</a>
        </article>`).join('')}</div>
    </section>`;
}

// =====================================================================
// REPRODUCTOR DEL CURSO
// =====================================================================
function stepsOf(c) {
  const steps = [{ id: 'caso', title: 'Caso real' }];
  c.modules.forEach((m, i) => steps.push({ id: 'm' + i, title: cleanTitle(m.title), module: i }));
  if ((c.scenarios || []).length) steps.push({ id: 'escenarios', title: 'Escenarios de decisión' });
  if (c.project) steps.push({ id: 'proyecto', title: 'Proyecto final' });
  steps.push({ id: 'permiso', title: 'Permiso de trabajo y ATS' });
  steps.push({ id: 'cierre', title: 'Lista de verificación' });
  steps.push({ id: 'evaluacion', title: 'Evaluación final' });
  return steps;
}

function stepDone(c, step, st) {
  const read = new Set(st.modulesRead || []);
  const checked = new Set(st.checked || []);
  const works = st.works || {};
  if (step.module !== undefined) {
    return read.has(step.module) && checked.has('practice:' + step.module) && (!c.workshops?.[step.module] || !!works['workshop:' + step.module]);
  }
  if (step.id === 'proyecto') return !!works.project;
  if (step.id === 'escenarios') return (c.scenarios || []).every((_, i) => checked.has('scenario:' + i));
  if (step.id === 'evaluacion') return !!st.exam?.passed;
  return !!st.visited?.[step.id];
}

const LOCAL_VISITED = 'sst_visited_v1';
function visitedMap(courseId) {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_VISITED) || '{}')[courseId] || {};
  } catch {
    return {};
  }
}
function markVisited(courseId, stepId) {
  try {
    const all = JSON.parse(localStorage.getItem(LOCAL_VISITED) || '{}');
    all[courseId] = { ...(all[courseId] || {}), [stepId]: true };
    localStorage.setItem(LOCAL_VISITED, JSON.stringify(all));
  } catch {
    /* almacenamiento no disponible: no afecta la aprobación */
  }
}

let readTimer = null;

export async function renderCourse(courseId, stepId) {
  clearInterval(readTimer);
  const c = byId[courseId];
  if (!c) return (root().innerHTML = `<div class="iui-empty">Curso no encontrado.</div>`);
  if (!session()) return (window.location.hash = '#login');
  if (!hasAccess(courseId)) {
    root().innerHTML = `<div class="iui-empty">No tiene este curso habilitado o su vigencia terminó.<br/><a href="#info/${esc(courseId)}" class="iui-btn iui-btn-primary" style="margin-top:1rem;">Ver el curso</a></div>`;
    return;
  }

  let st;
  if (isAdmin()) {
    st = { modulesRead: [], checked: [], works: {}, exam: { attemptsUsed: 0, maxAttempts: 3, passed: false } };
  } else {
    if (!root().querySelector('.sst-player')) root().innerHTML = `<div class="iui-card" aria-busy="true"><span class="iui-spinner"></span> Cargando el curso…</div>`;
    st = await API.courseStatus(courseId);
    if (!st) {
      root().innerHTML = `<div class="iui-alert iui-alert-danger">No pudimos cargar su avance desde el servidor. Revise su conexión e intente de nuevo.</div>
        <button class="iui-btn iui-btn-primary" onclick="location.reload()">Reintentar</button>`;
      return;
    }
  }
  st.visited = visitedMap(courseId);
  const steps = stepsOf(c);
  let current = steps.find((s) => s.id === stepId);
  if (!current) current = steps.find((s) => !stepDone(c, s, st) && s.id !== 'evaluacion') || steps[steps.length - 1];
  const idx = steps.indexOf(current);
  if (current.id === 'caso' || current.id === 'cierre' || current.id === 'permiso') markVisited(courseId, current.id);
  st.visited = visitedMap(courseId);

  const doneCount = steps.filter((s) => stepDone(c, s, st)).length;
  const pct = (unitsDone(c, st) / courseUnits(c)) * 100;

  root().innerHTML = `
    <section class="sst-player">
      <header class="sst-player-head">
        <a href="#catalog" class="iui-small">← Mis cursos</a>
        <h1 class="sst-player-title">${esc(c.title)}</h1>
        <div class="sst-player-meta">
          ${progressBar(pct, 'Avance del curso')}
          <span class="iui-xs iui-muted">${Math.round(pct)} % · ${doneCount} de ${steps.length} pasos${st.expiresAt ? ` · Vigente hasta ${fmtDate(st.expiresAt)}` : ''}</span>
        </div>
        ${isAdmin() ? `<div class="iui-alert iui-alert-info" style="margin-top:0.75rem;">Vista de administrador: puede recorrer el curso, pero no se registra avance.</div>` : ''}
      </header>

      <div class="sst-player-body">
        <nav class="sst-steps-nav" aria-label="Pasos del curso">
          <label class="sst-steps-select-label" for="step-select">Paso ${idx + 1} de ${steps.length}</label>
          <select id="step-select" class="iui-select sst-steps-select">
            ${steps.map((s, i) => `<option value="${esc(s.id)}" ${s === current ? 'selected' : ''}>${i + 1}. ${esc(s.title)}${stepDone(c, s, st) ? ' ✓' : ''}</option>`).join('')}
          </select>
          <ol class="sst-steps-list">
            ${steps.map((s, i) => `
              <li><a href="#course/${esc(courseId)}/${esc(s.id)}" class="${s === current ? 'current' : ''} ${stepDone(c, s, st) ? 'done' : ''}" ${s === current ? 'aria-current="step"' : ''}>
                <span class="sst-step-dot" aria-hidden="true">${stepDone(c, s, st) ? '✓' : i + 1}</span><span>${esc(s.title)}</span></a></li>`).join('')}
          </ol>
        </nav>

        <div class="sst-step-panel" id="step-panel">
          ${stepHtml(c, current, st)}
          <div class="sst-step-nav">
            ${idx > 0 ? `<a class="iui-btn iui-btn-ghost" href="#course/${esc(courseId)}/${esc(steps[idx - 1].id)}">← Anterior</a>` : '<span></span>'}
            ${idx < steps.length - 1 ? `<a class="iui-btn iui-btn-primary" id="btn-next" href="#course/${esc(courseId)}/${esc(steps[idx + 1].id)}">Siguiente →</a>` : ''}
          </div>
        </div>
      </div>
    </section>`;

  document.getElementById('step-select').addEventListener('change', (e) => {
    window.location.hash = `#course/${courseId}/${e.target.value}`;
  });
  bindStep(c, current, st);
  document.getElementById('step-panel').focus?.();
}

function stepHtml(c, step, st) {
  const read = new Set(st.modulesRead || []);
  const checked = new Set(st.checked || []);

  if (step.id === 'caso') {
    return `
      <span class="sst-step-kicker">Para empezar</span>
      <h2 class="sst-step-title">Un caso real</h2>
      <div class="sst-case-box"><p>${esc(c.fieldCase || '')}</p>${c.failureAnalysis ? `<p class="sst-case-why"><strong>¿Qué falló?</strong> ${esc(c.failureAnalysis.replace(/^Falla raíz:\s*/i, ''))}</p>` : ''}</div>
      ${renderCourseScene(c.id)}
      <p>Tenga este caso presente mientras estudia: cada módulo explica una de las barreras que habrían evitado el accidente.</p>
      <div class="iui-alert ${c.category === 'regimen_especial' ? 'iui-alert-warning' : 'iui-alert-info'}">${esc(c.legalNotice)}</div>`;
  }

  if (step.module !== undefined) {
    const i = step.module;
    const m = c.modules[i];
    const isRead = read.has(i);
    const answered = checked.has('practice:' + i);
    return `
      <span class="sst-step-kicker">Módulo ${i + 1} de ${c.modules.length}</span>
      <h2 class="sst-step-title">${esc(cleanTitle(m.title))}</h2>
      ${renderModuleVisual(c, i)}
      <details class="sst-prose-details">
        <summary>Ver lectura completa de apoyo (${esc(cleanTitle(m.title))})</summary>
        <div class="sst-prose">${richText(m.content)}</div>
      </details>
      ${m.keyPoints?.length ? `<div class="sst-keypoints"><strong>Puntos clave</strong><ul>${m.keyPoints.map((k) => `<li>${esc(k)}</li>`).join('')}</ul></div>` : ''}
      ${m.practice ? `
        <div class="sst-practice" id="practice-box">
          <span class="sst-step-kicker">Práctica · se responde una sola vez</span>
          <p class="sst-q">${esc(m.practice.q)}</p>
          ${answered
            ? `<p class="iui-small sst-ok">✓ Práctica respondida.</p>`
            : `<div class="sst-options">${m.practice.options.map((o, j) => `<label class="sst-option"><input type="radio" name="practice" value="${j}" /><span>${esc(o)}</span></label>`).join('')}</div>
               <button class="iui-btn iui-btn-primary iui-btn-sm" id="btn-practice">Verificar respuesta</button>`}
          <div id="practice-result" aria-live="polite"></div>
        </div>` : ''}
      ${c.workshops?.[i] ? workHtml(c.workshops[i], st.works?.['workshop:' + i], 'workshop', i) : ''}
      <div class="sst-read-row">
        ${isRead
          ? `<span class="sst-ok">✓ Módulo leído</span>`
          : `<button class="iui-btn iui-btn-secondary" id="btn-read" disabled>Marcar como leído (<span id="read-left">${readSeconds(m.content)}</span> s)</button>
             <span class="iui-xs iui-muted">El botón se habilita después del tiempo mínimo de lectura.</span>`}
      </div>`;
  }

  if (step.id === 'escenarios') {
    return `
      <span class="sst-step-kicker">Aplique lo aprendido</span>
      <h2 class="sst-step-title">Escenarios de decisión</h2>
      ${renderCourseSimulator(c.id)}
      <p class="iui-muted">Situaciones de planta. Elija lo que haría usted. Cada escenario se responde una sola vez y recibe retroalimentación.</p>
      ${(c.scenarios || []).map((sc, i) => `
        <div class="sst-practice">
          <span class="sst-step-kicker">Escenario ${i + 1}</span>
          <p class="sst-q">${esc(sc.scenario)}</p>
          ${checked.has('scenario:' + i)
            ? `<p class="iui-small sst-ok">✓ Escenario respondido.</p>`
            : `<div class="sst-options">${sc.options.map((o, j) => `<label class="sst-option"><input type="radio" name="sc-${i}" value="${j}" /><span>${esc(o)}</span></label>`).join('')}</div>
               <button class="iui-btn iui-btn-primary iui-btn-sm" data-scenario="${i}">Responder</button>`}
          <div id="sc-result-${i}" aria-live="polite"></div>
        </div>`).join('')}`;
  }

  if (step.id === 'proyecto') {
    const p = c.project;
    const saved = st.works?.project;
    return `
      <span class="sst-step-kicker">Aplicación en su planta</span>
      <h2 class="sst-step-title">${esc(p.title)}</h2>
      <p>${esc(p.intro)}</p>
      ${workHtml({ title: '', prompt: '', fields: p.sections }, saved, 'project', 0, p.rubric)}`;
  }

  if (step.id === 'permiso') {
    return `
      <span class="sst-step-kicker">Herramienta práctica incluida en el curso</span>
      <h2 class="sst-step-title">Permiso de trabajo y ATS</h2>
      <div id="course-permit-host"></div>`;
  }

  if (step.id === 'cierre') {
    return `
      <span class="sst-step-kicker">Para su puesto de trabajo</span>
      <h2 class="sst-step-title">Lista de verificación</h2>
      ${renderMasterySummary(c, st)}
      <p class="iui-muted">Úsela antes de cada tarea. Puede marcarla aquí como ejercicio; no se guarda.</p>
      <ul class="sst-checklist">${(c.checklist || []).map((k, i) => `<li><label><input type="checkbox" id="ck-${i}" /> <span>${esc(k)}</span></label></li>`).join('')}</ul>
      ${c.onSiteClosure ? `<div class="iui-alert iui-alert-info"><strong>Cierre práctico en su empresa:</strong> ${esc(c.onSiteClosure)}</div>` : ''}`;
  }

  // Evaluación
  const reqs = [
    [`Módulos leídos`, read.size, c.modules.length],
    [`Prácticas respondidas`, c.modules.filter((_, i) => checked.has('practice:' + i)).length, c.modules.length],
    [`Escenarios respondidos`, (c.scenarios || []).filter((_, i) => checked.has('scenario:' + i)).length, (c.scenarios || []).length]
  ];
  if ((c.workshops || []).length) reqs.push([`Talleres entregados`, c.workshops.filter((_, i) => st.works?.['workshop:' + i]).length, c.workshops.length]);
  if (c.project) reqs.push([`Proyecto final entregado`, st.works?.project ? 1 : 0, 1]);
  const complete = reqs.every(([, a, b]) => a >= b);
  const ex = st.exam || {};
  const left = Math.max(0, (ex.maxAttempts || 3) - (ex.attemptsUsed || 0));
  if (ex.passed) {
    return `
      <span class="sst-step-kicker">Evaluación final</span>
      <h2 class="sst-step-title">¡Aprobado!</h2>
      <div class="sst-result ok"><strong>${esc(ex.score)} %</strong><span>Puntaje registrado en el servidor</span></div>
      ${st.certificateCode
        ? `<p>Su constancia ya fue emitida con el código <strong>${esc(st.certificateCode)}</strong>.</p><a class="iui-btn iui-btn-primary" href="#certs">Ver y descargar constancia</a>`
        : `<p>Emita su constancia. Quedará registrada con un código de verificación único.</p><button class="iui-btn iui-btn-primary" id="btn-issue">Emitir constancia</button>`}`;
  }
  return `
    <span class="sst-step-kicker">Evaluación final</span>
    <h2 class="sst-step-title">Antes de presentar la evaluación</h2>
    <ul class="sst-reqs">${reqs.map(([t, a, b]) => `<li class="${a >= b ? 'ok' : ''}"><span>${a >= b ? '✓' : '○'}</span>${esc(t)}: ${a} de ${b}</li>`).join('')}</ul>
    <p>${c.exam.length} preguntas. Aprueba con ${MIN_SCORE} %. Intentos disponibles: <strong>${left} de ${ex.maxAttempts || 3}</strong>. Las opciones cambian de orden en cada intento.</p>
    ${left === 0
      ? `<div class="iui-alert iui-alert-warning">Agotó los intentos. Solicite al administrador SST que habilite intentos nuevos.</div>`
      : complete || isAdmin()
        ? `<a class="iui-btn iui-btn-primary sst-btn-lg" href="#exam/${esc(c.id)}">Presentar evaluación</a>`
        : `<button class="iui-btn iui-btn-primary sst-btn-lg" disabled>Presentar evaluación</button><p class="iui-xs iui-muted">Complete los pasos pendientes para habilitar la evaluación.</p>`}`;
}

function bindStep(c, step, st) {
  bindInteractiveVisuals(document.getElementById('step-panel'));
  const permitHost = document.getElementById('course-permit-host');
  if (permitHost) renderPermitsGuide(permitHost);
  // Lectura: el temporizador empieza cuando el módulo se abre
  const readBtn = document.getElementById('btn-read');
  if (readBtn) {
    let left = readSeconds(c.modules[step.module].content);
    readTimer = setInterval(() => {
      left -= 1;
      const span = document.getElementById('read-left');
      if (!span) return clearInterval(readTimer);
      if (left <= 0) {
        clearInterval(readTimer);
        readBtn.disabled = false;
        readBtn.textContent = 'Marcar como leído';
        readBtn.classList.replace('iui-btn-secondary', 'iui-btn-primary');
      } else span.textContent = left;
    }, 1000);
    readBtn.addEventListener('click', async () => {
      if (isAdmin()) return toast('Vista de administrador: el avance no se registra.', 'info');
      readBtn.disabled = true;
      const list = [...new Set([...(st.modulesRead || []), step.module])];
      const res = await API.syncProgress(c.id, { modulesRead: list });
      if (!res || !res.ok) {
        readBtn.disabled = false;
        return toast(res?.error || 'No se pudo guardar. Revise su conexión.', 'danger');
      }
      toast('Módulo registrado.', 'success');
      renderCourse(c.id, step.id);
    });
  }

  const answer = async (kind, index, name, resultId, btn) => {
    if (isAdmin()) return toast('Vista de administrador: las respuestas no se registran.', 'info');
    const picked = document.querySelector(`input[name="${name}"]:checked`);
    if (!picked) return toast('Seleccione una respuesta.', 'warning');
    btn.disabled = true;
    let res;
    try {
      res = await API.checkAnswer({ courseId: c.id, kind, index, choice: Number(picked.value) });
    } catch (e) {
      res = { ok: false, error: e.message };
    }
    if (!res || !res.ok) {
      btn.disabled = false;
      return toast(res?.error || 'No se pudo verificar. Intente de nuevo.', 'danger');
    }
    st.checked = [...(st.checked || []), `${kind}:${index}`];
    document.querySelectorAll(`input[name="${name}"]`).forEach((r) => (r.disabled = true));
    picked.closest('.sst-option')?.classList.add(res.correct ? 'is-right' : 'is-wrong');
    if (!res.correct && Number.isInteger(res.correctIndex)) {
      document.querySelector(`input[name="${name}"][value="${res.correctIndex}"]`)?.closest('.sst-option')?.classList.add('is-right');
    }
    btn.remove();
    document.getElementById(resultId).innerHTML = `<div class="sst-feedback ${res.correct ? 'ok' : 'bad'}"><strong>${res.correct ? 'Correcto.' : 'No es la mejor decisión.'}</strong> ${esc(res.feedback || '')}</div>`;
  };

  document.getElementById('btn-practice')?.addEventListener('click', (e) => answer('practice', step.module, 'practice', 'practice-result', e.currentTarget));
  root().querySelectorAll('[data-scenario]').forEach((b) =>
    b.addEventListener('click', () => answer('scenario', Number(b.dataset.scenario), `sc-${b.dataset.scenario}`, `sc-result-${b.dataset.scenario}`, b))
  );
  document.getElementById('btn-issue')?.addEventListener('click', (e) => requestCertificate(c.id, e.currentTarget));
  bindWork(c, step);
}

// ---------------------------------------------------------------------
// Talleres aplicados y proyecto final
// ---------------------------------------------------------------------
const countWords = (t) => String(t || '').trim().split(/\s+/).filter(Boolean).length;

function workHtml(w, saved, kind, index, rubric) {
  const answers = saved?.answers || [];
  return `
    <form class="sst-work" data-kind="${kind}" data-index="${index}">
      ${w.title ? `<span class="sst-step-kicker">Taller aplicado · se guarda en su expediente</span><h3 class="sst-work-title">${esc(w.title)}</h3>` : ''}
      ${w.prompt ? `<p class="iui-small iui-muted" style="margin:0;">${esc(w.prompt)}</p>` : ''}
      ${saved ? `<p class="iui-small sst-ok">✓ Entregado el ${esc(fmtDate(saved.savedAt))}. Puede corregirlo y guardarlo de nuevo.</p>` : ''}
      ${w.fields.map((f, j) => `
        <label class="sst-work-field">
          <span class="sst-work-label">${esc(f.label)}</span>
          ${f.help ? `<span class="iui-xs iui-muted">${esc(f.help)}</span>` : ''}
          <textarea class="iui-input" rows="${f.minWords >= 40 ? 6 : 4}" data-min="${f.minWords}" name="f${j}">${esc(answers[j] || '')}</textarea>
          <span class="sst-wordcount iui-xs" data-for="f${j}"></span>
        </label>`).join('')}
      ${rubric ? `
        <fieldset class="sst-rubric">
          <legend class="sst-work-label">Antes de entregar, revise su proyecto con esta lista</legend>
          ${rubric.map((r, j) => `<label class="iui-checkbox-row"><input type="checkbox" name="r${j}" ${saved?.rubric?.[j] ? 'checked' : ''} /> <span class="iui-small">${esc(r)}</span></label>`).join('')}
        </fieldset>` : ''}
      <div class="sst-work-actions">
        <button class="iui-btn iui-btn-primary" type="submit">${saved ? 'Guardar cambios' : kind === 'project' ? 'Entregar proyecto' : 'Entregar taller'}</button>
        <span class="iui-xs iui-muted" aria-live="polite" data-status></span>
      </div>
    </form>`;
}

function bindWork(c, step) {
  root().querySelectorAll('form.sst-work').forEach((form) => {
    const update = () =>
      form.querySelectorAll('textarea').forEach((ta) => {
        const n = countWords(ta.value);
        const min = Number(ta.dataset.min);
        const el = form.querySelector(`[data-for="${ta.name}"]`);
        el.textContent = `${n} de ${min} palabras mínimas`;
        el.classList.toggle('ok', n >= min);
      });
    update();
    form.addEventListener('input', update);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isAdmin()) return toast('Vista de administrador: las entregas no se registran.', 'info');
      const answers = [...form.querySelectorAll('textarea')].map((t) => t.value.trim());
      const short = [...form.querySelectorAll('textarea')].find((t) => countWords(t.value) < Number(t.dataset.min));
      if (short) {
        short.focus();
        return toast('Hay campos con menos palabras de las requeridas.', 'warning');
      }
      const rubric = [...form.querySelectorAll('.sst-rubric input')].map((x) => x.checked);
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      try {
        await API.saveWork({ courseId: c.id, kind: form.dataset.kind, index: Number(form.dataset.index), answers, rubric });
        toast(form.dataset.kind === 'project' ? 'Proyecto entregado.' : 'Taller entregado.', 'success');
        renderCourse(c.id, step.id);
      } catch (err) {
        btn.disabled = false;
        toast(err.message, 'danger');
      }
    });
  });
}

export async function requestCertificate(courseId, btn) {
  if (btn) btn.disabled = true;
  try {
    await API.issueCertificate(courseId);
    toast('Constancia emitida.', 'success');
    window.location.hash = '#certs';
  } catch (e) {
    if (btn) btn.disabled = false;
    toast(e.message || 'No se pudo emitir la constancia.', 'danger');
  }
}

// =====================================================================
// EVALUACIÓN
// =====================================================================
export async function renderExam(courseId) {
  clearInterval(readTimer);
  const c = byId[courseId];
  if (!c || !hasAccess(courseId)) return (window.location.hash = '#catalog');
  let order = c.exam.map((q) => q.options.map((_, j) => j));
  let st = null;
  if (!isAdmin()) {
    root().innerHTML = `<div class="iui-card" aria-busy="true"><span class="iui-spinner"></span> Preparando la evaluación…</div>`;
    st = await API.courseStatus(courseId);
    if (st?.exam?.passed) return (window.location.hash = `#course/${courseId}/evaluacion`);
    try {
      order = (await API.getExamOrder(courseId)).order;
    } catch (err) {
      root().innerHTML = `<div class="iui-alert iui-alert-danger">${esc(err.message)}</div><a class="iui-btn iui-btn-secondary" href="#course/${esc(courseId)}">Volver al curso</a>`;
      return;
    }
  }
  const left = st ? Math.max(0, st.exam.maxAttempts - st.exam.attemptsUsed) : 3;

  root().innerHTML = `
    <section class="sst-exam">
      <a href="#course/${esc(courseId)}/evaluacion" class="iui-small">← Volver al curso</a>
      <h1 class="iui-h2">Evaluación: ${esc(c.title)}</h1>
      <p class="iui-muted">${c.exam.length} preguntas · aprueba con ${MIN_SCORE} % · este es su intento ${st ? st.exam.attemptsUsed + 1 : 1} de ${st ? st.exam.maxAttempts : 3}. La calificación la hace el servidor.</p>
      <div class="sst-exam-bar" id="exam-bar"><span id="answered">0</span> de ${c.exam.length} respondidas ${progressBar(0, 'Preguntas respondidas')}</div>
      <form id="exam-form">
        ${c.exam.map((q, i) => `
          <fieldset class="sst-question">
            <legend><span class="sst-qn">${i + 1}</span> ${esc(q.q)}</legend>
            <div class="sst-options">${order[i].map((k, j) => `<label class="sst-option"><input type="radio" name="q-${i}" value="${j}" required /><span>${esc(q.options[k])}</span></label>`).join('')}</div>
          </fieldset>`).join('')}
        <div class="sst-submit-box" id="submit-box">
          <button class="iui-btn iui-btn-primary sst-btn-lg" type="button" id="btn-review" disabled>Entregar evaluación</button>
        </div>
      </form>
      <div id="exam-result" aria-live="polite"></div>
    </section>`;

  const form = document.getElementById('exam-form');
  const count = () => c.exam.filter((_, i) => form.querySelector(`input[name="q-${i}"]:checked`)).length;
  form.addEventListener('change', () => {
    const n = count();
    document.getElementById('answered').textContent = n;
    document.querySelector('#exam-bar .sst-progress span').style.width = `${(n / c.exam.length) * 100}%`;
    const b = document.getElementById('btn-review');
    if (b) b.disabled = n < c.exam.length;
  });

  function showSubmitButton() {
    const box = document.getElementById('submit-box');
    box.innerHTML = `<button class="iui-btn iui-btn-primary sst-btn-lg" type="button" id="btn-review" ${count() < c.exam.length ? 'disabled' : ''}>Entregar evaluación</button>`;
    document.getElementById('btn-review').addEventListener('click', showConfirm);
  }

  function showConfirm() {
    if (isAdmin()) return toast('Vista de administrador: la evaluación no se registra.', 'info');
    document.getElementById('submit-box').innerHTML = `
      <div class="sst-confirm">
        <p><strong>¿Entregar ahora?</strong> Este intento cuenta. ${left - 1 > 0 ? `Si no aprueba, le quedarán ${left - 1} intento${left - 1 > 1 ? 's' : ''}.` : 'Es su último intento.'}</p>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button class="iui-btn iui-btn-primary" type="button" id="btn-submit">Sí, entregar</button>
          <button class="iui-btn iui-btn-ghost" type="button" id="btn-cancel">Revisar respuestas</button>
        </div>
      </div>`;
    document.getElementById('btn-cancel').addEventListener('click', showSubmitButton);
    document.getElementById('btn-submit').addEventListener('click', submit);
  }

  showSubmitButton();

  async function submit(e) {
    e.currentTarget.disabled = true;
    e.currentTarget.innerHTML = '<span class="iui-spinner"></span> Calificando…';
    const answers = c.exam.map((_, i) => Number(form.querySelector(`input[name="q-${i}"]:checked`)?.value));
    let res;
    try {
      res = await API.submitExam(courseId, answers);
    } catch (err) {
      res = { ok: false, error: err.message };
    }
    if (!res || !res.ok) {
      toast(res?.error || 'No se pudo entregar la evaluación.', 'danger');
      return showSubmitButton();
    }
    form.remove();
    document.getElementById('exam-bar').remove();
    const reveal = (res.reveal || [])
      .map((r) => {
        const q = c.exam[r.question - 1];
        return `<li><span>${esc(q?.q || '')}</span><strong>${esc(q?.options?.[order[r.question - 1]?.[r.correctIndex]] || '')}</strong></li>`;
      })
      .join('');
    const out = document.getElementById('exam-result');
    if (res.passed) {
      out.innerHTML = `
        <div class="sst-result ok"><strong>${esc(res.score)} %</strong><span>¡Aprobó la evaluación!</span></div>
        <p>Emita su constancia: queda registrada en el servidor con un código de verificación único.</p>
        <button class="iui-btn iui-btn-primary sst-btn-lg" id="btn-issue">Emitir constancia</button>
        ${reveal ? `<h2 class="iui-h3" style="margin-top:1.5rem;">Preguntas que falló</h2><ul class="sst-reveal">${reveal}</ul>` : ''}`;
      document.getElementById('btn-issue').addEventListener('click', (ev) => requestCertificate(courseId, ev.currentTarget));
    } else {
      out.innerHTML = `
        <div class="sst-result bad"><strong>${esc(res.score)} %</strong><span>No aprobó (mínimo ${esc(res.minPassingScore)} %)</span></div>
        <p>${res.attemptsLeft > 0
          ? `Le quedan <strong>${res.attemptsLeft}</strong> intento${res.attemptsLeft > 1 ? 's' : ''}. Repase los módulos antes de volver a intentarlo: las preguntas son las mismas, pero las opciones cambian de orden.`
          : 'Agotó los intentos. Solicite al administrador SST que habilite intentos nuevos.'}</p>
        ${reveal ? `<h2 class="iui-h3" style="margin-top:1.5rem;">Respuestas correctas de las preguntas que falló</h2><ul class="sst-reveal">${reveal}</ul>` : ''}
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <a class="iui-btn iui-btn-secondary" href="#course/${esc(courseId)}/m0">Repasar el curso</a>
          ${res.attemptsLeft > 0 ? `<button class="iui-btn iui-btn-primary" id="btn-retry">Presentar de nuevo</button>` : ''}
        </div>`;
      document.getElementById('btn-retry')?.addEventListener('click', () => renderExam(courseId));
    }
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
