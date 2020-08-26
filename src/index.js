import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css, ThemeProvider, Styled } from "theme-ui"
import globalStyles from "./styles/global"
import { Global } from "@emotion/core"
import theme from "./gatsby-plugin-theme-ui"
import Helmet from "react-helmet"


const CassWebApp = ({ element }) => {
  return <div>{element}</div>
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Global styles={css(globalStyles)(theme)} />
    <StaticQuery
      query={graphql`
        query HelmetQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          />
        </Helmet>
      )}
    />
    <Styled.root>
      <CassWebApp element={element} />
    </Styled.root>
  </ThemeProvider>
  )


