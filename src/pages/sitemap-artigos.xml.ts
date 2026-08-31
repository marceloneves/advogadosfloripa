/**
 * Sitemap dos artigos do blog. A listagem /blog/ só entra quando existe pelo
 * menos um post: sem posts ela é servida com noindex, e anunciar no sitemap uma
 * URL marcada como noindex vira erro de cobertura no Search Console.
 *
 * As páginas de categoria seguem a mesma regra e entram só quando têm artigo.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { urlset, xmlResponse, type SitemapEntry } from '../lib/sitemap';
import { blogCategories } from '../data/blog';

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  // O lastmod é a última revisão do texto, não a publicação.
  const lastmod = (post: (typeof posts)[number]) =>
    (post.data.updated ?? post.data.date).toISOString();

  const categorias = blogCategories.flatMap((categoria) => {
    const daCategoria = posts.filter((p) => p.data.category === categoria.label);
    if (daCategoria.length === 0) return [];

    return [
      {
        path: `/blog/categoria/${categoria.slug}/`,
        lastmod: daCategoria.map(lastmod).sort().at(-1),
      },
    ];
  });

  const entradas: SitemapEntry[] =
    posts.length === 0
      ? []
      : [
          { path: '/blog/' },
          ...categorias,
          ...posts.map((post) => ({
            path: `/blog/${post.id}/`,
            lastmod: lastmod(post),
          })),
        ];

  return xmlResponse(urlset(entradas, site));
};
