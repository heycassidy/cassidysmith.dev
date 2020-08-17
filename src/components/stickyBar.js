/** @jsx jsx */
import { jsx } from "theme-ui"
import CassidyLinks from "./cassidyLinks"
import ProfilePhoto from "./profilePhoto"
import ColorModeToggle from "./colorModeToggle"

const styles = theme => {
  return {
    position: 'sticky',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    padding: 'paragraph',
    backgroundColor: 'barBackground',
    borderTop: `1px solid ${theme.colors.barBorder}`,
    display: 'flex',
  }
}

export default (props) => {
  return (
    <div sx={styles}>
      <ProfilePhoto
        image={props.data.profilePhoto.childImageSharp.fluid}
        sx={{ marginRight: 2 }}
      />
      <CassidyLinks />
      {/* <ColorModeToggle /> */}
    </div>
  )
}
