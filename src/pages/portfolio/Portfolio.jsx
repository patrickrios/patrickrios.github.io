import React from 'react'
import './styles/portfolio.css'
import Item from './Item'
import PtrScreen from './images/patrickrios-screenshot.png'
import SaleScreen from './images/sales-screenshot.png'
import DevFinance from './images/dev-finances.png'

function Portfolio() {
    const items = [
        {
            key: 0,
            img : PtrScreen,
            name: "Patrick Rios Website",
            desc: "React App",
            repo: "https://github.com/patrickrios/patrickrios.github.io",
            style: "project-patrickrios"
        },{
            key: 1,
            img : SaleScreen,
            name: "Sales Manager",
            desc: "Desktop app, JavaFX, MySQL",
            repo: "https://github.com/patrickrios/sistema-controle-vendas-javafx",
            style: "project-sales"
        },{
            key: 2,
            img : DevFinance,
            name: "dev.finances",
            desc: "Web app, HTML, CSS, Javascript",
            repo: "https://github.com/patrickrios/dev-finances-maratona-discover",
            style: "project-bill-manager"
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