import React, { useContext, useState } from 'react';
import './styles/form.css'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as envelope, faPaperPlane as paper } from '@fortawesome/free-solid-svg-icons'
import { faMeh as failIcon, faSmileWink as successIcon} from '@fortawesome/free-regular-svg-icons'
import { AppContext } from '../../contexts/AppContext';

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

    const {contact, lang} = useContext(AppContext)

    return (
        <form id="form" onSubmit={sendEmail}>
            <input type="text" placeholder={contact.inputName[lang]} name="name" required/>
            <br/>
            <input type="mail" placeholder={contact.inputEmail[lang]} name="email" required/>
            <br/>
            <textarea placeholder={contact.inputMessage[lang]} name="message" required></textarea>
            <br/>
            <button className="send-button" type="submit">
                <FontAwesomeIcon icon={paper}/> 
                {contact.sendButton[lang]}
            </button>
            {sending}
        </form>
    );
    ////SuccessResult({name: "Elon"})
    function SendingCard(){
        return(
            <div id="processing-send-email">
                <FontAwesomeIcon icon={envelope}  className="envelope-icon"/>
                <span className="sending">{contact.send[lang]}</span>
            </div>
        );
    }
    
    function SuccessResult(props){
        return(
            <div id="processing-send-email">
                <div className="send-result-wrapper">
                    <FontAwesomeIcon icon={successIcon} className="wink-icon" />
                    <span className="send-success">{contact.sendCongrats[lang]} <b>{props.name}</b>.</span>
                    <span className="send-success">{contact.sendMessage[lang]}</span>
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
                    <span className="send-fail">{contact.sendFail[lang]}</span>
                    <button className="send-fail-button" type="button" onClick={removeSending}>{contact.sendFailAction[lang]}</button>
                </div>
            </div>
        );
    }
}

export default Form;