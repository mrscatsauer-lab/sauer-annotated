// What Catherine is reading right now. Shows on the homepage, the Checked Out shelf,
// and the hero note. Put the current book first. Keep `note` short and in her voice.
export interface NightstandBook {
  title: string;
  author: string;
  note?: string; // optional one-liner in Catherine's words
}

export const nightstand: NightstandBook[] = [
  { title: 'House of Leaves', author: 'Mark Z. Danielewski' },
];
