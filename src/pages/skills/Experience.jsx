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
                    title: "Tools", 
                    items: ["Figma, Adobe Illustrator"]
                }
            ]
        },

        { 
            id: 1,
            icon: backIcon,
            title: "Backend", 
            description: "Design, implementation, optimization and maintenance of software systems",
            topics: [
                {
                    title: "Programming languages", 
                    items: ["Java, C, C++, PHP, Python"]
                },
                {
                    title: "Libraries", 
                    items: ["JavaFX, NodeJS"]
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
            description: "Software engineer activities and project management",
            topics: [
                {
                    title: "Activities", 
                    items:[
                        "Requirements management",
                        "Tasks management",
                        "Data modeling using UML 2.0",
                        "Database structure project",
                        "Debbuging and bug fixing",
                        "Deploy and maintenance",
                        "Mentoring other team members"
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
            <h2 className="section-title">@skills:~$</h2>
            <div className="experience-wrapper">
                { cards.map( card => renderCard(card) ) }
            </div>
        </div>
    );
}
//<span className="icons-credit">Icons by <a href="https://thenounproject.com/undelivered/">un·delivered</a> from <a href="https://thenounproject.com/">Noun Project</a></span>
export default Experience;