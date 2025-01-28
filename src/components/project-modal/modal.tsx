import { useContext, useEffect, useState } from "react"
import css from "./modal.module.css";
import { ModalContext } from "../../contexts/ModalContext";
import projectData from "./projects-data.json";
import parse from "html-react-parser";
import {motion} from "framer-motion";
import { EmbedGame, EmbedVideo } from "./embed-video";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";

interface ProjectModalProp{
    projectId?: string;
}

interface CloseProp{
    onAction: () => void;
}

export const ProjectModal = ({ projectId } : ProjectModalProp) => {
    const { clearContent } = useContext(ModalContext);
    const { lang } = useContext(AppContext);
    const { lightMode } = useContext(ThemeContext);
    const [project, setProject] = useState(null);
    const [projectIndex, setProjectIndex] = useState<number>(0);
    const [currentMedia, setMedia] = useState<number>(0);
    const mediaCount: number = project?.media?.length;
    const mediaList = project?.media;
    const isLast = projectIndex === projectData?.length-1;

    const handleNextMedia = () =>{
        const new_midia =  (currentMedia+1 === mediaCount) ? 0 : currentMedia + 1;
        setMedia(new_midia);
    };

    const handlePreviousMedia = () =>{
        if( currentMedia === 0){
            setMedia( mediaCount - 1);
        }else{
            setMedia(prev => prev - 1);
        }
    };

    const handleNextProject = () =>{
        const new_index = isLast ? 0 : projectIndex + 1;
        const new_proj  = isLast ? projectData[0] : projectData[projectIndex+1];
        setProjectIndex(new_index);
        setProject(new_proj);
        setMedia(0);
    };

    const handlePrevProject = () => {
        const new_index = projectIndex === 0 ? 
            projectData.length - 1 : 
            projectIndex - 1;
        const new_proj  = projectIndex === 0 ? 
            projectData[projectData.length-1] : 
            projectData[projectIndex-1];
        setProjectIndex(new_index);
        setProject(new_proj);
        setMedia(0);
      };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          clearContent();
        }if(event.key === "ArrowRight"){
            handleNextProject();
        }if(event.key === "ArrowLeft"){
            handlePrevProject();
        }
    };

    useEffect(() => {
        if(project === null && projectId !== ''){
            const new_project = projectData.find( 
                prj => prj.id === projectId
            );
            if(new_project){
                const new_index = projectData.indexOf(new_project);
                setProject(new_project);
                setProjectIndex(new_index);
            }
        }
    }, []);

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown);
        return () => { window.removeEventListener("keydown", handleKeyDown) };
    },[projectIndex]);

    const renderControls = () => {
        const elements = [];
        for(let i=0; i<mediaCount; i++){
            elements.push(
                <span 
                    className={ 
                        currentMedia == i ? 
                            css.selected : 
                            css.normal
                    }
                    key={`media-control~${i}`}
                >
                    <MediaControl/>
                </span>
            )
        }
        return elements;
    }

    return(
        <div className={`${css.modal}`}>
            <div className={css.contentGrid}>
                <div className={css.left}>
                    <motion.div 
                        className={css.photoContainer}
                        initial={{opacity: 0.5}}
                        animate={{opacity: 1}}
                        transition={{duration:1}}
                    >
                        { 
                            mediaCount > 0 && 
                            mediaList[currentMedia]?.type === 'photo' &&
                            <picture>
                                <source 
                                    srcSet={mediaList[currentMedia]?.url.lg}
                                    media="(min-width: 1080px)"
                                />
                                <source 
                                    srcSet={mediaList[currentMedia]?.url.md}
                                    media="(min-width: 720px)"
                                />
                                <img src={mediaList[currentMedia]?.url.sm}/>
                            </picture>
                        }{
                            mediaCount > 0 &&
                            mediaList[currentMedia]?.type === 'video' &&
                            <EmbedVideo videoUrl={mediaList[currentMedia]?.url}/>
                        }{
                            mediaCount > 0 &&
                            mediaList[currentMedia]?.type === 'game' &&
                            <EmbedGame gameUrl={mediaList[currentMedia]?.url}/>
                        }
                    </motion.div>
                    {
                        mediaCount > 0 &&
                        <div 
                            className={css.blurBackground} 
                            style={{
                                backgroundImage: `url('${ 
                                    mediaList[currentMedia]?.type === 'photo' ? 
                                        mediaList[currentMedia]?.url?.sm :  
                                        mediaList[currentMedia]?.background
                                }')`
                            }}
                        />
                    }
                    { 
                        mediaCount > 1 && 
                        <div className={css.mediaNavigation}>
                            <button 
                                className={`${css.projectArrowBtn} ${css.flipH}`} 
                                title="previous media"
                                onClick={handlePreviousMedia}
                            >
                                <MediaArrow/>
                            </button>
                            <button 
                                className={css.projectArrowBtn} 
                                title="next media"
                                onClick={handleNextMedia}
                            >
                                <MediaArrow/>
                            </button>
                        </div>
                    }{
                        mediaCount > 1 && 
                        <div className={css.mediaControls}>
                            {renderControls()}
                        </div>
                    }
                    
                </div>
                <div className={`${css.right} ${lightMode ? css.lightRight : ''}`}>
                    <motion.div 
                        initial={{x:16, opacity: 0.7}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration:0.7}}
                        className={css.projectOverview}
                    >
                        <header className={`${css.projectInfo} ${lightMode ? css.lightInfo : ''}`}>
                            <h2>{project?.name}</h2>
                            <span>{project?.excerpt[lang]}</span>
                        </header>
                        <div className={css.projectContent}>
                            { project?.text?.map((paragraph: string, index: number) =>(
                                <p key={`projet-paragraph~${index}`}>
                                    { parse(paragraph[lang])}
                                </p>
                            ))}
                            { 
                                project?.links && 
                                <div className={css.projectsLinks}>
                                    {
                                        project?.links?.live &&
                                        <a 
                                            className={css.livePreviewBtn} 
                                            href={project?.links?.live} 
                                            target="_blank" 
                                            referrerPolicy="no-referrer"
                                            rel="noreferrer"
                                        >
                                            deploy <PreviewIcon/>
                                        </a>
                                    }
                                    {
                                        project?.links?.repo &&
                                        <a 
                                            className={css.repoBtn}
                                            href={project?.links?.repo} 
                                            target="_blank" 
                                            referrerPolicy="no-referrer"
                                            rel="noreferrer"
                                        >
                                            repo <RepoIcon/>
                                        </a>
                                    }
                                </div>
                            }
                            
                            <h4 className={css.techTitle}>
                                TECNOLOGIAS
                            </h4>
                            <div className={css.techList} >
                                { project?.techList?.map( tech => 
                                    <div 
                                        className={css.techItem} 
                                        title={tech?.name} 
                                        key={`tech-item~${tech?.name}`}
                                    >
                                        <img src={tech?.url} />
                                        <span>{tech?.name}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                    <CloseModal onAction={clearContent}/>
                </div>
            </div>
                <button 
                    className={`${css.projectArrowBtn} ${css.leftArrow}`} 
                    title="previous project"
                    onClick={handlePrevProject}
                >
                    <Arrow/>
                </button>
                <button 
                    className={`${css.projectArrowBtn} ${css.rightArrow}`} 
                    title="next project"
                    onClick={handleNextProject}
                >
                    <Arrow/>
                </button>
            <div 
                className={`${css.modalLayer} ${lightMode ? css.lightLayer : ''}`} 
                onClick={clearContent}
            />
        </div>
    )
}

const Arrow = () => {
    return(
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_3211_276" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="3" y="3" width="42" height="42">
            <path d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M21 33L30 24L21 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </mask>
        <g mask="url(#mask0_3211_276)">
            <path d="M0 0H48V48H0V0Z" fill="#F9F9FB"/>
        </g>
    </svg>
)};

const MediaArrow = () =>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_3398_453" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M10.5 16.5L15 12L10.5 7.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask0_3398_453)">
                <path d="M0 0H24V24H0V0Z" fill="#E2E3E9"/>
            </g>
        </svg>
)};

const MediaControl = () =>{
    return(
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="currentColor"/>
        </svg>
)};

const CloseModal = ({ onAction } : CloseProp) => {
    return <button className={css.closeModal} onClick={onAction}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28Z" fill="#435057"/>
            <path d="M21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="#435057"/>
        </svg>
    </button>
}

const PreviewIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0007 7.5C9.33761 7.5 8.70173 7.76339 8.23288 8.23223C7.76404 8.70107 7.50065 9.33696 7.50065 10C7.50065 10.663 7.76404 11.2989 8.23288 11.7678C8.70173 12.2366 9.33761 12.5 10.0007 12.5C10.6637 12.5 11.2996 12.2366 11.7684 11.7678C12.2373 11.2989 12.5007 10.663 12.5007 10C12.5007 9.33696 12.2373 8.70107 11.7684 8.23223C11.2996 7.76339 10.6637 7.5 10.0007 7.5ZM10.0007 14.1667C8.89558 14.1667 7.83577 13.7277 7.05437 12.9463C6.27297 12.1649 5.83398 11.1051 5.83398 10C5.83398 8.89493 6.27297 7.83512 7.05437 7.05372C7.83577 6.27232 8.89558 5.83333 10.0007 5.83333C11.1057 5.83333 12.1655 6.27232 12.9469 7.05372C13.7283 7.83512 14.1673 8.89493 14.1673 10C14.1673 11.1051 13.7283 12.1649 12.9469 12.9463C12.1655 13.7277 11.1057 14.1667 10.0007 14.1667ZM10.0007 3.75C5.83398 3.75 2.27565 6.34167 0.833984 10C2.27565 13.6583 5.83398 16.25 10.0007 16.25C14.1673 16.25 17.7257 13.6583 19.1673 10C17.7257 6.34167 14.1673 3.75 10.0007 3.75Z" fill="black"/>
        </svg>
)}

const RepoIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99935 1.66675C8.905 1.66675 7.82137 1.8823 6.81032 2.30109C5.79927 2.71987 4.88061 3.3337 4.10679 4.10752C2.54399 5.67033 1.66602 7.78994 1.66602 10.0001C1.66602 13.6834 4.05768 16.8084 7.36602 17.9167C7.78268 17.9834 7.91602 17.7251 7.91602 17.5001V16.0917C5.60768 16.5917 5.11602 14.9751 5.11602 14.9751C4.73268 14.0084 4.19102 13.7501 4.19102 13.7501C3.43268 13.2334 4.24935 13.2501 4.24935 13.2501C5.08268 13.3084 5.52435 14.1084 5.52435 14.1084C6.24935 15.3751 7.47435 15.0001 7.94935 14.8001C8.02435 14.2584 8.24102 13.8917 8.47435 13.6834C6.62435 13.4751 4.68268 12.7584 4.68268 9.58342C4.68268 8.65842 4.99935 7.91675 5.54102 7.32508C5.45768 7.11675 5.16602 6.25008 5.62435 5.12508C5.62435 5.12508 6.32435 4.90008 7.91602 5.97508C8.57435 5.79175 9.29102 5.70008 9.99935 5.70008C10.7077 5.70008 11.4243 5.79175 12.0827 5.97508C13.6743 4.90008 14.3743 5.12508 14.3743 5.12508C14.8327 6.25008 14.541 7.11675 14.4577 7.32508C14.9993 7.91675 15.316 8.65842 15.316 9.58342C15.316 12.7667 13.366 13.4667 11.5077 13.6751C11.8077 13.9334 12.0827 14.4417 12.0827 15.2167V17.5001C12.0827 17.7251 12.216 17.9917 12.641 17.9167C15.9493 16.8001 18.3327 13.6834 18.3327 10.0001C18.3327 8.90573 18.1171 7.8221 17.6983 6.81105C17.2796 5.80001 16.6657 4.88135 15.8919 4.10752C15.1181 3.3337 14.1994 2.71987 13.1884 2.30109C12.1773 1.8823 11.0937 1.66675 9.99935 1.66675Z" fill="black"/>
        </svg>
)};