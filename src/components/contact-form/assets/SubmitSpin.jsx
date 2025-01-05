import React from "react"

export const SubmitSpin = () => {
    return(
        <div style={{position:"absolute",zIndex:"10",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto"}} width="130px" height="130px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="23" strokeWidth="3" stroke="#4381f9" strokeDasharray="36.12831551628262 36.12831551628262" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" dur="1.5384615384615383s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
            <circle cx="50" cy="50" r="19" strokeWidth="3" stroke="#07d5d5" strokeDasharray="29.845130209103033 29.845130209103033" strokeDashoffset="29.845130209103033" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" dur="1.5384615384615383s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
            </circle>
        </svg>
        </div>
    )
}