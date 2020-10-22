import React from 'react';
import './styles/MainMenu.css'
import MenuItem from './MenuItem'

const MainMenu = () => {
    return (
        <nav className="main-menu">
			<a className="menu-logo" href="/">
				@patrickrios:<span className="menu-logo-blue-text">~</span><span className="menu-logo-white-text">$</span>
			</a>
			<ul>
                <MenuItem text="About me"   target="#about" />
                <MenuItem text="Experience" target="#experience" />
                <MenuItem text="Portfolio"  target="#portfolio" />
                <MenuItem text="Contact me" target="#contact" />
			</ul>
		</nav>
    );
};

export default MainMenu;