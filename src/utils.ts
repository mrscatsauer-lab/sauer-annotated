import { getCollection, type CollectionEntry } from 'astro:content';

// A post is live once it is not a draft AND its date has arrived.
// Future-dated posts stay hidden until a rebuild happens on or after their date
// (the daily GitHub Action in .github/workflows/daily-rebuild.yml handles that).
// While previewing locally (npm run dev) everything shows.
export function isLive(entry: CollectionEntry<'posts'>) {
  if (import.meta.env.DEV) return true;
  return !entry.data.draft && entry.data.date.valueOf() <= Date.now();
}

export async function getPosts() {
  const posts = await getCollection('posts', (entry) => isLive(entry));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDay(date: Date) {
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'America/Chicago' });
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function readingTime(body: string | undefined) {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
