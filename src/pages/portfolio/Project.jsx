import React from 'react';
import './styles/project.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faEye as preview } from '@fortawesome/free-regular-svg-icons'
import {faGithub as github}  from '@fortawesome/free-brands-svg-icons'

function Project(props) {

    function renderIcon( name ){
        return(
            <img src={`${process.env.PUBLIC_URL}/techs/${name}.png`} alt={name} />
        )
    }

    return (
        <div className="portfolio-item">
            <div className="project-about">
                <header>
                    <p>
                        <img className="project-logo" src={props.datas.logo} alt={props.datas.name}/>                        
                    </p>
                    <div className="techs-list">
                        {
                            props.datas.techs.map( icon =>renderIcon(icon))
                        }
                        <span className="desk-only">{props.datas.level}</span>
                    </div>
                </header>
                <p className="project-description">
                    {props.datas.desc}
                </p>
                <div className="project-links">
                    {
                        (props.datas.live !== null) &&
                        <a href={props.datas.live} className="project-live-demo">
                            <FontAwesomeIcon icon={preview} /> 
                            Live preview
                        </a>
                    }
                    
                    <a href={props.datas.repo} className="project-source-code">
                        <FontAwesomeIcon icon={github} /> 
                        Source code
                    </a>
                </div>
            </div> 

            <div className="project-snap desk-only">
                <img src={props.datas.snap} alt="Project snap"/>
            </div>
        </div>
    );
}

export default Project;