import React, { useContext } from "react";
import { ToggleButton } from "../toggle-button/ToggleButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import css from "./theme-button.module.css";
import { 
    BrazilFlag, 
    DarkThemeIcon, 
    LightThemeIcon, 
    UsaFlag
} from "./theme-icon";

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
                icon: <DarkThemeIcon/>,
                style: css.darkTheme
            }}
            inactive={{
                icon: <LightThemeIcon/>,
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
                icon: <BrazilFlag/>,
                style: css.brLang
            }}
            inactive={{
                icon: <UsaFlag/>,
                style: css.ukLang
            }}
            onAction={switchLanguage}
            title={languageText[lang]}
            isON={ lang === "pt-br"}
        />
    )
}