import React, { useContext } from "react";
import desktopPic from "./assets/profile_picture.svg";
import mobilePic from "./assets/profile_picture_mobile.svg";
import css from "./header.module.css";
import { LanguageToggle, ThemeToggle } from "../theme-toggle/ThemeToggle";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Header = () => {
    const { lightMode } = useContext(ThemeContext);
    return(
        <header className={`${css.header} ${lightMode && css.light}`}>
            <picture className={css.headerProfile}>
                <source media="(max-width: 599px)" srcSet={mobilePic}/>
                <source media="(min-width: 600px)" srcSet={desktopPic}/>
                <img src={desktopPic} alt="Imagem"/>
            </picture>
            <div className={css.themeOptions}>
                <ThemeToggle/>
                <LanguageToggle/>
            </div>
        </header>
    )
};