import React from 'react';
import './styles/portfolio.css'
import Item from './Item'
import patrickImg from './images/patrickrios2.png';
import salesImg from './images/salesmanager2.png';
import ucbillImg from './images/ucbillmanager2.png';

function Portfolio() {
    const items = [
        {
            id: 0,
            img : patrickImg,
            name: "Patrick Rios",
            desc: "ReactJS App",
            repo: "https://github.com/patrickrios/patrickrios.github.io"
        },{
            id: 1,
            img : salesImg,
            name: "Sales Manager",
            desc: "JavaFX, MySQL",
            repo: "https://github.com/patrickrios/patrickrios.github.io"
        },{
            id: 2,
            img : ucbillImg,
            name: "Invoice Manager",
            desc: "JavaFX, MySQL",
            repo: "https://github.com/patrickrios/patrickrios.github.io"
        }
    ]

    const renderItem = (item) =>{
        return <Item datas={item} />
    }
    return (
        <div id="portfolio">
            <span className="menu-logo">
				@portfolio:<span className="menu-logo-blue-text">~</span><span className="menu-logo-white-text">$</span>
			</span>
            <div className="portfolio-wrapper">
                { items.map(item => renderItem(item) ) }
            </div>
        </div>
    );
}

export default Portfolio;