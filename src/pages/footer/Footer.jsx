import React from 'react';
import FooterIcon from './footer-icon.png';
import './footer.css'

function Footer() {
    const currentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <div id="footer">
            <span className="footer-icon">
                <img src={FooterIcon} alt="Icon footer"/> @patrickrios:~
            </span>
            <span className="copyright">Copyright &copy; {currentYear()} </span>
        </div>
    );
    //<span className="made-with">Made with <b className="coffee-bg"><FontAwesomeIcon icon={coffee}/></b> + <b className="react-bg">React <FontAwesomeIcon icon={faReact}/></b></span>
}

export default Footer;