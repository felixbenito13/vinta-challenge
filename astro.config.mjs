import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://vinta-work-challenge.netlify.app',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  compressHTML: true,
});
