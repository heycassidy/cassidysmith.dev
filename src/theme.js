const BASE_FONT_SIZE = 16
const BASE_LINE_HEIGHT = 1.6875
const BASELINE = BASE_FONT_SIZE * BASE_LINE_HEIGHT
const RATIO = 1.301
const FONT_SIZES = [0, 1, 2, 3, 4, 5].map(n =>
  Math.round(BASE_FONT_SIZE * RATIO ** n)
)
const LINE_HEIGHTS = FONT_SIZES.map(
  f => (Math.ceil(f / BASELINE) * BASELINE) / f
)
const SPACES = (customSpaces => {
  let spaces = {}
  ;[0, 1, 1.5, 2, 4, 6, 8]
    .map(e => `${e * BASE_LINE_HEIGHT}rem`)
    .forEach((e, i) => {
      spaces[i] = e
    })
  Object.assign(spaces, customSpaces)
  return spaces
})({
  small: "2px",
  medium: "4px",
  large: "8px",
  paragraph: `${BASE_LINE_HEIGHT / 2}rem`,
})

const PALETTE = {
  neutral: {
    0: "#ffffff",
    10: "#fafafb",
    20: "#f3f3f4",
    25: "#ededee",
    30: "#e7e7e9",
    40: "#d7d7d9",
    50: "#c1c1c5",
    60: "#a5a5aa",
    70: "#828287",
    80: "#58575e",
    90: "#2a2930",
    100: "#000000",
  },
  blue: {
    0: "#f3feff",
    5: "#d5fcff",
    10: "#b7faff",
    20: "#82f3ff",
    30: "#5be8fa",
    40: "#3bdaf3",
    50: "#23c6e7",
    60: "#12aed7",
    70: "#078fbe",
    80: "#016b9b",
    90: "#00446c",
    100: "#001e33",
  },
  pink: {
    0: "#fff2fc",
    5: "#ffd5f6",
    10: "#ffb8ee",
    20: "#ff7eda",
    30: "#ff4ac6",
    40: "#f024b8",
    50: "#dd09ad",
    60: "#c500a3",
    70: "#a70096",
    80: "#830080",
    90: "#58005c",
    100: "#2d0033",
  },
  purple: {
    0: "#f6ecff",
    5: "#eddbfd",
    10: "#e4cbfb",
    20: "#cca1f5",
    30: "#b57cec",
    40: "#9e5fde",
    50: "#8849cc",
    60: "#7238b4",
    70: "#5d2e96",
    80: "#472772",
    90: "#2e1c49",
    100: "#140d1f",
  },
}

const theme = {
  breakpoints: ["480px", "768px", "960px", "1024px", "1280px", "1680px"],

  fonts: {
    body:
      '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },

  fontSizes: {
    base: BASE_FONT_SIZE,
    small: "0.875rem",
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
    ...PALETTE,

    background: PALETTE.neutral[10],
    text: PALETTE.neutral[100],
    mutedText: PALETTE.neutral[80],
  },

  baseline: BASELINE,

  space: SPACES,

  utils: {
    // strips unit, multiplies by -1 and reattaches unit
    negativeSpace: space => {
      const parts = space.split(/(\d?.?\d+)/).filter(e => !!e)
      return -1 * parts[0] + parts[1]
    },
  },
}

export default theme