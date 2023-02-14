
import { globalCss } from '../stitches.config'
import { cssReset } from './cssReset'
import { typography } from './typography'

export const globalStyles = globalCss(...[
  cssReset, 
  typography,
  {
    body: {
      color: '$text',
      backgroundColor: '$background',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: '$heading',
    },
  }
])