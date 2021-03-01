import React from 'react'
import './styles/portfolio.css'
import Project from './Project'
import DevFinance from './images/dev-finance-snap.png'
import DevFinanceLogo from './images/dev-finances-logo.png'

function Portfolio() {
    const projects = [
        {
            key: 0,
            logo: DevFinanceLogo,
            snap : DevFinance,
            name: "dev.finances",
            desc: "Web app para guardar transações financeiras. Este projeto foi desenvolvido durante as aulas da Maratona Discover da Rocketseat",
            techs: ['javascript', 'html', 'css'],
            level: "beginner",
            repo: "https://github.com/patrickrios/dev-finances-maratona-discover",
            style: "project-bill-manager"
        }
    ]

    const renderItem = (item) =>{
        return <Project datas={item} />
    }

    return (
        <section id="portfolio" >
            <div className="center-container">
                <h2>Alguns dos meus projetos</h2>
                <div className="portfolio-wrapper">
                    { projects.map(item => renderItem(item) ) }
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;