import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://gottu-tech.com/',
  integrations: [
    sitemap({
      filter: (page) =>
        page !== 'https://gottu-tech.com/thanks/'
    }),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ]
});