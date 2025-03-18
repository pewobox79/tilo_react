import styles from '../../styles/DefaultButton.module.css'
import { CSSProperties } from 'react'


type DefaultButtonType = {

    title: "Open" | "Save" | "download",
    type?: "default" | "negative",
    action: () => void;
    style: CSSProperties
}
const DefaultButton = ({ title, action, type ="default", style }: DefaultButtonType) => {

    return <button className={type === "default" ? `${styles.btn}` : `${styles.negativeBtn}`} onClick={action} style={style}>{title}</button>
}

export default DefaultButton
