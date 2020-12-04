import React, {useState} from 'react';
import './styles/MainMenu.css'
import MenuItem from './MenuItem'
import {Link} from 'react-scroll'
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
            <Link to="head" smooth={true} spy={true} className="menu-logo">
				    @patrickrios:<span className="menu-logo-blue-text">~</span><span className="menu-logo-white-text">$</span>
            </Link>
			<ul className={mobileMenu}>
                <MenuItem text="About me"   target="about" hide={showMenu}/>
                <MenuItem text="Skills" target="experience" hide={showMenu}/>
                <MenuItem text="Portfolio"  target="portfolio" hide={showMenu}/>
                <MenuItem text="Contact me" target="contact" hide={showMenu}/>
			</ul>
        </nav>
    );
};

export default MainMenu;