/**
 * Intensidad horaria MEDIDA de cada curso, a partir de su contenido real.
 *
 * Una constancia certifica una intensidad horaria. Esa cifra debe poder sostenerse frente a un
 * empleador, una ARL o un auditor, así que se calcula, no se escribe a mano:
 *   - lectura: palabras de módulos, caso, análisis, puntos clave, lista y cierre, a 130 palabras/minuto
 *     (lectura técnica con comprensión, para personal operativo)
 *   - práctica por módulo: 2 minutos
 *   - escenario de decisión: 3 minutos
 *   - pregunta de evaluación: 1,5 minutos
 *   - talleres y proyecto final: lectura del enunciado a 130 palabras/minuto y redacción del mínimo de
 *     palabras exigido a 12 palabras/minuto (redactar aplicando a su propia planta, pensando cada respuesta).
 *     El servidor no acepta entregas por debajo de ese mínimo.
 * Las horas declaradas no pueden superar la medición redondeada al medio punto más cercano (mínimo 0,5 h).
 *
 * Uso: node tools/intensity.mjs        (informe de todos los cursos)
 */
import { COURSES } from '../web/js/catalog.js';

const WPM = 130;
const WRITE_WPM = 12;
const words = (t) => String(t || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

export function measure(c) {
  const text = [
    ...c.modules.map((m) => m.content + ' ' + (m.keyPoints || []).join(' ') + ' ' + m.title),
    c.fieldCase,
    c.failureAnalysis,
    (c.checklist || []).join(' '),
    c.onSiteClosure
  ].join(' ');
  const w = words(text);
  const tasks = [...(c.workshops || [])];
  if (c.project) tasks.push({ title: c.project.title, prompt: c.project.intro + ' ' + (c.project.rubric || []).join(' '), fields: c.project.sections });
  let writeMin = 0;
  for (const t of tasks) {
    const promptWords = words(t.title + ' ' + t.prompt + ' ' + t.fields.map((f) => f.label + ' ' + (f.help || '')).join(' '));
    const minWords = t.fields.reduce((a, f) => a + Number(f.minWords || 0), 0);
    writeMin += promptWords / WPM + minWords / WRITE_WPM;
  }
  const minutes = w / WPM + c.modules.length * 2 + (c.scenarios || []).length * 3 + c.exam.length * 1.5 + writeMin;
  // Se redondea al medio punto más cercano: 83 min = 1,38 h -> 1,5 h; 35 min = 0,58 h -> 0,5 h
  const allowed = Math.max(0.5, Math.round((minutes / 60) * 2) / 2);
  return { words: w, writeMinutes: Math.round(writeMin), minutes: Math.round(minutes), allowed, declared: Number(c.hours), honest: Number(c.hours) <= allowed };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Curso'.padEnd(36), 'Palabras', ' Minutos', ' Medido', ' Declarado', ' Estado');
  for (const c of COURSES) {
    const m = measure(c);
    console.log(
      c.id.padEnd(36),
      String(m.words).padStart(8),
      String(m.minutes).padStart(8),
      `${m.allowed} h`.padStart(7),
      `${m.declared} h`.padStart(10),
      m.honest ? ' OK' : ' DECLARA MÁS DE LO QUE ENTREGA'
    );
  }
}
