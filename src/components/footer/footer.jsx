import React from "react";

const style = {
    width:"100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 0",
    color: "var(--gray-50)",
    background: "linear-gradient(to bottom, #1C1B18, #161513)"
}

function getCurrentYear() {
    var date= new Date();
    return date.getFullYear();
  }

export const Footer = () => {
    return(
        <footer style={style}>
            <p>copyright {getCurrentYear()}</p>
            <p>last update: 27/01/2025</p>
        </footer>
    )
}