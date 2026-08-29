## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Assets do tema

O `<head>` carrega **uma** folha de estilo: `public/theme/css/kfs.css`, gerada por
`scripts/build-css.mjs` a partir das folhas do tema mais `manrope.css`,
`fa-subset.css` e `site.css`, e purgada com o PurgeCSS contra o HTML de `dist/`
e os `.js` do tema. O script roda sozinho no `npm run build`, depois do `astro
build` (o purge precisa do HTML) — edite a folha de origem, nunca o `kfs.css`.

Se uma classe só aparecer em JS de terceiros que o purge não escaneia, ou for
montada em tempo de execução, acrescente-a à lista `MANTER` do script.

Ao mexer em estilo, script ou ícone, suba o `assetVer` em `src/data/assets.ts`:
é a query `?v=` de todo CSS, JS e webfont, e sem ela o cache da hospedagem
continua servindo a versão antiga. É esse versionamento que permite subir o
cache do Cloudflare para além dos 7 dias atuais.

O Font Awesome é subsetado: `scripts/fa-subset.py` lê o build em `dist/`,
descobre quais classes `fa-*` o HTML usa e regenera tanto o `fa-subset.css`
quanto os `.woff2` (originais em `vendor/fontawesome/`, fora de `public/`).
Ao adicionar um ícone novo:

```
npm run build && python3 scripts/fa-subset.py && npm run build
```

Precisa de `pip install fonttools brotlicffi` — o pacote `brotli` do PyPI não
decodifica estes `.woff2`.

A Manrope é hospedada localmente (`public/theme/webfonts/manrope-*.woff2`,
arquivo variável 200–800, licença SIL OFL).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
