import { css } from '../stitches.config'
import ContactLinks from '../components/contactLinks'

const styles = css({
  backgroundColor: '$background',
})

export default function Footer({ children }) {

  return (
    <footer className={styles()}>
      <ContactLinks />
    </footer>
  )
}