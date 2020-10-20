import React from 'react';
import './styles/portfolio.css'
import Item from './Item'

function Portfolio() {
    const items = [
        {
            id: 0,
            bgID: "patrick-rios",
            name: "Patrick Rios",
            desc: "ReactJS App",
            repo: "https://github.com/patrickrios/patrickrios.github.io"
        },
        {
            id: 1,
            bgID: "sales-manager",
            name: "Sales Manager",
            desc: "JavaFX, MySQL",
            repo: "https://github.com/patrickrios/patrickrios.github.io"
        },
        {
            id: 2,
            bgID: "invoice-manager",
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