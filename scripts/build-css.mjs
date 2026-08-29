/**
 * Junta as folhas de estilo do tema em public/theme/css/kfs.css.
 *
 * O <head> carregava nove <link> render-blocking; no PageSpeed mobile isso
 * valia ~1s de atraso no primeiro paint, porque cada folha custa um round-trip
 * antes de o navegador poder pintar qualquer coisa. Um arquivo só, purgado e
 * minificado, resolve os dois lados (requisições e bytes).
 *
 * O bundle fica no mesmo diretório das folhas originais de propósito: elas
 * referenciam ../webfonts/ e ../img/ em url(), e manter o caminho preserva
 * essas referências sem reescrever nada.
 *
 * O Swiper fica de fora: só a página com carrossel o carrega.
 *
 * Roda no `npm run build`, DEPOIS do astro build, porque o purge precisa do
 * HTML gerado em dist/. Escreve nos dois lugares: em public/ para o `astro
 * dev` e para o próximo build, e em dist/ porque o astro já copiou a versão
 * anterior para lá. O resultado é versionado para que um clone novo já
 * encontre o arquivo.
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { transform } from 'esbuild';
import { PurgeCSS } from 'purgecss';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(RAIZ, 'public/theme/css');
const SAIDA = join(DIR, 'kfs.css');
const DIST = join(RAIZ, 'dist/theme/css/kfs.css');

/** A ordem é a mesma em que os <link> apareciam no <head>: o site.css é o
    último porque é ele que sobrescreve o tema. */
const FOLHAS = [
  'manrope.css',
  'bootstrap.min.css',
  'fa-subset.css',
  'animate.css',
  'meanmenu.css',
  'nice-select.css',
  'main.css',
  'wp-fix.css',
  'site.css',
];

/** Classes que nenhum HTML nem JS declara como string literal e que o purge
    não teria como descobrir sozinho. */
const MANTER = [
  // O WOW.js monta o nome da animação a partir de data-wow-*; o resto do
  // animate.css (mais de 70 animações) pode cair.
  'animated', 'fadeInUp',
  // Estado de rolagem aplicado pelo main.js.
  'sticky',
  /^mean-/, /^nice-select/, /^offcanvas/, /^search-/,
];

const arquivos = (dir, ext) => {
  const saida = [];
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) saida.push(...arquivos(p, ext));
    else if (nome.endsWith(ext)) saida.push(p);
  }
  return saida;
};

const dist = join(RAIZ, 'dist');
if (!existsSync(dist)) throw new Error('dist/ não existe: rode o astro build antes deste script.');
const html = arquivos(dist, '.html');
if (!html.length) throw new Error('nenhum HTML em dist/ — o purge apagaria o CSS inteiro.');

const bruto = FOLHAS.map((f) => `/* ${f} */\n${readFileSync(join(DIR, f), 'utf8')}`).join('\n')
  // O @charset do bootstrap.min.css só vale como primeira regra do arquivo;
  // no meio do bundle o navegador o ignora. Ele é reemitido no topo da saída.
  .replace(/@charset\s+"[^"]*";/gi, '');

// Os .js do tema entram como conteúdo junto com o HTML: o meanmenu, o
// nice-select e o bootstrap injetam classes que só existem como string dentro
// deles, e o extractor do PurgeCSS as encontra ali.
const [purgado] = await new PurgeCSS().purge({
  content: [...html, ...arquivos(join(RAIZ, 'public/theme/js'), '.js')],
  css: [{ raw: bruto }],
  safelist: { standard: MANTER, deep: [/^mean-/], greedy: [/nice-select/] },
  keyframes: true,
  variables: true,
  fontFace: false,
});

const { code, warnings } = await transform(purgado.css, { loader: 'css', minify: true });
for (const w of warnings) console.warn(`  aviso: ${w.text}`);

writeFileSync(
  SAIDA,
  '@charset "UTF-8";\n' +
    '/* Gerado por scripts/build-css.mjs a partir de:\n' +
    FOLHAS.map((f) => `     ${f}`).join('\n') +
    '\n   Não editar à mão — edite a folha de origem e rode `npm run build`. */\n' +
    code,
);
if (existsSync(dirname(DIST))) copyFileSync(SAIDA, DIST);

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(
  `public/theme/css/kfs.css: ${FOLHAS.length} folhas, ${kb(bruto.length)} -> ` +
    `${kb(purgado.css.length)} purgado -> ${kb(code.length)} minificado`,
);
