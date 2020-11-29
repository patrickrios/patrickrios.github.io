import React from 'react';
import './styles/Logo.css'
import LogoIcon from './img/logo-dorito-min.png'

const Logo = () => {
    return (
        <div className="main-logo">
			<img src={LogoIcon} alt="Logo icon"/>
			<h2 className="logo-title">
                Software <br/>
                Analyst <br/>
                Programmer
            </h2>
		</div>
    );
};

export default Logo;