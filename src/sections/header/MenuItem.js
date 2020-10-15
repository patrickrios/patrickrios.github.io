import React from 'react';
import './styles/MenuItem.css'

const MenuItem = (props) => {
    return (
        <li className="main-menu-item"><a href="/">{props.text}</a></li>
    );
};

export default MenuItem;