import textStyles from '@styles/textStyles'
import layerStyles from '@styles/layerStyles'
import colors from '@styles/colors'

const semanticTokens = {
  colors: {
    base: {
      background: {
        value: {
          _light: '{colors.neutral.25}',
          _dark: '{colors.neutral.900}',
        },
      },
      text: {
        value: {
          _light: '{colors.neutral.650}',
          _dark: '{colors.neutral.400}',
        },
      },
    },
    active: {
      accent: {
        value: '{colors.orange.525}',
      },
      contrast: {
        value: '{colors.orange.50}',
      },
    },
    stark: {
      background: { value: { _light: 'white', _dark: 'black' } },
      foreground: { value: { _light: 'black', _dark: 'white' } },
    },
  },
  spacing: {
    bento: {
      padding: {
        value: 'clamp({spacing.3}, var(--clamp-scaling-factor), {spacing.4})',
      },
      gap: {
        value: 'clamp({spacing.3}, var(--clamp-scaling-factor), {spacing.4})',
      },
    },
  },
  radii: {
    bento: {
      value: 'clamp({spacing.3}, var(--clamp-scaling-factor), {spacing.4})',
    },
  },
}

export default {
  extend: {
    tokens: {
      colors,
      fonts: {
        atkinson: { value: 'var(--font-atkinson)' },
        syne: { value: 'var(--font-syne)' },
        body: { value: 'var(--font-atkinson)' },
        heading: { value: 'var(--font-syne)' },
      },

      // https://precise-type.com/modular-scale.html
      fontSizes: {
        '2xs': { value: '0.6875rem' },
        xs: { value: '0.8125rem' },
        sm: { value: '0.875rem' },
        md: { value: '1rem' },
        lg: { value: '1.125rem' },
        xl: { value: '1.25rem' },
        '2xl': { value: '1.4375rem' },
        '3xl': { value: '1.5625rem' },
        '4xl': { value: '1.8125rem' },
        '5xl': { value: '2rem' },
        '6xl': { value: '2.25rem' },
        '7xl': { value: '2.5rem' },
        '8xl': { value: '2.8125rem' },
        '9xl': { value: '3.1875rem' },
      },

      lineHeights: {
        // line heights that correspond to font sizes
        // from https://precise-type.com/modular-scale.html
        fz: {
          '3xs': { value: '1.4545' },
          '2xs': { value: '1.8462' },
          xs: { value: '1.7143' },
          md: { value: '1.5' },
          lg: { value: '1.3333' },
          xl: { value: '1.6' },
          '2xl': { value: '1.3913' },
          '3xl': { value: '1.28' },
          '4xl': { value: '1.3793' },
          '5xl': { value: '1.25' },
          '6xl': { value: '1.3333' },
          '7xl': { value: '1.2' },
          '8xl': { value: '1.2444' },
          '9xl': { value: '1.098' },
        },
      },

      letterSpacings: {
        // letter spacings that correspond to font sizes
        // from https://precise-type.com/modular-scale.html
        fz: {
          '3xs': { value: '0.0136em' },
          '2xs': { value: '0.0069em' },
          xs: { value: '0.0043em' },
          md: { value: '0em' },
          lg: { value: '-0.0033em' },
          xl: { value: '-0.006em' },
          '2xl': { value: '-0.0091em' },
          '3xl': { value: '-0.0108em' },
          '4xl': { value: '-0.0134em' },
          '5xl': { value: '-0.015em' },
          '6xl': { value: '-0.0167em' },
          '7xl': { value: '-0.018em' },
          '8xl': { value: '-0.0193em' },
          '9xl': { value: '-0.0206em' },
        },
      },

      spacing: {
        lineHeightCrop: {
          syne: { value: 'calc((1lh - 1cap) * -0.5 + 0.2cap)' },
        },
        fluid: {
          container: {
            // inspired by open props

            // step: 0.5
            1: { value: 'clamp({spacing.0.5}, var(--cqw, 3cqw), {spacing.1})' },
            2: { value: 'clamp({spacing.1}, var(--cqw, 3cqw), {spacing.1.5})' },
            3: { value: 'clamp({spacing.1.5}, var(--cqw, 3cqw), {spacing.2})' },

            // step: 1
            4: { value: 'clamp({spacing.2}, var(--cqw, 3cqw), {spacing.3})' },
            5: { value: 'clamp({spacing.3}, var(--cqw, 3cqw), {spacing.4})' },

            // step: 2
            6: { value: 'clamp({spacing.4}, var(--cqw, 3cqw), {spacing.6})' },
            7: { value: 'clamp({spacing.6}, var(--cqw, 3cqw), {spacing.8})' },

            // step: 4
            8: { value: 'clamp({spacing.8}, var(--cqw, 3cqw), {spacing.12})' },
            9: { value: 'clamp({spacing.12}, var(--cqw, 3cqw), {spacing.16})' },
            10: {
              value: 'clamp({spacing.16}, var(--cqw, 3cqw), {spacing.20})',
            },

            // step: 8
            11: {
              value: 'clamp({spacing.20}, var(--cqw, 3cqw), {spacing.28})',
            },
            12: {
              value: 'clamp({spacing.28}, var(--cqw, 3cqw), {spacing.36})',
            },
          },
        },
      },
    },

    textStyles,

    layerStyles,

    keyframes: {
      diceSpin: {
        '0%': {
          transform: 'rotate3d(1, 1, 1, 0deg)',
        },
        '100%': {
          transform: 'rotate3d(5, 10, 0, 360deg)',
        },
      },
    },
  },
  semanticTokens,
}
