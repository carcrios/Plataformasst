// Verifica que la longitud de las opciones no delate la respuesta correcta del examen.
// Si la correcta es casi siempre la más larga (o la más corta), un alumno puede aprobar sin estudiar.
// Límites por curso: correcta más larga en máx. 35 % de las preguntas y más corta en máx. 45 %.
// Uso: node tools/balance-test.mjs
import fs from 'fs';
import vm from 'vm';

const MAX_LONGEST = 0.35;
const MAX_SHORTEST = 0.45;

const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(new URL('../backend/Content.gs', import.meta.url), 'utf8') + ';this.C = CONTENT;', ctx);
const C = ctx.C;
const { COURSES } = await import(new URL('../web/js/catalog.js', import.meta.url));

let failed = 0;
let tot = 0, longestAll = 0, shortestAll = 0;
for (const c of COURSES) {
  let longest = 0, shortest = 0;
  (c.exam || []).forEach((q, i) => {
    const a = C[c.id].exam[i];
    const L = q.options.map((o) => o.length);
    const others = L.filter((_, k) => k !== a);
    if (L[a] >= Math.max(...others)) longest++;
    if (L[a] <= Math.min(...others)) shortest++;
  });
  const n = c.exam.length;
  tot += n; longestAll += longest; shortestAll += shortest;
  if (longest / n > MAX_LONGEST || shortest / n > MAX_SHORTEST) {
    failed++;
    console.error(`FALLO ${c.id}: correcta más larga ${longest}/${n}, más corta ${shortest}/${n}`);
  }
}
console.log(`Global: correcta más larga ${longestAll}/${tot}, más corta ${shortestAll}/${tot}.`);
if (failed) {
  console.error(`${failed} cursos con sesgo de longitud.`);
  process.exit(1);
}
console.log('OK: la longitud de las opciones no delata la respuesta en ningún curso.');
