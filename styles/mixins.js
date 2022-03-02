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