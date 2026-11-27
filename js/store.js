import { API } from './api.js';
import { COURSES as CATALOG_COURSES, LEGAL_CATEGORIES } from './catalog.js';
import { buildWompiCheckoutUrl, readTransactionIdFromUrl } from './payments.js';
import { esc, fmtCOP, fmtDate, fmtHours } from './dom.js';

const CART_KEY = 'sst_cart_v1';
const PENDING_KEY = 'sst_pending_order_v1';
const PENDING_TX_KEY = 'sst_pending_tx_v1';
const MAX_POLLS = 12; // ~2 minutos, cada 10 segundos
let pollTimer = null;
const root = () => document.getElementById('app-root');
const staticInfo = Object.fromEntries(CATALOG_COURSES.map((c) => [c.id, c]));
const CATALOG_ORDER = CATALOG_COURSES.map((c) => c.id);
const LOADING = `<div class="iui-card"><span class="iui-spinner"></span> Cargando…</div>`;

export function getCart() {
  try {
    const c = JSON.parse(localStorage.getItem(CART_KEY) || '{}');
    return { items: Array.isArray(c.items) ? c.items : [], bundleId: c.bundleId || '' };
  } catch {
    return { items: [], bundleId: '' };
  }
}
export function saveCart(c) {
  localStorage.setItem(CART_KEY, JSON.stringify(c));
  window.dispatchEvent(new CustomEvent('sst:cart'));
}

// Agrega un curso suelto. Si había un paquete, el curso reemplaza la selección del paquete.
export function addToCart(id) {
  const c = getCart();
  if (c.bundleId) {
    c.bundleId = '';
    c.items = [];
  }
  if (!c.items.includes(id)) c.items.push(id);
  saveCart(c);
}

export function cartCount() {
  const c = getCart();
  return c.bundleId ? 1 : c.items.length;
}

function emptyState(message, linkHref, linkText) {
  root().innerHTML = `
    <div class="iui-empty">${esc(message)}
      ${linkHref ? `<br/><a href="${linkHref}" class="iui-btn iui-btn-primary" style="margin-top:1rem;">${esc(linkText)}</a>` : ''}
    </div>`;
}

// Un paquete reemplaza la selección individual. Se descuentan los cursos que el alumno ya tiene.
function effectiveTotals(cat, cart) {
  const bundle = cat.bundles.find((b) => b.id === cart.bundleId) || null;
  const titles = Object.fromEntries(cat.courses.map((c) => [c.id, c]));
  const owned = new Set(API.getSession()?.allowedCourses || []);
  const ids = (bundle ? bundle.courses : cart.items).filter((id) => titles[id] && !owned.has(id));
  const subtotal = ids.reduce((s, id) => s + titles[id].price, 0);
  const discount = bundle ? Math.round((subtotal * bundle.percent) / 100) : 0;
  return { bundle, titles, ids, subtotal, discount, total: subtotal - discount };
}

// ----- Tienda -----
export async function renderStore() {
  root().innerHTML = LOADING;
  const cat = await API.getCatalog();
  if (!cat) return emptyState('La tienda necesita conexión con el servidor. Intente más tarde.', '#catalog', 'Volver a mis cursos');

  const owned = new Set(API.getSession()?.allowedCourses || []);
  const cart = getCart();
  const t = effectiveTotals(cat, cart);

  root().innerHTML = `
    <section>
      <h1 class="iui-h1">Tienda de cursos SST</h1>
      <p class="iui-muted">Precios en pesos colombianos (COP). Puede agregar cursos sueltos o un paquete con descuento. El cupón se aplica al pagar.</p>
      ${cat.storeReady ? '' : `<div class="iui-alert iui-alert-warning">La tienda se habilita cuando el administrador termine la configuración de pagos.</div>`}

      <h2 class="iui-h2" style="margin-top:1.5rem;">Paquetes con descuento</h2>
      <div class="iui-grid">
        ${cat.bundles
          .map((b) => {
            const selected = cart.bundleId === b.id;
            const total = b.courses.filter((id) => !owned.has(id)).reduce((s, id) => s + (t.titles[id]?.price || 0), 0);
            return `
            <article class="iui-card">
              <span class="iui-badge iui-badge-success" style="width:fit-content;">Ahorra ${b.percent}%</span>
              <h3 class="iui-h3">${esc(b.name)}</h3>
              <ul class="iui-small iui-muted" style="margin:0; padding-left:1.1rem;">
                ${b.courses.map((id) => `<li>${esc(t.titles[id]?.title || id)}</li>`).join('')}
              </ul>
              <div class="iui-small"><s>${fmtCOP(total)}</s> <strong>${fmtCOP(Math.round(total * (1 - b.percent / 100)))}</strong></div>
              <button class="iui-btn ${selected ? 'iui-btn-secondary' : 'iui-btn-primary'}" data-bundle="${esc(b.id)}">
                ${selected ? 'Quitar paquete' : 'Agregar paquete'}
              </button>
            </article>`;
          })
          .join('')}
      </div>

      <h2 class="iui-h2" style="margin-top:1.5rem;">Cursos individuales</h2>
      <div class="iui-grid">
        ${[...cat.courses]
          .sort((a, b) => CATALOG_ORDER.indexOf(a.id) - CATALOG_ORDER.indexOf(b.id))
          .map((c) => {
            const isOwned = owned.has(c.id);
            const inCart = cart.items.includes(c.id) && !cart.bundleId;
            const p = staticInfo[c.id] || {};
            return `
            <article class="iui-card sst-store-card">
              <div class="sst-store-tags">
                <span class="iui-badge ${LEGAL_CATEGORIES[p.category]?.badgeClass || 'iui-badge-neutral'}">${esc(LEGAL_CATEGORIES[p.category]?.label || '')}</span>
                <span class="iui-badge iui-badge-neutral">${fmtHours(c.hours)}</span>
              </div>
              <h3 class="iui-h3">${esc(c.title)}</h3>
              <p class="iui-small iui-muted" style="margin:0;">${esc(p.summary || '')}</p>
              <p class="sst-store-reg"><strong>Normativa:</strong> ${esc(p.regulation || '')}</p>
              <div class="sst-store-price">${fmtCOP(c.price)} <a class="iui-small" href="#info/${esc(c.id)}">Ver temario</a></div>
              ${
                isOwned
                  ? `<span class="iui-badge iui-badge-success">Ya lo tiene habilitado</span>`
                  : `<button class="iui-btn ${inCart ? 'iui-btn-secondary' : 'iui-btn-primary'}" data-course="${esc(c.id)}">
                       ${inCart ? 'Quitar del carrito' : 'Agregar al carrito'}
                     </button>`
              }
            </article>`;
          })
          .join('')}
      </div>
    </section>

    ${t.ids.length ? `
    <aside class="sst-cartbar" aria-label="Carrito">
      <div class="sst-cartbar-info">
        <strong>${t.bundle ? esc(t.bundle.name) : `${t.ids.length} curso${t.ids.length > 1 ? 's' : ''}`}</strong>
        <span>${t.bundle ? `<s>${fmtCOP(t.subtotal)}</s> ` : ''}${fmtCOP(t.total)}<small> antes de cupón</small></span>
      </div>
      <div class="sst-cartbar-actions">
        <button class="iui-btn iui-btn-ghost iui-btn-sm" id="btn-clear-cart">Vaciar</button>
        <button class="iui-btn iui-btn-primary" id="btn-go-checkout" ${cat.storeReady ? '' : 'disabled'}>Pagar →</button>
      </div>
    </aside>` : ''}`;

  root().querySelectorAll('[data-course]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.course;
      const c = getCart();
      if (c.bundleId) {
        c.bundleId = '';
        c.items = [];
      }
      c.items = c.items.includes(id) ? c.items.filter((x) => x !== id) : [...c.items, id];
      saveCart(c);
      renderStore();
    })
  );

  root().querySelectorAll('[data-bundle]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.bundle;
      const c = getCart();
      c.bundleId = c.bundleId === id ? '' : id;
      c.items = [];
      saveCart(c);
      renderStore();
    })
  );

  document.getElementById('btn-clear-cart')?.addEventListener('click', () => {
    saveCart({ items: [], bundleId: '' });
    renderStore();
  });
  document.getElementById('btn-go-checkout')?.addEventListener('click', () => {
    window.location.hash = '#checkout';
  });
}

// ----- Checkout: primero el resumen y el total; luego los datos y el consentimiento -----
export async function renderCheckout() {
  const cart = getCart();
  if (!cart.items.length && !cart.bundleId) return emptyState('Su carrito está vacío.', '#store', 'Ir a la tienda');

  root().innerHTML = LOADING;
  const cat = await API.getCatalog();
  if (!cat || !cat.storeReady) return emptyState('La tienda no está disponible en este momento. Intente más tarde.', '#store', 'Volver a la tienda');
  const t = effectiveTotals(cat, cart);
  if (!t.ids.length) return emptyState('Ya tiene habilitados los cursos de su carrito.', '#catalog', 'Ir a mis cursos');

  const session = API.getSession();
  const prefill = session?.role === 'student' ? session : {};

  root().innerHTML = `
    <section style="max-width:620px; margin:0 auto;">
      <div class="iui-card" style="margin-bottom:1rem;">
        <h2 class="iui-h3" style="margin-top:0;">Resumen de su compra</h2>
        <ul class="iui-small" style="padding-left:1.1rem;">${t.ids.map((id) => `<li>${esc(t.titles[id].title)} — ${fmtCOP(t.titles[id].price)}</li>`).join('')}</ul>
        <div class="iui-small">Subtotal ${fmtCOP(t.subtotal)}${t.bundle ? ` · Descuento paquete −${fmtCOP(t.discount)}` : ''}</div>
        <div><strong>Total antes de cupón: ${fmtCOP(t.total)}</strong></div>
        <p class="iui-xs iui-muted" style="margin:0.5rem 0 0;">Precios en COP. El total final se confirma en el checkout de Wompi. Acceso inmediato al confirmarse el pago. Vigencia de 12 meses por curso.</p>
      </div>

      <div class="iui-card">
        <span class="iui-badge iui-badge-primary" style="width:fit-content;">Pago seguro con Wompi</span>
        <h1 class="iui-h2" style="margin-top:0.25rem;">Datos para la compra y el acceso</h1>
        <p class="iui-small iui-muted">Si es su primera compra, al confirmarse el pago le enviaremos al correo un enlace para crear su contraseña. Si ya tiene cuenta, escriba su contraseña actual.</p>
        <div id="checkout-error" class="iui-alert iui-alert-danger" style="display:none;"></div>
        <form id="checkout-form">
          <div class="iui-field"><label class="iui-label" for="co-name">Nombre completo *</label>
            <input class="iui-input" id="co-name" name="fullName" required value="${esc(prefill.fullName || '')}" /></div>
          <div class="iui-field"><label class="iui-label" for="co-doc">Cédula / Documento *</label>
            <input class="iui-input" id="co-doc" name="documentId" required value="${esc(prefill.documentId || '')}" /></div>
          <div class="iui-field"><label class="iui-label" for="co-email">Correo electrónico *</label>
            <input class="iui-input" id="co-email" name="email" type="email" required value="${esc(prefill.email || '')}" /></div>
          <div class="iui-field"><label class="iui-label" for="co-company">Empresa (opcional)</label>
            <input class="iui-input" id="co-company" name="company" value="${esc(prefill.company || '')}" /></div>
          <div class="iui-field"><label class="iui-label" for="co-pass">Contraseña (solo si ya tiene cuenta)</label>
            <input class="iui-input" id="co-pass" name="password" type="password" autocomplete="current-password" placeholder="Déjela vacía si es su primera compra" />
            <p class="iui-xs iui-muted" style="margin:0.35rem 0 0;">Si es su primera compra, le enviaremos un enlace por correo para crear su contraseña.</p></div>
          <div class="iui-field"><label class="iui-label" for="co-code">Cupón de descuento (opcional)</label>
            <div style="display:flex; gap:0.5rem;">
              <input class="iui-input" id="co-code" name="discountCode" style="text-transform:uppercase;" />
              <button type="button" class="iui-btn" id="btn-coupon">Aplicar</button>
            </div>
            <p class="iui-xs" id="co-preview" style="margin:0.35rem 0 0;"></p></div>

          <label class="iui-checkbox-row" style="margin-bottom:0.5rem;">
            <input type="checkbox" name="privacy" required />
            <span class="iui-xs">Autorizo el tratamiento de mis datos según la <a href="#legal-privacy" target="_blank" rel="noopener">Política de Privacidad (Ley 1581/2012)</a>.</span>
          </label>
          <label class="iui-checkbox-row" style="margin-bottom:1rem;">
            <input type="checkbox" name="terms" required />
            <span class="iui-xs">Acepto los <a href="#legal-terms" target="_blank" rel="noopener">Términos de Uso</a>, el <a href="#legal-refunds" target="_blank" rel="noopener">alcance formativo y la política de devoluciones</a>.</span>
          </label>
          <button type="submit" class="iui-btn iui-btn-primary" id="btn-pay" style="width:100%;">Continuar al pago seguro</button>
        </form>
        <p class="iui-xs iui-muted" style="margin-top:0.75rem;">El pago se procesa en el checkout de Wompi. Esta plataforma no recibe ni guarda datos de tarjetas.</p>
      </div>
    </section>`;

  document.getElementById('btn-coupon')?.addEventListener('click', async () => {
    const out = document.getElementById('co-preview');
    const code = document.getElementById('co-code').value.trim().toUpperCase();
    out.textContent = '';
    if (!code) return;
    try {
      const r = await API.previewCoupon({ items: cart.items, bundleId: cart.bundleId, discountCode: code });
      out.textContent = r.discountApplied
        ? `Cupón aplicado. Total estimado: ${fmtCOP(r.amount)}. El total final se confirma en Wompi.`
        : 'Este cupón no aplica a su compra.';
    } catch (ex) {
      out.textContent = ex.message;
    }
  });

  document.getElementById('checkout-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errBox = document.getElementById('checkout-error');
    const btn = document.getElementById('btn-pay');
    errBox.style.display = 'none';
    btn.disabled = true;
    btn.innerHTML = `<span class="iui-spinner"></span> Preparando pago…`;

    const fd = new FormData(e.target);
    try {
      const order = await API.createOrder({
        items: cart.items,
        bundleId: cart.bundleId,
        discountCode: String(fd.get('discountCode') || '').trim().toUpperCase(),
        consent: { privacyPolicy: fd.get('privacy') === 'on', termsOfUse: fd.get('terms') === 'on' },
        buyer: {
          fullName: fd.get('fullName'),
          documentId: fd.get('documentId'),
          email: String(fd.get('email')).trim().toLowerCase(),
          company: fd.get('company'),
          password: fd.get('password')
        }
      });
      localStorage.setItem(PENDING_KEY, JSON.stringify({ reference: order.reference, at: Date.now() }));
      window.location.href = buildWompiCheckoutUrl(order);
    } catch (err) {
      errBox.textContent = err.message;
      errBox.style.display = 'block';
      btn.disabled = false;
      btn.textContent = 'Continuar al pago seguro';
    }
  });
}

// ----- Retorno desde Wompi -----
export async function renderPaymentReturn() {
  // Primero se lee el id de la transacción; luego se limpia la URL
  const txId = readTransactionIdFromUrl();
  history.replaceState(null, '', window.location.pathname + window.location.hash);
  root().innerHTML = `<div class="iui-card" id="pay-status"><span class="iui-spinner"></span> Verificando su pago con Wompi…</div>`;

  if (!txId) return emptyState('No recibimos la referencia del pago. Revise "Mis compras" en unos minutos.', '#orders', 'Mis compras');
  localStorage.setItem(PENDING_TX_KEY, txId);
  return checkPayment(txId, 0);
}

async function checkPayment(txId, attempt) {
  clearTimeout(pollTimer); // una sola cadena de sondeo a la vez
  // Si el alumno ya salió de la pantalla, no se redibuja nada
  if (!document.getElementById('pay-status')) return;
  const res = await API.confirmPayment(txId);

  if (!res || !res.ok) {
    return paymentView(
      `<div class="iui-alert iui-alert-danger">No pudimos confirmar el pago ahora. ${esc(res?.error || '')}</div>
       <button class="iui-btn iui-btn-primary" id="btn-retry-pay">Reintentar verificación</button>`,
      txId
    );
  }

  if (res.status === 'PAGADO') {
    localStorage.removeItem(PENDING_KEY);
    localStorage.removeItem(PENDING_TX_KEY);
    localStorage.removeItem(CART_KEY);
    await API.refreshSession();
    const logged = !!API.getSession();
    return paymentView(`
      <span class="iui-badge iui-badge-success" style="width:fit-content;">Pago aprobado</span>
      <h1 class="iui-h2" style="margin-top:0.25rem;">¡Compra realizada!</h1>
      <p>Sus cursos ya están habilitados. Le enviamos la confirmación a su correo.</p>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:1rem;">
        <a href="${logged ? '#catalog' : '#login'}" class="iui-btn iui-btn-primary">${logged ? 'Ir a mis cursos' : 'Ingresar para empezar'}</a>
        <a href="#orders" class="iui-btn iui-btn-secondary">Ver mis compras</a>
      </div>`);
  }

  if (res.status === 'PENDIENTE' && attempt < MAX_POLLS) {
    pollTimer = setTimeout(() => checkPayment(txId, attempt + 1), 10000);
    return paymentView(`
      <span class="iui-badge iui-badge-warning" style="width:fit-content;">Pago en proceso</span>
      <h1 class="iui-h2" style="margin-top:0.25rem;">Estamos esperando la confirmación de Wompi</h1>
      <p>Esta pantalla se actualiza sola. Sus cursos se habilitarán en cuanto el pago sea aprobado. No vuelva a pagar.</p>
      <button class="iui-btn iui-btn-secondary" id="btn-retry-pay">Actualizar estado ahora</button>`, txId);
  }

  if (res.status === 'PENDIENTE') {
    return paymentView(`
      <span class="iui-badge iui-badge-warning" style="width:fit-content;">Pago pendiente</span>
      <p>Todavía no recibimos la confirmación. Revise "Mis compras" en unos minutos. No vuelva a pagar mientras esté pendiente.</p>
      <a href="#orders" class="iui-btn iui-btn-primary">Ver mis compras</a>`, txId);
  }

  if (res.status === 'REVISAR') {
    return paymentView(`
      <span class="iui-badge iui-badge-danger" style="width:fit-content;">En revisión</span>
      <p>El monto recibido no coincide con su pedido. No pague de nuevo: el equipo revisará el caso y le escribirá a su correo.</p>
      <a href="#orders" class="iui-btn iui-btn-secondary">Ver mis compras</a>`);
  }

  return paymentView(`
    <span class="iui-badge iui-badge-danger" style="width:fit-content;">No aprobado</span>
    <p>El pago no fue aprobado. Puede intentar de nuevo con otro medio de pago.</p>
    <a href="#store" class="iui-btn iui-btn-primary">Volver a la tienda</a>`);
}

function paymentView(bodyHtml, txId) {
  root().innerHTML = `<div class="iui-card" id="pay-status" style="max-width:620px; margin:0 auto;">${bodyHtml}</div>`;
  document.getElementById('btn-retry-pay')?.addEventListener('click', () => {
    if (txId) checkPayment(txId, 0);
  });
}

// ----- Mis compras -----
export async function renderOrders() {
  const session = API.getSession();
  if (!session || session.role === 'admin') return emptyState('Inicie sesión para ver sus compras.', '#login', 'Ingresar');
  root().innerHTML = LOADING;
  const orders = await API.getMyOrders();
  const pendingTx = localStorage.getItem(PENDING_TX_KEY);
  const badge = {
    PAGADO: 'iui-badge-success',
    PENDIENTE: 'iui-badge-warning',
    RECHAZADO: 'iui-badge-danger',
    REVISAR: 'iui-badge-danger',
    ANULADO: 'iui-badge-danger'
  };
  const label = {
    PAGADO: 'Pagado',
    PENDIENTE: 'Pendiente',
    RECHAZADO: 'Rechazado',
    REVISAR: 'En revisión',
    ANULADO: 'Anulado / reembolsado'
  };

  root().innerHTML = `
    <section>
      <h1 class="iui-h1">Mis compras</h1>
      ${
        orders.length === 0
          ? `<div class="iui-empty">Aún no tiene compras. <br/><a href="#store" class="iui-btn iui-btn-primary" style="margin-top:1rem;">Ir a la tienda</a></div>`
          : `<div class="iui-grid">${orders
              .map(
                (o) => `
              <article class="iui-card">
                <div style="display:flex; justify-content:space-between; gap:0.5rem;">
                  <strong>${esc(o.orderId)}</strong>
                  <span class="iui-badge ${badge[o.status] || 'iui-badge-neutral'}">${esc(label[o.status] || o.status)}</span>
                </div>
                <div class="iui-small iui-muted">${fmtDate(o.createdAt)} · ${fmtCOP(o.amount)}</div>
                <ul class="iui-small" style="margin:0; padding-left:1.1rem;">${o.items
                  .map((id) => `<li>${esc(staticInfo[id]?.title || id)}</li>`)
                  .join('')}</ul>
                ${o.status === 'PENDIENTE' && pendingTx ? `<button class="iui-btn iui-btn-secondary iui-btn-sm btn-check-pay">Verificar pago</button>` : ''}
              </article>`
              )
              .join('')}</div>`
      }
    </section>`;

  root().querySelectorAll('.btn-check-pay').forEach((btn) =>
    btn.addEventListener('click', async () => {
      await API.confirmPayment(pendingTx);
      renderOrders();
    })
  );
}
