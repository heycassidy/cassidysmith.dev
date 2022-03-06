import Link from 'next/link'
import { css, theme } from '../stitches.config'
import { focusOutline, dotPatternBackground } from '../styles/mixins'

const bannerStyles = css({
  marginBottom: '$medium',
  gap: '$medium',
  display: 'flex',
  
  '.dot-filler': {
    flex: '1 1 auto',
    ...dotPatternBackground(theme.colors.primary425.value, '6px')
  }
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
    display: 'block',
    textDecoration: 'none',
    
    transition: 'background-color 0.2s, color 0.2s, text-decoration-color 0.2s',
    
    '&:link, &:visited': {
      color: 'white',
      backgroundColor: '$primary600',
    },
    '&:hover': {
      backgroundColor: '$primary525',
    },
    '&:active, &:hover:active': {
      backgroundColor: '$accentOne525',
    },
    '&:focus': focusOutline,
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
      <span className="dot-filler"></span>
    </header>
  )
}
