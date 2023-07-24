import svgToTinyDataUri from 'mini-svg-data-uri'


export const dotPatternBackground = (color, size) => {
  const svg = `<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><g fill='${color}' fill-rule='evenodd'><circle cx='2' cy='2' r='2'/><circle cx='10' cy='10' r='2'/></g></svg>`

  return {
    backgroundImage: `url("${svgToTinyDataUri(svg)}")`,
    backgroundSize: size,
  }
}

export const focusOutline = {
  outline: '2px dashed $colors$secondary525',
  outlineOffset: '1px',
  '&:hover': { outline: 'none' }
}

export const textLink = {
  textUnderlinePosition: 'under',
  transition: 'color 0.2s, text-decoration-color 0.2s',

  textDecorationColor: '$info275',

  '&:link': {
    color: '$info600',
  },
  '&:visited': {
    color: '$info525',
  },
  '&:hover': {
    color: '$info700',
    textDecorationColor: '$info625',
  },
  '&:active, &:hover:active': {
    color: '$accentOne600',
    textDecorationColor: '$accentOne275',
  },
  '&:focus': focusOutline,
}