import React from "react";

interface MarkerProps{
    fill: string;
}

export const color ={
    NORMAL: "#262626",
    MARKED: "#005CFF"
}

export const Marker = ({ fill} : MarkerProps) => {
    return (
        <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle 
                cx="6" 
                cy="6" 
                r="6" 
                fill={fill}
            />
        </svg>
    )
}

interface ArrowProps{
    className: string;
    onAction: () => void;
}

export const SliderArrow = () => {
    return(
        <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.4">
                <path d="M16.0001 29.3332C23.3641 29.3332 29.3334 23.3638 29.3334 15.9998C29.3334 8.63584 23.3641 2.6665 16.0001 2.6665C8.63608 2.6665 2.66675 8.63584 2.66675 15.9998C2.66675 23.3638 8.63608 29.3332 16.0001 29.3332Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M14 22L20 16L14 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    )
}