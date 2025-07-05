import { cva } from '@styled-system/css'

export default cva({
  base: {
    transitionDuration: '0.3s',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',

    color: 'inherit',
  },
  defaultVariants: {
    color: true,
    decoration: true,
    visited: true,
  },
  variants: {
    color: {
      true: {
        _light: {
          color: 'blue.525',
          textDecorationColor: 'blue.275',
          _hover: {
            color: 'blue.400',
            textDecorationColor: 'currentcolor',
          },
          _active: {
            color: 'active.accent',
            textDecorationColor: 'currentcolor',
          },
          _visited: {
            color: 'blue.525',
            textDecorationColor: 'blue.275',
            _hover: {
              color: 'blue.400',
              textDecorationColor: 'currentcolor',
            },
            _active: {
              color: 'active.accent',
              textDecorationColor: 'currentcolor',
            },
          },
        },
        _dark: {
          color: 'blue.150',
          textDecorationColor: 'blue.150',
          _hover: {
            color: 'blue.275',
            textDecorationColor: 'currentColor',
          },
          _active: {
            color: 'active.accent',
            textDecorationColor: 'currentColor',
          },
          _visited: {
            color: 'blue.150',
            textDecorationColor: 'blue.150',
            _hover: {
              color: 'blue.275',
              textDecorationColor: 'currentColor',
            },
            _active: {
              color: 'active.accent',
              textDecorationColor: 'currentColor',
            },
          },
        },
      },
      false: {},
    },
    decoration: {
      true: {
        textDecorationLine: 'underline',
        textUnderlineOffset: '0.08em',
        textDecorationThickness: '0.08em',

        _hover: {
          textDecorationThickness: '0.04em',
          textUnderlineOffset: '0.3em',
        },
      },
      false: {},
    },

    // Only used in combination with color
    visited: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      color: true,
      visited: true,
      css: {
        _light: {
          _visited: {
            color: 'purple.525',
            textDecorationColor: 'purple.275',
            _hover: {
              color: 'purple.400',
            },
          },
        },
        _dark: {
          _visited: {
            color: 'purple.525',
            textDecorationColor: 'purple.775',
            _hover: {
              color: 'purple.400',
            },
          },
        },
      },
    },
    {
      color: true,
      decoration: true,
      css: {
        transitionProperty:
          'color, text-decoration-thickness, text-underline-offset, text-decoration-color',
      },
    },
    {
      color: true,
      decoration: false,
      css: {
        transitionProperty: 'color',
      },
    },
    {
      color: false,
      decoration: true,
      css: {
        transitionProperty:
          'text-decoration-thickness, text-underline-offset, text-decoration-color',
      },
    },
  ],
})
