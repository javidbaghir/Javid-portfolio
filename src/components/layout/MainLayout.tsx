import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import styles from "./styles.module.css"
import { ThemeProvider } from "../context/ThemeContext.tsx"


const MainLayout = () => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className={styles.containerr}>
          <Header />
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MainLayout