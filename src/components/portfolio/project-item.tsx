import React, { useContext } from "react";
import css from "./project-item.module.css";
import { PortifolioContext } from "../../contexts/PortfolioContext";
import { ProjectOverview } from "./project-overview";
import { motion } from "framer-motion";
import { AppContext } from "../../contexts/AppContext";
import { Card } from "../feed-card/FeedCard";
import { UnlikedHeart } from "./assets/icons";

export interface Slide{
    thumb: string;
    caption: {
        "pt-br": string;
        "eng": string;
    };
}
interface ProjectItemProps{
    name: string;
    description?: {
        "pt-br"?: string;
        "eng"?: string;
    };
    thumbs: { img: string, grid?: { col: string, row: string}}[],
    embed?:{
        url: string;
        caption: {
            "pt-br"?: string;
            "eng"?: string;
        };
    };
    grid?:{
        column: string;
        row: string;
    }
}
interface ProjectDataProp{
    data: ProjectItemProps;
    style?: object;
    styleClass?: string;
}
interface ThumbnailProps{
    source: string;
    column: string;
    row: string;
}

const Thumbnail = ({ source, column, row} : ThumbnailProps) =>{
    return(
        <div 
            className={css.projectThumb} 
            style={{gridColumn: column, gridRow: row}}
        >
            <img  src={source}/>
        </div>
    )
};

export const ProjectItem = ( props : ProjectDataProp) => {
    const { data, style, styleClass } = props;
    const {  name, description, thumbs, grid } = data;
    const { addContent, clearContent } = useContext(PortifolioContext);
    const { lang } = useContext(AppContext);


    return(
        <motion.div 
            initial={{ scale:0.9, opacity:0 }}
            animate={{ scale:1, opacity:1 }}
            transition={{ duration:0.25 }}
            className={`${styleClass ? styleClass : ''}`} 
            style={{
                gridColumn: grid?.column,
                gridRow: grid?.row
            }} 
        >
            <Card title={name} style={{height: '100%'}}>
                <p className={css.projectDescription}>
                    { description[lang] }
                </p>
                <div className={css.thumbnailGrid}>
                    { thumbs?.map((thumb, index) => {
                        return(
                            <Thumbnail 
                                source={thumb?.img} 
                                column={thumb?.grid?.col}
                                row={thumb?.grid?.row}
                                key={`image-thumb-${index}`}
                            />
                    )})}
                </div>
                <div style={{paddingTop:"1rem"}}>
                    <UnlikedHeart/>
                </div>
            </Card>
        </motion.div>
    )
};