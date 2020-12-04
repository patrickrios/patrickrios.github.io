import React from 'react';
import './styles/portfolio.css'
import Item from './Item'
import patrickImg from './images/patrickrios2.png';
import salesImg from './images/salesmanager2.png';
import ucbillImg from './images/ucbillmanager2.png';

function Portfolio() {
    const items = [
        {
            key: 0,
            img : patrickImg,
            name: "Patrick Rios",
            desc: "React App",
            repo: "https://github.com/patrickrios/patrickrios.github.io"
        },{
            key: 1,
            img : salesImg,
            name: "Sales Manager",
            desc: "JavaFX, MySQL",
            repo: "https://github.com/patrickrios/patrickrios.github.io"
        },{
            key: 2,
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
        <div id="portfolio" className="default-padding">
            <span className="menu-logo section-title">
				@portfolio:<span className="menu-logo-blue-text">~</span><span className="menu-logo-white-text">$</span>
			</span>
            <div className="portfolio-wrapper">
                { items.map(item => renderItem(item) ) }
            </div>
        </div>
    );
}

export default Portfolio;