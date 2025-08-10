import { Header } from '../../ui/Header/Header'
import { HowToHelpBanner } from '../../ui/Home/HowToHelpBanner/HowToHelpBanner'
import { InfoBanner } from '../../ui/InfoBanner/InfoBanner'
import { PresentationBanner } from '../../ui/Home/PresentationBanner/PresentationBanner'
import { VisitSocialMedia } from '../../ui/VisitSocialMedia/VisitSocialMedia'
import { WhoIAmBanner } from '../../ui/Home/WhoIAmBanner/WhoIAmBanner'
import styles from './MainScreen.module.css'
import { Footer } from '../../ui/Footer/Footer'

export const MainScreen = () => {
  return (
    <>
      <div className={styles.mainScreenContainer}>
        <div className={styles.mainContent}>
          <Header />
          <PresentationBanner />
          <InfoBanner />
          <HowToHelpBanner />
          <WhoIAmBanner />
          <VisitSocialMedia />
        </div>
        <Footer />
      </div>
    </>
  )
}
