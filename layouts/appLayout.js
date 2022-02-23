import { css } from '../stitches.config'
import Banner from '../components/banner'

export default function AppLayout({ children }) {
  const styles = css({
    margin: '$0',
    border: '2px solid $decorativeBorder',
    '.content-container': {
      padding: '$0'
    }
  })

  return <div className={styles()}>
    <Banner />
    <div className='content-container'>
      {children}
    </div>
  </div>
}
