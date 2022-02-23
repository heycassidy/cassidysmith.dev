export const textLink = {
  textDecorationColor: '$primary325',
  textUnderlinePosition: 'under',
  transition: 'color 0.2s, text-decoration-color 0.2s',
  
  '&:link': {
    color: '$primary525',
  },
  '&:visited': {
    color: '$primary425',
  },
  '&:hover': {
    color: '$primary525',
    textDecorationColor: '$primary525',
  },
  '&:active, &:hover:active': {
    color: '$quinary425',
    textDecorationColor: '$quinary325',
  },
  '&:focus': {
    outline: 'none'
  },
  '&:focus:not(:hover)': {
    textDecoration: 'none',
    backgroundColor: '$primary225',
    boxShadow: '0 0 0 2px $colors$primary525'
  },
}
export const logoLink = {
  textDecorationColor: 'transparent',
  transition: 'background-color 0.2s, color 0.2s, text-decoration-color 0.2s',
  
  '&:link': {
    color: '$primary725',
  },
  '&:visited': {
    color: 'currentColor',
  },
  '&:hover': {
    color: '$primary525',
    textDecorationColor: '$primary325',
  },
  '&:active, &:hover:active': {
    color: '$quinary425',
    textDecorationColor: '$quinary325',
  },
  '&:focus': {
    outline: 'none'
  },
  '&:focus:not(:hover)': {
    textDecorationColor: 'transparent',
    backgroundColor: '$primary225',
    // boxShadow: '0 0 0 2px $colors$primary525'
  },
}