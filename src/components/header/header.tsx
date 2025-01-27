import React, { useContext } from "react";
import css from "./header.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import headerText from "./header-text.json";
import parse from "html-react-parser";
import Link from "next/link";
import { socialItems } from "./social-items";

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
                    <div className={css.getInTouchButton}>
                        {socialItems?.map( link => (
                            <Link 
                                href={link?.url}
                                target="_black" 
                                title={link?.title}
                                className={css[link?.styleClass]}
                                key={`social-link~${link?.styleClass}`}
                            >
                                { link?.icon }
                            </Link>
                        ))}
                    </div>
                    <a 
                        href="/files/Patrick_Fernandes_Resume_0324.pdf" 
                        className={css.downloadCvButton}
                        download="Patrick_Fernandes_Resume.pdf"
                    >
                        {lang === 'eng' ? 'Download' : 'Baixar'} CV
                    </a>
                </div>
            </div>
            <picture className={css.headerBackground}>
                <source srcSet="/images/bg/header-bg-360-min.png" media="(max-width: 479px)"/>
                <source srcSet="/images/bg/header-bg-480-min.png" media="(min-width: 480px) and (max-width: 719px)"/>
                <source srcSet="/images/bg/header-bg-720-min.png" media="(min-width: 720px) and (max-width: 1023px)"/>
                <source srcSet="/images/bg/header-bg-1024-min.png" media="(min-width: 1024px) and (max-width: 1439px)"/>
                <source srcSet="/images/bg/header-bg-1440-min.png" media="(min-width: 1440px) and (max-width: 1919px)"/>
                <img src="/images/bg/header-bg-1920-min.png"/>
            </picture>
        </header>
    )
};