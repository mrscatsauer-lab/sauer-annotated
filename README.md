# Catherine, Annotated

Margin notes on books, writing, and everything else. Built with [Astro](https://astro.build), hosted on Vercel at **sauerannotated.com**.

## Run it on your computer

```bash
npm install      # first time only
npm run dev      # then open http://localhost:4321
```

Drafts show up while you're running `npm run dev`. They never show up on the live site.

## Write a new post

```bash
npm run new -- "My Post Title"
```

That creates `src/content/posts/my-post-title.md` as a draft with today's date. Write in it, then change `draft: true` to `draft: false` when it's ready.

Every post starts with this block (called front matter):

```yaml
---
title: "My Post Title"
description: "One sentence that shows up on cards and in search results."
date: 2026-11-08
shelf: soapbox       # soapbox, reviews, writing-life, teaching, or parents
tags: [books, teaching]
draft: false
---
```

Book reviews can add a catalog card:

```yaml
book:
  title: Frankenstein
  author: Mary Shelley
  rating: 4.5        # optional, 0 to 5, halves allowed
```

### Formatting tricks

| You type | You get |
| --- | --- |
| `<aside class="note">scribble</aside>` | A handwritten margin note (floats into the margin on laptops) |
| `<mark>words</mark>` | Highlighter |
| `> A quote` | Big italic pull quote |
| `---` on its own line | A `* * *` section break |
| `<div class="poem">` ... `</div>` | Keeps a poem's line breaks |

The draft post **How to Write a Post** in `src/content/posts/` shows all of these in action.

### Series

Add `series:` to a post's front matter to put it in a recurring feature: `pass-the-potatoes`, `what-to-say-when`, `teenager-translator`, or `small-lives`. Each series has its own page at `/series/<name>/`. Add or rename series in `src/consts.ts` and `src/content.config.ts`.

### Hidden annotations (for stories)

Add `hiddenNotes: true` to a story's front matter. Its margin notes, plus anything wrapped in `<mark class="clue">...</mark>`, stay hidden on the first read. At the end, readers get a "Read it again, annotated" button that reveals them. *The Library After Dark* shows how it works.

### Companion pieces

Add `companion: other-post-file-name` (no `.md`) to link two pieces with a "read it with its companion" card. *In the Dark* and *When I Wake* point to each other.

## Dinner Table Cards

The conversation deck lives at `/cards/`. Edit, add, or remove questions in `src/data/cards.ts`.

## Publish

```bash
git add .
git commit -m "New post: My Post Title"
git push
```

Vercel rebuilds and the post is live in about a minute.

## Where things live

| File | What it controls |
| --- | --- |
| `src/styles/global.css` | Colors, fonts, spacing (change the variables at the top) |
| `src/consts.ts` | Site name, tagline, and the shelf names and subtitles |
| `src/content.config.ts` | Allowed shelves and post fields (keep in sync with `consts.ts`) |
| `src/pages/index.astro` | Home page |
| `src/pages/about.astro` | About page |
| `src/assets/crow-logo.webp` | The crow logo (replace this file to change it everywhere) |
| `src/assets/art/` | Illustrations (shelf icons, hero, About, 404) |
| `public/art/` | Decorative bits: scribbles, crosses, tulip row |
| `src/layouts/Post.astro` | How a single post looks |

## Sample posts

The three posts in `src/content/posts/` are drafts. Rewrite or delete the welcome post and the Frankenstein review before publishing. Keep the cheat sheet if it's useful; it stays a draft forever.

## Later: newsletter

When you're ready, sign up for Buttondown, Kit, or Beehiiv, copy their embed form, and paste it into a new component (for example `src/components/Newsletter.astro`), then add it to the home page and the bottom of `src/layouts/Post.astro`.
