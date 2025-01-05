import css from "./feed-card.module.css";
import avatar from "./assets/patrick_rios_avatar_24x24-min.png";
import React, { ReactNode } from "react";
import { title } from "process";

interface CardProps{
    headered?: boolean;
    title?: string;
    children?: ReactNode;
    style?: object;
}

const PostHeader = () => {
    return(
        <header className={css.postUser}>
            <img src={avatar} alt="Patrick Rios Avatar"/>
            <h4>Patrick Rios</h4>
        </header>
    )
};

export const Card = ({ headered, title, children, style } : CardProps) => {
    return(
        <div className={css.card} style={style}>
            { headered && <PostHeader/>}
            { title && <h2 className={css.cardTitle}>{title}</h2>}
            {children}
        </div>
    )
}