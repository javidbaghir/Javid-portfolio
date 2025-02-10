import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import styles from "./styles.module.css"


const MainLayout = () => {
  return (
    <div>
      <div className={styles.containerr}>
        <Header />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout