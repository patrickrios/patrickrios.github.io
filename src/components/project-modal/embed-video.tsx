import { useState } from "react";
import css from "./embed-video.module.css";

interface EmbedProp{
    videoUrl: string;
}
interface GameProp{
    gameUrl: string;
}

export const EmbedVideo = ({ videoUrl } : EmbedProp) => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoad = () => setIsLoading(false);
    return(
        <div className={css.embed}>
            {
                isLoading && 
                <img 
                    className={css.loading} 
                    src="/images/icon/tube-spinner.svg"
                />
            }
            <iframe 
                onLoad={handleLoad}
                width="100%" 
                height="415" 
                src={videoUrl} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            />
        </div>
)}

export const EmbedGame = ({ gameUrl } : GameProp) => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoad = () => setIsLoading(false);
    return(
        <div className={css.embed}>
            {
                isLoading && 
                <img 
                    className={css.loading} 
                    src="/images/icon/tube-spinner.svg"
                />
            }
            <iframe 
                onLoad={handleLoad}
                frameBorder="0" 
                src={gameUrl}
                allowFullScreen={true} 
                width="896" 
                height="524"
            />
        </div>
)}