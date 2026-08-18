/**
 * Sitemap geográfico: aponta para o KML com a localização do escritório.
 * Formato de geo sitemap do Google (extensão geo:), consumido também por
 * ferramentas de SEO local e por leitores de KML.
 */
import type { APIRoute } from 'astro';
import { absolute, xmlResponse } from '../lib/sitemap';

export const GET: APIRoute = ({ site }) =>
  xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:geo="http://www.google.com/geo/schemas/sitemap/1.0">
  <url>
    <loc>${absolute('/localizacao.kml', site)}</loc>
    <geo:geo>
      <geo:format>kml</geo:format>
    </geo:geo>
  </url>
</urlset>
`);
