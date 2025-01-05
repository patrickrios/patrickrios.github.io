import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

export const darkFill  = "var(--gray-90)";
export const lightFill = "var(--gray-12)";

export const Css = () => {
    const { lightMode }= useContext(ThemeContext);
    return(
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" width="77" height="77" rx="12" fill="none"/>
            <g opacity="0.9">
                <path d="M39.6372 34.0287H48.5454L49.1596 27.1352H39.6372V20.4028H56.5171L56.3559 22.2084L54.7028 40.7611H39.6372V34.0287Z" fill={lightMode ? lightFill : darkFill}/>
                <path d="M39.6759 51.5117L39.6454 51.5205L32.1485 49.4949L31.6694 44.126H24.9109L25.854 54.6961L39.6432 58.5251L39.6759 58.5163V51.5117Z" fillOpacity="0.7" fill={lightMode ? lightFill : darkFill}/>
                <path d="M47.9703 40.4756L47.1601 49.4905L39.6523 51.5161V58.5207L53.4525 54.6961L53.5548 53.5591L54.7244 40.4756H47.9703Z" fill={lightMode ? lightFill : darkFill}/>
                <path d="M39.6603 20.4028V27.1352H23.399L23.2639 25.6214L22.9568 22.2084L22.7957 20.4028H39.6603ZM39.6363 34.0287V40.7611H32.2331L32.0981 39.2473L31.7932 35.8343L31.632 34.0287H39.6363Z" fillOpacity="0.7" fill={lightMode ? lightFill : darkFill}/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_1757_204" x1="40" y1="39" x2="1" y2="39" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1572B6"/>
                <stop offset="1" stopColor="#0E5284"/>
            </linearGradient>
        </defs>
        </svg>
    )
};