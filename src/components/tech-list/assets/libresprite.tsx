import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { darkFill, lightFill} from "./css";

export const LibreSprite = () => {
    const { lightMode }= useContext(ThemeContext);
    return(     
    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22 13H56.5V16.5H22V13ZM18.5 20V16.5H22V20H18.5ZM18.5 58.5H15V20H18.5V58.5ZM22 62H18.5V58.5H22V62ZM57 62V65.5H22V62H57ZM60 58.5V62H57V58.5H60ZM60 20H63.5V58.5H60V20ZM60 20V16.5H56.5V20H60Z" fill={lightMode ? lightFill : darkFill}/>
        <path d="M22 34V30H25.5V27H32.5V30H36V34H32.5V30H25.5V34H22Z" fill={lightMode ? lightFill : darkFill}/>
        <path d="M43 34V30H46.5V27H53V30H56.5V34H53V30H46.5V34H43Z" fill={lightMode ? lightFill : darkFill}/>
        <path d="M32.5 41H29V48H32.5V51.5H46.5V48H50V41H46.5V44.5H32.5V41Z" fill={lightMode ? lightFill : darkFill}/>
        <path d="M56.5 52H60V58.5H57V62H22V58.5H18.5V52H22V55.5H56.5V52Z" fill={lightMode ? lightFill : darkFill} fillOpacity="0.2"/>
    </svg>
)};