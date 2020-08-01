import React from "react"
import { css } from "@emotion/core"

const styles = css`
  ${'' /* display: grid; */}
  ${'' /* grid-template-columns: 1fr 1.5fr;
  grid-column-gap: 5rem; */}

  > div {
    padding: 3rem;
  }
`

const SplitLayout = (props) => (
  <div css={styles}>
    <div>{props.left}</div>
    {/* <div>{props.right}</div> */}
  </div>
)

export default SplitLayout


