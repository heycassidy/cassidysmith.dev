import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    svelte(),
    icon({
      include: {
        ion: [
          'open-sharp',
          'send-sharp',
          'checkmark-sharp',
          'clipboard-sharp',
          'grid-sharp',
          'arrow-forward-sharp',
          'arrow-back-sharp',
          'caret-forward-sharp',
          'logo-github',
          'logo-linkedin',
          'logo-instagram',
        ],
      },
    }),
    mdx(),
  ],
})
