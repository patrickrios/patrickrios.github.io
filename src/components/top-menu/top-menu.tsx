import css from "./top-menu.module.css";
import { LanguageToggle, ThemeToggle } from "../theme-toggle/ThemeToggle";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import Link from "next/link";
import { 
  topMenuItems, 
  socialLinks, 
  MenuIcon, 
  CloseMenuIcon, 
  MenuSeparator 
} from "./menu-items-text";

const upper = (item: string) =>{
  return item.toUpperCase();
};

export const TopMenu = () => {
  const { lang } = useContext(AppContext);
  const [shouldShowMenu, setShowMenu ] = useState<boolean>(false);

  const showMenu = () => {
    setShowMenu(prev_status => !prev_status)
  };

  return(
    <nav className={css.topMenu}>
        <ul>
            <div className={css.socialButtons}>
              <button 
                className={css.mobileButton} 
                onClick={showMenu}
              >
                <MenuIcon/>
              </button>
              {socialLinks?.map( link => (
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
            <div className={`${css.menuItems} ${shouldShowMenu && css.showMenu}`}>
                <CloseMenuIcon 
                  onClose={showMenu} 
                  styleClass={css.closeMenuIcon}
                />
                { topMenuItems?.map((item, index) => (
                    <>
                      <li key={`top-menu-item~${index}`}>
                        { upper(item[lang]) }
                      </li>
                      { 
                        index < topMenuItems?.length-1 && 
                        <MenuSeparator styleClass={css.menuSeparator}/>
                      }
                    </>
                ))}
            </div>
            <div className={css.controls}>
                <ThemeToggle/>
                <LanguageToggle/>
            </div>
        </ul>
    </nav>
)};

export default TopMenu;