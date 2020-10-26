import React from 'react';

import './styles/experience.css';
import Card from './ExperienceCard';
import frontIcon from './images/frontend-icon.svg';
import backIcon  from './images/backend-icon.svg';
import projIcon  from './images/project-icon.svg'

function Experience() {

    const cards = [
        { 
            id: 0,
            icon: frontIcon,
            title: "Frontend", 
            description: "Visual language are treated with relevance in projects of mine, offering a good experience and usability to my users.",
            topics: [
                {
                    title: "Languages and frameworks", 
                    items: ["Js, HTML, CSS"]
                },
                {
                    title: "Activities", 
                    items: ["Prototyping, implement"]
                }
            ]
        },

        { 
            id: 1,
            icon: backIcon,
            title: "Backend", 
            description: "I dominate the most important programming languages of market",
            topics: [
                {
                    title: "Programming languages", 
                    items: ["Java, C, C++, PHP, Python"]
                },
                {
                    title: "Databases", 
                    items: ["Relational databases MySQL and PostgreSQL"]
                }
            ]
        },

        { 
            id: 2,
            icon: projIcon,
            title: "Design and project", 
            description: "All software engineer activities, creating a new project or adding funcs to an existing project",
            topics: [
                {
                    title: "Activities", 
                    items:[
                        "System requirement management", 
                        "Data modeling using UML 2.0",
                        "Database structure project",
                        "Testing and bugs reports",
                        "Deploy and maintenance",
                        "Supporting"
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
            <div className="experience-wrapper">
                { cards.map( card => renderCard(card) ) }
            </div>
            <span>Icons by author from Noun Project</span>
        </div>
    );
}

export default Experience;