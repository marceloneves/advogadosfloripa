/**
 * Os sitemaps são gerados por endpoints próprios (e não pelo @astrojs/sitemap)
 * porque o site precisa de índices separados por tipo: páginas institucionais,
 * artigos do blog e o KML de localização. A integração escreve um arquivo único.
 *
 * As URLs saem das mesmas fontes que geram as rotas — o glob de `src/pages`
 * para as estáticas e os dados de `site`/`team` para as dinâmicas —, então uma
 * página nova entra no sitemap sem precisar ser cadastrada aqui de novo.
 */
import { services } from '../data/site';
import { team } from '../data/team';

export interface SitemapEntry {
  /** Caminho absoluto no site, com barra final (o build usa format: directory). */
  path: string;
  /** ISO 8601. Só é enviado quando a data é real; lastmod chutado é ignorado pelo Google. */
  lastmod?: string;
}

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const absolute = (path: string, site: URL | undefined) =>
  new URL(path, site ?? 'https://kfsadvogados.com.br').href;

/** Rotas que existem como arquivo mas não devem ser indexadas. */
const EXCLUIDAS = new Set(['/404/']);

/**
 * Páginas estáticas de `src/pages`. As rotas dinâmicas (`[slug]`) ficam de fora
 * porque são montadas abaixo, a partir dos dados que alimentam o getStaticPaths.
 */
function paginasEstaticas(): string[] {
  const arquivos = Object.keys(import.meta.glob('../pages/**/*.astro'));

  return arquivos
    .map((arquivo) =>
      arquivo
        .replace('../pages', '')
        .replace(/\.astro$/, '')
        .replace(/\/index$/, '/')
    )
    .filter((rota) => !rota.includes('['))
    .map((rota) => (rota.endsWith('/') ? rota : `${rota}/`))
    .map((rota) => (rota === '' ? '/' : rota))
    .filter((rota) => !EXCLUIDAS.has(rota));
}

/** Páginas de serviço: um tópico de `services` vira uma rota /servicos/[slug]. */
const paginasDeServico = () =>
  services.flatMap((area) => (area.topics ?? []).map((topico) => `/servicos/${topico.slug}/`));

/** Perfis dos advogados: /escritorio/[slug]. */
const paginasDeAdvogado = () => team.map((lawyer) => `/escritorio/${lawyer.slug}/`);

/**
 * Todas as páginas institucionais. O blog fica de fora: a listagem e os posts
 * vão no sitemap de artigos, para que cada tipo tenha o seu próprio índice.
 */
export function rotasDePagina(): SitemapEntry[] {
  const rotas = [...paginasEstaticas(), ...paginasDeServico(), ...paginasDeAdvogado()]
    .filter((rota) => rota !== '/blog/' && !rota.startsWith('/blog/'));

  return [...new Set(rotas)].sort().map((path) => ({ path }));
}

/** Monta um <urlset> a partir das entradas já resolvidas. */
export function urlset(entries: SitemapEntry[], site: URL | undefined): string {
  const urls = entries
    .map(({ path, lastmod }) => {
      const loc = `    <loc>${escape(absolute(path, site))}</loc>`;
      const mod = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
      return `  <url>\n${loc}${mod}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export const xmlResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
