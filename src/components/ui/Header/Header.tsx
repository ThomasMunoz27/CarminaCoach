import styles from './Header.module.css'
import { useNavigate } from 'react-router'
import { useStoreSubHheader } from '../../../stores/useStoreSubHeaderStore'

export const Header = () => {
    const {optionSelected, setOptionSelected} = useStoreSubHheader()
    const menuItems = ["Home", "Portafolio", "Book Online"]
    const navigate = useNavigate()

    const handleClick = (item: string) => {
        setOptionSelected(item)
        switch(item){
            case "Home":
                navigate("/")
                break
            case "Portafolio":
                navigate("/portafolio")
                break
            default:
                
            break
        }
    }
  return (
    <>
    <header className={styles.headerContainer}>
        <div className={styles.imageContainer} onClick={()=> handleClick("Home")}>
            <img className={styles.logoImg} src="public\lic_carmina.png" alt="" />
        </div>

        <div className={styles.subHeader}>
            {menuItems.map((item) => (
                <p key={item} className={`${styles.menuItem} ${optionSelected === item ? styles.selected : ""}`} onClick={() => handleClick(item)}>
                    {item}
                </p>
            ))
            }
        </div>
    </header>
    </>
  )
}
