/** @jsx jsx */
import { jsx } from "theme-ui"
import { alpha } from "@theme-ui/color"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { LinkExternalIcon } from "@primer/octicons-react"

const styles = theme => ({
  "& + &": { marginTop: 'paragraph' },
  backgroundColor: 'projectCardBackground',
  padding: `clamp(${theme.space[1]}, 6.66vw, ${theme.space[2]})`,
  borderRadius: '8px',
  boxShadow: `0 4px 10px -4px ${theme.colors.projectCardShadow}`,

  '.heading': {
    fontWeight: "semibold",
    marginTop: "large",
    marginBottom: 1,
    letterSpacing: ".01ch",
    color: alpha(theme.colors['text'], .8),
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
    letterSpacing: ".2ch",
    color: alpha(theme.colors['text'], .7),
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

const projectCard = (props) => {

  const project = props.project;

  return (
    <li sx={styles}>
      <span className="tag">{project.frontmatter.tag}</span>
      <h3 className="heading">{project.frontmatter.title}</h3>
      <div className="description">
        <MDXRenderer>{project.body}</MDXRenderer>
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

export default projectCard