import { alpha } from "@theme-ui/color"
import "./scss/main.scss"

export default theme => ({
  ":root": {
    fontSize: 'base',
  },
  body: {
    fontWeight: "regular",
    fontFamily: "body",
    lineHeight: "body",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: ".675em",
    "&:not(:first-child)": {
      marginTop: "1.125em",
    },
  },
  '.mega-heading': {
    fontSize: `clamp(${theme.fontSizes[4]}, 7.8125vw, ${theme.fontSizes[5]})`,
    lineHeight: 5,
  },
  h1: {
    fontSize: `clamp(${theme.fontSizes[3]}, 5.989583333vw, ${theme.fontSizes[4]})`,
    lineHeight: 4,
  },
  h2: {
    fontSize: `clamp(${theme.fontSizes[2]}, 4.557291667vw, ${theme.fontSizes[3]})`,
    lineHeight: 3,
  },
  h3: {
    fontSize: `clamp(${theme.fontSizes[1]}, 3.515625vw, ${theme.fontSizes[2]})`,
    lineHeight: 2,
  },
  h4: {
    fontSize: `clamp(${theme.fontSizes[0]}, 2.734375vw, ${theme.fontSizes[1]})`,
    lineHeight: 1,
  },
  h5: {
    fontSize: `clamp(${theme.fontSizes[0]}, 2.083333333vw, ${theme.fontSizes[0]})`,
    lineHeight: 0,
  },
  h6: {
    fontSize: `clamp(${theme.fontSizes[0]}, 2.083333333vw, ${theme.fontSizes[0]})`,
    lineHeight: 0,
  },
  p: {
    color: alpha(theme.colors.text, .8),
    marginTop: 0,
    marginBottom: 1,
    "&:not(:first-child)": {
      marginTop: "paragraph",
    },
  },

  a: {
    textDecoration: 'underline',
    transition: 'color .15s ease-out',

    '&:link': { color: theme.colors.text },
    '&:visited': { color: theme.colors.text },
    '&:hover': { color: alpha(theme.colors.text, .6) },
    '&:focus': { color: theme.colors.cyan },
    '&:active': { color: theme.colors.pink },
  },

  "ol, ul": {
    paddingLeft: "2rem",
  },

  "li:not([class]) + li:not([class])": {
    marginTop: ".5rem",
  },

  "ol, ul, dl": {
    "&:not([class])": {
      marginTop: 1,
      marginBottom: 1,
    },
  },

  "ol ol, ul ul, ol ul, ul ol": {
    "&:not([class])": {
      marginTop: 0,
      marginBottom: 0,
    },
  },
})