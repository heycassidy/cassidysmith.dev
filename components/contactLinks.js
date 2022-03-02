import { MailIcon, MarkGithubIcon } from '@primer/octicons-react'
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
    backgroundColor: '$primary225',

    textDecorationColor: 'transparent',
    transition: 'background-color 0.2s, color 0.2s, text-decoration-color 0.2s',

    '&:link, &:visited': {
      color: '$primary625',
    },
    '&:hover': {
      textDecorationColor: '$primary425',
      backgroundColor: '$primary125',
    },
    '&:active, &:hover:active': {
      color: '$quaternary525',
      textDecorationColor: '$quaternary525',
    },
    '&:focus': focusOutline,
  }

})


export default function ContactLinks() {

  return (
    <div className={styles()}>
      <Link href='mailto:mailto:hey@cassidysmith.dev'><a><MailIcon size={16} />hey@cassidysmith.dev</a></Link>
      <Link href='https://github.com/heycassidy'><a target='_blank' rel='noopener noreferrer'><MarkGithubIcon size={16} />github.com/heycassidy</a></Link>
    </div>
  )
}
