import { WhatsAppButton } from '../WhatsAppButton/WhatsAppButton'
import styles from './HowToHelpBanner.module.css'

export const HowToHelpBanner = () => {

  return (
    <>
        <div className={styles.helpBannerContainer}>
            <div className={styles.helpBannerContent}>
                <img src="public\reunionImg.jpg" alt="" />

                <div className={styles.textSide}>
                    <h2>¿Como Te podemos Ayudar?</h2>
                    <p>A través del coaching con estrategia,   llevo a mi cliente o coachee por un proceso estratégico paso a paso hacia el logro de un fin.

Para alcanzarlo es necesario como primer paso definir bien este proceso.

Es por esto que como tu coach, en las primeras sesiones te voy a guiar para que puedas definir o si fuese el caso; descubrir cuál es su objetivo.
                    </p>

                    <WhatsAppButton
                                        message='Me interesa saber mas sobre el curso de:
                                                1.Especialista en Neuroventas
                    2. Diplomado en Coaching Organizacional'/>
                </div>
            </div>
        </div>
    </>
  )
}
