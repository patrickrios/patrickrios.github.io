import React from 'react';
import './styles/form.css'

function Form() {
    return (
        <div id="form">
            <h3>Send me a message</h3>
            <legend>Your name</legend>
            <input type="text" placeholder="insert you name" />
            <br/>
            <legend>Your e-mail</legend>
            <input type="mail" placeholder="insert you email" />
            <br/>
            <legend>Your name</legend>
            <textarea placeholder="Tell me something"></textarea>
            <br/>
            <button>Send</button>
        </div>
    );
}

export default Form;