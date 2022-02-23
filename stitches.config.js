import { createStitches } from '@stitches/react'
import { defaultTheme } from './styles/themes'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: defaultTheme
})
