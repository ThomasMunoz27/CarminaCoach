import styles from './Formations.module.css'

export const Formations = () => {
  return (
    <>
        <div className={styles.formationContainer}>
            <div className={styles.formationContent}>
                <h3>Formaciones</h3>
                <p>Con más de 8000 estudiantes acreditados en 17 países,  somos una de las mejores escuelas de Liderazgo y Coaching.</p>

                <div className={styles.formationImgs}>
                    <img src="public\coachingontologico.jpg" alt="" />
                    <img src="public\studyTrading.jpg" alt="" />
                    <img src="public\oratoria.jpg" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
