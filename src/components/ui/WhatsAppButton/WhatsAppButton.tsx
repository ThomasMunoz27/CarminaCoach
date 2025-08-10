import type { FC } from 'react'
import styles from './WhatsAppButton.module.css'

interface IWhatsAppButton {
    message: string
    buttonMessage: string
}

export const WhatsAppButton:FC<IWhatsAppButton> = ({message, buttonMessage}) => {

    const phoneNumber = `5492613045554`

    const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
        <a href={whatsAppLink} target='_blank' rel='noopener noreferrer'>
            <button className={styles.buttonWhats}>
                {buttonMessage}
            </button>
        </a>
    </>
  )
}
