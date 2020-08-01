import React from "react"
import { Global, css } from "@emotion/core"
import globalStyles from "../styles/global"
import SplitLayout from "../components/splitLayout"

const Home = () => (
  <>
    <Global styles={globalStyles} />

    <SplitLayout
      left={
        <>
          <h1>Hi, I'm Cassidy</h1>
          <h2>Hi, I'm Cassidy</h2>
          <h3>Hi, I'm Cassidy</h3>
          <h4>Hi, I'm Cassidy</h4>
          <h5>Hi, I'm Cassidy</h5>
          <h6>Hi, I'm Cassidy</h6>
          <p>
            I’m a front-end engineer and web designer at Noble Desktop, where we
            help people learn essential tech skills. I mostly do front-end
            development and design, but also work up and down the Rails stack.
          </p>
          <p>
            Call me Cass-cading Style Sheets (ba-dum-tss), but CSS is more than
            a bad joke to me. I’ve been writing the stuff for 5+ years and I
            love how enjoyable and powerful modern CSS can be. I also love to
            write JavaScript, Ruby and whatever else I can get my hands on.
          </p>
        </>
      }
      right={
        <>
          <h2>There will be projects here</h2>
        </>
      }
    />
  </>
)

export default Home
