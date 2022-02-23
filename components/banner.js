import Link from 'next/link'
import { css } from '../stitches.config'
import { logoLink } from '../styles/mixins'

export default function Banner({ children }) {
  const styles = css({
    borderBottom: '2px solid $decorativeBorder',
    '[role=img][aria-label=Logo]': {
      display: 'inline-block',
      padding: '$medium $0',
      fontFamily: '$headings',
      fontWeight: '700',
      fontSize: '$1',
      lineHeight: '$compressed',
      borderRight: '2px solid $decorativeBorder',
      textTransform: 'uppercase',
      letterSpacing: '0.05ch'

    },
    '.logo-link': logoLink
  })

  return (
    <header role="banner" className={styles()}>
      <nav>
        <span role="img" aria-label="Logo">
          <Link href='/'>
            <a className='logo-link'>Cassidy Smith</a>
          </Link>
        </span>
      </nav>
    </header>
  )
}
