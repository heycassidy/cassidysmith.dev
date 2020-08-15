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
    padding: `clamp(${theme.space[1]}, 7.5vw, ${theme.space[4]})`,
  },
})

const SplitLayout = props => (
  <div sx={styles}>
    <div>{props.left}</div>
    <div>
      <ul sx={{
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }}>{props.right}</ul>
    </div>
  </div>
)

export default SplitLayout;
