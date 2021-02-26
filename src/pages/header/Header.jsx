import React from 'react';
import './Header.css'
import MainMenu from './MainMenu'
import Logo from './Logo'
import Down from './img/header-chevron.svg'
import {Link} from 'react-scroll'

function Header() {
    return (
        <header className="top-header" id="head">
            <MainMenu />
            <Logo/>
            <Link to="about" smooth={true}>
                <img src={Down} className="header-chevron-down" alt="Descer para saiba mais"/>
            </Link>
        </header>
    );
}

export default Header;