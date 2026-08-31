import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categoryLabels } from './data/blog';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Resumo de busca (SERP e redes). Não é o texto de abertura do artigo. */
    description: z.string(),
    // Linha fina: resposta curta ao tema do artigo, impressa acima do corpo.
    // É um resumo com a conclusão, não uma introdução ao assunto — quem lê só
    // ela já sai sabendo o que fazer. Obrigatória: post sem linha fina quebra
    // o build em vez de publicar sem abertura.
    lead: z.string(),
    date: z.coerce.date(),
    // Data da última revisão do texto. Só preencher quando o conteúdo muda de
    // fato: alimenta o "Atualizado em" do artigo, o dateModified do JSON-LD e o
    // lastmod do sitemap.
    updated: z.coerce.date().optional(),
    // Restrito às categorias de src/data/blog.ts: categoria escrita errada
    // quebra o build em vez de gerar um post sem página de categoria.
    category: z.enum(categoryLabels as [string, ...string[]]),
    author: z.string().default("KFS Sociedade de Advogados"),
    image: z.string().default('/theme/img/demo/01-3.webp'),
  }),
});

export const collections = { blog };
