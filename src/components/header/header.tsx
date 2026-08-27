import React, { useContext } from "react";
import css from "./header.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import headerText from "./header-text.json";
import parse from "html-react-parser";
import Link from "next/link";
import { socialItems, Godot, Aseprite } from "./social-items";

export const Header = () => {
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);

    return(
        <header className={`${css.header} ${lightMode && css.light} center-container`}>
            <div className={css.profile}>
                <picture>
                    <source srcSet="/images/profile/patrickrios-pixel-180-min.png" media="(min-width: 600px)" />
                    <source srcSet="/images/profile/patrickrios-pixel-260-min.png" media="(min-width: 1000px)" />
                    <img src="/images/profile/patrickrios-pixel-140-min.png" alt="MDN" />
                </picture>
                <div className={css.profileHeadline}>
                    <h2>Patrick Rios</h2>
                    <p className={`${lightMode && css.light}`}>
                        INDIE GAME DEV
                    </p>
                </div>
                
                <div className={`${css.description} ${lightMode && css.light}`}>
                    <div className={`${css.textDescription} ${lightMode && css.light}`}>
                        <p>{headerText.description[lang]}</p>
                        <p className={css.stackDesc}>
                            <Godot/> Godot + <Aseprite/> Aseprite + <img src="/images/icon/cafezito-Sheet-min.png"/> {lang == 'pt-br' ? 'Café' : 'Coffee'}
                        </p>
                    </div>
                    <div className={css.actionButtons}>
                        <div className={`${css.getInTouchButton} ${ lightMode ? css.light : ''}`}>
                            {socialItems?.map( link => (
                                <Link 
                                    href={link?.url}
                                    target="_black" 
                                    title={link?.title}
                                    className={`${css[link?.styleClass]} ${lightMode ? css.lightA : ''}`}
                                    key={`social-link~${link?.styleClass}`}
                                >
                                    { link?.icon }
                                </Link>
                            ))}
                        </div>
                        <a 
                            href={ 
                                lang === "eng" ? 
                                    "/files/patrick_rios_developer_resume.pdf" : 
                                    "/files/patrick_rios_desenvolvedor_cv.pdf"
                            } 
                            className={css.downloadCvButton}
                            download={ 
                                lang === "eng" ? 
                                    "patrick-rios-web-developer-resume.pdf" : 
                                    "patrick-rios-desenvolvedor-web-cv.pdf"
                            }
                        >
                            {lang === 'eng' ? 'Download resume' : 'Baixar CV'}
                        </a>
                    </div>
                </div>
            </div>
            <picture className={css.headerBackground}>
                <source srcSet={`/images/bg/header-bg-360${lightMode?'-light':''}-min.png`} media="(max-width: 479px)"/>
                <source srcSet={`/images/bg/header-bg-480${lightMode?'-light':''}-min.png`} media="(min-width: 480px) and (max-width: 719px)"/>
                <source srcSet={`/images/bg/header-bg-720${lightMode?'-light':''}-min.png`} media="(min-width: 720px) and (max-width: 1023px)"/>
                <source srcSet={`/images/bg/header-bg-1024${lightMode?'-light':''}-min.png`} media="(min-width: 1024px) and (max-width: 1439px)"/>
                <source srcSet={`/images/bg/header-bg-1440${lightMode?'-light':''}-min.png`} media="(min-width: 1440px) and (max-width: 1919px)"/>
                <img src={`/images/bg/header-bg-1920${lightMode?'-light':''}-min.png`}/>
            </picture>
        </header>
    )
};