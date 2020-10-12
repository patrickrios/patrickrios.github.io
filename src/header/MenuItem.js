import React from 'react';
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <li className="main-menu-item"><a>{props.texto}</a></li>
    );
};

export default MenuItem;