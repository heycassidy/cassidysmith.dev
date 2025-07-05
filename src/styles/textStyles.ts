import { defineTextStyles } from '@pandacss/dev'
import type { SystemStyleObject } from '@pandacss/dev'

const sizes = [
  '2xs',
  'xs',
  'sm',
  'xs',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
] as const

type Sizes = (typeof sizes)[number]

type SizeStylesObject = {
  [key in Sizes]: {
    value: SystemStyleObject
  }
}

const sizeStyles = sizes.reduce<SizeStylesObject>(
  (acc, size) => ({
    ...acc,
    [size]: {
      value: {
        fontSize: size,
        lineHeight: `fz.${size}`,
        letterSpacing: `fz.${size}`,
      },
    },
  }),
  {} as SizeStylesObject
)

const h1: SystemStyleObject = {
  fontWeight: '720',
  marginBlockStart: '2rlh',
  marginBlockEnd: 'calc(1rlh / 3)',
}
const h2: SystemStyleObject = {
  fontWeight: '720',
  marginBlockStart: '2rlh',
  marginBlockEnd: 'calc(1rlh / 3)',
}
const h3: SystemStyleObject = {
  fontWeight: '720',
  marginBlockStart: '2rlh',
  marginBlockEnd: 'calc(1rlh / 3)',
}
const h4: SystemStyleObject = {
  fontWeight: '680',
  marginBlockStart: '2rlh',
  marginBlockEnd: 'calc(1rlh / 3)',
}
const h5: SystemStyleObject = {
  fontWeight: '680',
  marginBlockStart: '2rlh',
  marginBlockEnd: 'calc(1rlh / 3)',
}
const h6: SystemStyleObject = {
  fontWeight: '680',
  marginBlockStart: '2rlh',
  marginBlockEnd: 'calc(1rlh / 3)',
}

export default defineTextStyles({
  ...sizeStyles,
  h1: {
    value: { ...h1, ...sizeStyles['4xl'] },
  },
  h2: {
    value: { ...h2, ...sizeStyles['3xl'] },
  },
  h3: {
    value: { ...h3, ...sizeStyles['2xl'] },
  },
  h4: {
    value: { ...h4, ...sizeStyles['xl'] },
  },
  h5: {
    value: { ...h5, ...sizeStyles['lg'] },
  },
  h6: {
    value: { ...h6, ...sizeStyles['md'] },
  },
})
