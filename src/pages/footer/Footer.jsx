import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

function Footer() {
    return (
        <div id="footer">
            <span>Made with <FontAwesomeIcon icon={faHeart} /> and <b className="react-bg">ReactJS <FontAwesomeIcon icon={faReact}/></b></span>
        </div>
    );
}

export default Footer;