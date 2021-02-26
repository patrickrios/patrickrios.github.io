import React from 'react';

function StackCard(props) {
    const cardClass = `card-bg about-stack-card ${props.borderClass}`
    return(
        <div className={cardClass}>
            <div className="about-card-title">
                <img src={props.icon} alt=""/>
                <h3>{props.title}</h3>
            </div>
            <p>
                {props.text}
            </p>
        </div>
    )

}

export default StackCard;