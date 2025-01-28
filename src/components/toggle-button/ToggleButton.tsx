import { ReactNode, useContext } from "react";
import css from "./toggle.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

interface ToggleProps{
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    title?: string;
    onAction: () => void;
    isON?: boolean;
}

export const ToggleButton = (props : ToggleProps) => {
    const {
        activeIcon,
        inactiveIcon,
        onAction,
        title,
        isON
    } = props;

    const { lightMode } = useContext(ThemeContext);

    const handleOnAction = () =>{
        onAction();
    };

    return(
        <div 
            className={`${css.toggle} ${lightMode && css.light}`}
            onClick={handleOnAction}
            title={title ? title : ''}
        >
            {isON ? activeIcon : inactiveIcon }
        </div>
    );
}