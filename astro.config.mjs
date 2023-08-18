import { defineConfig, sharpImageService } from 'astro/config';
import icon from "astro-icon";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    icon({
      include: {
        ion: ["mail-open-sharp", "open-sharp", "checkmark-sharp", "clipboard-sharp", "logo-github", "logo-linkedin", "logo-instagram"],
      }
    })
  ],
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService(),
  },
});