/**
 * Índice que reúne os sitemaps de páginas e de artigos — é esta a URL a enviar
 * ao Search Console. O sitemap-geo fica fora de propósito: ele lista um KML, e
 * não páginas HTML, e é anunciado direto no robots.txt.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absolute, xmlResponse } from '../lib/sitemap';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');

  // Sem posts, o sitemap de artigos fica vazio: incluí-lo faria o Search Console
  // reportar um sitemap com 0 URLs descobertas.
  const arquivos = [
    '/sitemap-paginas.xml',
    ...(posts.length > 0 ? ['/sitemap-artigos.xml'] : []),
  ];

  const itens = arquivos
    .map((arquivo) => `  <sitemap>\n    <loc>${absolute(arquivo, site)}</loc>\n  </sitemap>`)
    .join('\n');

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${itens}
</sitemapindex>
`);
};
