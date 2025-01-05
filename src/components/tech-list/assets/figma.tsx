import React, { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext";
import { darkFill, lightFill} from "./css";

export const Figma = () => {
    const { lightMode} = useContext(ThemeContext);
    return(
        <svg width="79" height="78" viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1743_184)">
                <path d="M31.6713 62.6948C36.1017 62.6948 39.6974 59.0991 39.6974 54.6687V46.6426H31.6713C27.2408 46.6426 23.6451 50.2383 23.6451 54.6687C23.6451 59.0991 27.2408 62.6948 31.6713 62.6948Z" fill={lightMode ? lightFill : darkFill}/>
                <path d="M23.6451 38.616C23.6451 34.1855 27.2408 30.5898 31.6713 30.5898H39.6974V46.6421H31.6713C27.2408 46.6421 23.6451 43.0464 23.6451 38.616Z" fill={lightMode ? lightFill : darkFill}/>
                <path d="M23.6453 22.5642C23.6453 18.1338 27.241 14.5381 31.6714 14.5381H39.6975V30.5903H31.6714C27.241 30.5903 23.6453 26.9946 23.6453 22.5642Z" fill={lightMode ? lightFill : darkFill}/>
                <path d="M39.6973 14.5381H47.7234C52.1538 14.5381 55.7495 18.1338 55.7495 22.5642C55.7495 26.9946 52.1538 30.5903 47.7234 30.5903H39.6973V14.5381Z" fill={lightMode ? lightFill : darkFill} fillOpacity="0.5"/>
                <path d="M55.7495 38.616C55.7495 43.0464 52.1538 46.6421 47.7234 46.6421C43.293 46.6421 39.6973 43.0464 39.6973 38.616C39.6973 34.1855 43.293 30.5898 47.7234 30.5898C52.1538 30.5898 55.7495 34.1855 55.7495 38.616Z" fill={lightMode ? lightFill : darkFill} fillOpacity="0.6"/>
            </g>
            <defs>
                <clipPath id="clip0_1743_184">
                    <rect width="32.1205" height="48.1567" fill="white" transform="translate(23.6371 14.5381)"/>
                </clipPath>
            </defs>
        </svg>

    )
};