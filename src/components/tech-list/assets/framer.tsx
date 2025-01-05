import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { darkFill, lightFill} from "./css";

export const FramerMotion = () => {
    const { lightMode }= useContext(ThemeContext);
    return(
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.5353 62.6943V30.5898H23.483V46.6421L39.5353 62.6943Z" fill={lightMode ? lightFill : darkFill} fillOpacity="0.5"/>
            <path d="M55.5875 30.5903V14.5381H23.483L39.5353 30.5903H23.483V46.6425H55.5875L39.5353 30.5903H55.5875Z" fill={lightMode ? lightFill : darkFill}/>
        </svg>
    )
};