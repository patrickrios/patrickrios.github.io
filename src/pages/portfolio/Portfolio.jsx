import React, { useContext } from 'react'
import './styles/portfolio.css'
import Project from './Project'
import { AppContext } from '../../contexts/AppContext'

function Portfolio() {
    
    const renderItem = (item) =>{
        return <Project datas={item} />
    }

    const {portfolio, lang} = useContext(AppContext)

    return (
        <section id="portfolio" >
            <div className="center-container">
                <h2>{portfolio.title[lang]}</h2>
                <div className="portfolio-wrapper">
                    { portfolio.projects.map(item => renderItem(item) ) }
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;