import React from "react";
import css from "./projects.module.css";
import { ProjectItem } from "./project-item";
import {personalProjects, professionalProjects} from "./projects";

export const Professional = () => {
    return(
        <section className={css.section}>
            <div className={css.professionalSection}>
                { professionalProjects.map((project, index)=>(
                    <ProjectItem 
                        data={project}
                        key={`project-${project?.name}-${index}`}
                        styleClass={ index === 0 && css.firstProject}
                    />
                ))}
            </div>
        </section>
    )
};

export const Personal = () => {
    return(
        <section className={css.section}>
            <div className={css.sectionContent}>
                { personalProjects.map((project,index)=>(
                    <ProjectItem 
                        data={project}
                        key={`project-${project?.name}-${index}`}
                    />
                ))}
            </div>
        </section>
    )
};