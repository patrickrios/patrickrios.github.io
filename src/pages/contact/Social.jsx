import React from 'react';
import './styles/social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import ContactProfile from './images/contact-logo-min.png'

function Social() {
    
    return (
        <div id="social">
            <div className="social-wrapper">
                <div className="social-medias">
                    <img src={ContactProfile} alt="" className="contact-profile"/>
                    <div className="social-links">
                        <a href="https://github.com/patrickrios" className="github-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100001905463519" className="facebook-link">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.instagram.com/patrickriosf/" className="insta-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/patrickriosio/" className="linked-link">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Social;