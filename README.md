# Sauer, Annotated

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
shelf: essays        # reviews, essays, poems, writing-life, or classroom
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
| `src/consts.ts` | Site name, tagline, and the shelves |
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
