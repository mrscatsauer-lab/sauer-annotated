// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sauerannotated.com',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  redirects: { '/posts/welcome-to-the-margins': '/about', '/shelf/essays': '/shelf/soapbox' },
});
