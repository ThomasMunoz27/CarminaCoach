import styles from './VisitSocialMedia.module.css'

export const VisitSocialMedia = () => {
  return (
    <>
        <div className={styles.visitSocialMediaContainer}>
            <div className={styles.visitSocialMediaContent}>
                <h2>Visita Mis Redes Sociales</h2>
                <h4>Visita a Ana Carmina En Redes Sociales</h4>

                <div className={styles.iconsContainer}>
                    <img src="facebookpng.png" alt="" />
                    <a href="https://www.instagram.com/carminacoach/" target='_blank' >
                        <img src="instagram.png" alt="" />
                    </a>
                    <img src="twitter.png" alt="" />
                </div>
                <div className={styles.photography}>
                    <img src="AnaFotografia.jpg" alt="" />
                </div>

                
            </div>
        </div>
    </>
  )
}
