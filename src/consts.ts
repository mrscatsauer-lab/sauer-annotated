export const SITE_TITLE = 'Sauer, Annotated';
export const SITE_TAGLINE = 'Margin notes on books, writing, and everything else.';
export const SITE_DESCRIPTION =
  'Essays, book reviews, short stories, and literacy tips for teachers and parents from Catherine Sauer, English teacher and writer.';
export const AUTHOR = 'Catherine Sauer';

export const SHELVES = {
  essays: { label: 'Marginalia', blurb: 'Essays and longer thoughts.' },
  reviews: { label: 'Checked Out', blurb: 'Honest book reviews.' },
  'writing-life': { label: 'Writing Life', blurb: 'Short stories, drafts, and the long road to publishing.' },
  teaching: { label: 'Teacher’s Edition', blurb: 'Lessons, close reading, and literary know-how.' },
  parents: { label: 'Dinner Table Literacy', blurb: 'Reading, writing, and talking with kids at home.' },
} as const;

export type ShelfKey = keyof typeof SHELVES;
