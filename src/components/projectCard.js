/** @jsx jsx */
import { jsx } from "theme-ui"
import { alpha } from "@theme-ui/color"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { LinkExternalIcon } from "@primer/octicons-react"

const styles = theme => ({
  "& + &": { marginTop: "paragraph" },
  backgroundColor: "neutral.0",
  padding: t => `clamp(${t.space[1]}, 6.66vw, ${t.space[2]})`,
  borderRadius: "8px",
  boxShadow: t => `0 4px 10px -4px ${t.colors.neutral[30]}`,

  ".heading": {
    fontWeight: "semibold",
    marginTop: "large",
    marginBottom: 1,
    letterSpacing: ".01ch",
    color: alpha("text", 0.8),
  },
  ".description": {
    marginBottom: 1,
    "*:last-child": {
      marginBottom: 0,
    },
  },
  ".tag": {
    fontSize: "small",
    textTransform: "uppercase",
    letterSpacing: ".2ch",
    color: alpha("text", 0.7),
  },
})

const ActionLink = props => (
  <a
    className={props.className}
    href={props.href}
    sx={{
      display: 'inline-block',
      ".octicon": {
        marginLeft: "medium",
        width: '.9em',
        height: '.9em',
      },
    }}
  >
    {props.ctaText} {props.icon}
  </a>
)

export default (props) => {

  const project = props.project;

  return (
    <li sx={styles}>
      <span className="tag">{project.frontmatter.tag}</span>
      <h3 className="heading">{project.frontmatter.title}</h3>
      <div className="description">
        <MDXRenderer>{props.body}</MDXRenderer>
      </div>
      <ActionLink
        className="cta"
        href={project.frontmatter.ctaURL}
        icon={<LinkExternalIcon verticalAlign="middle" />}
        ctaText={project.frontmatter.ctaText}
      />
    </li>
  )
}