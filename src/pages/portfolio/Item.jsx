import React from 'react';
import './styles/item.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {faGithub} from '@fortawesome/free-brands-svg-icons'

function Item(props) {
    return (
        <div className="portfolio-item">
            <header className={props.datas.style}>
                <img src={props.datas.img} alt="any" />
            </header>
            <div className="portfolio-items-wrapper">
                <h3>{props.datas.name}</h3>
                <p>{props.datas.desc}</p>
                <a href={props.datas.repo}><FontAwesomeIcon icon={faGithub} /> see on github</a>
            </div>
        </div>
    );
}

export default Item;