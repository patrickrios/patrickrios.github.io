import React from "react";
import css from "./projects.module.css";
import { ProjectItem } from "./project-item";
import {personalProjects, professionalProjects, professionalFeed} from "./projects";
import { Card } from "../feed-card/FeedCard";
import hubknPhotoGrid from "./assets/hubkn_photo_grid.png";

export const Professional = () => {
    return(
        <section className={css.section} style={{marginTop:"1rem"}}>
            <div className={css.professionalSection}>
                { professionalFeed.map( post =>{
                    return(
                        <ProjectItem 
                            data={post} 
                            key={`post-item-${post.name}`}
                        />
                )})}
            </div>
        </section>
    )
};