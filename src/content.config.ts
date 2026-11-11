import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The "shelves" a post can live on. Add or rename these any time;
// just keep them in sync with src/consts.ts.
const shelves = ['soapbox', 'reviews', 'writing-life', 'teaching', 'parents'] as const;

// Recurring series. Keep in sync with SERIES in src/consts.ts.
const series = ['pass-the-potatoes', 'what-to-say-when', 'teenager-translator', 'small-lives', 'here-be-monsters'] as const;

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    shelf: z.enum(shelves),
    // Optional: put the post in a recurring series
    series: z.enum(series).optional(),
    tags: z.array(z.string()).default([]),
    // For book reviews: optional book details shown in a little "card catalog" box
    book: z
      .object({
        title: z.string(),
        author: z.string(),
        rating: z.number().min(0).max(5).optional(),
      })
      .optional(),
    // Reviews only: was this a book from class, or one Catherine read on her own?
    reviewSource: z.enum(['classroom', 'nightstand']).optional(),
    // Paired reviews: a second catalog card shown beside the first
    pairedBook: z
      .object({
        title: z.string(),
        author: z.string(),
        rating: z.number().min(0).max(5).optional(),
      })
      .optional(),
    // For fiction: hide margin notes (and <mark class="clue"> highlights)
    // until the reader clicks "Read it again, annotated" at the end.
    // Optional: a multi-part poem or story, and which part this is
    sequence: z.enum(['the-monsters-we-carry']).optional(),
    part: z.number().int().positive().optional(),
    // Optional: the file name (no .md) of a companion piece to link to
    companion: z.string().optional(),
    hiddenNotes: z.boolean().default(false),
    // Optional line under "Read it again, annotated."
    annotationBlurb: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
