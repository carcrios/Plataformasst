export const APP_CONFIG = {
  platformName: 'Academia SST Colombia',
  version: '3.0.0',

  // URL de la Web App de Apps Script (backend/Code.gs). Vacía = modo demostración:
  // se ve el catálogo, pero no hay tienda, examen ni constancias.
  APPS_SCRIPT_URL: '',

  // Responsable del tratamiento de datos (Ley 1581 de 2012). COMPLETAR antes de vender.
  responsable: {
    razonSocial: '[CONFIGURAR razón social]',
    nit: '[CONFIGURAR NIT]',
    domicilio: '[CONFIGURAR dirección]',
    correo: '[CONFIGURAR correo de contacto]',
    telefono: '[CONFIGURAR teléfono]'
  },

  // Versión de la Política de Privacidad y de los Términos. Subirla obliga a aceptar de nuevo.
  consentVersion: '2026-11',
  legalUpdated: '2026-11-26',

  // Número de WhatsApp para cotizaciones de empresas, con indicativo (ej. '573001234567').
  // Vacío = no se muestra el botón.
  WHATSAPP_NUMBER: '',

  // Póngalo en true solo cuando un abogado haya revisado la política de datos, los términos,
  // el retracto y la garantía. Mientras sea false, esas páginas muestran un aviso de borrador.
  legalReviewed: false,

  // Solo para pruebas locales sin servidor. Déjelas vacías en producción.
  DEMO_ADMIN_PASSWORD: 'AdminDemo2026!',
  adminAccount: { email: 'admin@academiasst.co', fullName: 'Administrador SST' },
  DEMO_STUDENT_PASSWORD: 'EstudianteDemo2026!',
  studentDemoAccount: { email: 'estudiante@academiasst.co', fullName: 'Estudiante Demo' },

  legalScopeStatement:
    'Esta plataforma ofrece capacitación virtual teórica de educación informal (Decreto 1075 de 2015) de apoyo al SG-SST y emite CONSTANCIAS DE FORMACIÓN TEÓRICA con intensidad horaria, temario, fecha y datos del formador. No sustituye certificaciones obligatorias reguladas (Trabajo en Alturas Res. 4272/2021, Espacios Confinados Res. 0491/2020 ni curso 50/20 h SG-SST Res. 4927/2019), ni habilita por sí sola para ejecutar tareas de alto riesgo sin entrenamiento práctico en sitio, aptitud médica, autorización del empleador y permiso de trabajo.'
};
