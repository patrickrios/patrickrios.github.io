import React, { useContext } from "react";
import css from "./profile-modal.module.css";
import { profileContent } from "./profile";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { 
    PlaceIcon, 
    PhoneIcon, 
    EmailIcon, 
    Divider, 
    Github, 
    Linkedin, 
    Instagram
} from "./assets/profileIcons";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";

export const ProfileModal = () => {
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);
    return(
        <motion.div 
            className={css.profileModal}
            initial={{x:20}}
            animate={{x:0}}
            transition={{duration:0.55}}
        >
            <header className={`${css.profileHeader} ${lightMode && css.light}`}>
                <div className={`${css.profileHeadLine} ${lightMode && css.light}`}>
                    <h2>PATRICK FERNANDES RIOS</h2>
                    <div className={css.profileInfo}>
                        <div className={`${css.profileItems} ${lightMode && css.light}`}>
                            <span>
                                <PlaceIcon/> 
                                Dourados, MS, Brasil
                            </span>
                            <span>
                                <a href="tel:+5567999979018">
                                    <PhoneIcon/> 
                                    +55 (67) 99997-9018
                                </a>
                            </span>
                            <span>
                                <a href="mailto:patrick.33.rios@hotmail.com">
                                    <EmailIcon/> patrick.33.rios@hotmail.com
                                </a>
                            </span>
                        </div>
                        <div className={css.profileSocial}>
                            <a href="https://github.com/patrickrios" target="_blank" rel="noreferrer" className={css.external}>
                                <Github/>
                            </a>
                            <a href="https://www.linkedin.com/in/patrickriosf/" target="_blank" rel="noreferrer" className={css.external}>
                                <Linkedin/>
                            </a>
                            <a href="https://www.instagram.com/patrickriosf/" target="_blank" rel="noreferrer" className={css.external}>
                                <Instagram/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${css.profileContent} ${lightMode && css.light}`}>
                {profileContent?.map( content =>(
                    <>
                        {content?.h && <h3>{content?.h[lang]}</h3>}
                        {content.p && content.p.map((p, index) => (
                            <p key={`profile-paragaph-${index}`}>
                                {parse(p[lang])}
                            </p>
                        ))}
                    </>
                ))}
            </div>
        </motion.div>
    );
};