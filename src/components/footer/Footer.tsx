import { Github, Linkedin, Mail } from "lucide-react"
import styles from "./styles.module.css";
import bgVector from "../../assets/footer/Vector.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Link to={"https://www.linkedin.com/in/javid-baghir/"} target="_blank"> <Linkedin /> </Link>
        <Link to={"mailto:javidbaghir1@gmail.com"} target="_blank">   <Mail /> </Link>
        <Link to={"https://github.com/javidbaghir?tab=repositories"} target="_blank">  <Github /> </Link>
      </div>

      <p>Javid Baghirov 2025</p>

      <figure>
        <img src={bgVector} alt="Vector" />
      </figure>
    </div>
  )
}

export default Footer