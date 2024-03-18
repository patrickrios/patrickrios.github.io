import React, { useContext, useEffect } from "react";
import css from "./project-overview.module.css";
import left_round from "./assets/icons8_left-round.svg";
import { Slide } from "./project-item";
import { Slider } from "../slider/slider";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";

interface ProjectOverviewProps{
    name: string;
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
    onClear: () => void;
}

interface ProjectOverviewData{
    data: ProjectOverviewProps;
}

export const ProjectOverview = (props : ProjectOverviewData) => {
    const { data } = props;
    const { name, onClear, slide, keywords, embed, links } = data;
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);

    const handleKeyDown = (event : any) => {
        if (event.keyCode === 27)
            onClear();
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return(
        <motion.div 
            className={css.projectOverview}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.35}}
        >
            <header className={css.header}>
                <button 
                    onClick={onClear} 
                    className={css.goBack} 
                    title="Voltar para portifólio"
                >
                    <img src={left_round}/>
                    <span>ESC</span>
                </button>
                <h2 className={`${css.title} ${lightMode && css.light}`}>
                    {name}
                </h2>
            </header>
            <div className={css.keywordContainer}>
                {keywords && keywords?.length > 0 && 
                    keywords?.map((key, index) => (
                        <span 
                            className={`${css.keyword} ${lightMode && css.light}`} 
                            key={`${key}-item-${index}`}
                        >
                            {key}
                        </span>
                ))}
            </div>
            <div className={css.externalLinks}>
                { links && links?.source && <a href={links?.source}>source code</a>}
                { links && links?.preview && <a href={links?.preview}>preview</a>}
            </div>
            { slide && slide?.length > 0 && 
                <Slider data={slide}/>
            }
            { embed && 
                <iframe 
                    frameBorder="0" 
                    src={embed?.url} 
                    allowFullScreen 
                    width="800" 
                    height="450"
                    style={{marginTop:"2rem"}}
                >
                    <a href="https://patrickrios.itch.io/komodora">
                        Play Komodora on itch.io
                    </a>
                </iframe>
                }
            { embed && 
                <p className={css.caption}>
                    { parse(embed?.caption[lang])}
                </p>
            }
        </motion.div>
    )
}