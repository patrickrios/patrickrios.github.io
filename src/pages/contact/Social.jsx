import React from 'react';
import './styles/social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faPiedPiperAlt} from '@fortawesome/free-brands-svg-icons'

function Social() {
    return (
        <div id="social">
            <div className="social-wrapper">
                <div className="social-medias">
                <h2 className="social-piper-icon"><FontAwesomeIcon icon={faPiedPiperAlt}/></h2>
                <h3>Follow me</h3>
                <div className="social-links">
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
            </div>
            
        </div>
    );
}

export default Social;