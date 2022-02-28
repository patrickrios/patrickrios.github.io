import React, { useContext } from 'react';
import './styles/project.css'
import { AppContext } from '../../contexts/AppContext';

function Project(props) {

    const { lang } = useContext(AppContext)

    const Overlay = () => <div className="project-about">
        <h3>{props.datas.name}</h3>
        <p className="project-description">
            {props.datas.desc[lang]}
        </p>
        <div className="project-links">
            { props.datas.links.map( 
                link => <a href={link.url} className={`project-`+link.style}>{link.name}</a>
            )}
        </div>
    </div> 


    return (
        <div className="portfolio-item">
            <div className="project-snap">
                <img src={props.datas.snap} alt="Project snap"/>
            </div>
            <Overlay />
        </div>
    );
}

export default Project;
