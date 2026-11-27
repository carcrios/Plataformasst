// Utilidades de presentación. Todo dato que viene del servidor o de la URL pasa por esc() antes de entrar al HTML.
export const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const fmtCOP = (n) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(Number(n) || 0);

export const fmtDate = (v) => {
  const d = new Date(v);
  return isNaN(d) ? '' : d.toLocaleDateString('es-CO');
};

// Contenido de los cursos (generado desde content-src). Solo se permiten etiquetas simples SIN atributos:
// se escapa todo y luego se restauran p, strong, em, ul, ol, li, br, h3 y h4. No hay forma de inyectar scripts ni enlaces.
const RICH_TAGS = /&lt;(\/?)(p|strong|em|ul|ol|li|br|h3|h4)\s*\/?&gt;/g;
export const richText = (html) => esc(html).replace(RICH_TAGS, '<$1$2>');

// Palabras visibles de un texto con HTML simple
export const wordCount = (html) => String(html || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

// Tiempo mínimo de lectura de un módulo: 180 palabras por minuto, entre 30 segundos y 6 minutos
export const readSeconds = (html) => Math.min(360, Math.max(30, Math.round(wordCount(html) / 3)));

// Quita la intensidad del título de un módulo, ej. "1. Química del fuego (2h)" -> "Química del fuego"
export const cleanTitle = (t) => String(t || '').replace(/^\s*\d+\.\s*/, '').replace(/\s*\(\s*\d+(?:[.,]\d+)?\s*h\s*\)\s*$/i, '');

export const root = () => document.getElementById('app-root');

export function toast(message, kind = 'info') {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;
  const el = document.createElement('div');
  el.className = `iui-toast iui-toast-${kind}`;
  el.setAttribute('role', kind === 'danger' ? 'alert' : 'status');
  el.textContent = message;
  stack.appendChild(el);
  setTimeout(() => el.remove(), 4500);
}

// Intensidad horaria en formato colombiano: 1.5 -> "1,5 horas"; 8 -> "8 horas"; 1 -> "1 hora"
export const fmtHours = (h, short = false) => {
  const n = Number(h) || 0;
  const s = n.toLocaleString('es-CO', { maximumFractionDigits: 1 });
  return short ? `${s} h` : `${s} ${n === 1 ? 'hora' : 'horas'}`;
};
