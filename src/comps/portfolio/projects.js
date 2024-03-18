import hbkn_thumb from "./assets/hubkn-thumb-min.png";
import hubkn_00 from "./assets/hubkn_00-min.png";
import hubkn_01 from "./assets/hubkn_01-min.png";
import hubkn_02 from "./assets/hubkn_02-min.png";
import hubkn_03 from "./assets/hubkn_03-min.png";
import fhm_thumb from "./assets/black-friday-HM-thumb-min.png";
import fhm_20_00 from "./assets/fhm_20_00-min.png";
import fhm_20_01 from "./assets/fhm_20_01-min.png";
import bf_fhm20_thumb from "./assets/fhm-thumb-min.png";
import bf_the_cmos_01 from "./assets/bf_fhm_00-min.png";
import bf_the_cmos_02 from "./assets/bf_fhm_01-min.png";
import bf_the_cmos_03 from "./assets/bf_fhm_02-min.png";
import devFinances from "./assets/dev-finances-thumb-min.png";
import dev_finances_00 from "./assets/dev_finances_00-min.png";
import wordminer from "./assets/wordminer-thumb-min.png";
import word_00 from "./assets/wordminer_00-min.png";
import todo from "./assets/todo-thumb-min.png";
import todo_00 from "./assets/todo_01-min.png";
import todo_01 from "./assets/todo_00-min.png";
import komodora from "./assets/komodora-capa-min.png";
import moveit from "./assets/moveit-thumb-min.png";
import moveit_00 from "./assets/moveit_00-min.png";
import moveit_01 from "./assets/moveit_01-min.png";

export const professionalProjects = [
    {
        name: "hubkn app",
        thumbnail: hbkn_thumb,
        description:{
            "pt-br":"Plataforma web",
            "eng": "Web platform"
        },
        keywords:["React","JavaScript","Frontend","IA","SalesOps", "CRM"],
        slide:[{
            thumb: hubkn_00,
            caption: {
                "pt-br":"Foi o meu primeiro projeto <b>frontend profissional</b>. Fui contratado para criar uma <b>plataforma web</b>, para a visualização dados <b>SalesOps</b> processados por serviços oferecidos pela empresa.",
                "eng":"It was my first <b>professional front-end project</b>. I was hired to create a <b>web platform</b>, for the visualization of <b>SalesOps</b> data processed by services offered by the company."
            },
        },{
            thumb: hubkn_01,
            caption: {
                "pt-br": "Plataforma que permite aos usuários a visualização dos <b>dados de vendas</b> e <b>CRM</b>, "+
                    "que foram processados por serviços de <b>inteligência artificial</b> "+
                    "oferecidos pela empresa <b>hubkn inc.</b>",
                "eng": "Platform that allows users to view <b>sales data</b> and <b>CRM</b>, "+
                    "that have been processed by <b>artificial intelligence</b> services "+
                    "offered by <b>hubkn inc.</b>"
            }
        },{
            thumb: hubkn_02,
            caption: {
                "pt-br":"A plataforma também oferecia ferramentas de <b>IA generativa</b>",
                "eng": "The platform also offered <b>generative AI</b> tools."
            }
        },{
            thumb: hubkn_03,
            caption: {
                "pt-br":"Possui diversos <b>dashboards</b> para visualização dos dados "+
                    "que vinham de uma <b>API</b> da própria empresa.",
                "eng":"It has several <b>dashboards</b> for data visualization "+
                    "that came from the company's own <b>API</b>."
            }
        }]
    },
    {
        name: "Black Friday [The CMOS]",
        thumbnail: fhm_thumb,
        description:{"pt-br":"Landing page", "eng":"Landing page"},
        keywords:["marketing", "web design", "landing page", "wordpress", "oxygen builder"],
        slide:[{
            thumb: bf_the_cmos_01,
            caption: {
                "pt-br":`Serviço prestado para a empresa `+
                    `<a href="https://thecmosmarketers.digital" target="_blank">The CMOS Marketers</a> `+
                    `durante a <b>campanha</b> de <b>black friday.</b>`,
                "eng": `Service provided for the company `+
                    `<a href="https://thecmosmarketers.digital" target="_blank">The CMOS Marketers</a> `+
                    `during the black friday campaign.`
            }
        },{
            thumb: bf_the_cmos_02,
            caption: {
                "pt-br":"Foi uma página de <b>captação de <i>leads</i></b>, "+
                    "para colocar possíveis clientes em uma lista e "+
                    "<b>ofertar</b> uma formação de <b>Head de Marketing</b> por um preço especial.",
                "eng":"It was a <b>lead capture</b> page"+
                    "to put potential customers on a list and "+
                    "offer <b>Head of Marketing</b> training at a special price."
            }
        },{
            thumb: bf_the_cmos_03,
            caption: {
                "pt-br":"Foi prototipada no <b>Figma</b> e implementada no framework <b>Wordpress + Oxygen Builder</b>",
                "eng":"It was prototyped at <b>Figma</b> and implemented in the <b>Wordpress + Oxygen Builder</b> framework"
            }
        }]
    },
    {
        name: "Formação Head de Marketing 2.0",
        thumbnail: bf_fhm20_thumb,
        description:{"pt-br":"Landing page", "eng":"Landing page"},
        keywords:["marketing digital", "web design", "landing page", "wordpress", "oxygen builder"],
        slide:[{
            thumb: fhm_20_00,
            caption: {
                "pt-br": `Serviço prestado para a empresa `+
                    `<a href="https://thecmosmarketers.digital" target="_blank">The CMOS Marketers</a> `+
                    `durante a <b>campanha</b> de promoção da nova formação de <b>Head de Marketing</b>`,
                "eng":`Service provided for the company `+
                    `<a href="https://thecmosmarketers.digital" target="_blank">The CMOS Marketers</a>`+
                    `during a <b>marketing campaign</b> to promote the new <b>Head of Marketing</b> training.`
            }
        },{
            thumb: fhm_20_01,
            caption: {
                "pt-br": `A página fornecia <b>informações</b> detalhadas sobre a <b>formação</b> e os <b>docentes</b>.`,
                "eng": `The page provided detailed <b>information</b> on <b>training</b> and <b>teachers</b>.`
            }
        }]
    }
];

export const personalProjects = [
    {
        name: "dev.finance$",
        thumbnail: devFinances,
        description:{
            "pt-br": "Web App",
            "eng": "Web App"
        },
        keywords:["HTML","CSS","JavaScript","Web Design"],
        links:{
            source: "https://github.com/patrickrios/dev-finances-maratona-discover",
            preview: "https://patrickrios.github.io/dev-finances-maratona-discover/"
        },
        slide:[{
            thumb: dev_finances_00,
            caption: {
                "pt-br":"App para guardar <b>transações financeiras</b>. <b>Controle</b> suas finanças e tenha um <b>balanço mensal</b> de todas elas.",
                "eng": "App to store <b>financial transactions</b>. <b>Keep track</b> of your finances and have a <b>monthly balance</b> sheet of all of them."
            }
        }]
    },
    {
        name: "ToDo App",
        thumbnail: todo,
        description:{
            "pt-br": "Web App", 
            "eng": "Web App"
        },
        keywords:["React","NextJS","Frontend","JavaScript"],
        links:{
            source: "https://github.com/patrickrios/todo-app-nextjs",
            preview: "https://patrickrios-todo-app.vercel.app/"
        },
        slide:[{
            thumb: todo_00,
            caption: {
                "pt-br":"<b>Gerencie</b> o seu trabalho criando <b>projetos</b> e adicionando <b>tarefas</b> para fazer.",
                "eng": "<b>Manage</b> your work by creating <b>projects</b> and adding <b>tasks</b> to do."
            }
        },{
            thumb: todo_01,
            caption: {
                "pt-br":"<b>Gerencie</b> o seu trabalho criando <b>projetos</b> e adicionando <b>tarefas</b> para fazer.",
                "eng": "<b>Manage</b> your work by creating <b>projects</b> and adding <b>tasks</b> to do."
            }
        }]
    },
    {
        name: "Move.It",
        thumbnail: moveit,
        description:{
            "pt-br": "Web App", 
            "eng": "Web App"
        },
        keywords:["React","NextJS","Frontend","JavaScript"],
        links:{
            source: "https://github.com/patrickrios/moveit",
            preview: "https://moveit-patrickrios.vercel.app/"
        },
        slide:[{
            thumb: moveit_00,
            caption: {
                "pt-br": "App que propõe pequenos e rápidos desafios, em um determinado intervalo de tempo.",
                "eng": "An app that offers small, quick challenges in a given time frame."
            }
        },{
            thumb: moveit_01,
            caption: {
                "pt-br": "Complete os desafios para ganhar experiência e subir de nível.",
                "eng": "Complete the challenges to gain experience and level up"
            }
        }]
    },
    {
        name: "WordMiner",
        thumbnail: wordminer,
        description:{
            "pt-br": "UI/UX Design", 
            "eng": "UI/UX Design"
        },
        keywords:["Figma","Frontend","UI", "UX"],
        links:{
            preview: "https://www.figma.com/file/FAAGn2b8kNALi894FqqsBQ/WordMiner-App?node-id=30%3A44"
        },
        slide:[{
            thumb: word_00,
            caption: {
                "pt-br": "Projeto de <b>design de interface</b> para um <b>aplicativo</b> de aprendizado de idioma",
                "eng": "<b>UI design</b> project for a <b>language learning</b> application"
            }
        }]
    },
    {
        thumbnail: komodora,
        name: "Komodora",
        description: {
            "pt-br": "Jogo",
            "eng":"Game"
        },
        embed: {
            url: "https://itch.io/embed-upload/9792244?color=222034",
            caption: {
                "pt-br":`🥇 #1 lugar na `+
                    `<a href="https://itch.io/jam/clecio-gamedev-jam-02" target="_blank">Clecio Gamedev JAM #02</a>. `+
                `Foi criado em 7 dias.`,
                "eng": `🥇 #1th place at`+
                    `<a href="https://itch.io/jam/clecio-gamedev-jam-02" target="_blank">Clecio Gamedev JAM #02</a>. `+
                    `It was created in 7 days`
            }
        },
        keywords:[
            "Game dev",
            "Indie game",
            "Godot engine",
            "Pixel art",
            "Game Jam"
        ]

    }
];