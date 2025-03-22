import type { PatternConfig, SystemStyleObject } from '@pandacss/dev'
import { definePattern } from '@pandacss/dev'

export const prose: PatternConfig = definePattern({
  description: 'A container that applies typography styles to elements within.',
  transform() {
    return {
      '& h1': {
        textStyle: '4xl',
      },
      '& h2': {
        textStyle: '3xl',
      },
      '& h3': {
        textStyle: '2xl',
      },
      '& h4': {
        textStyle: 'xl',
      },
      '& h5': {
        textStyle: 'lg',
      },
      '& h6': {
        textStyle: 'md',
      },
      '& h1, h2, h3, h4, h5, h6': {
        marginBlockStart: '1rlh',

        '&:first-child': {
          marginBlockStart: 'lineHeightCrop.syne',
        },
      },
      '& h1, h2, h3': {
        fontWeight: '720',
      },
      '& h4, h5, h6': {
        fontWeight: '680',
      },
      '& p': {
        textStyle: 'md',
        textWrap: 'pretty',
      },
    }
  },
})
