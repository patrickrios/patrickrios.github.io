import React from 'react';
import './MainMenu.css'
import MenuItem from './MenuItem'

const MainMenu = () => {
    return (
        <nav className="main-menu">
			<a className="menu-logo">
				@patrickrios:<span className="menu-logo-blue-text">~</span><span className="menu-logo-white-text">$</span>
			</a>
			<ul>
                <MenuItem text="About me" />
                <MenuItem text="Experience" />
                <MenuItem text="Portfolio" />
                <MenuItem text="Contact me" />
			</ul>
		</nav>
    );
};

export default MainMenu;