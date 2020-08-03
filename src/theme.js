const BASE_FONT_SIZE = 16;
const BASE_LINE_HEIGHT = 1.6875;
const BASELINE = BASE_FONT_SIZE * BASE_LINE_HEIGHT;
const RATIO = 1.301;
const FONT_SIZES = [0, 1, 2, 3, 4, 5].map(n => Math.round(BASE_FONT_SIZE * RATIO ** n));
const LINE_HEIGHTS = FONT_SIZES.map(f => (Math.ceil(f / (BASELINE)) * BASELINE) / f);


const theme = {
  breakpoints: [
    "320px",
    "480px",
    "620px",
    "768px",
    "1024px",
    "1280px",
    "1920px",
    "2560px",
  ],

  fonts: {
    body:
      '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },

  fontSizes: {
    base: BASE_FONT_SIZE,
    ...FONT_SIZES.map(n => `${n / BASE_FONT_SIZE}rem`),
  },

  lineHeights: {
    body: BASE_LINE_HEIGHT,
    ...LINE_HEIGHTS,
  },

  fontWeights: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },

  colors: {
    background: "#140D1F",
    text: "#FFF",
  },

  baseline: BASELINE,

  space: Object.assign(Object.fromEntries(Object.entries(
    { 0: 0, 1: 1, 2: 2, 4: 4, 6: 6, 8: 8 }).map(([k, v]) => [k, `${v * BASE_LINE_HEIGHT}rem`])
  ), { small: '2px', medium: '4px', large: '8px', paragraph: `${BASE_LINE_HEIGHT / 2}rem` }),
}

export default theme;