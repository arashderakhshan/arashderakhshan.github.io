import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arashd.ir',
  output: 'static',
  outDir: './docs',
  integrations: [sitemap()],
});