import { WhatsAppButton } from '../WhatsAppButton/WhatsAppButton'
import styles from './PresentationBanner.module.css'

export const PresentationBanner = () => {
  return (
    <>
        <div className={styles.presentationBannerContainer}>
            <div className={styles.presentationContent}>

                <h2 className={styles.nameTitle}>Carmina Coach</h2>
                <p className={styles.description}>Claves prácticas para emprender con éxito y entregamos herramientas adecuadas para mejorar tus resultados económicos</p>
                <WhatsAppButton
                    message='Me interesa saber mas sobre el curso de:
                            1.Especialista en Neuroventas
2. Diplomado en Coaching Organizacional'/>
            </div>

            </div>
    </>
  )
}
