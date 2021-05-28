import React, { useContext } from 'react';
import './styles/Logo.css'
import ProfilePic from './img/glitch-logo.webm'
import Logomark from './img/Logomarca.svg'
import LogoMapMarker from './img/logo-map-marker.svg'
import LogoStack from './img/logo-stack.svg'
import { AppContext } from '../../contexts/AppContext';

const Logo = () => {

    const { logo, lang } = useContext(AppContext)

    return (
        <div className="main-logo">
            <div className="logo-picture">
                <video autoPlay loop width="230" height="230">
                    <source src={ProfilePic} />
                </video>
            </div>
            <div className="logo-desc">
                <img src={Logomark} alt="Patrick Rios Logo" className="logo-icon desk-only"/>
                <div>
                    <h1>Software developer</h1>
                    <p><img src={LogoStack} alt="Ícone stack"/>Frontend | Backend | UI Design</p>
                    <p><img src={LogoMapMarker} alt="Ícone localização"/>Dourados, MS, {logo.locale[lang]}</p>
                </div>
            </div>
		</div>
    );
};

export default Logo;