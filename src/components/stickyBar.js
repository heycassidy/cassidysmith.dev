/** @jsx jsx */
import { jsx } from "theme-ui"
import CassidyLinks from "./cassidyLinks"
import ProfilePhoto from "./profilePhoto"

const styles = theme => {
  return {
    position: "sticky",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    padding: t => `${t.space.paragraph} clamp(${t.space[1]}, 7.5vw, ${t.space[4]})`,
    display: "flex",
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    backgroundColor: ["neutral.0", null, null, "transparent"],
    borderTopColor: ["neutral.30", null, null, "transparent"],
  }
}

export default (props) => {
  return (
    <div sx={styles}>
      {/* <ProfilePhoto
        image={props.data.profilePhoto.childImageSharp.fluid}
        sx={{ marginRight: 2 }}
      /> */}
      <CassidyLinks />
    </div>
  )
}
