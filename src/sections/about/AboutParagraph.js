import React from 'react';
import './styles/paragraph.css'

function AboutParagraph(props) {
    return (
        <div className="about-paragraph">
            <h3>{props.title}</h3>
            <h5>{props.subtitle}</h5>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default AboutParagraph;