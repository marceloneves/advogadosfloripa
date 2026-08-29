/**
 * Versão dos assets estáticos do tema (CSS, JS e webfonts).
 *
 * A hospedagem serve /theme/ com cache longo e os arquivos têm nome fixo:
 * o kfs.css é regerado a cada build e os fa-*.woff2 mudam sempre que um
 * ícone novo entra no subset. Sem a query, quem já visitou o site continua
 * recebendo a versão antiga até o cache expirar.
 *
 * Suba a cada alteração de estilo, script ou ícone. O Layout usa este valor
 * nos <link>/<script>, e o scripts/build-css.mjs o aplica às URLs de fonte
 * dentro do bundle — o preload da Manrope precisa bater com a URL do
 * @font-face, senão o navegador baixa a fonte duas vezes.
 */
export const assetVer = '20260829e';
