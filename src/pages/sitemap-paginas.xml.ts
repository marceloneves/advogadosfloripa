/** Sitemap das páginas institucionais (tudo menos o blog). */
import type { APIRoute } from 'astro';
import { rotasDePagina, urlset, xmlResponse } from '../lib/sitemap';

export const GET: APIRoute = ({ site }) => xmlResponse(urlset(rotasDePagina(), site));
