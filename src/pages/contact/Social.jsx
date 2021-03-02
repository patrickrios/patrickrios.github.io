import React from 'react';
import './styles/social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

function Social() {
    
    return (
        <div id="social">
             <a href="https://github.com/patrickrios" className="social-link github-link">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/patrickriosf/" className="social-link linked-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100001905463519" className="social-link facebook-link">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/patrickriosf/" className="social-link insta-link">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    );
}

export default Social;