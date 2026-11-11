// Margin Notes wall. Readers email a note; Catherine approves it; it gets added here.
// Nothing is posted without her approval. First names or initials only.
// color: 'maroon' | 'green' | 'mustard' | 'blush'
export interface MarginNote {
  name: string;
  note: string;
  color: 'maroon' | 'green' | 'mustard' | 'blush';
  date: string; // YYYY-MM-DD, the day it was approved
}

export const marginNotes: MarginNote[] = [
  {
    name: 'catherine',
    note: 'first note on the wall is mine. leave me yours. i read every single one.',
    color: 'maroon',
    date: '2026-11-10',
  },
];
