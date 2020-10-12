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
                <MenuItem texto="About me" />
                <MenuItem texto="Experience" />
                <MenuItem texto="Portfolio" />
                <MenuItem texto="Contact me" />
			</ul>
		</nav>
    );
};

export default MainMenu;