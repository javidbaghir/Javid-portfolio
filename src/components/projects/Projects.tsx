import { useTranslation } from "react-i18next"
import { ProjectAz } from "../../database/ProjectAz"
import { ProjectEn } from "../../database/ProjectEn"
import Title from "../title/Title"
import ProjectCard from "./ProjectCard"
import styles from "./styles.module.css"

const Projects = () => {

    const { t, i18n } = useTranslation();

    const data = i18n.language === "az" ? ProjectAz : ProjectEn;

    return (
        <div id="projects" className={styles.container}>
            <div className={styles.title}>
                <Title title={t("header.project")} />
            </div>

            <div className={styles.allProjects}>
                {data.map((project, index) => (
                    <ProjectCard key={project.id} index={index} title={project.title} desc={project.description} img={project.image} link={project.link} />
                ))}
            </div>
        </div>
    )
}

export default Projects