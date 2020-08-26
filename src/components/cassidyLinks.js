/** @jsx jsx */
import { jsx } from "theme-ui"
import { MarkGithubIcon } from "@primer/octicons-react"

const styles = theme => {

  return {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: ["space-evenly", "flex-start"],
    flex: "1",
    margin: t => `0 ${t.utils.negativeSpace(t.space['paragraph'])}`,

    ".link": {
      marginLeft: "paragraph",
      marginRight: "paragraph",
      flex: "0 1 auto",
    },

    ".email-full-address": {
      display: ["none", "inline"],
    },

    ".email-short": {
      display: ["inline", "none"],
    },

    ".icon": {
      marginRight: ["large", "paragraph"],
      width: "1.25em",
      height: "1.25em",
      fill: "currentColor",
      verticalAlign: "-.3em",
    },
  }
}

export default (props) => {

  return (
    <div className={props.className} sx={styles}>
      <a href="mailto:hey@cassidysmith.dev" className="link">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
          <path d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z" /><path d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z" />
          <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg><span className="email-full-address">hey@cassidysmith.dev</span><span aria-hidden="true" className="email-short">Email</span>
      </a>
      <a href="https://github.com/heycassidy" className="link">
        <MarkGithubIcon className="icon"/><span>GitHub</span>
      </a>
    </div>
  )
}
