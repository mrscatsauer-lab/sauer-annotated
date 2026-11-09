export const SITE_TITLE = 'Catherine, Annotated';
export const SITE_TAGLINE = 'Margin notes on books, writing, and everything else.';
export const SITE_DESCRIPTION =
  'Opinions, book reviews, short stories, and literacy tips for teachers and parents from Catherine Sauer, English teacher and writer.';
export const AUTHOR = 'Catherine Sauer';

export const SHELVES = {
  soapbox: { label: 'Soapbox', blurb: 'Opinions, arguments, and hills I will die on.' },
  reviews: { label: 'Checked Out', blurb: 'Honest book reviews.' },
  'writing-life': { label: 'Writing Life', blurb: 'Short stories, drafts, and the long road to publishing.' },
  teaching: { label: 'Teacher’s Edition', blurb: 'Lessons, close reading, and literary know-how.' },
  parents: { label: 'Dinner Table Literacy', blurb: 'Reading, writing, and talking with kids at home.' },
} as const;

export type ShelfKey = keyof typeof SHELVES;

// Recurring series. Each one gets its own page at /series/<key>/
// and a little badge on every post that belongs to it.
export const SERIES = {
  'pass-the-potatoes': {
    label: 'Pass the Potatoes',
    blurb: 'Three questions for tonight’s dinner, built around one book, movie, or headline.',
    shelf: 'parents',
  },
  'what-to-say-when': {
    label: 'What to Say When…',
    blurb: 'Short scripts for the moments parents freeze.',
    shelf: 'parents',
  },
  'teenager-translator': {
    label: 'The Teenager Translator',
    blurb: 'What English class is actually asking for, decoded for parents.',
    shelf: 'parents',
  },
  'small-lives': {
    label: 'Small Lives',
    blurb: 'Flash fiction from creatures who don’t know what we know about their world.',
    shelf: 'writing-life',
  },
} as const;

export type SeriesKey = keyof typeof SERIES;
