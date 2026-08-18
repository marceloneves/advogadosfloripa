/**
 * Sitemap dos artigos do blog. A listagem /blog/ só entra quando existe pelo
 * menos um post: sem posts ela é servida com noindex, e anunciar no sitemap uma
 * URL marcada como noindex vira erro de cobertura no Search Console.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { urlset, xmlResponse, type SitemapEntry } from '../lib/sitemap';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');

  const entradas: SitemapEntry[] =
    posts.length === 0
      ? []
      : [
          { path: '/blog/' },
          ...posts
            .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
            .map((post) => ({
              path: `/blog/${post.id}/`,
              lastmod: post.data.date.toISOString(),
            })),
        ];

  return xmlResponse(urlset(entradas, site));
};
