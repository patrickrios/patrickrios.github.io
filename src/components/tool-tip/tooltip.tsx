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
                <Arrow/>
            </div>
            {children}
        </div>
)}

const Arrow = () => {
    return(
        <svg className={css.tooltipArrow} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L11 1H1L6 6Z" fill="#1F1F1F"/>
            <path d="M1 1L6 6L11 1" stroke="#454554"/>
        </svg>
)}