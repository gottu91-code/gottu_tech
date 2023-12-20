import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://gottu-tech.com/',
  integrations: [
    sitemap({
      filter: (page) =>
        page !== 'https://gottu-tech.com/thanks/'
    })
  ]
});