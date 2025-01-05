import React from "react";
import { Css } from "./css";
import { Figma } from "./figma";
import { FramerMotion } from "./framer";
import { Html } from "./html";
import { JavaScript } from "./javscript";
import { NextJS } from "./nextjs";
import { ReactIcon } from "./react";
import { TailWind } from "./tail";
import { TypeScript } from "./typescript";
import { Wordpress } from "./wordpress";
import { NodeIcon } from "./node";
import { Php } from "./php";
import { Mysql } from "./mysql";
import { Java } from "./java";
import { GodotEngine } from "./godot";
import { LibreSprite } from "./libresprite";
import { Audacity } from "./audacity";

const programmingLanguage = {
    "pt-br": "Linguagem de Programação", 
    "eng": "Programming Language"
};

export const techSections = [{
    name: "Frontend 🎨",
    techs:[
        {
            icon: <JavaScript/>, 
            name: "JavaScript", 
            tip: programmingLanguage
        },
        {
            icon: <TypeScript/>, 
            name: "TypeScript", 
            tip: programmingLanguage
        },
        {
            icon: <Html/>, 
            name: "HTML", 
            tip:{
                "pt-br": "Linguagem de Marcação",
                "eng": "Markup Language"
            }
        },
        {
            icon: <Css/>, 
            name: "CSS", 
            tip: {
                "pt-br": "Linguagem de Estilo",
                "eng": "Stylesheet Language"
            }
        },
        {
            icon: <ReactIcon/>, 
            name: "React", 
            tip: {
                "pt-br": "Biblioteca Frontend",
                "eng": "Frontend JavaScript Library"
            }
        },
        {
            icon: <NextJS/>, 
            name: "NextJS", 
            tip: {
                "pt-br": "Biblioteca React",
                "eng": "React Library"
            }
        },
        {
            icon: <TailWind/>, 
            name: "TailWind CSS", 
            tip:{
                "pt-br": "Biblioteca de Estilos CSS",
                "eng": "CSS Stylesheets Library"
            }
        },
        {
            icon: <Figma/>, 
            name: "Figma", 
            tip: {
                "pt-br": "Editor Gráfico de UI/UX",
                "eng": "UI/UX Graphic Editor"
            }
        },
        {
            icon: <FramerMotion/>, 
            name: "Framer Motion", 
            tip: {
                "pt-br": "Biblioteca de Animações React",
                "eng": "React Animations Library"
            }
        },
        {
            icon: <Wordpress/>, 
            name: "Wordpress", 
            tip:{
                "pt-br": "Framework Web",
                "eng": "Web Framework"
            }
        }
    ]
    },{
        name: "Backend 👨‍💻",
        techs:[
            {
                name: "NodeJS", 
                icon: <NodeIcon/>, 
                tip: {
                    "pt-br": "Software Interpretador JavaScript",
                    "eng": "Server JavaScript Interpreter"
                }
            },
            {
                name: "PHP", 
                icon: <Php/>, 
                tip: programmingLanguage
            },
            {
                name: "MySQL", 
                icon: <Mysql/>, 
                tip: {
                    "pt-br": "Banco de Dados",
                    "eng": "Database"
                }
            },
            {
                name: "Java", 
                icon: <Java/>, 
                tip:programmingLanguage
            }
        ]
    },{
        name: "Game Dev 👾",
        techs:[
            {
                name: "Godot Engine", 
                icon: <GodotEngine/>, 
                tip: {
                    "pt-br": "Motor gráfico para jogos",
                    "eng": "Game Engine"
                }
            },
            {
                name: "LibreSprite", 
                icon: <LibreSprite/>, 
                tip: {
                    "pt-br": "Editor de sprites pixel art",
                    "eng": "Pixe Art Sprites Editor"
                }
            },
            {
                name: "Audacity", 
                icon:<Audacity/>, 
                tip: {
                    "pt-br": "Editor de áudio",
                    "eng": "Audio Editor"
                }
            }
        ]
}];