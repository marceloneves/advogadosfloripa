import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categoryLabels } from './data/blog';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Restrito às categorias de src/data/blog.ts: categoria escrita errada
    // quebra o build em vez de gerar um post sem página de categoria.
    category: z.enum(categoryLabels as [string, ...string[]]),
    author: z.string().default("KFS Sociedade de Advogados"),
    image: z.string().default('/theme/img/demo/01-3.webp'),
  }),
});

export const collections = { blog };
