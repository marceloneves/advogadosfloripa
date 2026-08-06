// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kfsadvogados.com.br',

  // /equipe virou /escritorio. Os links antigos podem já estar indexados ou
  // compartilhados, então o caminho anterior segue respondendo por redirect.
  redirects: {
    '/equipe': '/escritorio',
    '/equipe/[slug]': '/escritorio/[slug]',
  },

  integrations: [sitemap()]
});
