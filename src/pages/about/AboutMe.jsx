import React from 'react';
import './styles/about.css';
import profile from './images/profile-transparent.png';
import Paragraph from './AboutParagraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import resume from './RESUME-PATRICK-RIOS.pdf';

function AboutMe() {    
    return (
        <div id="about">
            <img src={profile} alt="Profile"className="about-profile-picture" />
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
                <a className="download-resume" href={resume} download="RESUME"><FontAwesomeIcon icon={faDownload}/> Download resume</a>
            </div>
        </div>
    );
}

export default AboutMe;