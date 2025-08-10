import { WhatsAppButton } from '../../WhatsAppButton/WhatsAppButton'
import styles from './Reservations.module.css'

export const Reservations = () => {
  return (
    <>
        <div className={styles.reservationsContainer}>
            <div className={styles.reservationsContent}>
                <div className={styles.imgSide}>
                    <img src="reservationImg.png" alt="" />
                </div>
                <div className={styles.textSide}>
                    <h2>Reserva tu Sesión de Coaching Ahora</h2>
                    <WhatsAppButton message='Me interesa la sesión de coaching, mi nombre es _______  de la localidad de______' buttonMessage='Click aquí para reservar ahora'></WhatsAppButton>
                </div>
            </div>
        </div>
    </>
)
}
