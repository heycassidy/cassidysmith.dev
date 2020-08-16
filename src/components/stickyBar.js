/** @jsx jsx */
import { jsx } from "theme-ui"
import { darken } from "@theme-ui/color"
import CassidyLinks from "./cassidy-links"
import ProfilePhoto from "./profile-photo"

const styles = theme => {
  return {
    position: 'sticky',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    padding: 'paragraph',
    backgroundColor: darken(theme.colors['background'], .03),
    display: 'flex',
  }
}

export default (props) => {
  return (
    <div sx={styles}>
      <ProfilePhoto image={props.data.profilePhoto.childImageSharp.fluid} sx={{ marginRight: 2 }}/>
      <CassidyLinks />
    </div>
  )
}
