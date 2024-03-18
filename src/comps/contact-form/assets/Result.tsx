import React, { useContext } from "react";
import { motion } from "framer-motion";
import css from "./result.module.css";
import parse from "html-react-parser";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { AppContext } from "../../../contexts/AppContext";
import { resultText } from "./contactText";

export enum ResultType {
    SUCCESS,
    ERROR
}

interface ResultProps{
    name?: string;
    type: ResultType;
}

export const Result = (props : ResultProps) => {
    const { name, type } = props;
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);
    return(
        <motion.p 
            className={`
                ${type === ResultType.SUCCESS ? 
                    css.result : css.fail
                } 
                ${lightMode && css.light}
            `} 
            initial={{scaleY:0,opacity:0}} 
            animate={{scaleY:1,opacity:1}} 
            transition={{duration:0.35}}
        >
            { type === ResultType.SUCCESS ? 
                parse( resultText?.success[lang]?.replace('$name', name)) :
                resultText?.error[lang]
            }
        </motion.p>
    )
}