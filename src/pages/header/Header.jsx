import React from 'react';
import './Header.css'
import MainMenu from './MainMenu'
import Logo from './Logo'

function Header() {
    return (
        <header className="top-header" id="head">
            <MainMenu />
            <Logo/>
        </header>
    );
}

export default Header;