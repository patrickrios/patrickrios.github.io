import React, { ReactNode, createContext, useEffect, useState } from "react";

interface PortifolioContextProps{
    content: ReactNode;
    addContent: (newContent : ReactNode) => void;
    clearContent: () => void;
}

interface PortfolioProviderProps{
    children: ReactNode;
}

export const ModalContext = createContext({} as PortifolioContextProps);

export const ModalProvider = ({ children } : PortfolioProviderProps) => {
    const[content, setContent] = useState(null);

    const addContent = (newContent: ReactNode) =>{
        setContent(newContent);
    };

    const clearContent = () =>{
        setContent(null);
    };

    useEffect(()=>{
        if( content === null){
            document.body.style.overflow = "";
        }else{
            document.body.style.overflow = "hidden";
        }
    },[content]);

    return(
        <ModalContext.Provider
            value={{
                content,
                addContent,
                clearContent
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}