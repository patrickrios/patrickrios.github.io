import React from 'react';
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <li className="main-menu-item"><a>{props.text}</a></li>
    );
};

export default MenuItem;