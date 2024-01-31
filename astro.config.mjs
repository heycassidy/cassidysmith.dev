import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/remark/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://cassidysmith.dev',
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    smartypants: true,
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
          'return-down-forward-sharp',
          'logo-github',
          'logo-linkedin',
          'logo-instagram',
        ],
      },
    }),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
    sitemap(),
  ],
})
