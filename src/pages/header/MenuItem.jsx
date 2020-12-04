import React from 'react';
import './styles/MenuItem.css'
import {Link} from 'react-scroll'

const MenuItem = (props) => {

    return (
        <li className="main-menu-item">
            <Link activeClass="active-menu-item" to={props.target} spy={true} smooth={true} onClick={props.hide}>{props.text} </Link>
        </li>
    );
};

export default MenuItem;