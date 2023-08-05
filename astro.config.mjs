import { defineConfig, sharpImageService } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService(),
  },
});