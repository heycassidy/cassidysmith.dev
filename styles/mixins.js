import svgToTinyDataUri from 'mini-svg-data-uri'


export const dotPatternBackground = (color, size) => {
  const svg = `<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><g fill='${color}' fill-rule='evenodd'><circle cx='2' cy='2' r='2'/><circle cx='10' cy='10' r='2'/></g></svg>`

  return {
    backgroundImage: `url("${svgToTinyDataUri(svg)}")`,
    backgroundSize: size,
  }
}

export const focusOutline = {
  outline: '2px dashed $colors$secondary425',
  outlineOffset: '1px',
  '&:hover': { outline: 'none' }
}

export const textLink = {
  textDecorationColor: '$secondary425',
  textUnderlinePosition: 'under',
  transition: 'color 0.2s, text-decoration-color 0.2s',
  
  '&:link': {
    color: '$secondary625',
  },
  '&:visited': {
    color: '$secondary625',
  },
  '&:hover': {
    color: '$secondary425',
    textDecorationColor: '$secondary325',
  },
  '&:active, &:hover:active': {
    color: '$quaternary425',
    textDecorationColor: '$quaternary325',
  },
  '&:focus': focusOutline,
}