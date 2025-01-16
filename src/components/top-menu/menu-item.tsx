import { ReactNode } from "react";
import  { scroller } from "react-scroll";

interface MenuItemProps{
    targetId: string;
    children?: ReactNode;
    text: string;
    toggleMenu: ()=>void;
}

const upper = (item: string) =>{
    return item.toUpperCase();
};

export const MenuItem = (props:MenuItemProps) => {
    const {
        targetId,
        text, 
        toggleMenu
    } = props;

    const onMenuClicked = () => {
        scroller.scrollTo(targetId,{
            duration: 800,
            smooth: true,
            activeClass: "activeMenu",
            offset: -50,
            spy: true
         });
        toggleMenu();
    }

    return(
        <li onClick={onMenuClicked}>
            { upper(text) }
        </li>
    )
}