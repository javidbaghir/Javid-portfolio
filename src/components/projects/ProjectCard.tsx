import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface Card {
    index: number;
    title: string;
    desc: string;
    img: string;
    link: string;
}
const ProjectCard = ({ index, title, desc, img, link }: Card) => {
    const { t } = useTranslation();
    const isLeft = index % 2 === 0;

    return (
        <div className={styles.cardContainer}>
            <div className={isLeft ? styles.cardLeftSide : styles.cardRightSide}>
                <div className={styles.cardTexts}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <Link to={`${link}`} target="_blank">{t("project.button")}</Link>
                </div>
            </div>

            <figure className={styles.figure}>
                <img src={img} alt="Project Image" />
            </figure>
        </div>
    );
};

export default ProjectCard;
