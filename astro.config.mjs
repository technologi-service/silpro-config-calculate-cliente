// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import react from '@astrojs/react';


import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  output: "server",

  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: +(process.env.PORT ?? 3000),
  },

  integrations: [react()]
});
