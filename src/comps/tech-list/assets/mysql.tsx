import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { darkFill, lightFill} from "./css";

export const Mysql = () => {
    const { lightMode }= useContext(ThemeContext);
    return(
    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2028_236)">
            <path d="M59.3992 52.0103C56.7497 51.9377 54.7268 52.1855 52.9961 52.9142C52.5048 53.1221 51.7213 53.1266 51.6411 53.7425C51.9113 54.026 51.9527 54.4489 52.1681 54.7977C52.5808 55.4642 53.2784 56.3605 53.9004 56.8313C54.5801 57.3435 55.2808 57.8925 56.0095 58.3363C57.3067 59.1274 58.754 59.5788 60.0007 60.3699C60.737 60.8372 61.467 61.425 62.1855 61.952C62.5404 62.2119 62.7793 62.617 63.2391 62.7803V62.7063C62.9971 62.3977 62.9348 61.9729 62.7121 61.6511L61.7326 60.6716C60.775 59.401 59.5595 58.285 58.2684 57.3587C57.2383 56.6181 54.932 55.6192 54.503 54.4215L54.4274 54.3459C55.1577 54.2627 56.0126 53.9986 56.6878 53.8174C57.8201 53.5146 58.8327 53.5932 60.0007 53.2904L61.5828 52.8394V52.5381C60.992 51.9324 60.5706 51.1295 59.9266 50.5805C58.2392 49.1438 56.3986 47.7099 54.5034 46.5137C53.4524 45.8503 52.1537 45.4183 51.0392 44.856C50.6638 44.6675 50.0061 44.5679 49.7584 44.2533C49.1736 43.5082 48.8545 42.5629 48.4034 41.6931C47.4581 39.872 46.5302 37.8848 45.6916 35.9686C45.1202 34.6627 44.7478 33.3742 44.0354 32.2032C40.6157 26.5809 36.935 23.1867 31.2325 19.8513C30.0185 19.1419 28.558 18.8615 27.0142 18.4949L24.5281 18.3448C24.022 18.1339 23.4965 17.5149 23.0215 17.2136C21.1327 16.0194 16.2867 13.4235 14.8869 16.8371C14.0038 18.9907 16.208 21.0923 16.9961 22.1847C17.5497 22.9492 18.2575 23.8083 18.6523 24.6693C18.9137 25.2362 18.9582 25.8031 19.1808 26.4015C19.7272 27.8769 20.2048 29.4826 20.9131 30.8452C21.2706 31.5352 21.6654 32.2613 22.1183 32.8788C22.3946 33.2572 22.8707 33.4251 22.9467 34.0084C22.4804 34.66 22.4538 35.6707 22.1928 36.4945C21.0157 40.2067 21.461 44.8195 23.1724 47.5655C23.6978 48.4101 24.9358 50.2176 26.6365 49.5246C28.1252 48.9174 27.7927 47.04 28.2187 45.3822C28.3152 45.0068 28.2559 44.7306 28.4443 44.4783V44.5539L29.8008 47.2642C30.8043 48.8805 32.5837 50.5695 34.0933 51.7094C34.8756 52.3002 35.4915 53.3212 36.5037 53.6669V53.5913H36.4281C36.2321 53.2854 35.9251 53.1593 35.6758 52.9146C35.0865 52.3359 34.4307 51.6174 33.9436 50.9555C32.5707 49.0929 31.3579 47.0533 30.2537 44.9312C29.7252 43.9175 29.2666 42.8 28.8213 41.7684C28.6491 41.3706 28.6522 40.7679 28.2943 40.5631C27.8075 41.3185 27.089 41.9302 26.7121 42.822C26.111 44.2484 26.0323 45.9894 25.8097 47.7927C25.6775 47.8402 25.7356 47.8075 25.6585 47.8683C24.609 47.6145 24.2412 46.5354 23.8506 45.6079C22.865 43.2658 22.6811 39.4943 23.5493 36.7962C23.7735 36.0986 24.7887 33.902 24.3776 33.2564C24.1815 32.6139 23.5345 32.2412 23.1724 31.7499C22.724 31.1427 22.2775 30.3429 21.9671 29.6407C21.1597 27.815 20.7843 25.7639 19.9336 23.9177C19.527 23.0347 18.8412 22.141 18.2773 21.3575C17.6523 20.4878 16.9535 19.8464 16.4694 18.7958C16.2973 18.4219 16.0644 17.8235 16.3182 17.4409C16.3999 17.181 16.5143 17.0727 16.7707 16.9883C17.2069 16.6513 18.4243 17.1012 18.8784 17.2896C20.0867 17.7912 21.0943 18.2692 22.1183 18.9474C22.6081 19.2723 23.1055 19.9019 23.699 20.077H24.3772C25.4369 20.3206 26.6243 20.1511 27.6156 20.4524C29.3669 20.9851 30.9358 21.8135 32.3606 22.7128C36.7006 25.4543 40.2509 29.3546 42.6789 34.0107C43.0691 34.7603 43.2386 35.4743 43.5828 36.2695C44.2759 37.8726 45.1502 39.5217 45.8402 41.0905C46.5302 42.6533 47.2012 44.2328 48.1762 45.5342C48.6884 46.2185 50.6654 46.5852 51.5647 46.9651C52.1955 47.2307 53.2286 47.5085 53.8251 47.8691C54.965 48.5564 56.0692 49.3756 57.1396 50.128C57.6723 50.5049 59.3167 51.3317 59.3984 52.0114L59.3992 52.0103ZM25.7326 23.3155C25.1805 23.3052 24.7902 23.3747 24.3776 23.4655V23.5412H24.4517C24.7158 24.0815 25.1805 24.4303 25.5069 24.8961L26.2592 26.4783L26.3348 26.4042C26.801 26.0748 27.0145 25.5493 27.0115 24.7464C26.8246 24.5488 26.798 24.3041 26.6346 24.0682C26.421 23.7551 26.0038 23.5784 25.7322 23.3158L25.7326 23.3155Z" fill={lightMode ? lightFill : darkFill}/>
        </g>
        <defs>
        <clipPath id="clip0_2028_236">
            <rect width="48.6353" height="48.6353" fill={lightMode ? lightFill : darkFill} transform="translate(14.6821 14.6821)"/>
        </clipPath>
        </defs>
    </svg>
)};