import React, {useContext, useState} from 'react'
import './styles/MainMenu.css'
import MenuItem from './MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../../contexts/AppContext'

const MainMenu = () => {

    const[mobileMenu, display] = useState("");
    const[isActive,   toggle]  = useState(false);

    const showMenu = () => {
        toggle( !isActive )
        if(isActive){
            display("");
        }else{
            display("display-menu");
        }
    }

   //Language selector
    const [ptClass, setPtClass]  = useState("menu-selected-lang")
    const [enClass, setEngClass] = useState("")

    function selectLang(e){
        if(e.target.id === "ptLang"){
            setPtClass("menu-selected-lang")
            setEngClass("")
            changeLangPtBr()
        }else{
            setPtClass("")
            setEngClass("menu-selected-lang")
            changeLangEnglish()
        }
    }

    const {
        menuItems,
        changeLangEnglish,
        changeLangPtBr,
        lang
    } = useContext(AppContext)


    return (
        <nav className="main-menu">
            <ul className={mobileMenu}>
                <MenuItem text={menuItems.home[lang]} target="head" hide={showMenu} />
                <MenuItem text={menuItems.about[lang]}   target="about" hide={showMenu}/>
                <MenuItem text={menuItems.portfolio[lang]}  target="portfolio" hide={showMenu}/>
                <MenuItem text={menuItems.contact[lang]} target="contact" hide={showMenu}/>
			</ul>

            <div>
                <button className="mobile-menu-button" onClick={showMenu}><FontAwesomeIcon icon={faBars}/></button>
                <div className="menu-langs">
                    <p>{lang.toUpperCase()}</p>
                    <img id="ptLang"  src="/techs/pt-br.svg" alt="Pt-br" onClick={selectLang} className={ptClass} />
                    <img id="engLang" src="/techs/eng.svg" alt="Eng" onClick={selectLang} className={enClass}/>
                </div>
            </div>

            
        </nav>
    );
};

export default MainMenu;