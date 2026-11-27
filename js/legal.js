import { APP_CONFIG } from './config.js';
import { API } from './api.js';
import { esc } from './dom.js';

const root = () => document.getElementById('app-root');
const R = APP_CONFIG.responsable; // Datos del responsable: se configuran antes de publicar

const page = (title, body) => `
  <article class="iui-card" style="max-width:820px; margin:0 auto; line-height:1.55;">
    <h1 class="iui-h2">${esc(title)}</h1>
    ${APP_CONFIG.legalReviewed ? '' : '<div class="iui-alert iui-alert-warning" style="margin-bottom:1rem;"><strong>Borrador.</strong> Este texto está pendiente de revisión jurídica.</div>'}
    ${body}
    <p class="iui-xs iui-muted" style="margin-top:1.5rem;">Versión de consentimiento ${esc(APP_CONFIG.consentVersion)}. Última actualización: ${esc(APP_CONFIG.legalUpdated || '[CONFIGURAR FECHA]')}.</p>
  </article>`;

const responsableBlock = `
  <ul>
    <li><strong>Razón social:</strong> ${esc(R.razonSocial)}</li>
    <li><strong>NIT:</strong> ${esc(R.nit)}</li>
    <li><strong>Domicilio:</strong> ${esc(R.domicilio)}</li>
    <li><strong>Correo para solicitudes de datos (ARCO):</strong> ${esc(R.correo)}</li>
    <li><strong>Teléfono:</strong> ${esc(R.telefono)}</li>
  </ul>`;

const PAGES = {
  'legal-privacy': () =>
    page(
      'Política de Privacidad y Tratamiento de Datos',
      `<h2 class="iui-h3">1. Responsable del tratamiento</h2>
       ${responsableBlock}
       <h2 class="iui-h3">2. Datos que tratamos</h2>
       <p>Nombre, documento de identidad, correo electrónico, empresa (opcional), cursos comprados, progreso, respuestas de evaluación, constancias emitidas y registros técnicos de acceso.</p>
       <p>No almacenamos datos de tarjetas ni de cuentas bancarias. Los pagos los procesa Wompi (Bancolombia).</p>
       <h2 class="iui-h3">3. Finalidades</h2>
       <p>Gestionar la compra y el acceso a los cursos, emitir constancias verificables, atender PQR y soporte, prevenir fraude y cumplir obligaciones legales. El envío de comunicaciones comerciales solo se hace si usted lo autoriza por separado.</p>
       <h2 class="iui-h3">4. Encargados del tratamiento</h2>
       <p>Wompi (procesamiento de pagos) y Google (alojamiento de la base de datos y del correo transaccional). Ambos tratan los datos siguiendo nuestras instrucciones.</p>
        <h2 class="iui-h3">5. Sus derechos (Ley 1581 de 2012)</h2>
       <p>Usted puede conocer, actualizar, rectificar y suprimir sus datos, revocar la autorización y presentar quejas ante la Superintendencia de Industria y Comercio. Las solicitudes se hacen al correo indicado arriba. Las consultas se responden en máximo 10 días hábiles (art. 14 de la Ley 1581) y los reclamos en máximo 15 días hábiles contados a partir del día siguiente a su recibo, prorrogables hasta por 8 días hábiles adicionales informando los motivos de la demora (art. 15 de la Ley 1581).</p>
       <h2 class="iui-h3">6. Seguridad y conservación</h2>
       <p>Las contraseñas se guardan cifradas (hash con sal), las respuestas de evaluación se califican en el servidor y los datos se conservan mientras dure la relación y el plazo legal aplicable.</p>
       <h2 class="iui-h3">7. Vigencia</h2>
       <p>Esta política rige desde la fecha indicada al pie. Cualquier cambio sustancial se comunicará a los titulares.</p>`
    ),

  'legal-terms': () =>
    page(
      'Términos de Uso',
      `<h2 class="iui-h3">1. Objeto</h2>
       <p>Estos términos regulan la compra y el uso de cursos de formación en Seguridad y Salud en el Trabajo ofrecidos por ${esc(R.razonSocial)}.</p>
       <h2 class="iui-h3">2. Naturaleza de la formación</h2>
       <p>Los cursos son formación teórica complementaria y de sensibilización. <strong>No sustituyen</strong> la capacitación práctica en sitio, el entrenamiento certificado obligatorio, las evaluaciones médicas ni los permisos de trabajo exigidos por la empresa o la norma aplicable. Cada curso indica en su ficha el alcance normativo y su límite.</p>
       <h2 class="iui-h3">3. Constancias</h2>
       <p>La constancia se emite exclusivamente a quien aprueba la evaluación con al menos el puntaje mínimo y tiene el curso habilitado. Acredita formación teórica virtual y su aceptación frente a terceros depende de la empresa contratante y de la normatividad aplicable al riesgo específico.</p>
       <h2 class="iui-h3">4. Uso de la cuenta</h2>
       <p>La cuenta es personal. Las preguntas de evaluación y los escenarios son de uso individual; queda prohibido compartirlos, reproducirlos o usar herramientas para automatizar las respuestas.</p>
       <h2 class="iui-h3">5. Precios y pagos</h2>
       <p>Los precios están en pesos colombianos e incluyen IVA cuando aplique. El pago se realiza en el checkout de Wompi. El acceso se habilita al confirmarse la transacción. Cada curso tiene una vigencia de 12 meses (365 días) contados desde la compra o la asignación; vencido el plazo, el acceso se suspende y puede renovarse.</p>
       <h2 class="iui-h3">6. Derecho de retracto y devoluciones</h2>
       <p>De conformidad con el artículo 47 de la Ley 1480 de 2011 (Estatuto del Consumidor), el comprador podrá ejercer el derecho de retracto dentro de los cinco (5) días hábiles siguientes a la compra, siempre que no haya iniciado la ejecución del curso virtual. Consulte el detalle completo en la <a href="#legal-refunds">Política de Devoluciones</a>.</p>
       <h2 class="iui-h3">7. Propiedad intelectual</h2>
       <p>Los contenidos son propiedad de ${esc(R.razonSocial)} y se licencian solo para uso personal del comprador.</p>
       <h2 class="iui-h3">8. Ley aplicable</h2>
       <p>Ley colombiana. Las PQR se atienden en el correo ${esc(R.correo)}.</p>`
    ),

  'legal-refunds': () =>
    page(
      'Política de Devoluciones y Alcance Formativo',
      `<h2 class="iui-h3">Alcance formativo</h2>
       <p>Cada curso describe su norma de referencia, su duración y su límite. Un curso de formación teórica no habilita por sí solo a realizar tareas de alto riesgo: en ese caso la empresa debe cerrar la práctica en sitio.</p>
       <h2 class="iui-h3">Devoluciones y retracto</h2>
       <p>Conforme al artículo 47 de la Ley 1480 de 2011, usted cuenta con cinco (5) días hábiles desde la fecha de compra para ejercer el derecho de retracto, siempre que el curso no haya sido iniciado. Para solicitarlo, escriba a ${esc(R.correo)} indicando su nombre, documento y referencia de pago. La devolución del dinero se realizará en un plazo máximo de treinta (30) días calendario.</p>
       <h2 class="iui-h3">Pagos anulados o rechazados</h2>
       <p>Si una transacción se anula o se reembolsa, los cursos asociados se retiran de la cuenta. Si un curso también fue asignado por la empresa, se mantiene el acceso asignado.</p>
       <h2 class="iui-h3">Garantía</h2>
       <p>Durante los 12 meses de vigencia del curso damos soporte ante fallas técnicas de la plataforma y garantizamos la emisión y la verificación en línea de la constancia una vez aprobada la evaluación. Si una falla atribuible a la plataforma le impide avanzar, extendemos la vigencia del curso por el tiempo afectado.</p>
       <h2 class="iui-h3">PQR</h2>
       <p>Peticiones, quejas y reclamos: ${esc(R.correo)} · ${esc(R.telefono)}.</p>`
    ),

  'legal-ip': () =>
    page(
      'Propiedad Intelectual',
      `<p>Los textos, diapositivas, preguntas, escenarios, diseño y código de la plataforma son propiedad de ${esc(R.razonSocial)}. El comprador recibe una licencia personal, no exclusiva e intransferible para su propio aprendizaje.</p>
       <p>Queda prohibido copiar, redistribuir, revender o usar herramientas automáticas para extraer el contenido o las respuestas.</p>`
    ),

  'legal-security': () =>
    page(
      'Seguridad y Permisos',
      `<h2 class="iui-h3">Protección de la cuenta</h2>
       <p>Las contraseñas se guardan con hash y sal. Las sesiones expiran y se pueden cerrar desde la plataforma. Después de 5 intentos fallidos se bloquea el acceso durante 15 minutos.</p>
       <h2 class="iui-h3">Evaluaciones</h2>
       <p>Las respuestas correctas se califican en el servidor y nunca se envían al navegador. Las constancias solo se emiten a quien aprueba.</p>
       <h2 class="iui-h3">Permisos del navegador</h2>
       <p>La plataforma no pide permisos de cámara, micrófono ni ubicación. El almacenamiento local guarda solo la sesión y el progreso.</p>`
    ),

  'legal-consent': () =>
    page(
      'Registro de autorizaciones',
      `<p>Su autorización de tratamiento de datos y de aceptación de términos queda registrada en el servidor con fecha, versión del texto y lo que aceptó.</p>
       <form id="consent-form" class="iui-form">
         <label class="iui-checkbox-row"><input type="checkbox" name="privacyPolicy" /> <span>Autorizo el tratamiento de mis datos según la Política de Privacidad.</span></label>
         <label class="iui-checkbox-row"><input type="checkbox" name="termsOfUse" /> <span>Acepto los Términos de Uso y la política de devoluciones.</span></label>
         <label class="iui-checkbox-row"><input type="checkbox" name="marketing" /> <span>Opcional: quiero recibir comunicaciones comerciales.</span></label>
         <button class="iui-btn iui-btn-primary" type="submit">Guardar mis autorizaciones</button>
         <div id="consent-status" class="iui-small iui-muted"></div>
       </form>`
    )
};

export function renderLegal(route) {
  const make = PAGES[route];
  if (!make) {
    root().innerHTML = `<div class="iui-empty">Documento no encontrado.</div>`;
    return;
  }
  root().innerHTML = make();

  const form = document.getElementById('consent-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const status = document.getElementById('consent-status');
    // Las casillas de privacidad y términos no vienen marcadas: solo se envía lo que el usuario marcó
    const consent = {
      privacyPolicy: fd.get('privacyPolicy') === 'on',
      termsOfUse: fd.get('termsOfUse') === 'on',
      marketing: fd.get('marketing') === 'on'
    };
    if (!consent.privacyPolicy || !consent.termsOfUse) {
      status.textContent = 'Para continuar debe aceptar la política de privacidad y los términos.';
      return;
    }
    const res = await API.saveConsent(consent);
    status.textContent = res && res.ok ? 'Autorizaciones guardadas.' : 'No pudimos guardar sus autorizaciones. Intente más tarde.';
  });
}
