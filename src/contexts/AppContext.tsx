import React, { createContext, ReactNode, useState } from "react";
import datas from '../datas.json'

interface AppProviderDatas{
    menuItems: object;
    lang: string;
    changeLangEnglish: () => void;
    changeLangPtBr: () => void;
    about: object;
    portfolio: object;
    contact: object;
    logo: object;
}
interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext( {} as AppProviderDatas) 


export default function AppProvider( {children}: AppProviderProps){

    //Locales
    const [lang, setLang] = useState("pt-br")

    const changeLangEnglish = () =>{
        setLang("eng")
    }

    const changeLangPtBr = () =>{
        setLang("pt-br")
    }

    //Menu
    const [menuItems] = useState(datas.menu)

    //Logo
    const[logo] = useState(datas.logo)

    //Sobre
    const [about] = useState(datas.about)

    //Portfolio
    const [portfolio] = useState( datas.portfolio )

    //Contato
    const [contact] = useState(datas.contact)


    return(
        <AppContext.Provider 
            value={{
                menuItems,
                lang,
                changeLangEnglish,
                changeLangPtBr,
                about,
                portfolio,
                contact,
                logo
            }}
        >
            {children}
        </AppContext.Provider>
    )
}