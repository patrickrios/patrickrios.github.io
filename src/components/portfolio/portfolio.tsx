import React, { useContext } from "react";
import { Professional } from "./professional";
import { PortifolioContext } from "../../contexts/PortfolioContext";

export const Portfolio = () => {
    const { content } = useContext(PortifolioContext);
    return(
        <>
            { content !== null ? 
                content : 
                <>
                    <Professional/>
                </>
            }
        </>
    )
}