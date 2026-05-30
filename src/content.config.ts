import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    role: z.string(),
    stack: z.array(z.string()),
    href: z.string().url().optional(),
    repo: z.string().url().optional(),
    summary: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

const bookshelf = defineCollection({
  loader: file('./src/content/bookshelf/books.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    status: z.enum(['reading', 'finished', 'abandoned']),
    finishedOn: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    note: z.string().optional(),
  }),
});

export const collections = { writing, work, bookshelf };
