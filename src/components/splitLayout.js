/** @jsx jsx */
import { jsx } from "theme-ui"
import { alpha } from '@theme-ui/color'

const styles = theme => ({
  display: "grid",
  gridTemplateColumns: [null, null, null, "1fr 1.301fr"],
  alignItems: "start",

  "> div": {
    position: [null, null, null, "sticky"],
    top: 0,
    padding: `clamp(${theme.space[1]}, 7.5vw, ${theme.space[3]})`,
  },

  // TEMP, to be moved
  "> div:last-of-type": {
    backgroundColor: alpha("#fff", 0.04),
    height: "150vh",
  },
})

const SplitLayout = (props) => (
  <div sx={styles}>
    <div>{props.left}</div>
    <div>{props.right}</div>
  </div>
)

export default SplitLayout;
