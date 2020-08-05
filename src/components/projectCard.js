/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ActionLink = props => (
  <a href={props.href}>{props.children} [icon]</a>
)

const Tag = props => (
  <span sx={{
    textTransform: "uppercase"
  }}>{props.children}</span>
)

const Layout = ({ project }) => {
  return (
    <div>
      <Tag>{project.frontmatter.tag}</Tag>
      <h2>{project.frontmatter.title}</h2>

      <MDXRenderer>{project.body}</MDXRenderer>
      <ActionLink href="https://nobledesktop.com">nobledesktop.com</ActionLink>
    </div>
  )
}

export default Layout