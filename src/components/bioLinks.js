/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { LinkExternalIcon, MailIcon, MarkGithubIcon } from "@primer/octicons-react"

const styles = theme => {

  return {
    marginTop: 2,
    display: 'grid',
    gridGap: 1,
    gridTemplateColumns: [null, 'auto auto', null, 'auto', 'auto auto'],
    alignItems: 'center',
    maxWidth: '20rem',
    
    '.profile-image': {
      width: theme.space[3],
      height: theme.space[3],
      borderRadius: '500px',
      border: '1px solid black',
    },
    
    '.links': {
      display: 'flex',
      flexWrap: 'wrap',
      margin: `${theme.utils.negativeSpace(theme.space['large'])} ${theme.utils.negativeSpace(theme.space['paragraph'])}`,
    
      '.link': {
        marginTop: 'medium',
        marginBottom: 'medium',
        marginLeft: 'paragraph',
        marginRight: 'paragraph',
        flex: '0 1 auto'
      },
    
      '.octicon': {
        marginRight: 'large',
        width: '.9em',
        height: '.9em',
      }
    }
  }
}
  

const bioLinks = (data) => {

  return (
    <div sx={styles}>
      <Img
        className="profile-image"
        draggable={false}
        fluid={data.fluidImage}
        alt="A corgi smiling happily"
      />
      <div className="links">
        <a href="mailto:hey@cassidysmith.dev" className="link">
          <MailIcon verticalAlign="middle"/> hey@cassidysmith.dev
        </a>
        <a href="https://github.com/heycassidy" className="link">
          <MarkGithubIcon verticalAlign="middle"/> GitHub
        </a>
      </div>
    </div>
  )
}

export default bioLinks
