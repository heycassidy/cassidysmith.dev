import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/remark/remark-reading-time.mjs'
import astroExpressiveCode from 'astro-expressive-code'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://cassidysmith.dev',
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  redirects: {
    '/posts/modify-astro-slot-contents': '/posts/modify-astro-slot-children',
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
          'arrow-left-fill',
          'clipboard-fill',
          'check-line',
          'instagram-line',
          'instagram-fill',
          'github-fill',
          'linkedin-box-fill',
          'bluesky-fill',
          'hourglass-2-fill',
          'pen-nib-fill',
          'scissors-2-fill',
          'pencil-fill',
          'eraser-fill',
        ],
      },
    }),
    astroExpressiveCode(),
    mdx({}),
    sitemap(),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
