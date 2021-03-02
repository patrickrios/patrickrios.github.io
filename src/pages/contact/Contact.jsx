import React from 'react';
import './styles/contact.css'
import Form from './Form'
import Social from './Social'

function Contact() {
    return (
        <div id="contact">
            <h2 className="section-title">
                Se você tem alguma proposta ou deseja trabalhar comigo, me envie uma mensagem
            </h2>
            <Form />
            <Social />
        </div>
    );
}

export default Contact;