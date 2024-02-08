import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/remark/remark-reading-time.mjs'
import astroExpressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: 'https://cassidysmith.dev',
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    smartypants: true,
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    svelte(),
    icon({
      include: {
        ri: [
          'arrow-right-up-line',
          'send-plane-fill',
          'mail-send-fill',
          'skip-right-fill',
          'skip-left-fill',
          'gallery-view',
          'grid-fill',
          'corner-down-right-line',
          'link',
          'arrow-right-circle-fill',
          'arrow-right-fill',
          'clipboard-fill',
          'check-line',
          'instagram-line',
          'instagram-fill',
          'github-fill',
          'linkedin-box-fill',
          'hourglass-2-fill',
          'pen-nib-fill',
          'scissors-2-fill',
        ],
      },
    }),
    astroExpressiveCode(),
    mdx({}),
    sitemap(),
  ],
})
