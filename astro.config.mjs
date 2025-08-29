// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import dotenv from 'dotenv';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: 'https://dtm5011.github.io',
  base: '/find-local-chess',
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      useCdn: false,
    }),
  ],
});
