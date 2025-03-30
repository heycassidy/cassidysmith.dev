import { cva } from '@styled-system/css'

export default cva({
  defaultVariants: {
    material: 'solid',
  },
  base: {
    colorPalette: 'neutral',
    transitionProperty: 'color, background-color, box-shadow',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',

    _active: {
      boxShadow: 'none',
    },
  },
  variants: {
    material: {
      solid: {
        _light: {
          color: 'colorPalette.775',
          backgroundColor: 'colorPalette.75',
          // boxShadow:
          //   '0 0 0 2px inset {colors.colorPalette.275}, 0 2px 0 0 {colors.colorPalette.275}',
          boxShadow:
            '0 0 0 1px inset {colors.colorPalette.150}, 0 -3px 0 0 inset {colors.colorPalette.275}',

          _hover: {
            color: 'colorPalette.875',
            backgroundColor: 'colorPalette.275',
            boxShadow: '0 0 0 1px inset {colors.colorPalette.525}',
          },
          _active: {
            color: 'active.contrast',
            backgroundColor: 'active.accent',
            boxShadow: 'unset',
          },
        },
        _dark: {
          color: 'colorPalette.275',
          backgroundColor: 'colorPalette.850',
          boxShadow:
            '0 0 0 1px inset {colors.colorPalette.775}, 0 -4px 0 0 inset {colors.colorPalette.925}',

          _hover: {
            color: 'colorPalette.400',
            backgroundColor: 'colorPalette.850',
            boxShadow: '0 0 0 1px inset {colors.colorPalette.925}',
          },
          _active: {
            color: 'active.contrast',
            backgroundColor: 'active.accent',
            boxShadow: 'unset',
          },
        },
      },
      'dark-glass': {
        backdropFilter: 'blur(8px)',

        color: 'white',
        backgroundColor: 'black / 40',

        _hover: {
          backgroundColor: 'black / 60',
        },
        _active: {
          backgroundColor: 'black',
        },
      },
      adaptive: {
        _light: {
          color: 'color-mix(in oklch, currentColor, transparent 10%)',
          backgroundColor: 'color-mix(in oklch, white, transparent 40%)',

          _hover: {
            color: 'color-mix(in oklch, currentColor, black 50%)',
            backgroundColor: 'color-mix(in oklch, white, transparent 5%)',
          },
          _active: {
            color: 'active.contrast',
            backgroundColor: 'active.accent',
          },
        },
        _dark: {
          color: 'color-mix(in oklch, currentColor, transparent 20%)',
          backgroundColor: 'color-mix(in oklch, black, transparent 70%)',

          _hover: {
            color: 'color-mix(in oklch, currentColor, transparent 0%)',
            backgroundColor: 'color-mix(in oklch, black, transparent 30%)',
          },
          _active: {
            color: 'active.contrast',
            backgroundColor: 'active.accent',
          },
        },
      },
    },
  },
})
