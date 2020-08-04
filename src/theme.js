const BASE_FONT_SIZE = 16;
const BASE_LINE_HEIGHT = 1.6875;
const BASELINE = BASE_FONT_SIZE * BASE_LINE_HEIGHT;
const RATIO = 1.301;
const FONT_SIZES = [0, 1, 2, 3, 4, 5].map(n => Math.round(BASE_FONT_SIZE * RATIO ** n));
const LINE_HEIGHTS = FONT_SIZES.map(f => (Math.ceil(f / (BASELINE)) * BASELINE) / f);
const SPACES = ((customSpaces) => {
  let spaces = {};
  [0, 1, 2, 4, 6, 8].map((e) => `${e * BASE_LINE_HEIGHT}rem`).forEach((e, i) => { spaces[i] = e })
  Object.assign(spaces, customSpaces)
  return spaces;
})({
  small: "2px",
  medium: "4px",
  large: "8px",
  paragraph: `${BASE_LINE_HEIGHT / 2}rem`,
})


const theme = {
  breakpoints: ["480px", "768px", "960px", "1024px", "1280px", "1680px"],

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
    pink: "#FF4AC6",
    cyan: "#82F3FF",
  },

  baseline: BASELINE,

  space: SPACES,
}

export default theme;