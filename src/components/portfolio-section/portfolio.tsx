import css from "./projects.module.css";
import { ProjectItem } from "./project-item";
import projects from "./projects.json";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

export const Portfolio = () => {
    const { lang } = useContext(AppContext);
    return(
        <section className={css.portfolio} id="projects">
            <h3 className={css.strokeText}>
                { lang === 'pt-br' ? 'PROJETOS' : 'PROJECTS'}
            </h3>
            <Professional/>
            <Personal/>
        </section>
    )
}

const Professional = () => {
    return(
        <section className={css.section}>
            <div className={css.professionalSection}>
                { projects['professional'].map((project, index)=>(
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
                { projects['personal'].map((project,index)=>(
                    <ProjectItem 
                        data={project}
                        key={`project-${project?.name}-${index}`}
                        styleClass={ project?.name === "Komodora" && css.verticalElement}
                    />
                ))}
            </div>
        </section>
    )
};