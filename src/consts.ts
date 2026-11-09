export const SITE_TITLE = 'Sauer, Annotated';
export const SITE_TAGLINE = 'Margin notes on books, writing, and everything else.';
export const SITE_DESCRIPTION =
  'Book reviews, essays, poems, and margin notes from Catherine Sauer, English teacher and writer.';
export const AUTHOR = 'Catherine Sauer';

export const SHELVES = {
  reviews: { label: 'Reviews', blurb: 'Books, read closely and judged honestly.' },
  essays: { label: 'Essays', blurb: 'Longer thoughts that needed more than a margin.' },
  stories: { label: 'Short Stories', blurb: 'Small fictions, best read in one sitting.' },
  'writing-life': { label: 'Writing Life', blurb: 'Drafting, querying, and the long middle.' },
  classroom: { label: 'Classroom', blurb: 'Notes from the front of the room.' },
} as const;

export type ShelfKey = keyof typeof SHELVES;
