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
                    <>
                      <li key={`top-menu-item~${index}`}>
                        { upper(item[lang]) }
                      </li>
                      { index < topMenuItems?.length-1 && <MenuSeparator/>}
                    </>
                )})}
            </div>
            <div className={css.controls}>
                <ThemeToggle/>
                <LanguageToggle/>
            </div>
        </ul>

    </nav>
  )  
};

const MenuSeparator = () => {
  return(
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 3L3 0L6 3L3 6L0 3Z" fill="#323232"/>
    </svg>
)};

export default TopMenu;