import React, { useContext } from "react";
import { ToggleButton } from "../toggle-button/ToggleButton";
import css from "./theme-button.module.css";
import darkIcon from "./assets/dark-theme-icon.svg";
import lightIcon from "./assets/light-theme-icon.svg";
import ukIcon from "./assets/uk-lang-icon.svg";
import brIcon from "./assets/br-lang-icon.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";

const themeText= {
    "pt-br": "Mudar tema",
    "eng": "Change theme"
};

const languageText = {
    "pt-br": "Mudar idioma",
    "eng": "Change language"
};

export const ThemeToggle = () => {
    const { 
        toggleTheme, 
        lightMode
    } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);

    return (
        <ToggleButton 
            active={{
                icon: darkIcon,
                style: css.darkTheme
            }}
            inactive={{
                icon: lightIcon,
                style: css.lightTheme
            }}
            onAction={toggleTheme}
            title={themeText[lang]}
            isON={!lightMode}
        />
    )
};

export const LanguageToggle = () => {
    const { 
        switchLanguage, 
        lang
    } = useContext(AppContext);
    return(
        <ToggleButton
            active={{
                icon: brIcon,
                style: css.brLang
            }}
            inactive={{
                icon: ukIcon,
                style: css.ukLang
            }}
            onAction={switchLanguage}
            title={languageText[lang]}
            isON={ lang === "pt-br"}
        />
    )
}