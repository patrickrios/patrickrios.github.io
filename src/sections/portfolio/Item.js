import React from 'react';
import './styles/item.css'

function Item(props) {
    return (
        <div className="portfolio-item" id={props.datas.bgID}>
            <h3>{props.datas.name}</h3>
            <p>{props.datas.desc}</p>
            <a href={props.datas.repo}>see details</a>
        </div>
    );
}

export default Item;