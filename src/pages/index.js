import React from "react"
import { graphql } from "gatsby"
import { css } from 'theme-ui'
import { Global } from "@emotion/core"
import globalStyles from "../styles/global"
import { ThemeProvider } from "theme-ui"
import theme from "../theme"
import SplitLayout from "../components/splitLayout"
import ProjectCard from "../components/projectCard"


const Home = ({ data: { allMdx: { edges }} }) => {
  const projects = edges.map(edge => (
    <ProjectCard key={edge.node.id} project={edge.node}>{edge.node.body}</ProjectCard>
  ))
  
  return (
    <ThemeProvider theme={theme}>
      <Global styles={css(globalStyles)(theme)} />

      <SplitLayout
        left={
          <>
            <h1 className="mega-heading">Hi, I'm Cassidy.</h1>
            <p>
              I’m a front-end engineer and web designer at{" "}
              <a href="https://nobledesktop.com">Noble Desktop</a>, where we help
              people learn essential tech skills. I mostly do front-end
              development and design, but also work up and down the Rails stack.
            </p>
            <p>
              Call me <strong>Cass</strong>-cading Style Sheets (ba-dum-tss), but
              CSS is more than a bad joke to me. I’ve been writing the stuff for
              5+ years and I love how enjoyable and powerful modern CSS can be. I
              also love to write JavaScript, Ruby and whatever else I can get my
              hands on.
            </p>
          </>
        }
        right={<>{projects}</>}
      />
    </ThemeProvider>
  )
}

export const projects = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          body
          frontmatter {
            title
            tag
            published
            ctaText
          }
        }
      }
    }
  }
`


export default Home

