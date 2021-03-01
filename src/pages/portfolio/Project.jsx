import React from 'react';
import './styles/project.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
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
                        <img src={props.datas.logo} alt={props.datas.name}/>                        
                    </p>
                    <div className="techs-list">
                        {
                            props.datas.techs.map( icon =>renderIcon(icon))
                        }
                        <span>{props.datas.level}</span>
                    </div>
                </header>
                <p className="project-description">
                    {props.datas.desc}
                </p>
                <div className="project-links">
                    <a href={props.datas.repo} className="project-live-demo">
                        Live preview
                    </a>
                    <a href={props.datas.repo} className="project-source-code">
                        <FontAwesomeIcon icon={github} />
                        Source code
                    </a>
                </div>
            </div> 

            <div className="project-snap">
                <img src={props.datas.snap} alt="Project snap"/>
            </div>
        </div>
    );
}

export default Project;