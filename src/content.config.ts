import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The "shelves" a post can live on. Add or rename these any time;
// just keep them in sync with src/consts.ts.
const shelves = ['reviews', 'essays', 'poems', 'writing-life', 'classroom'] as const;

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    shelf: z.enum(shelves),
    tags: z.array(z.string()).default([]),
    // For book reviews: optional book details shown in a little "card catalog" box
    book: z
      .object({
        title: z.string(),
        author: z.string(),
        rating: z.number().min(0).max(5).optional(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
