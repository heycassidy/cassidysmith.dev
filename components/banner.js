import Link from 'next/link'
import { css } from '../stitches.config'

const bannerStyles = css({
  marginBottom: '$medium'
})

const logoStyles = css({
  display: 'inline-block',
  fontFamily: '$heading',
  fontWeight: '750',
  fontSize: '$1',
  lineHeight: '$compressed',
  textTransform: 'uppercase',
  letterSpacing: '0.01ch',
  
  a: {
    padding: '$medium clamp($medium, 3vw, $large)',
    backgroundColor: '$primary525',
    display: 'block',
    
    textDecorationColor: 'transparent',
    transition: 'background-color 0.2s, color 0.2s, text-decoration-color 0.2s',
  
    '&:link, &:visited': {
      color: 'white',
    },
    '&:hover': {
      textDecorationColor: '$primary325',
    },
    '&:active, &:hover:active': {
      color: '$primary325',
    },
    '&:focus': {
      outline: '3px dashed $colors$secondary325',
      outlineOffset: '1px'
    },
  }
})

export default function Banner({ children }) {

  return (
    <header role="banner" className={bannerStyles()}>
      <nav>
        <span role="img" aria-label="Logo" className={logoStyles()}>
          <Link href='/'>
            <a>Cassidy Smith</a>
          </Link>
        </span>
      </nav>
    </header>
  )
}
