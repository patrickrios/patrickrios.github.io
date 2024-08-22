import React, { useContext } from "react";
import css from "./project-item.module.css";
import { PortifolioContext } from "../../contexts/PortfolioContext";
import { ProjectOverview } from "./project-overview";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { AppContext } from "../../contexts/AppContext";

export interface Slide{
    thumb: string;
    caption: {
        "pt-br": string;
        "eng": string;
    };
}

interface ProjectItemProps{
    thumbnail: string[];
    name: string;
    description?: {
        "pt-br"?: string;
        "eng"?: string;
    };
    slide?: Slide[];
    keywords?: string[];
    links?:{
        source?: string;
        preview?: string;
    },
    embed?:{
        url: string;
        caption: {
            "pt-br"?: string;
            "eng"?: string;
        };
    };
}

interface ProjectDataProp{
    data: ProjectItemProps;
    style?: object;
    styleClass?: string;
}

const viewText = {
    "pt-br": "VER DETALHES",
    "eng": "SEE DETAILS"
}

export const ProjectItem = ( props : ProjectDataProp) => {
    const { data, style, styleClass } = props;
    const { thumbnail, name, description, slide, keywords,links, embed } = data;
    const { addContent, clearContent } = useContext(PortifolioContext);
    const { lang } = useContext(AppContext);
    const thumbnailSize = thumbnail?.length;

    const handleOnClick = () =>{
        addContent(<ProjectOverview 
            data={{
                name,
                onClear: clearContent,
                slide,
                keywords,
                links,
                embed
            }}/>
        );
    }
    
    return(
        <motion.div 
            initial={{ scale:0.9, opacity:0 }}
            animate={{ scale:1, opacity:1 }}
            transition={{ duration:0.25 }}
            className={`${css.projectItem} ${styleClass ? styleClass : ''}`} 
            style={style ? style : {}} 
        >
            <Link to="tabPane" smooth={true} onClick={handleOnClick} offset={-10}>
                <picture className={css.projectThumb}>
                    { thumbnailSize > 1 && <>
                        <source media="(max-width: 599px)" srcSet={thumbnail[1]}/>
                        <source media="(min-width: 600px)" srcSet={thumbnail[0]}/>
                        </>
                    }
                    <img src={thumbnail[0]} alt="Imagem"/>
                </picture>
                <div className={css.projectInfo}>
                    <h3>{name}</h3>
                    <p>{description?.["eng"] ? description?.[lang] : description}</p>
                    <button className={css.viewDetailsBtn}>
                        { viewText[lang] }
                    </button>
                </div>
            </Link>
        </motion.div>
    )
};