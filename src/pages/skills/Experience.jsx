import React from 'react';

import './styles/experience.css';
import Card from './ExperienceCard';

function Experience() {

    const cards = [
        { 
            id: 0,
            title: "WEB", 
            description: "Making the UI Design a high-quality experience and usability to my users.",
            topics: [
                {
                    title: "Basics", 
                    items: ["Javascript, Typescript, HTML, CSS"]
                },
                {
                    title: "Libraries", 
                    items: ["ReactJS, JQuery, Material UI, Bootstrap"]
                },
                {
                    title: "Back-end",
                    items: ["PHP, NodeJS, RestAPI"]
                },
                {
                    title: "Frameworks",
                    items: ["Wordpress"]
                },
                {
                    title: "Tools", 
                    items: ["Figma, Adobe Illustrator"]
                }
            ]
        },

        { 
            id: 1,
            title: "DESKTOP", 
            description: "Design, implementation, optimization and maintenance of software systems",
            topics: [
                {
                    title: "Programming languages", 
                    items: ["Java, C, C++"]
                },
                {
                    title: "Libraries",
                    items: ["JavaFX, Spring"]
                },
                {
                    title: "OS", 
                    items: ["GNU/Linux, Windows"]
                },
                {
                    title: "Databases", 
                    items: ["SQL, MySQL & PostgreSQL"]
                }
            ]
        },

        { 
            id: 2,
            title: "TOOLS", 
            description: "Software engineer activities and project management",
            topics: [
                {
                    title: "Dev tools", 
                    items:[
                        "Git & Github",
                        "Intellij IDEA",
                        "VS Code",
                        "SceneBuilder"
                    ]
                },{
                    title: "Project tools",
                    items:[
                        "Trello",
                        "Todoist",
                        "ArgoUML"
                    ]
                }
            ]
        }
    ]

    //console.log(cards)

    const renderCard = (card) => {
        return <Card card={card} key={card.id}/>
    }

    return (
        <div id="experience">
            <h2 className="section-title">My coding skills</h2>
            <div className="experience-wrapper">
                { cards.map( card => renderCard(card) ) }
            </div>
        </div>
    );
}
//<span className="icons-credit">Icons by <a href="https://thenounproject.com/undelivered/">un·delivered</a> from <a href="https://thenounproject.com/">Noun Project</a></span>
export default Experience;