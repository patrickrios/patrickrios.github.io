import React, { useContext } from "react";
import { Header } from "./header/header";
import { ThemeContext } from "../contexts/ThemeContext";
import { TabContent } from "./tab-pane/TabPane";
import { WhatsAppButton } from "./whatsapp-btn/Whatsapp";
import { Footer } from "./footer/footer";
import { TabContextProvider } from "../contexts/TabsContext";
import AppProvider from "../contexts/AppContext";

export const Wrapper = () => {
    const { lightMode } = useContext(ThemeContext);
    return(
        <div id="wrapper" className={lightMode ? 'lightMode' : ''}>
          <AppProvider>
            <TabContextProvider>
              <Header/>
              <TabContent/>
            </TabContextProvider>
            <Footer/>
            <WhatsAppButton/>
          </AppProvider>
        </div>
    )
    
}