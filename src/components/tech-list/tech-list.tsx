import React, { useContext } from "react";
import css from "./tech-list.module.css";
import { techSections } from "./assets/tech-icons";
import { ToolTip } from "../tool-tip/tooltip";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "framer-motion";
import { AppContext } from "../../contexts/AppContext";

function getColumnsByIndex( index : number){
    switch(index){
        case 0: return css.frontColumns;
        case 1: return css.backColumns;
        case 2: return css.gameColumns;
    }
}

export const TechList = () => {
    const { lightMode} = useContext(ThemeContext);
    const { lang } = useContext(AppContext);
    return(
        <>
            {techSections?.map((section, index) =>(
                <div 
                    className={`${css.techSection} ${lightMode && css.light}`} 
                    key={`section-${section?.name}-${index}`}
                >
                    <h2>{section?.name}</h2>
                    <div 
                        className={`${css.techContainer} ${getColumnsByIndex(index)}`}>
                        {section?.techs?.map((tech, index) => (
                            <ToolTip 
                                text={tech?.tip[lang]} 
                                key={`tech-${tech?.name}-${index}`}
                            >
                                <motion.div 
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:0.5}}
                                    className={`${css.techItem} ${lightMode && css.light}`}
                                >
                                    {tech?.icon}
                                    <span>
                                        {tech?.name}
                                    </span>
                                </motion.div>
                            </ToolTip>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
};