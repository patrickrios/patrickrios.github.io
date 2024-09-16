import React, { useContext } from "react";
import { Header } from "./header/header";
import { ThemeContext } from "../contexts/ThemeContext";
import { TabContent, TabPane } from "./tab-pane/TabPane";
import { WhatsAppButton } from "./whatsapp-btn/Whatsapp";
import { Footer } from "./footer/footer";
import { TabContextProvider } from "../contexts/TabsContext";

export const Wrapper = () => {
    const { lightMode } = useContext(ThemeContext);
    return(
        <div id="wrapper" className={lightMode ? 'lightMode' : ''}>
          <TabContextProvider>
            <Header/>
            <TabContent/>
            {/*<TabPane/>*/}
          </TabContextProvider>
          <Footer/>
          <WhatsAppButton/>
        </div>
    )
    
}