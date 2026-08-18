// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kfsadvogados.com.br',

  // Os sitemaps não usam o @astrojs/sitemap: são endpoints em src/pages
  // (sitemap-index, -paginas, -artigos, -geo), porque precisam ser separados
  // por tipo. Ver src/lib/sitemap.ts.

  // /equipe virou /escritorio. Os links antigos podem já estar indexados ou
  // compartilhados, então o caminho anterior segue respondendo por redirect.
  redirects: {
    '/equipe': '/escritorio',
    '/equipe/[slug]': '/escritorio/[slug]',
  },
});
