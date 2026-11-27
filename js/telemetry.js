import { APP_CONFIG } from './config.js';

// Monitoreo técnico solo con consentimiento expreso (opt-in). Por defecto no se registra nada.
const LOG_KEY = 'sst_telemetry_logs_v1';
const OPT_KEY = 'sst_telemetry_optin_v1';

export const Telemetry = {
  init() {
    window.addEventListener('error', (event) => {
      this.capture('window.error', event.message || 'Error desconocido', { source: event.filename, line: event.lineno });
    });
    window.addEventListener('unhandledrejection', (event) => {
      this.capture('unhandledrejection', String(event.reason || 'Promesa rechazada'));
    });
  },

  isOptedIn() {
    return localStorage.getItem(OPT_KEY) === '1';
  },

  setOptIn(value) {
    if (value) localStorage.setItem(OPT_KEY, '1');
    else {
      localStorage.removeItem(OPT_KEY);
      this.clearLogs();
    }
  },

  capture(type, message, meta = {}) {
    if (!this.isOptedIn()) return null;
    const entry = {
      id: 'ERR-' + Date.now().toString(36).toUpperCase(),
      timestamp: new Date().toISOString(),
      type,
      message: String(message).slice(0, 500),
      meta: { ...meta }
    };
    const logs = this.getLogs();
    logs.unshift(entry);
    localStorage.setItem(LOG_KEY, JSON.stringify(logs.slice(0, 100)));

    if (APP_CONFIG.APPS_SCRIPT_URL) {
      fetch(APP_CONFIG.APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'logError', payload: entry })
      }).catch(() => {});
    }
    return entry;
  },

  getLogs() {
    try {
      return JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    } catch {
      return [];
    }
  },

  clearLogs() {
    localStorage.removeItem(LOG_KEY);
  }
};
