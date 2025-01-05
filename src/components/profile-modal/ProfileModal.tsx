import React, { useContext } from "react";
import css from "./profile-modal.module.css";
import { profileContent } from "./profile";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { 
    PlaceIcon, 
    PhoneIcon, 
    EmailIcon, 
    Divider, 
    Github, 
    Linkedin, 
    Instagram,
    HomeLocation,
    Education,
    Briefcase
} from "./assets/profileIcons";
import avatar from "./assets/patrick_rios_avatar_24x24-min.png";
import theCmosFeed from "./assets/the_cmos_feed.png";
import hubknFeed from "./assets/hubkn_feed_img-min.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import { Card } from "../feed-card/FeedCard";


const PostHeader = () => {
    return(
        <header className={css.postUser}>
            <img src={avatar} alt="Patrick Rios Avatar"/>
            <h4>Patrick Rios</h4>
        </header>
    )
};

export const ProfileModal = () => {
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext);
    return(
        <motion.main 
            className={css.profileModal}
            initial={{x:10}}
            animate={{x:0}}
            transition={{duration:0.55}}
        >
            <div className={css.aboutGrid}>
                <aside className="flexColumn" style={{gap: '1rem'}}>
                    <Card title="Apresentação">
                        <div className={css.bioList}>
                            <div className={css.bioItem}>
                                <HomeLocation/>
                                <p>
                                    Mora em <b>Dourados - MS</b>
                                </p>
                            </div>
                            <div className={css.bioItem}>
                                <Education/>
                                <p>
                                    Estuda <b>Sistemas de informação</b> na instituição <b>UFGD</b>
                                </p>
                            </div>
                            <button className={css.downloadCVButton} title="baixar pdf">
                                Baixar CV
                            </button>
                        </div>
                    </Card>
                    <Card title="Um pouco mais sobre mim...">
                        <div className={css.bioList}>
                            <p>Eu sou um programador, com uma paixão por design 👨‍💻🎨.</p>
                            <p>Sou capaz de projetar e implementar interfaces de usuário modernas para aplicativos e websites.</p>
                            <p>Atuo como desenvolvedor profissionalmente desde abril de 2022 (2 anos e 4 mêses).</p>
                            <p>Tenho experiência trabalhando em Home Office. 🏠</p>
                        </div>
                    </Card>
                </aside>
                <div className="flexColumn" style={{gap: '1rem'}}>
                    <article>
                        <Card>
                            <div className={css.postCenter}>
                                <p>Começou um novo emprego</p>
                                <Briefcase/>
                                <h3>Desenvolvedor Web Freelancer</h3>
                                <span>10/01/2024</span>
                            </div>
                        </Card>
                    </article>
                    <article>
                        <Card headered>
                            <div className={css.postLeft}>
                                <p>Após minha saída da hubkn inc. comecei a prestar serviços de web design para a empresa The CMOS Marketers. Participei de campanhas de marketing e era responsável por quaisquer páginas web que envolviam as campanhas. As páginas eram criadas no framework Wordpress.</p>
                                <img src={theCmosFeed}/>
                                <span>10/01/2024</span>
                            </div>
                        </Card>
                    </article>
                    <article>
                        <Card>
                            <div className={css.postCenter}>
                                <p>Começou um novo emprego em <b>The CMOs Marketers</b></p>
                                <Briefcase/>
                                <h3>Desenvolvedor Web\Wordpress</h3>
                                <span>02/10/2023</span>
                            </div>
                        </Card>
                    </article>
                    <article>
                        <Card headered>
                            <div className={css.postLeft}>
                                <p>Fui contratado pela hubkn inc. em abril de 2022. A empresa oferecia serviços de processamento de dados através de inteligência artificial e necessitava de uma plataforma web para que os clientes tivessem facilidade de acesso aos relatórios sobre dados de vendas e CRM. Colaborei na empresa até Outubro de 2023 (1 ano e 6 meses).</p>
                                <img src={hubknFeed}/>
                                <span>10/01/2024</span>
                            </div>
                        </Card>
                    </article>
                    <article>
                        <Card>
                            <div className={css.postCenter}>
                                <p>Começou um novo emprego em <b>hubkn inc.</b></p>
                                <Briefcase/>
                                <h3>Desenvolvedor Web REACT</h3>
                                <span>26/04/2022</span>
                            </div>
                        </Card>
                    </article>
                </div>
            </div>
        </motion.main>
    );
};