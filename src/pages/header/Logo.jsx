import React from 'react';
import './styles/Logo.css'
import ProfilePic from './img/header-profile-picture.png'
import Logomark from './img/Logomarca.svg'
import LogoMapMarker from './img/logo-map-marker.svg'
import LogoStack from './img/logo-stack.svg'

const Logo = () => {
    return (
        <div className="main-logo">
            <div className="logo-picture">
			    <img src={ProfilePic} alt="Developer profile"/>
            </div>
            <div className="logo-desc">
                <img src={Logomark} alt="Patrick Rios Logo" className="logo-icon desk-only"/>
                <div>
                    <h1>Software Developer</h1>
                    <p><img src={LogoStack} alt="Ícone stack"/>Frontend | Backend | UI Design</p>
                    <p><img src={LogoMapMarker} alt="Ícone localização"/>Dourados, MS, Brazil</p>
                </div>
            </div>
		</div>
    );
};

export default Logo;