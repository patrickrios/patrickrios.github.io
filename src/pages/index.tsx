import React, { useContext } from "react"
import { TopMenu } from "../components/top-menu/top-menu";
import { Header } from "../components/header/header";
import { Portfolio } from "../components/portfolio-section/portfolio";
import { ModalContext } from "../contexts/ModalContext";
import { Experience } from "../components/experience-section/experience";
import { Contat } from "../components/contact-section/contact";
import { WhatsAppButton } from "../components/whatsapp-btn/Whatsapp";
import Head from "next/head";
import { ThemeContext } from "../contexts/ThemeContext";
import { Footer } from "../components/footer/footer";
import { ServicesSection } from "../components/services-section/services";

export const Homepage = () =>{
    const { content } = useContext(ModalContext);
    const { lightMode } = useContext(ThemeContext);
    return(
        <>
            <Head>
                <title>Patrick Rios | DEV</title>
            </Head>
            <div id="wrapper" className={lightMode ? 'lightMode' : ''}>
                <TopMenu/>
                <Header/>
                <Portfolio/>
                <Experience/>
                <Contat/>
                <Footer/>
                <WhatsAppButton/>
                { content }
            </div>
        </>
    )
}

export default Homepage;
