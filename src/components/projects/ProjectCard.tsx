// import { Link } from "react-router-dom"
// import styles from "./styles.module.css"

// const ProjectCard = () => {
//     return (
//         <div className={styles.cardContainer}>
//             <div className={styles.cardLeftSide}>
//                 <div className={styles.cardTexts}>
//                     <h3>Project Title</h3>
//                     <p>Description of the project</p>
//                     <Link to={"/"}>View Project</Link>
//                 </div>
//             </div>

//             <figure className={styles.figure}>
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJPj0HWyitAAbJ-MtTbMykS1zXSSogUJjdVgJhIAYTZnqipirpJ2dHcnrL3Uh0ULzga8&usqp=CAU" alt="Project Image" />
//             </figure>
//         </div>
//     )
// }

// export default ProjectCard

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface Card {
    index: number;
    title: string;
    desc: string;
    img: string;
    link: string;
}
const ProjectCard = ({ index, title, desc, img, link }: Card) => {
    const isLeft = index % 2 === 0;
    console.log(img)

    return (
        <div className={styles.cardContainer}>
            <div className={isLeft ? styles.cardLeftSide : styles.cardRightSide}>
                <div className={styles.cardTexts}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <Link to={`${link}`} target="_blank">View Project</Link>
                </div>
            </div>

            <figure className={styles.figure}>
                <img src={img} alt="Project Image" />
            </figure>
        </div>
    );
};

export default ProjectCard;
