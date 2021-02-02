import React from 'react';
import './styles/about.css';
import Paragraph from './AboutParagraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import resume from './Patrick-Fernandes-Rios-Resume.pdf';
import LogoAbout from './logo-bottom.png';

function AboutMe() {    
    return (
        <div id="about">
            <div className="about-columns">
                <Paragraph 
                    title="About me" 
                    subtitle="I'm a software developer from Dourados, Mato Grosso do Sul, Brazil"
                    paragraph="Everyday improving myself to offer the most high-quality work that i can do."
                />
                <Paragraph 
                    title="What i do?"
                    paragraph="I design and implement applications for web, desktop and mobile devices. Using all my skills and experience to build nice and powerful softwares."
                />
                <a className="download-resume" href={resume}><FontAwesomeIcon icon={faDownload}/> Download pdf resume</a>
            </div>
            <img src={LogoAbout} alt="logo about"  className="about-logo" />
        </div>
    );
}

export default AboutMe;