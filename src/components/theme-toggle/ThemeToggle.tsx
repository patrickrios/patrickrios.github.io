import React, { useContext } from "react";
import { ToggleButton } from "../toggle-button/ToggleButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
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
            activeIcon={<DarkThemeIcon/>}
            inactiveIcon={<LightThemeIcon/>}
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
            activeIcon={ <BrazilFlag/>}
            inactiveIcon={<UsaFlag/>}
            onAction={switchLanguage}
            title={languageText[lang]}
            isON={ lang === "pt-br"}
        />
    )
}