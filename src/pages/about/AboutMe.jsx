import React, { useContext } from 'react';
import './styles/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import resume from './files/Patrick-Fernandes-Rios-Curriculo.pdf';
import LogoAbout from './images/about-desc-logo.png';
import WebIcon from './images/frontend-icon.svg'
import DeskIcon from './images/backend-icon.svg'
import StackCard from './StackCard';
import { AppContext } from '../../contexts/AppContext';

function AboutMe() {    
    const { about, lang } = useContext(AppContext)
    return (
        <section id="about" >
            <div className="center-container about-columns">
                <div className="aboutme-card about-desc card-bg">
                    <img src={LogoAbout} alt="Ícone header about"/>
                    <p>{about.description[lang]}</p>
                    <a href={resume} className="download-resume">
                        <FontAwesomeIcon icon={faDownload} />
                        {about.download[lang]} CV
                    </a>
                </div> 
                <div  className="about-what">
                    <StackCard icon={WebIcon} 
                        title="FRONTEND/UI" 
                        borderClass="about-web"
                        stack={about.stack.front}
                    />
                    <StackCard icon={DeskIcon} 
                        title="BACKEND" 
                        borderClass="about-desk" 
                        stack={about.stack.back}
                    />
                </div> 
            </div>
        </section>
    );
}

export default AboutMe;