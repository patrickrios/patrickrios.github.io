import React, { createContext, ReactNode, useState } from "react"

interface TabsContextProps{
    currentTab: number;
    setTab: (new_tab: number) => void;
}

interface TabsProviderProps{
    children: ReactNode;
}

export const TabContext = createContext({} as TabsContextProps);

export const TabContextProvider = ({ children } : TabsProviderProps) => {
    const [currentTab, setCurrentTab] = useState<number>(0);

    const setTab = (new_tab: number) =>{
        if( new_tab >= 0 && new_tab < 5){
            setCurrentTab(new_tab);
        }
    };

    return(
        <TabContext.Provider value={{currentTab, setTab}}>
            { children }
        </TabContext.Provider>
    )
}