/**
 * Genera los dos artefactos del contenido a partir de content-src/ (fuente privada):
 *
 *   web/js/catalog.js     → lo que el navegador puede ver: textos, módulos, escenarios y preguntas.
 *                           NO contiene respuestas correctas, retroalimentación ni banderas "correct".
 *   backend/Content.gs    → claves de respuesta, horas, normativa y textos legales. Solo vive en Apps Script.
 *
 * Uso:  node tools/build-content.mjs
 * Requiere Node 18+. Solo content-src/ y web/ se modifican; no edite web/js/catalog.js a mano.
 */
import { writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { COURSES as BASE_COURSES, LEGAL_CATEGORIES } from '../content-src/courses-data.js';
import { LOTO_AMPLIADO } from '../content-src/courses-loto.js';
import { PRACTICAS } from '../content-src/practicas.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const COURSE_IMAGES = {
  'observador-fuego': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80',
  'trabajo-caliente': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
  'seguridad-soldadura-corte': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80',
  'sustancias-quimicas': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
  'manejo-amoniaco': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
  'loto-bloqueo': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
  'aislamiento-energias-avanzado': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  'riesgo-electrico-no-electricistas': 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80',
  'aparejador-cargas': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
  andamiero: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80',
  'almacenamiento-apilamiento-cargas': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
  'herramientas-electricas': 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1000&q=80',
  'mecanica-basica': 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1000&q=80',
  'manipulacion-alimentos': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80'
};

const EXPANDED = { [LOTO_AMPLIADO.id]: LOTO_AMPLIADO };
const LEGACY = BASE_COURSES.map((c) => (EXPANDED[c.id] ? { ...c, ...EXPANDED[c.id] } : c));

// Cursos completos en content-src/cursos/<id>.js (export default). Cada uno REEMPLAZA por completo
// la versión anterior del mismo id (no se mezclan campos viejos) o se agrega como curso nuevo.
const cursosDir = resolve(root, 'content-src/cursos');
const FULL_COURSES = [];
for (const f of readdirSync(cursosDir).filter((x) => x.endsWith('.js')).sort()) {
  const mod = await import(pathToFileURL(resolve(cursosDir, f)).href);
  const c = mod.default;
  if (!c || !c.id || f !== c.id + '.js') throw new Error('content-src/cursos/' + f + ': el archivo debe llamarse <id>.js y exportar el curso por defecto');
  FULL_COURSES.push(c);
}
// Ampliación a 4 horas: content-src/ampliacion-4h/<id>.js (export default) agrega módulos, prácticas,
// escenarios y preguntas al final del curso base, y define los talleres (uno por módulo) y el proyecto final.
const ampDir = resolve(root, 'content-src/ampliacion-4h');
const AMPLIACION = {};
try {
  for (const f of readdirSync(ampDir).filter((x) => x.endsWith('.js')).sort()) {
    const mod = await import(pathToFileURL(resolve(ampDir, f)).href);
    AMPLIACION[f.replace(/\.js$/, '')] = mod.default;
  }
} catch (e) {
  if (e.code !== 'ENOENT') throw e;
}
function ampliar(c) {
  const a = AMPLIACION[c.id];
  if (!a) return c;
  const basePractices = c.practices || PRACTICAS[c.id] || [];
  const out = {
    ...c,
    hours: a.hours ?? c.hours,
    summary: a.summary || c.summary,
    modules: [...c.modules, ...(a.modules || [])],
    practices: [...basePractices, ...(a.practices || [])],
    scenarios: [...(c.scenarios || []), ...(a.scenarios || [])],
    exam: [...c.exam, ...(a.exam || [])],
    workshops: a.workshops || [],
    project: a.project || null
  };
  if (out.workshops.length && out.workshops.length !== out.modules.length) {
    throw new Error(c.id + ': debe haber un taller por módulo (' + out.workshops.length + ' talleres, ' + out.modules.length + ' módulos)');
  }
  return out;
}
const fullIds = new Set(FULL_COURSES.map((c) => c.id));
const SOURCE = [...LEGACY.filter((c) => !fullIds.has(c.id)), ...FULL_COURSES].map(ampliar);
// Orden del catálogo: el de COURSE_ORDER; los que no estén, al final
const COURSE_ORDER = [
  'loto-bloqueo', 'trabajo-caliente', 'observador-fuego', 'sustancias-quimicas', 'riesgo-electrico-no-electricistas',
  'herramientas-electricas', 'mecanica-basica', 'aislamiento-energias-avanzado', 'seguridad-soldadura-corte',
  'aparejador-cargas', 'almacenamiento-apilamiento-cargas', 'andamiero', 'manejo-amoniaco', 'manipulacion-alimentos',
  'copasst', 'comite-convivencia-laboral'
];
SOURCE.sort((a, b) => (COURSE_ORDER.indexOf(a.id) + 1 || 99) - (COURSE_ORDER.indexOf(b.id) + 1 || 99));

// Simulador por defecto para cualquier curso sin escenarios propios
function defaultScenario(course) {
  return {
    scenario: `Estás en sitio ejecutando o supervisando "${course.title}". ${course.fieldCase} Tu supervisor te pide "agilizar y omitir un paso de control porque son solo 10 minutos". ¿Qué decisión tomas?`,
    options: [
      { text: 'Aceptar y hacerlo rápido para no retrasar la producción.', correct: false, feedback: `Decisión insegura. ${course.failureAnalysis} Nunca se debe sacrificar un control crítico por presión de tiempo.` },
      { text: 'Detener la actividad, aplicar el control obligatorio de la lista de inspección y validar el permiso de trabajo antes de continuar.', correct: true, feedback: `¡Decisión correcta! Ejercer la autoridad de detener el trabajo inseguro y cumplir "${course.checklist[0]}" salva vidas y cumple ${course.regulation}.` },
      { text: 'Continuar sin avisar y esperar a que termine el turno para reportar.', correct: false, feedback: 'Decisión insegura. Ocultar condiciones subestándar expone al siguiente turno al mismo peligro.' }
    ]
  };
}

// Reordena las opciones para que la clave caiga en la posición `target` (reparte las respuestas
// y evita que siempre sea la misma letra). Mantiene el mismo conjunto de opciones.
function rotate(options, answer, target) {
  const n = options.length;
  const k = (answer - target + n) % n;
  return { options: options.map((_, i) => options[(i + k) % n]), answer: target };
}

// Construye la versión completa (con respuestas) de cada curso
function enrich(course) {
  const scenarios = course.scenarios && course.scenarios.length ? course.scenarios : [defaultScenario(course)];
  const practices = course.practices || PRACTICAS[course.id];
  const modules = course.modules.map((mod, idx) => {
    const practice = practices && practices[idx];
    if (!practice) throw new Error('Falta la práctica del módulo ' + (idx + 1) + ' de ' + course.id);
    const pr = rotate(practice.options, practice.answer, (idx + 1) % 3);
    return {
      ...mod,
      // Puntos clave solo si el módulo los define en content-src (no se generan con texto de relleno)
      keyPoints: Array.isArray(mod.keyPoints) ? mod.keyPoints : [],
      // Práctica propia del módulo (no es una pregunta del examen)
      practiceQuestion: { q: practice.q, options: pr.options, answer: pr.answer }
    };
  });
  // Examen: la clave se reparte entre A, B y C
  const exam = course.exam.map((q, i) => {
    const r = rotate(q.options, q.answer, i % q.options.length);
    return { ...q, options: r.options, answer: r.answer };
  });
  return { ...course, image: COURSE_IMAGES[course.id] || '', modules, scenarios, exam };
}

const FULL = SOURCE.map(enrich);

// ---------- 1. Catálogo público (sin respuestas) ----------
const publicCourses = FULL.map((c) => ({
  id: c.id,
  title: c.title,
  hours: c.hours,
  category: c.category,
  regulation: c.regulation,
  legalNotice: c.legalNotice,
  summary: c.summary,
  fieldCase: c.fieldCase,
  checklist: c.checklist,
  failureAnalysis: c.failureAnalysis,
  onSiteClosure: c.onSiteClosure,
  image: c.image,
  modules: c.modules.map((m) => ({
    title: m.title,
    content: m.content,
    keyPoints: m.keyPoints,
    practice: { q: m.practiceQuestion.q, options: m.practiceQuestion.options }
  })),
  scenarios: c.scenarios.map((s) => ({ scenario: s.scenario, options: s.options.map((o) => o.text) })),
  exam: c.exam.map((q) => ({ q: q.q, options: q.options })),
  workshops: c.workshops || [],
  project: c.project || null
}));

// ---------- 2. Claves para el backend (nunca se publican) ----------
const keys = {};
for (const c of FULL) {
  keys[c.id] = {
    title: c.title,
    hours: c.hours,
    regulation: c.regulation,
    categoryLabel: LEGAL_CATEGORIES[c.category]?.label || '',
    legalNotice: c.legalNotice,
    syllabus: c.modules.map((m) => m.title),
    exam: c.exam.map((q) => q.answer),
    practiceAnswers: c.modules.map((m) => m.practiceQuestion.answer),
    practiceOptions: c.modules.map((m) => m.practiceQuestion.options.length),
    examOptions: c.exam.map((q) => q.options.length),
    scenarios: c.scenarios.map((s) => s.options.map((o) => ({ correct: !!o.correct, feedback: o.feedback }))),
    // Mínimo de palabras de cada campo de los talleres y del proyecto (el servidor valida las entregas)
    workshops: (c.workshops || []).map((w) => w.fields.map((f) => f.minWords)),
    project: c.project ? c.project.sections.map((f) => f.minWords) : null,
    projectRubric: c.project ? c.project.rubric.length : 0
  };
}

const header = (what) =>
  `// GENERADO por tools/build-content.mjs — no editar a mano. ${what}\n`;

const catalogJs =
  header('Contenido público: sin respuestas correctas ni retroalimentación.') +
  `export const LEGAL_CATEGORIES = ${JSON.stringify(LEGAL_CATEGORIES, null, 2)};\n\n` +
  `export const COURSES = ${JSON.stringify(publicCourses, null, 2)};\n`;

const contentGs =
  header('Claves de evaluación. Este archivo SOLO va al proyecto de Apps Script (backend).') +
  `const CONTENT = ${JSON.stringify(keys, null, 2)};\n`;

writeFileSync(resolve(root, 'web/js/catalog.js'), catalogJs);
mkdirSync(resolve(root, 'backend'), { recursive: true });
writeFileSync(resolve(root, 'backend/Content.gs'), contentGs);

console.log(`OK: ${publicCourses.length} cursos → web/js/catalog.js y backend/Content.gs`);
