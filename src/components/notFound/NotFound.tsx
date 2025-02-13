import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { useTranslation } from "react-i18next"

const NotFound = () => {

    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>{t("notFound.message")}</p>
            <Link className={styles.link} to="/">
                {t("notFound.btn")}
            </Link>
        </div>
    )
}

export default NotFound