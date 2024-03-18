import React from "react";
import css from "./toggle.module.css";

interface ToggleProps{
    active?:{
        icon: string;
        style: string;
    };
    inactive?:{
        icon: string;
        style: string;
    }
    title?: string;
    onAction: () => void;
    isON?: boolean;
}

export const ToggleButton = (props : ToggleProps) => {
    const {
        active,
        inactive,
        onAction,
        title,
        isON
    } = props;

    const handleOnAction = () =>{
        onAction();
    };

    return(
        <div 
            className={`
                ${css.toggle}
                ${isON ? active.style : inactive.style}
                ${isON ? css.onStyle : css.offStyle}
            `}
            onClick={handleOnAction}
            title={title ? title : ''}
        >
            <img 
                src={isON ? active.icon : inactive.icon }
                className={isON ? css.active : css.inactive}
            />
        </div>
    );
}