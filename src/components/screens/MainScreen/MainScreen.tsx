import { Header } from '../../ui/Header/Header'
import { HowToHelpBanner } from '../../ui/HowToHelpBanner/HowToHelpBanner'
import { InfoBanner } from '../../ui/InfoBanner/InfoBanner'
import { PresentationBanner } from '../../ui/PresentationBanner/PresentationBanner'
import { VisitSocialMedia } from '../../ui/VisitSocialMedia/VisitSocialMedia'
import { WhoIAmBanner } from '../../ui/WhoIAmBanner/WhoIAmBanner'
import styles from './MainScreen.module.css'

export const MainScreen = () => {
  return (
    <>
    <div className={styles.mainScreenContainer}>
        <Header></Header>
        <PresentationBanner></PresentationBanner>
        <InfoBanner></InfoBanner>
        <HowToHelpBanner/>
        <WhoIAmBanner></WhoIAmBanner>
        <VisitSocialMedia/>
    </div>
    </>
  )
}
