import { RiMailFill, RiGithubFill, RiLinkedinBoxFill, RiLink } from "react-icons/ri"
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
      color: '$primary625',
      backgroundColor: '$primary225',
    },
    '&:hover': {
      color: '$primary525',
      backgroundColor: '$primary125',
    },
    '&:active, &:hover:active': {
      color: '$quaternary525',
    },
    '&:focus': focusOutline,
  }

})


export default function ContactLinks() {

  return (
    <div className={styles()}>
      <Link href='mailto:mailto:hey@cassidysmith.dev'><a><RiMailFill />hey@cassidysmith.dev</a></Link>
      <Link href='https://github.com/heycassidy'><a target='_blank' rel='noopener noreferrer'><RiGithubFill />Github</a></Link>
      <Link href='https://www.linkedin.com/in/csdev'><a target='_blank' rel='noopener noreferrer'><RiLinkedinBoxFill />LinkedIn</a></Link>
    </div>
  )
}
