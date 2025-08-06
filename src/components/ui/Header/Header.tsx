import { useState } from 'react'
import styles from './Header.module.css'

export const Header = () => {
    const [selected, setSelected] = useState("Home")
    const menuItems = ["Home", "Portafolio", "Book Online"]
  return (
    <>
    <header className={styles.headerContainer}>
        <div className={styles.imageContainer}>
            <img src="public\lic_carmina.png" alt="" />
        </div>

        <div className={styles.subHeader}>
            {menuItems.map((item) => (
                <p key={item} className={`${styles.menuItem} ${selected === item ? styles.selected : ""}`} onClick={() => setSelected(item)}>
                    {item}
                </p>
            ))
            }
        </div>
    </header>
    </>
  )
}
