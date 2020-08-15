/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const styles = theme => {
  return {
    width: theme.space[3],
    height: theme.space[3],
    borderRadius: '500px',
    boxShadow: '0 0 4px -1px black',
    marginBottom: 'paragraph',
  }
}

export default (data) => {

  return (
    <Img
      sx={styles}
      draggable={false}
      fluid={data.image}
      alt="a small photo of Cassidy"
    />
  )
}
