import React from 'react';

function StackCard(props) {

    const cardClass = `card-bg about-stack-card ${props.borderClass}`

    function renderItem(item){
        return <span><img src={item[1]} alt={item[0]}/> {item[0]}</span>
    }

    return(
        <div className={cardClass}>
            <div className="about-card-title">
                <img src={props.icon} alt="" width="26"/>
                <h3>{props.title}</h3>
            </div>
            <div className="stack-items">
                { props.stack.map(item => renderItem(item) ) }
            </div>
        </div>
    )

}

export default StackCard;