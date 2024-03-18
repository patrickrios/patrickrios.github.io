import React, { useContext } from "react";
import { Personal, Professional } from "./professional";
import { PortifolioContext } from "../../contexts/PortfolioContext";

export const Portfolio = () => {
    const { content } = useContext(PortifolioContext);
    return(
        <>
            { content !== null ? 
                content : 
                <>
                    <Professional/>
                    <Personal/>
                </>
            }
        </>
    )
}