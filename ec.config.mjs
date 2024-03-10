import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
  themes: ['github-dark', 'github-light'],
  themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
  styleOverrides: {
    uiFontFamily: 'var(--font-atkinson)',
    uiFontSize: 'var(--font-size--1)',
    codeFontSize: 'var(--font-size--1)',
    codeFontFamily: 'var(--font-monaspace-neon)',
    codePaddingBlock: 'var(--fluid-bento-padding)',
    codePaddingInline: 'calc(var(--fluid-bento-padding) * 2)',
    borderRadius: 'calc(var(--fluid-bento-radius) / 2)',
    borderWidth: '1px',
    borderColor: ({ theme }) =>
      theme.type === 'dark'
        ? 'var(--color-neutral-775)'
        : 'var(--color-neutral-275)',
    codeBackground: ({ theme }) =>
      theme.type === 'dark'
        ? 'var(--color-neutral-875)'
        : 'var(--color-neutral-0)',

    frames: {
      tooltipSuccessBackground: 'var(--color-neutral-950)',
      frameBoxShadowCssValue: 'none',
      editorTabBarBackground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--color-neutral-850)'
          : 'var(--color-neutral-175)',
      editorActiveTabIndicatorTopColor: 'none',
      editorActiveTabIndicatorBottomColor: 'none',
      editorActiveTabBackground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--color-neutral-875)'
          : 'var(--color-neutral-0)',
      terminalBackground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--color-neutral-875)'
          : 'var(--color-neutral-0)',
      terminalTitlebarBackground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--color-neutral-850)'
          : 'var(--color-neutral-175)',
      terminalTitlebarBorderBottomColor: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--color-neutral-775)'
          : 'var(--color-neutral-175)',
      terminalTitlebarDotsForeground: ({ theme }) =>
        theme.type === 'dark'
          ? 'var(--color-neutral-775)'
          : 'var(--color-neutral-175)',
      terminalTitlebarDotsOpacity: 1,
    },
    textMarkers: {
      lineDiffIndicatorMarginLeft: 'calc(var(--fluid-bento-padding) / 4)',
    },
  },
  plugins: [
    {
      name: 'Custom Base Styles',
      baseStyles: `
      --column: breakout;
      font-variant-ligatures: discretionary-ligatures;
    `,
    },
  ],
})
