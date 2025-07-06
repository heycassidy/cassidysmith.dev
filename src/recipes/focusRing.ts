import { cva } from '@styled-system/css'

export default cva({
  defaultVariants: {
    mode: 'focus-visible',
  },
  base: {
    '--focus-ring-outline': '4px double {colors.neutral.875}',
    '--focus-ring-box-shadow': `0 0 0 2px {colors.neutral.25}`,
    '--focus-ring-outline-offset': '0',
  },
  variants: {
    mode: {
      focus: {
        '&:focus': {
          zIndex: 1,
          boxShadow: 'var(--focus-ring-box-shadow)',
          outline: 'var(--focus-ring-outline)',
          outlineOffset: 'var(--focus-ring-outline-offset)',
        },
      },
      'focus-visible': {
        '&:focus-visible': {
          zIndex: 1,
          boxShadow: 'var(--focus-ring-box-shadow)',
          outline: 'var(--focus-ring-outline)',
          outlineOffset: 'var(--focus-ring-outline-offset)',
        },
      },
      'focus-within': {
        '&:focus-within': {
          zIndex: 1,
          boxShadow: 'var(--focus-ring-box-shadow)',
          outline: 'var(--focus-ring-outline)',
          outlineOffset: 'var(--focus-ring-outline-offset)',
        },
      },
      'focus-visible-within': {
        '&:has(:focus-visible)': {
          zIndex: 1,
          boxShadow: 'var(--focus-ring-box-shadow)',
          outline: 'var(--focus-ring-outline)',
          outlineOffset: 'var(--focus-ring-outline-offset)',
        },
      },
    },
  },
})
