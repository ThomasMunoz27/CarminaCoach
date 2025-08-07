import styles from './InfoBanner.module.css'

export const InfoBanner = () => {
  return (
    <>
    <div className={styles.infoBannerContainer}>
        <div className={styles.infoBannerContent}>
            <h2>Carmina, Coach de Emprendedores</h2>
            <p>
                Ser emprendedor y vivir de un negocio propio es un sueño que muchas personas tienen.

No tener horario fijo, ser tu propio jefe, ayudar a los demás haciendo lo que te gusta, poder tomarte libre un lunes, tener un equipo que trabaje por ti…suena bien, ¿verdad?

Sin embargo, nadie te habla de lo difícil que son los comienzos como emprendedores.

Buscar clientes, pagar facturas, ser el “hombre o la mujer orquesta” y tener que hacerlo todo tú solo…yo sé todo lo que eso implica, y por eso estoy aquí.

No vengo a convencerte de que ser emprendedor es fácil, pero si quiero compartir estrategias que te permitan como emprendedor y empresario tener un negocio exitoso y en crecimiento.
            </p>
        </div>
    </div>
    </>
  )
}
