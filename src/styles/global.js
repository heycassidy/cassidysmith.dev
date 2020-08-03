import "./scss/main.scss"

export default theme => ({
  ":root": {
    fontSize: 'base',
  },
  body: {
    fontWeight: 'regular',
    fontFamily: 'body',
    lineHeight: 'body'
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'bold',
    lineHeight: 'heading',
    marginTop: 0,
    marginBottom: '1rem',
  },
  h1: {
    fontSize: `clamp(${theme.fontSizes[4]}, 9.6vw, ${theme.fontSizes[5]})`,
  },
  h2: {
    fontSize: `clamp(${theme.fontSizes[3]}, 9.6vw, ${theme.fontSizes[4]})`,
  },
  h3: {
    fontSize: `clamp(${theme.fontSizes[2]}, 9.6vw, ${theme.fontSizes[3]})`,
  },
  h4: {
    fontSize: `clamp(${theme.fontSizes[1]}, 9.6vw, ${theme.fontSizes[2]})`,
  },
  h5: {
    fontSize: `clamp(${theme.fontSizes[0]}, 9.6vw, ${theme.fontSizes[1]})`,
  },
  h6: {
    fontSize: `clamp(${theme.fontSizes[0]}, 9.6vw, ${theme.fontSizes[0]})`,
  },
  p: {
    marginTop: 0,
    marginBottom: '1rem'
  }
})