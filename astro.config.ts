import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://hermes-web-6g2.pages.dev/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca', 'fr', 'de'],
  },
  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    domains: [],
    remotePatterns: [{ protocol: "https" }],
  },

  integrations: [sitemap()]
});