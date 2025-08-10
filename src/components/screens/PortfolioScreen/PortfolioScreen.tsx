import { Footer } from '../../ui/Footer/Footer'
import { Header } from '../../ui/Header/Header'
import { CoachingSessionBanner } from '../../ui/Portfolio/CoachingSessionBanner/CoachingSessionBanner'
import { Formations } from '../../ui/Portfolio/Formations/Formations'
import { Reservations } from '../../ui/Portfolio/Reservations/Reservations'
import { VisitSocialMedia } from '../../ui/VisitSocialMedia/VisitSocialMedia'
import styles from './PortfolioScreen.module.css'

export const PortfolioScreen = () => {
  return (
    <>
    <div className={styles.portfolioScreenContainer}>
        <Header></Header>
        <CoachingSessionBanner></CoachingSessionBanner>
        <Formations></Formations>
        <Reservations></Reservations>
        <VisitSocialMedia/>
        <Footer></Footer>
    </div>
    </>
  )
}
