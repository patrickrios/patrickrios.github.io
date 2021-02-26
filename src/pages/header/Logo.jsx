import React from 'react';
import './styles/Logo.css'
import ProfilePic from './img/header-profile-picture.png'
import Logomark from './img/Logomark.svg'
import LogoMapMarker from './img/logo-map-marker.svg'
import LogoStack from './img/logo-stack.svg'

const Logo = () => {
    return (
        <div className="main-logo">
            <div className="logo-picture">
			    <img src={ProfilePic} alt="Developer profile"/>
            </div>
            <div className="logo-desc">
                <img src={Logomark} alt="Patrick Rios Logo" className="logo-icon"/>
                <div>
                    <h1>Software Developer</h1>
                    <p><img src={LogoStack} alt="Ícone stack"/>Frontend | Backend | UI Designer</p>
                    <p><img src={LogoMapMarker} alt="Ícone localização"/>Dourados, MS, Brazil</p>
                </div>
            </div>
		</div>
    );
};
/** 
 * <div>
                <h2 className="logo-title">Hello visitor <span className="cursor-blink-light"></span></h2>
                <p className="logo-subtitle">Can i code<br/>for you?</p> 
                <Link to="about" className="logo-action" smooth={true}>
                    Know more <FontAwesomeIcon icon={faArrowDown} />
                </Link>
            </div> 

            <picture>
                <source media="(min-width:650px)" srcset={LogoIcon} />
			    <img src={LogoMobile} alt="Logo icon" className="about-profile-picture"/>
            </picture>
*/

export default Logo;