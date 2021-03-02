import React from 'react';
import './styles/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import resume from './files/Patrick-Fernandes-Rios-Curriculo.pdf';
import LogoAbout from './images/about-desc-logo.png';
import WebIcon from './images/frontend-icon.svg'
import DeskIcon from './images/backend-icon.svg'
import StackCard from './StackCard';

function AboutMe() {    
    return (
        <section id="about" >
            <div className="center-container about-columns">
                <div className="aboutme-card about-desc card-bg">
                    <img src={LogoAbout} alt="Ícone header about"/>
                    <p>Sou apaixonado por programação e design. Sou capaz de criar interfaces de usuário modernas para websites e aplicativos. Atualmente estudo backend e banco de dados.</p>
                    <a href={resume} className="download-resume">
                        <FontAwesomeIcon icon={faDownload} />
                        Download CV
                    </a>
                </div>
                <div  className="about-what">
                    <StackCard icon={WebIcon} 
                        title="frontend" 
                        text="html, css, javascript, typescript, reactjs, nextjs, context api, figma" 
                        borderClass="about-web"
                    />
                    <StackCard icon={DeskIcon} 
                        title="backend" 
                        text="node.js, php, typeorm, sql, sqlite, mysql, gnu/linux" 
                        borderClass="about-desk" 
                    />
                </div> 
            </div>
        </section>
    );
}

export default AboutMe;