import React from "react";
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
import { MenuItem } from "./menu-item";

export const TopMenu = () => {
  const { lang } = useContext(AppContext);
  const [shouldShowMenu, setShowMenu ] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prev_status => !prev_status)
  };

  const onMenuItemClicked = () =>{
    if(shouldShowMenu){
      toggleMenu();
    }
  };

  return(
    <nav className={css.topMenu}>
        <ul>
            <div className={css.socialButtons}>
              <button 
                className={css.mobileButton} 
                onClick={toggleMenu}
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
                  onClose={toggleMenu} 
                  styleClass={css.closeMenuIcon}
                />
                { topMenuItems?.map((item, index) => (
                    <React.Fragment key={`menu-item-${index}`}>
                      <MenuItem 
                        text={item.title[lang]} 
                        targetId={item.target}
                        toggleMenu={onMenuItemClicked}
                      />
                      { 
                        index < topMenuItems?.length-1 && 
                        <MenuSeparator styleClass={css.menuSeparator}/>
                      }
                    </React.Fragment>
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