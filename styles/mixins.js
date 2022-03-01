export const textLink = {
  textDecorationColor: '$quaternary325',
  textUnderlinePosition: 'under',
  transition: 'color 0.2s, text-decoration-color 0.2s',
  
  '&:link': {
    color: '$quaternary625',
  },
  '&:visited': {
    color: '$quaternary625',
  },
  '&:hover': {
    color: '$quaternary425',
    textDecorationColor: '$quaternary325',
  },
  '&:active, &:hover:active': {
    color: '$quinary425',
    textDecorationColor: '$quinary325',
  },
  '&:focus': {
    // textDecoration: 'none',
    outline: '2px dashed $colors$secondary325',
    outlineOffset: '2px',
    ":hover": {
      outline: 'none'
    }
  },
}