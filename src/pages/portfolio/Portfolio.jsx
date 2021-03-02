import React from 'react'
import './styles/portfolio.css'
import Project from './Project'
import DevFinance from './images/dev-finance-snap.png'
import DevFinanceLogo from './images/dev-finances-logo.png'
import NpsLogo from './images/nps-api-logo.png'
import NpsSnap from './images/nps-api-snap.png'

function Portfolio() {
    const projects = [
        {
            key: 0,
            logo: DevFinanceLogo,
            snap : DevFinance,
            name: "dev.finances",
            desc: "Web app para guardar transações financeiras. Este projeto foi desenvolvido durante as aulas da Maratona Discover da Rocketseat",
            techs: ['javascript', 'html', 'css'],
            level: "Básico",
            repo: "https://github.com/patrickrios/dev-finances-maratona-discover",
            live: "https://patrickrios.github.io/dev-finances-maratona-discover/"
        },
        {
            key: 1,
            logo: NpsLogo,
            snap : NpsSnap,
            name: "NPS-API",
            desc: "NPS é uma API para criar pesquisas de satisfação do consumidor. Com ela é possível enviar pesquisas por e-mail para usuários cadastrados e salvar sua resposta.",
            techs: ['nodejs', 'typescript', 'sqlite'],
            level: "Intermediário",
            repo: "https://github.com/patrickrios/NPS-API",
            live : null
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