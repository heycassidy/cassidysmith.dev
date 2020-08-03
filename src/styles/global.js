import "./scss/main.scss"

export default theme => ({
  ":root": {
    fontSize: "base",
  },
  body: {
    fontWeight: "regular",
    fontFamily: "body",
    lineHeight: "body",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 1,
    '&:not(:first-child)': {
      marginTop: 2
    }
  },
  h1: {
    fontSize: `clamp(${theme.fontSizes[3]}, 7.8125vw, ${theme.fontSizes[5]})`,
    lineHeight: 5,
  },
  h2: {
    fontSize: `clamp(${theme.fontSizes[2]}, 5.989583333vw, ${theme.fontSizes[4]})`,
    lineHeight: 4,
  },
  h3: {
    fontSize: `clamp(${theme.fontSizes[1]}, 4.557291667vw, ${theme.fontSizes[3]})`,
    lineHeight: 3,
  },
  h4: {
    fontSize: `clamp(${theme.fontSizes[0]}, 3.515625vw, ${theme.fontSizes[2]})`,
    lineHeight: 2,
  },
  h5: {
    fontSize: `clamp(${theme.fontSizes[0]}, 2.734375vw, ${theme.fontSizes[1]})`,
    lineHeight: 1,
  },
  h6: {
    fontSize: `clamp(${theme.fontSizes[0]}, 2.083333333vw, ${theme.fontSizes[0]})`,
    lineHeight: 0,
  },
  p: {
    marginTop: 0,
    marginBottom: 'paragraph',
    '&:not(:first-child)': {
      marginTop: 'paragraph'
    }
  },

  'ol, ul': {
    paddingLeft: '2rem'
  },

  'li:not([class]) + li:not([class])': {
    marginTop: '.5rem'
  },

  'ol, ul, dl': {
    '&:not([class])': {
      marginTop: 1,
      marginBottom: 1
    }
  },
  
  'ol ol, ul ul, ol ul, ul ol': {
    '&:not([class])': {
      marginTop: 0,
      marginBottom: 0
    }
  }
})