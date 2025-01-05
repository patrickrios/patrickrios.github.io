import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import css from "./contact-form.module.css";
import {SubmitSpin} from "./assets/SubmitSpin";
import  { Result, ResultType } from "./assets/Result";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../contexts/ThemeContext";
import { contactText } from "./assets/contactText";
import { AppContext } from "../../contexts/AppContext";
import parse from "html-react-parser";
import { motion } from "framer-motion";
type Inputs = {
  name: string;
  email: string;
  message: string;
}

function getFirstName( fullName : string){
    const splitted = fullName.split(' ');
    return splitted?.[0];
}

export const ContactForm = () =>{
    const {
        register,
        handleSubmit,
        formState,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);
    const[isSubmitting, setSubmitting] = useState(false);
    const[result,setResult] = useState(null);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setSubmitting(true);
        const templateParams = {
            from_name: data?.name,
            message: data?.message,
            email: data?.email
        };
        await emailjs.send(
            'service_lxm1maj', 
            'template_mkmcrre',
            templateParams, 
            'tL-yOysdJZ7g5W3Ld'
        ).then(() => {
            setResult(
                <Result 
                    name={getFirstName(data?.name)} 
                    type={ResultType.SUCCESS}
                />
            );
            }, (error) => {
            console.error('Error sending email:', error);
            setResult(<Result type={ResultType.ERROR}/>);
        });
        setSubmitting(false);
        reset();
    };

  return (
    <motion.div 
        className={css.formContainer}
        initial={{opacity:0.5, scale: 0.98}}
        animate={{opacity:1, scale: 1}}
        transition={{duration: 0.3}}
    >
        { isSubmitting && <SubmitSpin/>}
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className={`${css.contactForm} ${lightMode && css.light} ${isSubmitting && css.submitting}`}
            id="contactForm"
        >
            {result}
            <label className={css.requiredLabel}>
                {contactText?.nameInput?.title[lang]}
            </label>
            <input 
                type="text" 
                {...register("name",{ required:true })} 
                placeholder={contactText?.nameInput?.placeholder[lang]}
                disabled={isSubmitting}
            />
            {errors.name && 
                <span className={css.errorMessage}>
                    {parse(contactText?.nameInput?.error[lang])}
                </span>
            }

            <label className={css.requiredLabel}>
                {contactText?.emailInput?.title[lang]}
            </label>
            <input 
                type="email" 
                {...register("email",{ required:true })} 
                placeholder={contactText?.emailInput?.placeholder[lang]}
                disabled={isSubmitting}
            />
            {errors.email && 
                <span className={css.errorMessage}>
                    {parse(contactText?.emailInput?.error[lang])}
                </span>
            }

            <label className={css.requiredLabel}>
                {contactText?.messageInput?.title[lang]}
            </label>
            <textarea 
                {...register("message",{ required:true })} 
                placeholder={contactText?.messageInput?.placeholder[lang]}
                disabled={isSubmitting}
            />
            {errors.message && 
                <span className={css.errorMessage}>
                    {parse(contactText?.messageInput?.error[lang])}
                </span>
            }

            <input 
                type="submit" 
                disabled={isSubmitting || !formState.isValid} 
                value={ isSubmitting ? 
                        contactText?.submit?.sending[lang] : 
                            formState.isValid ? 
                                contactText?.submit?.send[lang] : 
                                contactText?.submit?.fill[lang]
                }
            />
        </form>
    </motion.div>
)};