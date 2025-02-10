import Title from "../title/Title"
import styles from "./styles.module.css"
import JavidPhoto from "../../assets/JavidPhoto.jpeg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"


const AboutComponent = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <Title title={t("header.about")} />

                <p>{t("about.desc")}
                </p>
                <ul>
                    <h5>{t("about.skill")}</h5>
                    <li>HTML, CSS, Tailwind CSS, TypeScript, JavaScript, React, NextJS, Redux Toolkit, Zustand. React Query, Scss, Ant Design, Testing, Vitest, Playwright</li>
                    <li>Versiya Nəzarəti: Git</li>
                    <li>{t("about.other")}</li>
                </ul>

                <Link to={"https://drive.google.com/file/d/1bccB6f9iSaCf0jLKrPdz9f-SwYPWPfXP/view?usp=sharing"} target="_blank">Resume</Link>
            </div>

            <div>
                <figure className={styles.rightSide}>
                    <img src={JavidPhoto} alt="Javid's Photo" />
                </figure>
            </div>


        </div>
    )
}

export default AboutComponent