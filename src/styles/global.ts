import { defineGlobalStyles } from '@pandacss/dev'

export default defineGlobalStyles({
  html: {
    scrollBehavior: 'smooth',
    fontSize: 'clamp(1em, var(--clamp-scaling-factor), 1.25em)',
  },
  body: {
    color: 'base.text',
    backgroundColor: 'base.background',
    fontFamily: 'body',
    position: 'relative',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'heading',
  },
})
