import css from "./experience.module.css";

export const Experience = () => {
    return(
        <section className={css.experience}>
            <h3>
                <ExpIcon/>
                XPERIÊNCIA PROFISSIONAL
                <Ornament/>
            </h3>
            <div className={css.bordered}>
                <header>
                    <h4>
                        <img src="/images/icon/logo-thecmos4.png" />
                        Web designer WORDPRESS at The CMOs
                    </h4>
                    <span>Out 2023 - Fev 2024</span>
                </header>
                <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
            </div>
            <div>
                <header>
                    <h4>
                        <img src="/images/icon/hubkn_simbolo-03.png" />
                        Desenvolvedor REACT at hubkn inc.
                    </h4>
                    <span>Out 2023 - Fev 2024</span>
                </header>
                <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
            </div>
        </section>
    )    
};

const ExpIcon = () => {
    return (
        
        <svg style={{marginRight:'4px'}} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.09097 16.1714H0.892578V0.179423H4.09097V16.1714ZM16.8926 16.1714H7.28936V12.973H16.8926V16.1714ZM16.8926 9.7746H7.28936V6.57621H16.8926V9.7746ZM16.8926 3.36978H7.28936V0.171387H16.8926V3.36978Z" fill="#A3ADCC"/>
        </svg>

    )
}

const Ornament = () => {
    return (
        
<svg style={{float:'right',opacity:'.1'}} width="153" height="16" viewBox="0 0 153 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.393823 13.7046C-0.131274 14.2297 -0.131274 15.0811 0.393823 15.6062C0.91892 16.1313 1.77027 16.1313 2.29537 15.6062L15.6062 2.29537C16.1313 1.77027 16.1313 0.91892 15.6062 0.393823C15.0811 -0.131274 14.2297 -0.131274 13.7046 0.393823L0.393823 13.7046ZM15.6061 13.7046C15.081 14.2297 15.081 15.0811 15.6061 15.6062C16.1312 16.1313 16.9826 16.1313 17.5077 15.6062L30.8185 2.29537C31.3436 1.77027 31.3436 0.91892 30.8185 0.393823C30.2934 -0.131274 29.442 -0.131274 28.9169 0.393823L15.6061 13.7046ZM30.8184 15.6062C30.2933 15.0811 30.2933 14.2297 30.8184 13.7046L44.1292 0.393823C44.6543 -0.131274 45.5057 -0.131274 46.0308 0.393823C46.5559 0.91892 46.5559 1.77027 46.0308 2.29537L32.72 15.6062C32.1949 16.1313 31.3435 16.1313 30.8184 15.6062ZM46.0307 13.7046C45.5056 14.2297 45.5056 15.0811 46.0307 15.6062C46.5558 16.1313 47.4072 16.1313 47.9323 15.6062L61.2431 2.29537C61.7682 1.77027 61.7682 0.91892 61.2431 0.393823C60.718 -0.131274 59.8666 -0.131274 59.3415 0.393823L46.0307 13.7046ZM61.243 15.6062C60.7179 15.0811 60.7179 14.2297 61.243 13.7046L74.5539 0.393823C75.0789 -0.131274 75.9303 -0.131274 76.4554 0.393823C76.9805 0.91892 76.9805 1.77027 76.4554 2.29537L63.1446 15.6062C62.6195 16.1313 61.7681 16.1313 61.243 15.6062ZM76.4553 13.7046C75.9302 14.2297 75.9302 15.0811 76.4553 15.6062C76.9804 16.1313 77.8318 16.1313 78.3569 15.6062L91.6677 2.29537C92.1928 1.77027 92.1928 0.91892 91.6677 0.393823C91.1426 -0.131274 90.2912 -0.131274 89.7662 0.393823L76.4553 13.7046ZM91.6677 15.6062C91.1426 15.0811 91.1426 14.2297 91.6677 13.7046L104.978 0.393823C105.504 -0.131274 106.355 -0.131274 106.88 0.393823C107.405 0.91892 107.405 1.77027 106.88 2.29537L93.5692 15.6062C93.0441 16.1313 92.1927 16.1313 91.6677 15.6062ZM106.88 13.7046C106.355 14.2297 106.355 15.0811 106.88 15.6062C107.405 16.1313 108.256 16.1313 108.781 15.6062L122.092 2.29537C122.617 1.77027 122.617 0.91892 122.092 0.393823C121.567 -0.131274 120.716 -0.131274 120.191 0.393823L106.88 13.7046ZM122.092 15.6062C121.567 15.0811 121.567 14.2297 122.092 13.7046L135.403 0.393823C135.928 -0.131274 136.78 -0.131274 137.305 0.393823C137.83 0.91892 137.83 1.77027 137.305 2.29537L123.994 15.6062C123.469 16.1313 122.617 16.1313 122.092 15.6062ZM137.305 13.7046C136.779 14.2297 136.779 15.0811 137.305 15.6062C137.83 16.1313 138.681 16.1313 139.206 15.6062L152.517 2.29537C153.042 1.77027 153.042 0.91892 152.517 0.393823C151.992 -0.131274 151.14 -0.131274 150.615 0.393823L137.305 13.7046Z" fill="#A3ADCC"/>
</svg>

    )
}