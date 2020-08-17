import React from "react"
import { graphql } from "gatsby"
import { css, ThemeProvider, useThemeUI } from "theme-ui"
import { Global } from "@emotion/core"
import globalStyles from "../styles/global"
import { Helmet } from "react-helmet"
import SplitLayout from "../components/splitLayout"
import ProjectCard from "../components/projectCard"
import StickyBar from "../components/stickyBar"


const Home = (props) => {
  const projects = props.data.projects.edges.map(edge => (<ProjectCard data={props.data} key={edge.node.id} project={edge.node}>{edge.node.body}</ProjectCard>));
  
  // const context = ;
  const { theme, colorMode } = useThemeUI();


  theme.colors =
    colorMode === "dark"
      ? { ...theme.colors, ...theme.colors.modes.dark }
      : theme.colors

  return (
    <ThemeProvider theme={theme}>
      <Global styles={css(globalStyles)(theme)} />

      <Helmet>
        <title>{props.data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={props.data.site.siteMetadata.description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
      </Helmet>

      <SplitLayout
        left={
          <>
            <h1 className="mega-heading">Hi, I’m Cassidy.</h1>

            <p>
              I’m a front-end engineer and web designer at{" "}
              <a href="https://nobledesktop.com">Noble Desktop</a>, where we
              help people learn essential tech skills. I mostly do front-end
              development and design, but also work up and down the Rails stack.
            </p>
            <p>
              Call me <strong>Cass</strong>-cading Style Sheets (ba-dum-tss),
              but CSS is more than a bad joke to me. I’ve been writing the stuff
              for 5+ years and I love how enjoyable and powerful modern CSS can
              be. I also love to write JavaScript, Ruby and whatever else I can
              get my hands on.
            </p>
          </>
        }
        right={<>{projects}</>}
      />

      <StickyBar data={props.data} />
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    projects: allMdx(sort: {fields: frontmatter___order, order: ASC}, filter: {frontmatter: {published: {eq: true}}}) {
      edges {
        node {
          id
          body
          frontmatter {
            title
            tag
            published
            ctaText
            ctaURL
            order
          }
        }
      }
    }
    profilePhoto: file(relativePath: { eq: "cassidy.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 54,
          maxHeight: 54,
          quality: 60,
        ) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`


export default Home

