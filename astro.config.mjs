// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-website-url.com', // Replace this with your actual website URL
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    domains: [],
    remotePatterns: [{ protocol: "https" }],
  }
});