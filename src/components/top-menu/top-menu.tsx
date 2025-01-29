import React from "react";
import css from "./top-menu.module.css";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { animateScroll } from "react-scroll";
import { 
  LanguageToggle, 
  ThemeToggle
} from "../theme-toggle/ThemeToggle";
import { 
  topMenuItems,
  MenuIcon, 
  CloseMenuIcon, 
  MenuSeparator, 
  PatrickRiosLogo
} from "./menu-items-text";
import { MenuItem } from "./menu-item";
import { ThemeContext } from "../../contexts/ThemeContext";

export const TopMenu = () => {
  const { lang } = useContext(AppContext);
  const { lightMode } = useContext(ThemeContext);
  const [shouldShowMenu, setShowMenu ] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prev_status => !prev_status)
  };

  const onMenuItemClicked = () =>{
    if(shouldShowMenu){
      toggleMenu();
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop({
      smooth: true,
      duration:600
    });
  };

  return(
    <nav className={`${css.topMenu} ${lightMode && css.light}`}>
        <ul>
          <div className={css.mobileMenuAndLogo}>
            <button 
              className={`${css.mobileButton} ${lightMode ? css.ligtButton : ''}`} 
              onClick={toggleMenu}
            >
              <MenuIcon/>
            </button>
            <PatrickRiosLogo 
              onClick={scrollTop} 
              className={`${css.logoIcon} ${lightMode ? css.light : ''}`}
            />
          </div>
          <div 
            className={`
              ${css.menuItems} 
              ${shouldShowMenu && css.showMenu} 
              ${lightMode ? css.lightItems : ''}
            `}
          >
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
                      className={lightMode ? css.light : ''}
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