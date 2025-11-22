import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://louis_he.github.io/aurora_watcher_web',
  base: '/',
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});