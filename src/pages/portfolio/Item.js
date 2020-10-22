import React from 'react';
import './styles/item.css'

function Item(props) {
    return (
        <div className="portfolio-item">
            <img src={props.datas.img} alt=""/>
            <div className="portfolio-items-wrapper">
                <h3>{props.datas.name}</h3>
                <p>{props.datas.desc}</p>
                <a href={props.datas.repo}>see details</a>
            </div>
        </div>
    );
}

export default Item;