import React, { useContext } from "react";
import css from "./header.module.css";
import { LanguageToggle, ThemeToggle } from "../theme-toggle/ThemeToggle";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TabPane } from "../tab-pane/TabPane";

export const ThemeOptions = () =>{
    return(
        <div className={css.themeOptions}>
            <ThemeToggle/>
            <LanguageToggle/>
        </div>
    )
};

export const Header = () => {
    const { lightMode } = useContext(ThemeContext);
    return(
        <header className={`${css.header} ${lightMode && css.light} center-container`}>
            <div className={css.profile}>
                <picture className={css.headerProfile}>
                    <source media="(max-width: 599px)" srcSet="/images/profile/new-profile-4.png"/>
                    <source media="(min-width: 600px)" srcSet="/images/profile/new-profile-4.png"/>
                    <img src="/images/profile/new-profile-4.png" alt="Imagem"/>
                </picture>
                <div className={css.nameSection}>
                    <h1>Patrick Fernandes Rios</h1>
                    <p>Desenvolvedor Web • UI Designer</p>
                    <TabPane/>
                </div>
            </div>
            <div className="desk-only">
                <ThemeOptions/>
            </div>
        </header>
    )
};