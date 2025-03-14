// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hermes-web-6g2.pages.dev/',

  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    domains: [],
    remotePatterns: [{ protocol: "https" }],
  },

  integrations: [sitemap()]
});