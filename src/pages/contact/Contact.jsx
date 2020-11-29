import React from 'react';
import './styles/contact.css'
import Form from './Form'
import Social from './Social'

function Contact() {
    return (
        <div id="contact">
            <div className="contact-title">
                <h2 className="section-title">@contact:~$</h2>
            </div>
            <Social/>
            <Form />
        </div>
    );
}

export default Contact;