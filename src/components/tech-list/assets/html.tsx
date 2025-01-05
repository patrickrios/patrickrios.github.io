import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { darkFill, lightFill} from "./css";

export const Html = () => {
    const { lightMode }= useContext(ThemeContext);
    return(
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.9">
                <path d="M40.3718 35.1685H31.2235L30.5927 28.0891H40.3718V21.1753H23.0369L23.2024 23.0318L24.9001 42.0823H40.3718V35.1685ZM40.3718 53.1229L40.3405 53.1319L32.6416 51.0539L32.1495 45.5403H25.2088L26.1773 56.3931L40.3405 60.3253L40.3718 60.3163V53.1229Z" fillOpacity="0.7" fill={lightMode ? lightFill : darkFill}/>
                <path d="M40.3487 35.1685V42.0823H48.8618L48.061 51.0494L40.3487 53.1296V60.323L54.523 56.3931L54.6259 55.2255L56.2498 37.025L56.4198 35.1685H40.3487ZM40.3487 21.1753V28.0891H57.0483L57.187 26.5368L57.5024 23.0318L57.6679 21.1753H40.3487Z" fill={lightMode ? lightFill : darkFill}/>
            </g>
        </svg>
    )
};