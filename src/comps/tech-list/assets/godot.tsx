import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { darkFill, lightFill} from "./css";

export const GodotEngine = () => {
    const { lightMode }= useContext(ThemeContext);
    return(
    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.0537 16.5184C31.8315 17.0132 29.6333 17.6991 27.573 18.7372C27.6204 20.5568 27.7386 22.2993 27.9759 24.0703C27.1768 24.5827 26.3349 25.0233 25.5882 25.6224C24.828 26.2073 24.0536 26.7658 23.3656 27.4505C21.9745 26.5273 20.5303 25.6867 19.0404 24.9332C17.4254 26.6706 15.9148 28.546 14.6821 30.6457C15.6519 32.1672 16.6917 33.6951 17.6531 34.8875V47.7687C17.6778 47.7687 17.7005 47.7699 17.7235 47.7716L25.6209 48.5339C25.821 48.5531 26.0078 48.6426 26.1481 48.7866C26.2884 48.9305 26.3732 49.1195 26.3873 49.32L26.6313 52.8066L33.5182 53.298L33.9933 50.0814C34.023 49.8794 34.1244 49.6949 34.2789 49.5614C34.4333 49.428 34.6306 49.3545 34.8348 49.3544H43.1648C43.3689 49.3545 43.5662 49.428 43.7207 49.5614C43.8752 49.6949 43.9765 49.8794 44.0063 50.0814L44.4813 53.298L51.3699 52.8066L51.6123 49.32C51.6264 49.1195 51.7112 48.9305 51.8515 48.7866C51.9918 48.6426 52.1786 48.5531 52.3787 48.5339L60.2727 47.772C60.2957 47.7704 60.3188 47.7691 60.3431 47.7691V46.7394H60.3465V34.8866C61.4584 33.4884 62.5099 31.9438 63.3174 30.6453C62.0844 28.5456 60.5741 26.6706 58.9591 24.9327C57.4693 25.6863 56.0251 26.5269 54.6339 27.45C53.9463 26.7654 53.1715 26.2069 52.4118 25.622C51.6647 25.0225 50.8228 24.5822 50.0236 24.0695C50.2609 22.2989 50.3792 20.5564 50.4261 18.7368C48.3663 17.6987 46.1685 17.0123 43.9459 16.5176C43.0583 18.0098 42.2458 19.6244 41.5401 21.2033C40.7016 21.0641 39.8597 21.0117 39.0161 21.0021V21.0004C39.0094 21.0004 39.0048 21.0021 38.9998 21.0021C38.9947 21.0021 38.9901 21.0004 38.983 21.0004V21.0021C38.1403 21.0117 37.298 21.0641 36.4594 21.2033C35.7538 19.6248 34.9417 18.0098 34.0537 16.5176V16.5184ZM27.8057 35.3604C30.4345 35.3604 32.5648 37.4899 32.5648 40.117C32.5648 42.7458 30.4341 44.8761 27.8057 44.8761C25.1785 44.8761 23.0478 42.7454 23.0478 40.117C23.0478 37.4899 25.1785 35.3604 27.8057 35.3604ZM50.1939 35.3604C52.821 35.3604 54.9517 37.4899 54.9517 40.117C54.9517 42.7458 52.821 44.8761 50.1939 44.8761C47.565 44.8761 45.4347 42.7454 45.4347 40.117C45.4347 37.4899 47.5655 35.3604 50.1939 35.3604ZM38.9998 38.1439C39.845 38.1439 40.5326 38.7678 40.5326 39.5359V43.9169C40.5326 44.685 39.845 45.3088 38.9998 45.3088C38.1529 45.3088 37.4686 44.685 37.4686 43.9169V39.5355C37.4686 38.7678 38.1529 38.1439 38.9998 38.1439Z" fill={lightMode ? lightFill : darkFill}/>
        <path d="M53.2588 50.1563L53.0148 53.6614C53.0005 53.8657 52.9129 54.0579 52.768 54.2026C52.6232 54.3473 52.4309 54.4347 52.2266 54.4488L43.8152 55.05C43.7959 55.0517 43.7745 55.0517 43.7548 55.0517C43.3372 55.0517 42.975 54.7457 42.9146 54.3264L42.4316 51.0536H35.569L35.086 54.326C35.0549 54.538 34.9448 54.7305 34.7778 54.8647C34.6108 54.999 34.3992 55.0652 34.1854 55.05L25.7736 54.4488C25.5694 54.4346 25.3771 54.3471 25.2323 54.2023C25.0875 54.0575 25 53.8653 24.9858 53.661L24.7418 50.1559L17.6406 49.4717C17.644 50.2347 17.6532 51.0716 17.6532 51.2372C17.6532 58.7367 27.1673 62.3411 38.9856 62.3822H39.015C50.8334 62.3411 60.3437 58.7367 60.3437 51.2372C60.3437 51.0687 60.3537 50.2352 60.3567 49.4717L53.2588 50.1563ZM31.4208 40.3982C31.4208 40.8131 31.3391 41.2238 31.1804 41.6071C31.0216 41.9903 30.7889 42.3385 30.4955 42.6318C30.2021 42.9251 29.8538 43.1577 29.4705 43.3163C29.0872 43.4749 28.6764 43.5564 28.2616 43.5562C27.4239 43.5563 26.6205 43.2237 26.028 42.6314C25.4355 42.0392 25.1026 41.2359 25.1024 40.3982C25.1028 39.5607 25.4359 38.7576 26.0283 38.1656C26.6207 37.5736 27.424 37.241 28.2616 37.2411C28.6763 37.2409 29.0871 37.3224 29.4703 37.481C29.8536 37.6395 30.2018 37.872 30.4952 38.1652C30.7886 38.4584 31.0213 38.8065 31.1801 39.1897C31.3389 39.5728 31.4207 39.9835 31.4208 40.3982ZM46.5799 40.3982C46.5798 40.8129 46.6614 41.2236 46.82 41.6068C46.9786 41.9899 47.2112 42.3381 47.5044 42.6313C47.7976 42.9246 48.1458 43.1572 48.5289 43.3159C48.912 43.4746 49.3227 43.5562 49.7374 43.5562C50.5749 43.5562 51.3781 43.2235 51.9703 42.6313C52.5624 42.0391 52.8951 41.2359 52.8951 40.3985C52.8951 39.561 52.5624 38.7578 51.9703 38.1656C51.3781 37.5734 50.5749 37.2407 49.7374 37.2407C49.3228 37.2407 48.9122 37.3224 48.5291 37.4811C48.1461 37.6398 47.798 37.8724 47.5048 38.1656C47.2117 38.4588 46.9791 38.8069 46.8205 39.1899C46.6619 39.573 46.5798 39.9836 46.5799 40.3982Z" fill={lightMode ? lightFill : darkFill}/>
    </svg>
)};