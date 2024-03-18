import React, {ReactNode} from "react";
import css from "./tooltip.module.css";
import arrow from "./tooltip.svg";

interface TooltipProps{
    children?: ReactNode;
    text?: string;
}

export const ToolTip = ({ children, text }:TooltipProps) => {
    return(
        <div className={css.tooltipContainer}>
            <div className={css.tooltip}>
                <span>{text}</span>
                <img 
                    src={arrow} 
                    className={css.tooltipArrow}
                />
            </div>
            {children}
        </div>
    )
}