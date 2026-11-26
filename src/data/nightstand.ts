// What Catherine is reading right now. Shows on the homepage, the Checked Out shelf,
// and the hero note. Put the current book first. Keep `note` short and in her voice.
export interface NightstandBook {
  title: string;
  author: string;
  note?: string; // optional one-liner in Catherine's words
  // Reading check-ins for the checkout slip on the Checked Out shelf. Newest first.
  // date: 'YYYY-MM-DD', chapter: e.g. 'Ch. 7', comment: her words, note: optional handwritten aside.
  log?: { date: string; chapter: string; comment: string; note?: string }[];
}

// Empty list = the nightstand card hides itself everywhere.
export const nightstand: NightstandBook[] = [
  {
    title: 'The Washwoman at the River’s End',
    author: 'Megan Shade',
    log: [
      {
        date: '2026-11-25',
        chapter: 'Ch. 7',
        comment: 'Brennen finds her. “I am going to find a way to kill you.”',
        note: 'the tension is thick!',
      },
      {
        date: '2026-11-24',
        chapter: 'Ch. 2',
        comment: 'Oh no. It was going so well. Then we meet Brennen, who speaks Gaelic, and suddenly I’m reading the way the teacher in Charlie Brown talks. Wah-wah-wah. There are translations, but all that back-and-forth is breaking up my flow.',
        note: 'might switch to audible for this part.',
      },
      {
        date: '2026-11-23',
        chapter: 'Ch. 1',
        comment: 'What a unique idea: a woman who washes the clothes of the dead so their souls can pass on to the After.',
        note: 'one chapter in and i’m already hooked.',
      },
    ],
  },
];
