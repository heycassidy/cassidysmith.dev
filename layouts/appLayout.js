import { css } from '../stitches.config'
import Banner from '../components/banner'
import Footer from '../components/footer'

export default function AppLayout({ children }) {
  const styles = css({
    margin: 'clamp(0rem, 3vw, $large)',
    // display: 'grid',
    // gap: '$tiny',
    // padding: '$tiny',
    // backgroundColor: '$decorativeBorder',
    
    

    '.content-container': {
      border: '2px solid $decorativeBorder',
      maxWidth: '75ch', 
      // backgroundColor: '$background',
      padding: 'clamp($medium, 3vw, $large)',
      paddingBottom: 'clamp($medium, 3vw, $0)'
    }
  })

  return <div className={styles()}>
    <Banner />
    <div className='content-container'>
      {children}
    </div>
    <Footer />
  </div>
}