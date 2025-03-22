import { cva } from '@styled-system/css'

export default cva({
  defaultVariants: {
    mode: 'focus-visible',
    color: 'accent',
  },
  base: {},
  variants: {
    mode: {
      focus: {
        '&:focus': {
          outlineStyle: 'dashed',
          outlineOffset: '1px',
          outlineWidth: '2px',
          boxShadow: 'none',
        },
      },
      'focus-visible': {
        '&:focus-visible': {
          outlineStyle: 'dashed',
          outlineOffset: '1px',
          outlineWidth: '2px',
          boxShadow: 'none',
        },
      },
      'focus-within': {
        '&:focus-within': {
          outlineStyle: 'dashed',
          outlineOffset: '1px',
          outlineWidth: '2px',
          boxShadow: 'none',
        },
      },
      'focus-visible-within': {
        '&:has(:focus-visible)': {
          outlineStyle: 'dashed',
          outlineOffset: '1px',
          outlineWidth: '2px',
          boxShadow: 'none',
        },
      },
    },
    color: {
      accent: {
        outlineColor: 'active.accent',
      },
      white: {
        outlineColor: 'white',
      },
    },
  },
})
