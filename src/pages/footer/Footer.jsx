import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMugHot as coffee} from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

function Footer() {
    const currentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <div id="footer">
            <span className="copyright">Copyright &copy; {currentYear()} </span>
            <span className="made-with">Made with <b className="coffee-bg"><FontAwesomeIcon icon={coffee}/></b> + <b className="react-bg">React <FontAwesomeIcon icon={faReact}/></b></span>
        </div>
    );
}

export default Footer;