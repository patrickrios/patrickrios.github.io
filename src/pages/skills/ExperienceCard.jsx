import React from 'react';
import './styles/exp-card.css';

function ExperienceCard(props) {

    const renderTopic = (topic) => {
        return (
            <div>
                <h4> {topic.title} </h4>
                { topic.items.map( item => <p className="exp-item">{item}</p>) }
            </div>
        )
    }
    return (
        <div id="experience-card">
            <h2>{props.card.title}</h2>
            <p className="exp-description">{props.card.description}</p>
            { props.card.topics.map( topic => renderTopic(topic) ) }
        </div>
    );
}
//<img src={props.card.icon} alt="Card icon" />

export default ExperienceCard;