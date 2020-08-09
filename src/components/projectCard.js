/** @jsx jsx */
import { jsx } from "theme-ui"
import { alpha } from "@theme-ui/color"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { LinkExternalIcon } from "@primer/octicons-react"

const styles = theme => ({
  "& + &": { marginTop: 1 },
  backgroundColor: alpha("white", 0.04),
  padding: `clamp(${theme.space[1]}, 6.66vw, ${theme.space[2]})`,
  borderRadius: "8px",

  '.heading': {
    fontWeight: "semibold",
    marginTop: "large",
    marginBottom: 1,
    letterSpacing: ".01ch",
  },
  '.description': {
    marginBottom: 1,
    '*:last-child': {
      marginBottom: 0,
    }
  },
  ".tag": {
    fontSize: "small",
    textTransform: "uppercase",
    letterSpacing: ".1ch",
  },
})

const ActionLink = props => (
  <a
    className={props.className}
    href={props.href}
    sx={{
      textDecoration: "none",
      display: 'inline-block',
      "&:hover": {
        textDecoration: "underline",
      },
      ".icon": {
        marginLeft: "medium",
        color: "currentColor",
      },
    }}
  >
    {props.ctaText} {props.icon}
  </a>
)

const projectCard = ({ project }) => {
  return (
    <li sx={styles}>
      <span className="tag">{project.frontmatter.tag}</span>
      <h3 className="heading">{project.frontmatter.title}</h3>
      <div className="description">
        <MDXRenderer>{project.body}</MDXRenderer>
      </div>
      <ActionLink
        className="cta"
        href="https://nobledesktop.com"
        icon={<LinkExternalIcon className="icon" aria-label="external link" />}
        ctaText={project.frontmatter.ctaText}
      />
    </li>
  )
}

export default projectCard