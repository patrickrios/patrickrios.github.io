import React, { useContext } from "react";
import  profilePic from "./assets/new-profile-4.png";
import desktopPic from "./assets/profile_picture.svg";
import mobilePic from "./assets/profile_picture_mobile.svg";
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
                    <source media="(max-width: 599px)" srcSet={profilePic}/>
                    <source media="(min-width: 600px)" srcSet={profilePic}/>
                    <img src={profilePic} alt="Imagem"/>
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