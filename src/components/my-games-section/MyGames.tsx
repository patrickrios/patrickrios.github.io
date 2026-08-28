import { useContext } from "react";
import css from "./mygames.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";

const DownloadIcon = () =>(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.90156 10.3281C7.91326 10.3431 7.92819 10.3551 7.94525 10.3635C7.96231 10.3718 7.98103 10.3761 8 10.3761C8.01897 10.3761 8.03769 10.3718 8.05475 10.3635C8.0718 10.3551 8.08674 10.3431 8.09844 10.3281L9.84844 8.11406C9.9125 8.03281 9.85469 7.9125 9.75 7.9125H8.59219V2.625C8.59219 2.55625 8.53594 2.5 8.46719 2.5H7.52969C7.46094 2.5 7.40469 2.55625 7.40469 2.625V7.91094H6.25C6.14531 7.91094 6.0875 8.03125 6.15156 8.1125L7.90156 10.3281ZM13.7188 9.78125H12.7812C12.7125 9.78125 12.6562 9.8375 12.6562 9.90625V12.3125H3.34375V9.90625C3.34375 9.8375 3.2875 9.78125 3.21875 9.78125H2.28125C2.2125 9.78125 2.15625 9.8375 2.15625 9.90625V13C2.15625 13.2766 2.37969 13.5 2.65625 13.5H13.3438C13.6203 13.5 13.8438 13.2766 13.8438 13V9.90625C13.8438 9.8375 13.7875 9.78125 13.7188 9.78125Z" fill="currentColor"/>
    </svg>
);

export const MyGames = () =>{
    const { lightMode } = useContext(ThemeContext);
    const { lang } = useContext(AppContext)
    return(
        <section className={css.myGames} id="myGames">
            <h3>{ lang === 'pt-br' ? 'MEUS JOGOS' : 'MY GAMES'}</h3>
            <div className={css.gameGrid}>
                <div className={css.game}>
                    <picture>
                        <source srcSet="/images/cover/komodora_cover-600-min.png" media="(min-width: 632px)" />
                        <img src="/images/cover/komodora_cover-600-min.png" alt="MDN" />
                    </picture>
                    <div className={`${css.gameDonwload} ${lightMode && css.light}`}>
                        <h4>Downloads</h4>
                        <a href="/files/games/Komodora_Windows-64.zip" download="Komodora_Windows-64.zip" title="Baixar Komodora_Windows-64.zip">
                            komodora_windows-64.zip (58,2 Mb)
                            <DownloadIcon/>
                        </a>
                        <a href="/files/games/Komodora-linux_x86_64.zip" download="Komodora-linux_x86_64.zip" title="Baixar Komodora-linux_x86_64.zip">
                            komodora-linux-x86_64.zip (59,5 Mb)
                            <DownloadIcon/>
                        </a>
                    </div>
                </div>
                <div className={css.game}>
                    <picture>
                        <source srcSet="/images/cover/ecoball_cover-600-min.png" media="(min-width: 632px)" />
                        <img src="/images/cover/ecoball_cover-600-min.png" alt="MDN" />
                    </picture>
                    <div className={`${css.gameDonwload} ${lightMode && css.light}`}>
                        <h4>Downloads</h4>
                        <a href="/files/games/ecoball_windows.zip" download="ecoball_windows.zip" title="Baixar ecoball_windows.zip">
                            ecoball_windows.zip (47,6 Mb)
                            <DownloadIcon/>
                        </a>
                        <a href="/files/games/ecoball_linux_x86_64.zip" download="ecoball_linux_x86_64.zip" title="Baixar ecoball_linux_x86_64.zip">
                            ecoball_linux-x86-64.zip (40,7 Mb)
                            <DownloadIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};