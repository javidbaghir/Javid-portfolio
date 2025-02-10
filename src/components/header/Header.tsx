import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { handleLinkClick } from "../../utils/util";

const Header = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className={styles.container}>
            <Link to={"/"} className={styles.logo}> {t("header.name")} </Link>
            <nav className={styles.nav}>
                <NavLink className={({ isActive }) => (isActive ? styles.isActive : "")} to={"/"} >{t("header.home")}</NavLink>
                <button
                    onClick={() => handleLinkClick("projects", navigate)}
                    className="navbar-link"
                >
                    {t("header.project")}
                </button>
                <NavLink className={({ isActive }) => (isActive ? styles.isActive : "")} to={"/about"} >{t("header.about")}</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.isActive : "")} to={"/contact-us"} >{t("header.contact")}</NavLink>
            </nav>

            <select name="lang" id="lang" onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="az">Azərbaycan</option>
            </select>
        </div>
    );
};

export default Header;
