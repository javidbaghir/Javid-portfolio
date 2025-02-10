import styles from "./styles.module.css"
import JavidPhoto from "../../assets/JavidPhoto.jpeg"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { handleLinkClick } from "../../utils/util";

const Hero = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.text}>
                    <p>{t("hero.jobTitle")}</p>
                    <p>{t("hero.greeting")}</p>
                    <p>{t("hero.desc")}</p>
                </div>

                <div className={styles.button}>
                    <button onClick={() => handleLinkClick("projects", navigate)} className={styles.projectBtn}>{t("header.project")}</button>
                    <Link to={"https://www.linkedin.com/in/javid-baghir/"} target="_blank" className={styles.linkedinBtn}>Linkedin</Link>
                </div>
            </div>

            <div>
                <figure className={styles.rightSide}>
                    <img src={JavidPhoto} alt="Javid's Photo" />
                </figure>
            </div>
        </div >
    )
}

export default Hero