import css from "./top-menu.module.css";
import { LanguageToggle, ThemeToggle } from "../theme-toggle/ThemeToggle";
import { topMenuItems } from "./menu-items-text";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const upper = (item: string) =>{
  return item.toUpperCase();
};

export const TopMenu = () => {
  const { lang } = useContext(AppContext);
  return(
    <nav className={css.topMenu}>
        <ul>
            <img src="/images/profile/top-logo.png"/>
            <div className={css.menuItems}>
                {topMenuItems?.map(( item, index) => {
                  return(
                    <li key={`top-menu-item~${index}`}>
                      { upper(item[lang]) }
                    </li>)
                })}
            </div>
            <div className={css.controls}>
                <ThemeToggle/>
                <LanguageToggle/>
            </div>
        </ul>

    </nav>
  )  
};

export default TopMenu;