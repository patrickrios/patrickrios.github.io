import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { darkFill, lightFill} from "./css";

export const TailWind = () => {
    const { lightMode }= useContext(ThemeContext);
    return(
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1743_180)">
                <path d="M26.6244 33.8145C28.2329 27.3621 32.2563 24.1353 38.6919 24.1353C48.346 24.1353 49.5527 31.3946 54.3797 32.6045C57.5982 33.4115 60.4135 32.2017 62.827 28.9748C61.2185 35.4272 57.1951 38.654 50.7595 38.654C41.1054 38.654 39.8987 31.3946 35.0716 30.1848C31.8532 29.3778 29.0379 30.5876 26.6244 33.8145ZM14.5568 48.3333C16.1654 41.8809 20.1888 38.654 26.6244 38.654C36.2784 38.654 37.4852 45.9134 42.3122 47.1233C45.5306 47.9303 48.346 46.7204 50.7595 43.4936C49.1509 49.946 45.1275 53.1728 38.6919 53.1728C29.0379 53.1728 27.8311 45.9134 23.0041 44.7036C19.7856 43.8965 16.9703 45.1064 14.5568 48.3333Z" fill={lightMode ? lightFill : darkFill}/>
            </g>
            <defs>
                <clipPath id="clip0_1743_180">
                    <rect width="48.2702" height="48.2702" fill={lightMode ? lightFill : darkFill} transform="translate(14.5568 14.481)"/>
                </clipPath>
            </defs>
        </svg>

    )
};