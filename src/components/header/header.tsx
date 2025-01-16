import React, { useContext } from "react";
import css from "./header.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import headerText from "./header-text.json";
import parse from "html-react-parser";

export const Header = () => {
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);
    return(
        <header className={`${css.header} ${lightMode && css.light} center-container`}>
            <div className={css.profile}>
            <picture>
                <source srcSet="/images/profile/profile-photo-180.svg" media="(min-width: 600px)" />
                <source srcSet="/images/profile/profile-photo-260.svg" media="(min-width: 1000px)" />
                <img src="/images/profile/profile-photo-140.svg" alt="MDN" />
            </picture>
                <h2>{parse(headerText['headLine'][lang])}</h2>
                <p>{parse(headerText['description'][lang])}</p>
                <div className={css.actionButtons}>
                    <a 
                        href="/files/Patrick_Fernandes_Resume_0324.pdf" 
                        className={css.downloadCvButton}
                    >
                        {lang === 'eng' ? 'Download' : 'Baixar'} CV
                    </a>
                </div>
            </div>
            <img 
                src="/images/bg/header_bg-min.png" 
                className={css.headerBackground}
            />
        </header>
    )
};