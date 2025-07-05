import { cva } from '@styled-system/css'

export default cva({
  defaultVariants: {
    mode: 'focus-visible',
  },
  base: {
    '--focus-ring-box-shadow': `
      0 0 0 3px white,
      0 0 0 3px inset white
    `,
    '--focus-ring-outline': '2px solid {colors.blue.525}',
    '--focus-ring-outline-offset': '-1px',
  },
  variants: {
    mode: {
      focus: {
        '&:focus': {
          boxShadow: 'var(--focus-ring-box-shadow)',
          outline: 'var(--focus-ring-outline)',
          outlineOffset: 'var(--focus-ring-outline-offset)',
        },
      },
      'focus-visible': {
        '&:focus-visible': {
          boxShadow: 'var(--focus-ring-box-shadow)',
          outline: 'var(--focus-ring-outline)',
          outlineOffset: 'var(--focus-ring-outline-offset)',
        },
      },
      'focus-within': {
        '&:focus-within': {
          boxShadow: 'var(--focus-ring-box-shadow)',
          outline: 'var(--focus-ring-outline)',
          outlineOffset: 'var(--focus-ring-outline-offset)',
        },
      },
      'focus-visible-within': {
        '&:has(:focus-visible)': {
          boxShadow: 'var(--focus-ring-box-shadow)',
          outline: 'var(--focus-ring-outline)',
          outlineOffset: 'var(--focus-ring-outline-offset)',
        },
      },
    },
  },
})
