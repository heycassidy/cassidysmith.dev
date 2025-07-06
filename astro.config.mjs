import { defineConfig, envField } from 'astro/config'
import icon from 'astro-icon'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/remark/remark-reading-time.mjs'
import astroExpressiveCode from 'astro-expressive-code'
import vercel from '@astrojs/vercel'
import pathHelpers from 'astro-path-helpers'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://cassidysmith.dev',
  trailingSlash: 'never',
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  redirects: {
    '/posts/modify-astro-slot-contents': '/posts/modify-astro-slot-children',
  },
  env: {
    schema: {
      GH_PERSONAL_ACCESS_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
  markdown: {
    smartypants: true,
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    pathHelpers(),
    svelte(),
    icon(),
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
