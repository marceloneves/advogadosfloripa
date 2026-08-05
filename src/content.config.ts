import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    author: z.string().default("KFS Sociedade de Advogados"),
    image: z.string().default('/theme/img/demo/01-5.jpg'),
  }),
});

export const collections = { blog };
