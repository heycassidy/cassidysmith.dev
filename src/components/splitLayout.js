/** @jsx jsx */
import { jsx } from "theme-ui"

const styles = {
  // display: "grid",
  // gridTemplateColumns: "1fr 1.5fr",
  // gridColumnGap: 4,
}

const SplitLayout = (props) => (
  <div sx={styles}>
    <div>{props.left}</div>
    <div>{props.right}</div>
  </div>
)

export default SplitLayout;
