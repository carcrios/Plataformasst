export const APP_CONFIG = {
  platformName: 'Academia SST Colombia',
  version: '3.0.0',

  // URL de la Web App de Apps Script (backend/Code.gs). Vacía = modo demostración:
  // se ve el catálogo, pero no hay tienda, examen ni constancias.
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyMNbX0Acu5s8mphx9tp9cYRbIbg-U638iBMmgtQe1GytVJEhWpjkhKc-MuybZyKiwa/exec',

  // Responsable del tratamiento de datos (Ley 1581 de 2012). COMPLETAR antes de vender.
  responsable: {
    razonSocial: '[CARLOS RIOS]',
    nit: '[1018455016]',
    domicilio: '[CALLE 123 FALSA]',
    correo: '[CARCRIOS@GMAIL.COM]',
    telefono: '[3237157915]'
  },

  // Versión de la Política de Privacidad y de los Términos. Subirla obliga a aceptar de nuevo.
  consentVersion: '2026-11',
  legalUpdated: '2026-11-26',

  // Número de WhatsApp para cotizaciones de empresas, con indicativo (ej. '573001234567').
  // Vacío = no se muestra el botón.
  WHATSAPP_NUMBER: '573237157915',

  // Póngalo en true solo cuando un abogado haya revisado la política de datos, los términos,
  // el retracto y la garantía. Mientras sea false, esas páginas muestran un aviso de borrador.
  legalReviewed: false,

  // Solo para pruebas locales sin servidor. Déjela vacía en producción.
  DEMO_ADMIN_PASSWORD: '',
  adminAccount: { email: 'admin@academiasst.co', fullName: 'Administrador SST' },

  legalScopeStatement:
    'Esta plataforma emite exclusivamente CONSTANCIAS DE CAPACITACIÓN / FORMACIÓN TEÓRICA indicando intensidad horaria, temario, fecha y datos del formador/licencia. Ningún curso en línea habilita por sí solo para ejecutar tareas de alto riesgo o tareas críticas sin evaluación práctica en sitio, aptitud médica ocupacional vigente, autorización del empleador y permiso de trabajo.'
};
