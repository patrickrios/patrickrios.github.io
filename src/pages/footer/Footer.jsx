import React from 'react';
import './footer.css'

function Footer() {

    const currentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div id="footer">
            <span className="copyright">Copyright &copy; {currentYear()} </span>
        </div>
    );
}

export default Footer;