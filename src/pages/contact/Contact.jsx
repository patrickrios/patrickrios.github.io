import React, { useContext } from 'react';
import './styles/contact.css'
import Form from './Form'
import Social from './Social'
import { AppContext } from '../../contexts/AppContext';

function Contact() {
    const { contact, lang } = useContext(AppContext)
    return (
        <div id="contact">
            <h2 className="section-title">
                {contact.title[lang]}
            </h2>
            <Form />
            <Social />
        </div>
    );
}

export default Contact;