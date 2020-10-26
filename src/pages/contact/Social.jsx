import React from 'react';
import './styles/social.css';
import Logo from './images/contact-logo-min.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

function Social() {
    return (
        <div id="social">
            <img src={Logo} alt="Bottom logo"/>
            <div className="social-medias-links">
                <a href="https://github.com/patrickrios">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5567998956752&text=Ol%C3%A1%20Patrick">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100001905463519" className="facebook-link">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.linkedin.com/in/patrickriosio/" className="linked-link">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </div>
    );
}

export default Social;