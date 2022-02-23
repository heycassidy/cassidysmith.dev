import { palettes } from "./colors"

const BASE_FONT_SIZE = 20
const BASE_LINE_HEIGHT = 1.5
const BASELINE = BASE_FONT_SIZE * BASE_LINE_HEIGHT

const FONT_SIZES = [1, 1.25, 1.75, 2.5, 3.5, 4.75, 6.25].map(n => n * BASE_FONT_SIZE)

const LINE_HEIGHTS = FONT_SIZES.map((fontSize) => {
  let subdivision = 0.5
  let baseline = BASELINE * subdivision
  let remainder = baseline % fontSize
  let multiple = Math.ceil(fontSize / baseline)

  if (!((fontSize - remainder) >= baseline)) {
    subdivision = 1
  }

  return (multiple * baseline) / fontSize
})

const SPACES = FONT_SIZES.map(fontSize => {
  return `${(fontSize / BASE_FONT_SIZE) * BASE_LINE_HEIGHT}rem`
})


export const defaultTheme = {
  palettes: palettes,
  
  colors: {
    ...palettes,
    text: '$primary625',
    heading: '$primary625',
    background: '$primary0',
    decorativeBorder: '$primary425'
  },

  fonts: {
    body: '"Atkinson Hyperlegible", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    headings: '"SyneVariable", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },


  fontSizes: {
    ...FONT_SIZES.map(n => `${n / BASE_FONT_SIZE}rem`),
    base: `${BASE_FONT_SIZE/16}em`,
    body: `${FONT_SIZES[0] / BASE_FONT_SIZE}rem`,
  },

  lineHeights: {
    ...LINE_HEIGHTS,
    body: LINE_HEIGHTS[0],
    compressed: 1.2
  },

  space: {
    ...SPACES,
    tiny: '0.125rem',
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },
}
