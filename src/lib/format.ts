/**
 * Formatação das datas do blog.
 *
 * O frontmatter traz `2026-08-27`, que o Zod converte para meia-noite UTC. Sem
 * fixar o fuso na formatação, o build (America/Sao_Paulo, UTC-3) exibia o dia
 * anterior — "26 de agosto" num post publicado em 27.
 */
export const formatarData = (d: Date) =>
  d.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
