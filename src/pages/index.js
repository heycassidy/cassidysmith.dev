import React from "react"
import { Global, css } from "@emotion/core"
import globalStyles from "../styles/global"
import SplitLayout from "../components/splitLayout"

const Home = () => (
  <>
    <Global styles={globalStyles} />

    <SplitLayout
      left={<h1>Hi, I'm Cassidy</h1>}
      right={<h2>There will be projects here</h2>}
    />
  </>
)

export default Home
