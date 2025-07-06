import { cva } from '@styled-system/css'
import interactiveSurface from '@recipes/interactiveSurface'

export default cva({
  defaultVariants: {
    size: 'md',
    material: 'solid',
    iconOnly: false,
  },
  base: {
    colorPalette: 'neutral',
    lineHeight: 'tight',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5ch',

    fontFamily: 'syne',
    fontWeight: '600',

    borderRadius: 'calc({radii.bento} - {spacing.bento.padding} / 2)',

    '& [data-icon]': {
      flexShrink: 0,

      '&:first-child:not(:only-child)': {
        marginLeft: '-0.5ch',
      },
      '&:last-child:not(:only-child)': {
        marginRight: '-0.5ch',
      },
    },
    '&:any-link': {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },

  variants: {
    // Only used in combination with size
    iconOnly: {
      true: {},
      false: {},
    },
    size: {
      sm: {
        fontSize: 'sm',
        paddingBlock: '1.5',
        paddingInline: '3',
      },
      md: {
        fontSize: 'md',
        paddingBlock: '2',
        paddingInline: '3',
      },
      lg: {
        fontSize: 'lg',
        paddingBlock: '2',
        paddingInline: '4',
      },
    },
    material: {
      solid: {
        ...interactiveSurface.raw({ material: 'solid' }),
      },
      'dark-glass': {
        ...interactiveSurface.raw({ material: 'dark-glass' }),
      },
      adaptive: {
        ...interactiveSurface.raw({ material: 'adaptive' }),
      },
      ghost: {
        ...interactiveSurface.raw({ material: 'ghost' }),
      },
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      iconOnly: true,
      css: {
        paddingBlock: '1.5',
        paddingInline: '1.5',
      },
    },
    {
      size: 'md',
      iconOnly: true,
      css: {
        paddingBlock: '2',
        paddingInline: '2',
      },
    },
    {
      size: 'lg',
      iconOnly: true,
      css: {
        paddingBlock: '2',
        paddingInline: '2',
      },
    },
  ],
})
