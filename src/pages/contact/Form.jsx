import React, { useState } from 'react';
import './styles/form.css'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as envelope, faPaperPlane as paper } from '@fortawesome/free-solid-svg-icons'
import { faMeh as failIcon, faSmileWink as successIcon} from '@fortawesome/free-regular-svg-icons'

function Form() {

    const [sending, toggle]  = useState(null)
    const processing = <SendingCard/>

    const addSending = () => {
        toggle(processing)
    }
    const removeSending = () =>{
        toggle(null)
    }

    const sleep = (delay) => new Promise( (resolve) => setTimeout(resolve, delay) )

    const renderResult = async(comp) =>{
        await sleep(200) 
        toggle( comp )
    }

    function sendRequest(e){       
        let name =  e.target[0].value;
        emailjs.sendForm('service_0q6ft3b', 'template_xajx4ps', e.target, 'user_gSIMqzfrjn9KOhHx57Aci')
            .then(() => {
                renderResult( <SuccessResult name={name}/>  );
            }, () => {
                renderResult( <FailResult /> );
            }
        );
        e.target.reset();
    }

    function sendEmail(e){
        e.preventDefault()
        addSending()
        sendRequest(e)
    }

    return (
        <form id="form" onSubmit={sendEmail}>
            <input type="text" placeholder="Seu nome completo" name="name" required/>
            <br/>
            <input type="mail" placeholder="Seu melhor email" name="email" required/>
            <br/>
            <textarea placeholder="Sua mensagem para mim..." name="message" required></textarea>
            <br/>
            <button className="send-button" type="submit">
                <FontAwesomeIcon icon={paper}/> 
                Enviar mensagem
            </button>
            {sending}
        </form>
    );

    function SendingCard(){
        return(
            <div id="processing-send-email">
                <FontAwesomeIcon icon={envelope}  className="envelope-icon"/>
                <span className="sending">Sending</span>
            </div>
        );
    }
    
    function SuccessResult(props){
        return(
            <div id="processing-send-email">
                <div className="send-result-wrapper">
                    <FontAwesomeIcon icon={successIcon} className="wink-icon" />
                    <span className="send-success">Thank you <b>{props.name}</b>.</span>
                    <span className="send-success">I'll reply it soon as possible.</span>
                    <button className="send-success-button" type="button" onClick={removeSending}>Okay</button>
                </div>
            </div>
        );
    }
    
    function FailResult(){
        return(
            <div id="processing-send-email">
                <div className="send-result-wrapper">
                    <FontAwesomeIcon icon={failIcon} className="meh-icon" />
                    <span className="send-fail">Oops...</span>
                    <span className="send-fail">something went wrong.</span>
                    <button className="send-fail-button" type="button" onClick={removeSending}>Try it again</button>
                </div>
            </div>
        );
    }
}

export default Form;