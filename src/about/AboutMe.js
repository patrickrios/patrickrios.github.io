import React from 'react';
import './about.css';
import profile from './profile-picture-min.png';
import Paragraph from './AboutParagraph';

function AboutMe() {
    return (
        <div id="about">
            <img src={profile} alt="Profile"className="about-profile-picture" />
            <div className="about-columns">
                <Paragraph 
                    title="About me" 
                    subtitle="I'm a software developer from Dourados, Mato Grosso do Sul, Brazil"
                    paragraph="I have a large interest in artificial intelligence, GNU/Linux, games, tools and solutions for bussiness."
                />
                <Paragraph 
                    title="What i do?"
                    paragraph="I design and develop apps for web, desktop and mobile devices. Using all my skills and experience to create nice and powerful softwares."
                />
            </div>
        </div>
    );
}

export default AboutMe;