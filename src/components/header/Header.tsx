import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { handleLinkClick } from "../../utils/util";
import styles from "./styles.module.css";
import { Menu, Moon, Sun, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }

    const { darkMode, setDarkMode } = themeContext;
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLanguageChange = (e: any) => {
        i18n.changeLanguage(e.target.value);
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.logo}>{t("header.name")}</Link>

            <nav className={styles.nav}>
                <NavLink className={({ isActive }) => (isActive ? styles.isActive : "")} to="/">
                    {t("header.home")}
                </NavLink>
                <button onClick={() => handleLinkClick("projects", navigate)} className="navbar-link">
                    {t("header.project")}
                </button>
                <NavLink className={({ isActive }) => (isActive ? styles.isActive : "")} to="/about">
                    {t("header.about")}
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.isActive : "")} to="/contact-us">
                    {t("header.contact")}
                </NavLink>
            </nav>

            <div className="flex items-center gap-2">
                <select name="lang" id="lang" onChange={handleLanguageChange} className="hidden md:block">
                    <option value="en">English</option>
                    <option value="az">Azərbaycan</option>
                </select>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded"
                >
                    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>

            </div>
            <button onClick={toggleMenu} className="block md:hidden">
                {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {menuOpen && (
                <div className="fixed top-0 right-0 h-[100vh] w-[70%] bg-white text-black z-50 p-8 md:hidden transition-transform duration-500">
                    <button onClick={toggleMenu} className="absolute top-4 right-4">
                        <X size={32} />
                    </button>
                    <ul className="mt-8 space-y-6">
                        <li>
                            <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? styles.isActive : "")} >{t("header.home")}</NavLink>
                        </li>
                        <li>
                            <button onClick={() => { toggleMenu(); handleLinkClick("projects", navigate); }}>
                                {t("header.project")}
                            </button>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => (isActive ? styles.isActive : "")}  >{t("header.about")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us" onClick={toggleMenu} className={({ isActive }) => (isActive ? styles.isActive : "")} >{t("header.contact")}</NavLink>
                        </li>
                        <li>
                            <select name="lang" id="lang" onChange={handleLanguageChange} className="bg-transparent">
                                <option value="en">English</option>
                                <option value="az">Azərbaycan</option>
                            </select>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
