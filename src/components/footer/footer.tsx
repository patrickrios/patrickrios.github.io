import { useContext } from "react";
import css from "./footer.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function getCurrentYear() {
    const date= new Date();
    return date.getFullYear();
  }

export const Footer = () => {
    const { lightMode } = useContext(ThemeContext);
    return(
        <footer className={`${css.footer} ${lightMode ? css.light : ''}`}>
            <p>copyright {getCurrentYear()}</p>
        </footer>
    )
}