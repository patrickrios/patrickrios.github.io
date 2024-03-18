import React, { useContext } from "react";
import { Header } from "./header/header";
import { ThemeContext } from "../contexts/ThemeContext";
import { TabPane } from "./tab-pane/TabPane";
import { WhatsAppButton } from "./whatsapp-btn/Whatsapp";
import { Footer } from "./footer/footer";

export const Wrapper = () => {
    const { lightMode } = useContext(ThemeContext);
    return(
        <div id="wrapper" className={lightMode ? 'lightMode' : ''}>
          <Header/>
          <TabPane/>
          <Footer/>
          <WhatsAppButton/>
        </div>
    )
    
}