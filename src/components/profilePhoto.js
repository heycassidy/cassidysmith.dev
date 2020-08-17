/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const styles = theme => {
  return {
    width: theme.space[1],
    height: theme.space[1],
    borderRadius: 9999,
    overflow: 'hidden',
    boxShadow: '0 0 4px -1px black',
  }
}

export default (props) => {

  return (
    <div className={props.className} sx={styles}>
      <Img
        draggable={false}
        fluid={props.image}
        alt="a small photo of Cassidy"
      />
    </div>
  )
}
