/**
 * Junta as folhas de estilo do tema em public/theme/css/kfs.css.
 *
 * O <head> carregava nove <link> render-blocking; no PageSpeed mobile isso
 * valia ~1s de atraso no primeiro paint, porque cada folha custa um round-trip
 * antes de o navegador poder pintar qualquer coisa. Um arquivo só, minificado,
 * resolve os dois lados (requisições e bytes).
 *
 * O bundle fica no mesmo diretório das folhas originais de propósito: elas
 * referenciam ../webfonts/ e ../img/ em url(), e manter o caminho preserva
 * essas referências sem reescrever nada.
 *
 * O Swiper fica de fora: só a página com carrossel o carrega.
 *
 * Roda sozinho no `npm run build`. O resultado é versionado para que o
 * `astro dev` de um clone novo já encontre o arquivo.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { transform } from 'esbuild';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(RAIZ, 'public/theme/css');
const SAIDA = join(DIR, 'kfs.css');

/** A ordem é a mesma em que os <link> apareciam no <head>: o site.css é o
    último porque é ele que sobrescreve o tema. */
const FOLHAS = [
  'manrope.css',
  'bootstrap.min.css',
  'fa-subset.css',
  'flacticon.css',
  'animate.css',
  'meanmenu.css',
  'nice-select.css',
  'main.css',
  'wp-fix.css',
  'site.css',
];

const bruto = FOLHAS.map((f) => `/* ${f} */\n${readFileSync(join(DIR, f), 'utf8')}`).join('\n')
  // O @charset do bootstrap.min.css só vale como primeira regra do arquivo;
  // no meio do bundle o navegador o ignora. Ele é reemitido no topo da saída.
  .replace(/@charset\s+"[^"]*";/gi, '');
const { code, warnings } = await transform(bruto, { loader: 'css', minify: true });
for (const w of warnings) console.warn(`  aviso: ${w.text}`);

writeFileSync(
  SAIDA,
  '@charset "UTF-8";\n' +
    '/* Gerado por scripts/build-css.mjs a partir de:\n' +
    FOLHAS.map((f) => `     ${f}`).join('\n') +
    '\n   Não editar à mão — edite a folha de origem e rode `npm run build`. */\n' +
    code,
);

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(`public/theme/css/kfs.css: ${FOLHAS.length} folhas, ${kb(bruto.length)} -> ${kb(code.length)}`);
