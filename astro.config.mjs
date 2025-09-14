// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import dotenv from 'dotenv';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: 'https://find-local-chess-website.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      token: process.env.SANITY_API_TOKEN,
      useCdn: false,
    }),
  ],
});
