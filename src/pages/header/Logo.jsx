import React from 'react';
import './styles/Logo.css'
import LogoMobile from './img/profile-transparent-mobile.png'
import LogoIcon from './img/profile-transparent.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'

const Logo = () => {
    return (
        <div className="main-logo">
			<div>
                <h2 className="logo-title">Hi, i'm Patrick <span className="cursor-blink-light"></span></h2>
                <p className="logo-subtitle">Software<br/>Developer</p> 
                <Link to="about" className="logo-action" smooth={true}>
                    Know more <FontAwesomeIcon icon={faArrowDown} />
                </Link>
            </div>

            <picture>
                <source media="(min-width:650px)" srcset={LogoIcon} />
			    <img src={LogoMobile} alt="Logo icon" className="about-profile-picture"/>
            </picture>
		</div>
    );
};

export default Logo;