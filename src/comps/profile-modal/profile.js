function getElapsedTime() {
    const initialDate = new Date('2022-04-01');
    const currentDate = new Date();
    const difference = currentDate - initialDate;
    
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    
    return { years, months};
}

function formatElapsedTimeByLang({years, months, lang}){
    if (years === 1 && months === 0) {
        return `${years} ${lang === 'pt-br' ? 'ano' : 'year'}`;
    } else if (years === 0 && months === 1) {
        return `${months} ${ lang === 'pt-br' ? 'mês' : 'month'}`;
    } else if (years === 1 && months === 1) {
        return `${years} ${lang === 'pt-br' ? 'ano e' : 'year and'} ${months} ${lang === 'pt-br' ? 'mês' : 'month'}`;
    } else if (years > 1 && months === 0) {
        return `${years} ${lang === 'pt-br' ? 'anos' : 'years'}`;
    } else {
        return `${years} ${lang === 'pt-br' ? 'anos e' : 'years and'} ${lang === 'pt-br' ? 'mêses' : 'months'}`;
    }
}

export const profileContent = [{
        p:[{
            "pt-br": "Eu sou um <b>programador</b>, com uma paixão por <b>design</b> 👨‍💻🎨. </br>"+
                "Sou capaz de <b>projetar</b> e <b>implementar</b> interfaces de usuário modernas "+
                "para <b>aplicativos</b> e <b>websites</b>.</br>"+
                "Atuo como desenvolvedor <b>profissionalmente</b> desde abril de 2022 "+
                    `<b>(${formatElapsedTimeByLang({ ...getElapsedTime(), lang:'pt-br' })})</b>. </br>`+
                "Tenho <b>experiência</b> trabalhando em <b>Home Office</b>. 🏠",
            "eng": "I'm a <b>programmer</b> with a passion for <b>design</b> 👨‍💻🎨. </br>"+
                "I can <b>create</b> modern UI's for <b>websites</b> and <b>app's</b>. </br>"+
                "I've been a developer <b>professionally</b> since April 2022 "+
                    `<b>(${formatElapsedTimeByLang({...getElapsedTime(), lang: 'eng' })})</b>. </br>`+
                "I have <b>experience</b> working in the <b>Home Office</b>. 🏠"
        }]
    },{
        h: {
            "pt-br": "Formação 📚",
            "eng": "Education 📚"
        },
        p:[
            {
                "pt-br": "<b>Técnico em informática</b> no ensino médio pela <b>Escola Estadual Coronel Felipe de Brum</b>.",
                "eng": "<b>Computer technician</b> by state high school <b>Coronel Felipe de Brum</b>."
            },
            {
                "pt-br": "Bacharelando no 5º semestre de <b>Sistemas de Informação</b> na <b>UFGD</b> (<i>Universidade Federal da Grande Dourados</i>).",
                "eng": "Graduating 5th semester of <b>Information Systems</b> course at <b>UFGD</b> (<i>Federal University of Grande Dourados</i>)."
            }
        ]
    },{
        h: {
            "pt-br": "hubkn inc 🏢", 
            "eng": "hubkn inc 🏢"
        },
        p: [{
            "pt-br": "Fui contratado pela <b>hubkn inc.</b> em abril de 2022. "+
                "A empresa oferecia <b>serviços</b> de processamento de dados através de <b>inteligência artificial</b> "+
                "e necessitava de uma <b>plataforma web</b> para que os clientes tivessem <b>facilidade</b> de acesso aos "+
                "<b>relatórios</b> sobre dados de <b>vendas</b> e <b>CRM</b>. "+
                "Colaborei na empresa até Outubro de 2023 <b>(1 ano e 6 meses)</b>.",
            "eng": "I was hired by <b>hubkn inc.</b> in April 2022. "+
                "The company offered <b>data processing services</b> using <b>artificial intelligence</b> "+
                "and needed a <b>web platform</b>, so that customers could have <b>easy</b> access to "+
                "<b>reports</b> on <b>sales</b> and <b>CRM</b> data. "+
                "I worked for the company until October 2023 <b>(1 year and 6 months)</b>."
    }]
    },{
        h: {
            "pt-br": "The CMOs Marketers 🏢", 
            "eng": "The CMOs Marketers 🏢"
        },
        p:[{
            "pt-br":"Após minha saída da <b>hubkn inc.</b> comecei a prestar serviços de <b>web design</b> para a "+
                "empresa <b>The CMOS Marketers</b>. Participei de campanhas de <b>marketing</b> e era responsável "+
                "por quaisquer <b>páginas web</b> que envolviam as campanhas. "+
                "As páginas eram criadas no framework <b>Wordpress</b>.",
            "eng":"After I left <b>hubkn inc.</b> I started providing <b>web design</b> services for "+
                "<b>The CMOS Marketers</b> company. I took part in <b>marketing</b> campaigns and was responsible for "+
                "any <b>web pages</b> that involved the campaigns. "+
                "The pages was created on <b>Wordpress</b> framework."
    }]
    },{
        h: {
            "pt-br":"Game dev 🎮",
            "eng": "Game dev 🎮"
        },
        p:[{
            "pt-br":"Sou <b>Indie Game Dev</b>. "+
                "Crio meus jogos na <b>Godot Engine</b>. "+
                "Faço sprites <b>pixel art</b> no <b>LibreSprite</b>. "+
                "Gosto de participar de <b>game jams</b> e pretendo lançar um <b>jogo comercial</b> no futuro.",
            "eng": "I am an <b>Indie Game Developer</b>. "+
                "I make games on <b>Godot Engine</b>. "+
                "I make <b>pixel art</b> sprites on <b>LibreSprite</b>. "+
                "I enjoy taking part in <b>game jams</b> and I plan to release a <b>commercial game</b> in the future."
        }]
    },
];