import styles from "./styles.module.css"

interface Title {
    title: string;
}

const Title = ({title}: Title) => {
  return (

        <h2 className={styles.title}>{title}</h2>

  )
}

export default Title