import { SendAltFilled20, LogoGithub20, LogoLinkedin20 } from '@carbon/icons-react'
import Link from 'next/link'
import { css } from '../stitches.config'
import { focusOutline } from '../styles/mixins'


const styles = css({
  marginTop: '$medium',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$medium',

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5ch',
    flexWrap: 'wrap',
    padding: '0 $medium',
    textDecoration: 'none',

    transition: 'background-color 0.2s, color 0.2s, text-decoration-color 0.2s',
    
    '&:link, &:visited': {
      color: '$primary950',
      backgroundColor: '$primary275',
    },
    '&:hover': {
      color: '$primary600',
      backgroundColor: '$primary175',
    },
    '&:active, &:hover:active': {
      color: '$accentOne525',
    },
    '&:focus': focusOutline,
  }

})


export default function ContactLinks() {

  return (
    <div className={styles()}>
      <Link href='mailto:mailto:hey@cassidysmith.dev'><a><SendAltFilled20 />hey@cassidysmith.dev</a></Link>
      <Link href='https://github.com/heycassidy'><a target='_blank' rel='noopener noreferrer'><LogoGithub20 />Github</a></Link>
      <Link href='https://www.linkedin.com/in/csdev'><a target='_blank' rel='noopener noreferrer'><LogoLinkedin20 />LinkedIn</a></Link>
    </div>
  )
}
