// Pruebas del contenido público (web/js/catalog.js). Ejecutar: node tools/catalog-test.mjs
import { measure } from './intensity.mjs';
import { COURSES, LEGAL_CATEGORIES } from '../web/js/catalog.js';

let passed = 0;
let failed = 0;
const check = (name, ok, detail = '') => {
  if (ok) passed++;
  else {
    failed++;
    console.error('FAIL:', name, detail);
  }
};

check('hay 16 cursos', COURSES.length === 16, `encontrados ${COURSES.length}`);
check('ids únicos', new Set(COURSES.map((c) => c.id)).size === COURSES.length);

const FORBIDDEN_KEYS = /"(correct|correctIndex|answer|exam_answers|feedback)"/;
const raw = JSON.stringify(COURSES);
check('catálogo público sin respuestas ni retroalimentación', !FORBIDDEN_KEYS.test(raw));

for (const c of COURSES) {
  // Intensidad honesta: las horas declaradas no superan lo que el contenido permite medir (tools/intensity.mjs).
  {
    const m = measure(c);
    check(`${c.id}: intensidad declarada (${c.hours} h) no supera la medida (${m.allowed} h)`, m.honest, `medido=${m.minutes} min`);
  }
  check(`${c.id}: categoría normativa existe`, !!LEGAL_CATEGORIES[c.category]);
  check(`${c.id}: legalNotice presente`, typeof c.legalNotice === 'string' && c.legalNotice.length > 20);
  check(`${c.id}: módulos >= 8`, c.modules.length >= 8, `módulos=${c.modules.length}`);
  check(`${c.id}: cada módulo tiene práctica con opciones`, c.modules.every((m) => m.practice && m.practice.options.length >= 2));
  check(`${c.id}: examen >= 16 preguntas con opciones`, c.exam.length >= 16 && c.exam.every((q) => q.options.length >= 2), `preguntas=${c.exam.length}`);
  check(`${c.id}: al menos 5 escenarios con opciones`, Array.isArray(c.scenarios) && c.scenarios.length >= 5);
  check(`${c.id}: cada módulo tiene 3 puntos clave`, c.modules.every((m) => Array.isArray(m.keyPoints) && m.keyPoints.length === 3));
}

// Ninguna pregunta de práctica puede repetir una pregunta del examen (si no, revela la clave)
{
  let overlap = 0;
  for (const c of COURSES) {
    const examQs = new Set(c.exam.map((q) => q.q));
    for (const m of c.modules) if (examQs.has(m.practice.q)) overlap++;
  }
  check('prácticas distintas de las preguntas del examen', overlap === 0, `repetidas=${overlap}`);
}

console.log(`\n${passed} pasaron, ${failed} fallaron.`);
process.exit(failed ? 1 : 0);
