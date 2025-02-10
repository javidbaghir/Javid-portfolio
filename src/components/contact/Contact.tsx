import { useTranslation } from "react-i18next"
import Title from "../title/Title"
import styles from "./styles.module.css"

const Contact = () => {

    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <Title title={t("header.contact")} />
            <p>Email: javidbaghir1@gmail.com</p>
            <p>Phone: +994 51 635 95 50</p>
            <p>Baku, Azerbaijan</p>
        </div>
    )
}

export default Contact