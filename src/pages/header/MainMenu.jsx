import React, {useState} from 'react';
import './styles/MainMenu.css'
import MenuItem from './MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

const MainMenu = () => {

    const[mobileMenu, display] = useState("");
    const[isActive,   toggle]  = useState(false);

    const showMenu = () => {
        toggle( !isActive )
        if(isActive){
            display("");
        }else{
            display("display-menu");
        }
    }

    return (
        <nav className="main-menu">
            <button className="mobile-menu-button" onClick={showMenu}><FontAwesomeIcon icon={faBars}/></button>
			<ul className={mobileMenu}>
                <MenuItem text="Home" target="head" hide={showMenu} />
                <MenuItem text="About"   target="about" hide={showMenu}/>
                <MenuItem text="Portfolio"  target="portfolio" hide={showMenu}/>
                <MenuItem text="Contact" target="contact" hide={showMenu}/>
			</ul>
        </nav>
    );
};

                //<MenuItem text="Skills" target="experience" hide={showMenu}/>
export default MainMenu;