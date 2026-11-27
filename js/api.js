import { APP_CONFIG } from './config.js';
import { Telemetry } from './telemetry.js';
import { COURSES } from './catalog.js';

// Sesión y progreso local. Nunca se guardan contraseñas, respuestas ni constancias como fuente de verdad.
const KEYS = {
  SESSION: 'sst_session_v1',
  PROGRESS: 'sst_progress_v1'
};

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeJSON(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// Envía una acción al backend. Adjunta el token de sesión. Devuelve null si no hay conexión.
async function callAppsScript(action, payload = {}) {
  if (!APP_CONFIG.APPS_SCRIPT_URL) return null;
  const session = readJSON(KEYS.SESSION, null);
  try {
    const res = await fetch(APP_CONFIG.APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, payload, token: session?.token || null })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    // Un error de autorización de una acción de alumno no debe cerrar la sesión del administrador
    if (data && data.code === 'AUTH' && session && session.role !== 'admin') {
      localStorage.removeItem(KEYS.SESSION);
      window.dispatchEvent(new CustomEvent('sst:session-expired', { detail: data.error }));
    }
    return data;
  } catch (err) {
    Telemetry.capture('api.appsScript', err.message, { action });
    return null;
  }
}

// Respuesta de una acción que necesita servidor. Lanza error legible si falla.
async function requireServer(action, payload) {
  const remote = await callAppsScript(action, payload);
  if (!remote) throw new Error('No hay conexión con el servidor. Intente de nuevo en unos minutos.');
  if (!remote.ok) throw new Error(remote.error || 'La operación no se pudo completar.');
  return remote;
}

const isAdminEmail = (email) => email === APP_CONFIG.adminAccount.email.toLowerCase();

export const API = {
  getSession() {
    return readJSON(KEYS.SESSION, null);
  },

  async login({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();

    if (APP_CONFIG.APPS_SCRIPT_URL) {
      // El servidor decide si es administrador (una sola fuente: la propiedad ADMIN_EMAIL)
      const action = 'login';
      const remote = await callAppsScript(action, { email: normalizedEmail, password });
      if (!remote) throw new Error('No hay conexión con el servidor. Intente de nuevo en unos minutos.');
      if (!remote.ok) throw new Error(remote.error || 'Correo o contraseña incorrectos. Solicite sus credenciales al Administrador SST.');
      const session = { ...remote.user, token: remote.token };
      writeJSON(KEYS.SESSION, session);
      return session;
    }

    // Modo demostración: administrador o estudiante demo (solo si tienen clave configurada)
    if (isAdminEmail(normalizedEmail) && APP_CONFIG.DEMO_ADMIN_PASSWORD && password === APP_CONFIG.DEMO_ADMIN_PASSWORD) {
      const adminSession = {
        id: 'ADMIN-01',
        fullName: APP_CONFIG.adminAccount.fullName,
        documentId: 'ADMIN',
        email: normalizedEmail,
        company: APP_CONFIG.platformName,
        role: 'admin',
        allowedCourses: ['*'],
        token: null
      };
      writeJSON(KEYS.SESSION, adminSession);
      return adminSession;
    }
    if (
      APP_CONFIG.studentDemoAccount &&
      normalizedEmail === APP_CONFIG.studentDemoAccount.email.toLowerCase() &&
      APP_CONFIG.DEMO_STUDENT_PASSWORD &&
      password === APP_CONFIG.DEMO_STUDENT_PASSWORD
    ) {
      const studentSession = {
        id: 'DEMO-EST-01',
        fullName: APP_CONFIG.studentDemoAccount.fullName,
        documentId: '1000000001',
        email: normalizedEmail,
        company: 'Empresa Demo',
        role: 'student',
        allowedCourses: ['*'],
        token: null
      };
      writeJSON(KEYS.SESSION, studentSession);
      return studentSession;
    }
    throw new Error('Modo demostración: el ingreso requiere el servidor. Configure APPS_SCRIPT_URL.');
  },

  async logout() {
    await callAppsScript('logout');
    localStorage.removeItem(KEYS.SESSION);
  },

  async refreshSession() {
    const session = this.getSession();
    if (!session || session.role === 'admin') return session;
    const remote = await callAppsScript('getMyCourses');
    if (remote && remote.ok) {
      const updated = { ...session, allowedCourses: remote.user.allowedCourses };
      writeJSON(KEYS.SESSION, updated);
      return updated;
    }
    return session;
  },

  // ----- Administrador -----
  async adminListUsers() {
    const remote = await requireServer('listUsers');
    return remote.users;
  },

  // Devuelve { id, created }. La contraseña solo viaja cuando es un usuario nuevo.
  async adminRegisterUser(data) {
    return requireServer('registerUser', data);
  },

  async adminResetPassword(userId, password) {
    return requireServer('resetPassword', { userId, password });
  },

  async adminUpdateCourses(userId, allowedCourses) {
    return requireServer('updateUserCourses', { userId, allowedCourses });
  },

  async adminStudentWork(userId, courseId) {
    return requireServer('getStudentWork', { userId, courseId });
  },

  async adminResetAttempts(userId, courseId) {
    return requireServer('resetAttempts', { userId, courseId });
  },

  async sendCredentialsEmail({ email, fullName, courseTitles }) {
    const remote = await callAppsScript('sendCredentialsEmail', {
      email,
      fullName,
      courseTitles,
      platformUrl: window.location.origin + window.location.pathname
    });
    return !!(remote && remote.ok);
  },

  // Módulos leídos según el servidor (null si no hay conexión)
  async fetchProgress(courseId) {
    const remote = await callAppsScript('getProgress', { courseId });
    return remote && remote.ok ? remote.modulesRead : null;
  },

  // Estado completo del curso según el servidor (o progreso local en modo demo)
  async courseStatus(courseId) {
    if (!APP_CONFIG.APPS_SCRIPT_URL) {
      const s = this.getSession();
      const cur = s ? (this.getProgress(s.id)[courseId] || {}) : {};
      return {
        ok: true,
        modulesRead: cur.modulesRead || [],
        checked: cur.checked || [],
        works: cur.works || {},
        exam: { attemptsUsed: 0, maxAttempts: 3, passed: false }
      };
    }
    const remote = await callAppsScript('getProgress', { courseId });
    return remote && remote.ok ? remote : null;
  },

  // Avance de todos los cursos del alumno (incluye los vencidos, para renovarlos)
  async dashboard() {
    if (!APP_CONFIG.APPS_SCRIPT_URL) {
      const s = this.getSession();
      const prog = s ? this.getProgress(s.id) : {};
      return COURSES.map((c) => {
        const cur = prog[c.id] || {};
        return {
          id: c.id,
          active: true,
          modulesRead: cur.modulesRead || [],
          checked: cur.checked || [],
          works: cur.works || {},
          exam: { attemptsUsed: 0, maxAttempts: 3, passed: false }
        };
      });
    }
    const remote = await callAppsScript('dashboard');
    return remote && remote.ok ? remote.courses : null;
  },

  // Recuperación: la respuesta es siempre genérica (no revela si el correo existe)
  async requestSetup(email) {
    const remote = await callAppsScript('requestSetup', { email: String(email || '').trim().toLowerCase() });
    if (!remote) throw new Error('No hay conexión con el servidor. Intente de nuevo en unos minutos.');
    return remote;
  },

  async setPassword(token, password) {
    const remote = await callAppsScript('setPassword', { token, password });
    if (!remote) throw new Error('No hay conexión con el servidor. Intente de nuevo en unos minutos.');
    if (!remote.ok) throw new Error(remote.error || 'El enlace no es válido o ya venció. Solicite uno nuevo.');
    return remote;
  },

  async previewCoupon({ items, bundleId, discountCode }) {
    const remote = await callAppsScript('previewCoupon', { items, bundleId, discountCode });
    if (!remote) throw new Error('La validación de cupones requiere conexión con el servidor.');
    if (!remote.ok) throw new Error(remote.error || 'Cupón no válido.');
    return remote;
  },

  // ----- Progreso local (navegación y comodidad). No decide aprobación. -----
  getProgress(userId) {
    const all = readJSON(KEYS.PROGRESS, {});
    return all[userId] || {};
  },

  saveLocalProgress(userId, courseId, data) {
    const all = readJSON(KEYS.PROGRESS, {});
    all[userId] = all[userId] || {};
    all[userId][courseId] = { ...(all[userId][courseId] || {}), ...data, updatedAt: new Date().toISOString() };
    writeJSON(KEYS.PROGRESS, all);
    return all[userId][courseId];
  },

  // Guarda hitos de navegación en el servidor (o local en modo demo)
  async syncProgress(courseId, data) {
    if (!APP_CONFIG.APPS_SCRIPT_URL) {
      const s = this.getSession();
      if (s) this.saveLocalProgress(s.id, courseId, data);
      return { ok: true };
    }
    return callAppsScript('saveProgress', { courseId, data });
  },

  // ----- Verificación de práctica y examen (el servidor califica; en demo simula práctica) -----
  async checkAnswer({ courseId, kind, index, choice }) {
    if (!APP_CONFIG.APPS_SCRIPT_URL) {
      const s = this.getSession();
      const cur = s ? (this.getProgress(s.id)[courseId] || {}) : {};
      const checked = [...new Set([...(cur.checked || []), `${kind}:${index}`])];
      if (s) this.saveLocalProgress(s.id, courseId, { checked });
      return { ok: true, correct: true, feedback: 'Respuesta registrada en modo demostración.' };
    }
    return requireServer('checkAnswer', { courseId, kind, index, choice });
  },

  // Talleres aplicados y proyecto final (en demo guarda localmente)
  async saveWork(payload) {
    if (!APP_CONFIG.APPS_SCRIPT_URL) {
      const s = this.getSession();
      const cur = s ? (this.getProgress(s.id)[payload.courseId] || {}) : {};
      const works = { ...(cur.works || {}) };
      const key = payload.kind === 'project' ? 'project' : `workshop:${payload.index}`;
      works[key] = { answers: payload.answers, rubric: payload.rubric || [], savedAt: new Date().toISOString() };
      if (s) this.saveLocalProgress(s.id, payload.courseId, { works });
      return { ok: true };
    }
    return requireServer('saveWork', payload);
  },

  async getExamOrder(courseId) {
    return requireServer('getExamOrder', { courseId });
  },

  async submitExam(courseId, answers) {
    return requireServer('submitExam', { courseId, answers });
  },

  // Constancia emitida por el servidor (idempotente)
  async issueCertificate(courseId) {
    const remote = await requireServer('issueCertificate', { courseId });
    return remote.certificate;
  },

  async getMyCertificates() {
    const remote = await callAppsScript('myCertificates');
    return remote && remote.ok ? remote.certificates : [];
  },

  async verifyCertificate(certCode) {
    const remote = await callAppsScript('verifyCertificate', { certCode });
    return remote && remote.ok ? remote.certificate : null;
  },

  // ----- Consentimientos -----
  async saveConsent(consent) {
    return callAppsScript('saveConsent', { consent: { ...consent, version: APP_CONFIG.consentVersion } });
  },

  // ----- Tienda y pagos -----
  async getCatalog() {
    const remote = await callAppsScript('getCatalog');
    return remote && remote.ok ? remote : null;
  },

  async createOrder(payload) {
    return requireServer('createOrder', payload);
  },

  async confirmPayment(transactionId) {
    return callAppsScript('confirmPayment', { transactionId });
  },

  async getMyOrders() {
    const remote = await callAppsScript('myOrders');
    return remote && remote.ok ? remote.orders : [];
  }
};
