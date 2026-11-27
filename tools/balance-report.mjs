// Lista, por curso, las preguntas de examen donde la respuesta correcta es la opción más larga (o empatada).
// Uso: node tools/balance-report.mjs [id-curso ...]
import { readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const dir = resolve(dirname(fileURLToPath(import.meta.url)), '../content-src/cursos');
const ids = process.argv.slice(2);
for (const f of readdirSync(dir).filter((x) => x.endsWith('.js'))) {
  const c = (await import(pathToFileURL(resolve(dir, f)).href)).default;
  if (ids.length && !ids.includes(c.id)) continue;
  const bad = c.exam.map((q, i) => ({ i, q, L: q.options.map((o) => o.length) })).filter(({ q, L }) => L[q.answer] >= Math.max(...L.filter((_, k) => k !== q.answer)));
  const shortest = c.exam.filter((q) => { const L = q.options.map((o) => o.length); return L[q.answer] <= Math.min(...L.filter((_, k) => k !== q.answer)); }).length;
  console.log(`${c.id}: más larga ${bad.length} de ${c.exam.length} · más corta ${shortest} de ${c.exam.length}`);
  bad.forEach(({ i, q, L }) => console.log(`  #${i + 1} [${L.join(',')}] correcta=${q.answer}: ${q.q.slice(0, 70)}`));
}
