import { WhatsAppButton } from '../WhatsAppButton/WhatsAppButton'
import styles from './ContactUsBanner.module.css'

export const ContactUsBanner = () => {
  return (
    <>
    <div className={styles.contactUsContainer}>
        <div className={styles.contactUsContent}>
            <h2>Contact Us</h2>
            <p>¿Quieres conocer todo lo que sucede en Carmina Coach antes que nadie?

<br /><br />Si quieres estar al día o saber sobre los próximos cursos, eventos y actividades que llevaremos a cabo en Carmina Coach escríbeme hoy mismo

<br /><br />Email us at coachconestrategia@gmail.com
            </p>
            <WhatsAppButton message='Me interesa saber mas sobre el curso de:
                                                1.Especialista en Neuroventas
                    2. Diplomado en Coaching Organizacional' buttonMessage='Contactame Ahora'></WhatsAppButton>
        </div>
    </div>
    </>
  )
}
