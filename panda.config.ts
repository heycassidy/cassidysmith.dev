import { defineConfig } from '@pandacss/dev'
import theme from '@styles/theme'
import globalCss from '@styles/global'
import { prose } from '@styles/patterns'

const globalVars = {
  '--font-atkinson': 'Atkinson Hyperlegible, sans-serif',
  '--font-syne': 'Syne Variable, sans-serif',
  '--clamp-scaling-factor': '3vi - 0.5rem',
}

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro,svelte}'],

  // Files to exclude
  exclude: [],

  globalVars,
  globalCss,

  theme,

  conditions: {
    extend: {
      light: '[data-color-mode="light"] &',
      dark: '[data-color-mode="dark"] &',
      focusVisibleWithin: '&:has(:focus-visible)',
      noHover: '@media (hover: none)',
      supportsHover: '@media (hover: hover)',
      link: '&:link',
    },
  },

  patterns: {
    extend: {
      prose,
    },
  },

  utilities: {
    extend: {},
  },

  staticCss: {
    css: [
      {
        properties: {
          colorPalette: ['neutral', 'purple', 'green', 'pink'],
        },
      },
    ],
  },

  // The output directory for your css system
  outdir: 'styled-system',

  separator: '-',

  minify: true,

  hash: { cssVar: false, className: true },

  // Doesn't work with backdropFilter for some reason
  // https://github.com/chakra-ui/panda/discussions/2550
  // lightningcss: true,

  shorthands: false,

  strictPropertyValues: true,
})
