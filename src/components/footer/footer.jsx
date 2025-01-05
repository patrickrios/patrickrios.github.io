import React from "react";

const style = {
    width:"100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 0",
    color: "var(--gray-50)"
}

function getCurrentYear() {
    var date= new Date();
    return date.getFullYear();
  }

export const Footer = () => {
    return(
        <footer style={style}>
            copyright {getCurrentYear()}
        </footer>
    )
}