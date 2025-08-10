import { WhatsAppButton } from '../../WhatsAppButton/WhatsAppButton'
import styles from './CoachingSessionBanner.module.css'

export const CoachingSessionBanner = () => {
  return (
    <>
        <div className={styles.coachingSessionContainer}>
            <div className={styles.coachingSessionContent}>
                <h2>Sesión De Coaching Solidario Para Emprendedores</h2>
                <p>Si quieres hacer crecer tu negocio o emprendimiento puedes reservar una sesión de Coaching gratuita.  </p>
                <WhatsAppButton message='Me interesa la sesión de coaching, mi nombre es _______  de la localidad de______' buttonMessage='¡Pedila Ahora!'></WhatsAppButton>
            </div>
        </div>
    </>
)
}
