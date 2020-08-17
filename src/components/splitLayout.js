/** @jsx jsx */
import { jsx } from "theme-ui"

const styles = theme => ({
  display: "grid",
  gridTemplateColumns: [null, null, null, "1fr 1.301fr"],
  alignItems: "start",

  "> div": {
    position: [null, null, null, "sticky"],
    top: 0,
    padding: `clamp(${theme.space[1]}, 7.5vw, ${theme.space[4]})`,
  },

  '&::before': {
    content: "''",
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundImage: `linear-gradient(${theme.colors.bgGradientA}, ${theme.colors.bgGradientB})`,
  }
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
