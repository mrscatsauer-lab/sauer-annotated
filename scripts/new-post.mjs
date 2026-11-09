// Usage: npm run new -- "My Post Title"
// Creates src/content/posts/my-post-title.md as a draft with today's date.
import { writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.log('Give it a title:  npm run new -- "My Post Title"');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/posts/${slug}.md`;
if (existsSync(file)) {
  console.log(`Already exists: ${file}`);
  process.exit(1);
}
const today = new Date().toLocaleDateString('en-CA');
writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
description: ""
date: ${today}
shelf: essays # essays, reviews, writing-life, teaching, or parents
tags: []
draft: true # change to false when it's ready to publish
---

Start writing here.
`,
);
console.log(`Created ${file}`);
