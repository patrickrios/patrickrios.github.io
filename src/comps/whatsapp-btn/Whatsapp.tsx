import React, { useContext } from "react"
import css from "./whatsapp.module.css";
import { WhatsAppIcon } from "./assets/whatsappIcon";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";

const message = {
    "pt-br": "Fale comigo pelo ",
    "eng": "Talk to me on "
};

export const WhatsAppButton = () => {
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);
    return(
        <a 
            className={`${css.whatsapp} ${lightMode && css.light}`}
            target="_blank"
            rel="noreferrer"
            href="https://whatsa.me/5567999979018/?t=Ol%C3%A1%20Patrick%20%F0%9F%91%8B" 
        >
            <p>{message[lang]} <b>Whatsapp!</b></p>
            <WhatsAppIcon/>
        </a>
)};