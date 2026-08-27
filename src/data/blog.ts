/**
 * Categorias do blog.
 *
 * A lista é a fonte da verdade: `src/content.config.ts` valida o campo
 * `category` de cada post contra os rótulos daqui, então categoria escrita
 * errada no frontmatter quebra o build em vez de virar uma categoria órfã.
 *
 * `description` é usada como meta description da página da categoria — por
 * isso é uma frase inteira, e não um resumo de duas palavras.
 */
export interface BlogCategory {
  slug: string;
  /** Rótulo exibido e valor aceito no frontmatter dos posts. */
  label: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: 'direito-de-familia',
    label: 'Direito de Família',
    description:
      'Artigos sobre divórcio, partilha de bens, guarda e convivência, pensão alimentícia e o que muda conforme o regime de bens.',
  },
  {
    slug: 'direito-criminal',
    label: 'Direito Criminal',
    description:
      'Artigos sobre defesa criminal: medidas protetivas de urgência, prisão em flagrante e liberdade provisória, inquérito e ação penal, Tribunal do Júri e habeas corpus.',
  },
  {
    slug: 'direito-trabalhista',
    label: 'Direito Trabalhista',
    description:
      'Artigos sobre relações de trabalho: assédio moral, verbas rescisórias, horas extras, rescisão indireta, estabilidade e acidente de trabalho.',
  },
];

/** Rótulos aceitos no campo `category` do frontmatter. */
export const categoryLabels = blogCategories.map((c) => c.label);

export const getCategoryByLabel = (label: string) =>
  blogCategories.find((c) => c.label === label);
