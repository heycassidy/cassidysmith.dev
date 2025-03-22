import { sva } from '@styled-system/css'

const mobileColumns = `
        [full-width-start breakout-start]

          1fr

        [text-start aside-start header-content-start anchor-heading-start]

          minmax(0, {sizes.xl})

        [text-end aside-end header-content-end anchor-heading-end]

          1fr

        [breakout-end full-width-end]
      `

const desktopColumns = `
        [full-width-start breakout-start anchor-heading-start]

          1fr

        [text-start header-content-start]

          minmax(0, {sizes.xl})

        [text-end anchor-heading]

          1fr

        [breakout-end aside-start]

          minmax({spacing.40}, 10fr)

        [header-content-end aside-end]

          1fr

        [full-width-end]
      `

export default sva({
  slots: [
    'root',
    'subgrid',
    'fullWidth',
    'breakout',
    'text',
    'aside',
    'headerContent',
    'anchorHeading',
  ],
  base: {
    root: {
      display: 'grid',
      alignItems: 'start',
      columnGap: 'bento.gap',
      rowGap: '1rlh',

      // Default direct child column
      '& > *': {
        gridColumn: 'text',
      },
      gridTemplateColumns: mobileColumns,
      md: {
        gridTemplateColumns: desktopColumns,
      },
    },

    // These have double ampersand to override specificity of default direct child column
    // Use full width in combination with root to create a subgrid
    fullWidth: {
      '&&': {
        gridColumn: 'full-width',
      },
    },
    breakout: {
      '&&': {
        gridColumn: 'breakout',
      },
    },
    text: {
      '&&': {
        gridColumn: 'text',
      },
    },
    aside: {
      '&&': {
        gridColumn: 'aside',
      },
    },
    headerContent: {
      '&&': {
        gridColumn: 'header-content',
      },
    },
    anchorHeading: {
      '&&': {
        gridColumn: 'anchor-heading',
      },
    },
  },
})
