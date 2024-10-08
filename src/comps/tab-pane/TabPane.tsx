import React, { useContext, useState } from "react";
import css from "./tab-pane.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { PortfolioProvider } from "../../contexts/PortfolioContext";
import { tabs, tabsContent} from "./tabs";
import { DownloadIcon, MenuIcon } from "./assets/tabIcons";
import { AppContext } from "../../contexts/AppContext";
import { tabsText } from "./lang/tabs-lang";
import { ThemeOptions } from "../header/header";

const downloadText = {
    "pt-br": "baixar arquivo pdf",
    "eng": "download pdf file"
};

export const TabPane =  () => {
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);
    const[currentTab, setCurrentTab] = useState(0);
    const[isMenuHide, setMenuHide] = useState(true);

    const isCurrent = (index: number) =>{
        return index === currentTab;
    }

    const hanleOnTabSelected = (index: number) =>{
        setCurrentTab(index);
        handleToggleMenu();
    }

    const handleToggleMenu = () => setMenuHide( prev => !prev);

    const tabsTitle = [
        tabsText['portfolio'][lang],
        tabsText['about'][lang],
        tabsText['stack'][lang],
        tabsText['contact'][lang],
    ];

    function capitalizeTabTitle() {
        const current_tile = tabsTitle[currentTab];
        return "#"+current_tile;
    }

    return(
        <section className={css.tabPane} id="tabPane">
            <button className={css.toggleMenu} onClick={handleToggleMenu}>
                <MenuIcon/>
            </button>
            <nav className={`
                    ${css.tabs} 
                    ${ lightMode && css.light} 
                    ${isMenuHide ? css.hideMenu : css.openedMenu}`
                }
            >
                <ul>
                    {tabs.map( (tab, index) =>
                        <li 
                            className={`${
                                isCurrent(index) ? css.selectedTab : ''
                            }`}
                            onClick={()=>{hanleOnTabSelected(index)}}
                            key={`tab-${tab}-${index}`}
                        >
                            {tabsText[tab?.name][lang]}
                            {tab?.icon}
                        </li>
                    )}
                    <li className={css.download} title={downloadText[lang]}>
                        <a href="/files/Patrick_Fernandes_Resume_0324.pdf">
                            { lang === "pt-br" ? 
                                'baixar' : 
                                'download'
                            } cv
                        </a>
                        <DownloadIcon/>
                    </li>
                    <div className="mobile-only">
                        <ThemeOptions/>
                    </div>
                </ul>
            </nav>
            <div className={`${css.tabPaneContent} ${ lightMode && css.lightMode}`}>
                <div className={css.tabPaneContentContainer}>
                    <PortfolioProvider>
                        <h2 className={`${css.tabTitle} mobile-only`}>
                            { capitalizeTabTitle() }
                        </h2>
                        { tabsContent[currentTab] }
                    </PortfolioProvider>
                </div>
            </div>
        </section>
    )
}