import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/remark/remark-reading-time.mjs'
import astroExpressiveCode from 'astro-expressive-code'
import vercel from '@astrojs/vercel'
import pathHelpers from "astro-path-helpers"

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
    pathHelpers(),
    svelte(),
    icon({
      include: {
        ri: [
          'arrow-left-fill',
          'arrow-right-circle-fill',
          'arrow-right-fill',
          'arrow-right-up-line',
          'bluesky-fill',
          'check-line',
          'clipboard-fill',
          'corner-down-right-line',
          'eraser-fill',
          'file-copy-fill',
          'gallery-view',
          'github-fill',
          'grid-fill',
          'hourglass-2-fill',
          'instagram-fill',
          'instagram-line',
          'link',
          'linkedin-box-fill',
          'mail-send-fill',
          'pen-nib-fill',
          'pencil-fill',
          'scissors-2-fill',
          'send-plane-fill',
          'skip-left-fill',
          'skip-right-fill',
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
