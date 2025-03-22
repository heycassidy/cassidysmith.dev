import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
  themes: ['github-dark', 'github-light'],
  themeCssSelector: (theme) => `[data-color-mode='${theme.type}']`,
  styleOverrides: {
    uiFontFamily: 'var(--font-atkinson)',
    uiFontSize: 'var(--font-sizes-xs)',
    codeFontSize: 'var(--font-sizes-xs)',
    // codeFontFamily: 'var(--font-monaspace-neon)',
    codePaddingBlock: 'var(--spacing-3)',
    codePaddingInline: 'var(--spacing-8)',
    borderRadius: 'calc(var(--radii-bento) / 2)',
    borderWidth: '1px',
    borderColor: ({ theme }) =>
      theme.type === 'dark'
        ? 'var(--colors-neutral-775)'
        : 'var(--colors-neutral-275)',
    codeBackground: ({ theme }) =>
      theme.type === 'dark'
        ? 'var(--colors-neutral-875)'
        : 'var(--colors-neutral-50)',

    frames: {
      tooltipSuccessBackground: 'var(--colors-neutral-925)',
      frameBoxShadowCssValue: 'none',
      editorTabBarBackground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--colors-neutral-850)'
          : 'var(--colors-neutral-75)',
      editorActiveTabIndicatorTopColor: 'none',
      editorActiveTabIndicatorBottomColor: 'none',
      editorActiveTabBackground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--colors-neutral-875)'
          : 'var(--colors-neutral-25)',
      terminalBackground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--colors-neutral-875)'
          : 'var(--colors-neutral-25)',
      terminalTitlebarBackground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--colors-neutral-850)'
          : 'var(--colors-neutral-75)',
      terminalTitlebarBorderBottomColor: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--colors-neutral-775)'
          : 'var(--colors-neutral-75)',
      terminalTitlebarDotsForeground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--colors-neutral-775)'
          : 'var(--colors-neutral-75)',
      terminalTitlebarDotsOpacity: 1,
    },
  },
  plugins: [
    {
      name: 'Custom Base Styles',
      baseStyles: `
      grid-column: breakout !important;
      font-variant-ligatures: discretionary-ligatures;
    `,
    },
  ],
})
