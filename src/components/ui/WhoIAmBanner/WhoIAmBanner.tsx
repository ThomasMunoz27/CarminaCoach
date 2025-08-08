import styles from './WhoIAmBanner..module.css'

export const WhoIAmBanner = () => {
  return (
    <>
        <div className={styles.whoIAmContainer}>
            <div className={styles.whoIAmContent}>
                <div className={styles.textSide}>
                    <h2>¿Quien soy yo?</h2>
                    <h4>Soy ANA CARMINA PUENTES TORRES</h4>
                    <p>Soy Lic. en Administración, Coach (CPI) para emprendedores, Consultor en Coaching Organizacional, especialista en neuroventas y vendedor de profesión.

<br /><br />Me he dedicado al desarrollo de emprendedores y al fortalecimiento de equipos de ventas tanto en Colombia, Estados Unidos y en Argentina.

<br /><br />Durante los últimos 20 años me he dedicado a formarme en el desarrollo del ser y de los equipos de trabajo bajo una filosofía de emprender desde el ser.

<br /><br />He ayudado a equipos de venta a mi cargo, con capacitación constante y permanente, planificación del trabajo para cada uno de acuerdo con sus propias expectativas y los objetivos de la empresa. Ha sido primordial e importante efectuar ponencias de ventas, reuniones tratando temas como liderazgo, solución de problemas y conflictos Incentivos y logro de los objetivos propuestos, generar vínculo con el Equipo, crear propuestas y planes estratégicos.

<br /><br />He ayudado a emprendedores a crecer junto con sus proyectos y negocios.</p>
                </div>
                <div className={styles.imgsSide}>
                    <img src="public\reunion2img.jpeg" alt="" />
                    <img src="public\carminaCollage.png" alt="" />
                    <img src="public\climbImg.png" alt="" />
                </div>
            </div>

        </div>

    </>
  )
}
