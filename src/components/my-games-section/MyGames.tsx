import { useContext } from "react";
import css from "./mygames.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";

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
                        <a href="/files/games/Komodora_Windows-64.zip" download="Komodora_Windows-64.zip">
                            komodora_windows-64.zip (58,2 Mb)
                        </a>
                        <a href="/files/games/Komodora-linux_x86_64.zip" download="Komodora-linux_x86_64.zip">
                            komodora-linux-x86_64.zip (59,5 Mb)
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
                        <a href="/files/games/ecoball_windows.zip" download="ecoball_windows.zip">
                            ecoball_windows.zip (47,6 Mb)
                        </a>
                        <a href="/files/games/ecoball_linux_x86_64.zip" download="ecoball_linux_x86_64.zip">
                            ecoball_linux-x86-64.zip (40,7 Mb)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};