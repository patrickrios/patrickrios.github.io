import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { darkFill, lightFill} from "./css";

export const ReactIcon = () => {
    const { lightMode }= useContext(ThemeContext);
    return(
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1743_169)">
                <path d="M63.1351 37.991C63.1351 34.7931 59.1307 31.7622 52.9903 29.8836C54.4083 23.6266 53.7787 18.6467 51.0032 17.0518C50.3307 16.6751 49.5695 16.4855 48.7989 16.5027V18.695C49.2514 18.695 49.6154 18.7855 49.9211 18.9524C51.2586 19.7207 51.8399 22.6411 51.3874 26.4001C51.2787 27.3253 51.1018 28.2988 50.8845 29.2923C48.8283 28.7968 46.7414 28.4387 44.6376 28.2203C43.3843 26.4912 42.0169 24.8477 40.5446 23.3008C43.7526 20.3201 46.7635 18.687 48.8109 18.687V16.4927C46.1038 16.4927 42.5619 18.4215 38.9799 21.7662C35.3998 18.4436 31.856 16.5329 29.1509 16.5329V18.7252C31.1883 18.7252 34.2092 20.3503 37.4171 23.3108C36.0394 24.759 34.6617 26.4001 33.3524 28.2203C31.2442 28.4363 29.1536 28.7978 27.0954 29.3024C26.8778 28.3607 26.7067 27.4089 26.5825 26.4504C26.1199 22.6894 26.6911 19.769 28.0205 18.9927C28.3142 18.8157 28.6983 18.7352 29.1509 18.7352V16.543C28.3262 16.543 27.576 16.7199 26.9284 17.092C24.1629 18.687 23.5435 23.6548 24.9695 29.8937C18.8492 31.7843 14.8649 34.8032 14.8649 37.991C14.8649 41.1889 18.8693 44.2199 25.0097 46.0964C23.5917 52.3554 24.2213 57.3353 26.9968 58.9282C27.6364 59.3023 28.3846 59.4793 29.2092 59.4793C31.9163 59.4793 35.4582 57.5505 39.0402 54.2058C42.6203 57.5304 46.1621 59.4391 48.8693 59.4391C49.6458 59.4555 50.4128 59.2653 51.0917 58.888C53.8572 57.2951 54.4766 52.3273 53.0507 46.0884C59.1508 44.2098 63.1351 41.1789 63.1351 37.991ZM50.3234 31.4283C49.9412 32.7434 49.4983 34.04 48.996 35.314C48.1737 33.7146 47.2708 32.1579 46.2908 30.6499C47.6886 30.8571 49.0362 31.1125 50.3254 31.4283H50.3234ZM45.8182 41.907C45.0815 43.1931 44.2904 44.4472 43.4469 45.666C40.4949 45.9262 37.5258 45.9296 34.5732 45.6761C32.8796 43.2569 31.3985 40.6957 30.1464 38.0212C31.3966 35.3404 32.8714 32.7702 34.5551 30.3382C37.5064 30.0775 40.4748 30.0734 43.4268 30.3261C44.2434 31.4967 45.0418 32.7477 45.8081 34.0671C46.5563 35.3543 47.2361 36.6616 47.8556 37.981C47.2292 39.3164 46.5496 40.6261 45.8182 41.907ZM48.996 40.6278C49.5269 41.9452 49.9815 43.2646 50.3536 44.5437C49.0664 44.8595 47.7067 45.125 46.3009 45.3301C47.2768 43.8084 48.1763 42.239 48.996 40.6278ZM39.0201 51.1266C38.105 50.1813 37.1899 49.1294 36.2848 47.9769C37.1698 48.0172 38.0748 48.0473 38.9899 48.0473C39.9151 48.0473 40.8302 48.0272 41.7253 47.9769C40.8403 49.1294 39.9252 50.1813 39.0201 51.1266ZM31.6991 45.3301C30.343 45.1336 28.9967 44.8746 27.6645 44.5538C28.0286 43.2847 28.4811 41.9753 28.992 40.668C29.3962 41.4524 29.8206 42.2408 30.2832 43.0292C30.7458 43.8156 31.2164 44.5839 31.6991 45.3301ZM38.9698 24.8555C39.885 25.8008 40.8001 26.8527 41.7051 28.0051C40.8202 27.9649 39.9151 27.9347 39 27.9347C38.0748 27.9347 37.1597 27.9548 36.2647 28.0051C37.1496 26.8527 38.0648 25.8008 38.9698 24.8555ZM31.6891 30.6519C30.7133 32.1703 29.8139 33.7363 28.994 35.3442C28.4775 34.062 28.0244 32.7551 27.6364 31.4283C28.9236 31.1226 30.2832 30.8571 31.6891 30.6519ZM22.7852 42.9689C19.3017 41.4846 17.0491 39.5357 17.0491 37.991C17.0491 36.4464 19.3017 34.4874 22.7852 33.0132C23.63 32.6491 24.5551 32.3233 25.5105 32.0196C26.0716 33.9464 26.8098 35.9536 27.7229 38.0111C26.8608 39.9463 26.1317 41.9381 25.5407 43.9725C24.6063 43.6832 23.6867 43.3483 22.7852 42.9689ZM28.0789 57.0276C26.7414 56.2633 26.1601 53.339 26.6127 49.5819C26.7213 48.6567 26.8983 47.6813 27.1155 46.6877C29.0423 47.1604 31.148 47.5244 33.3624 47.7617C34.6158 49.4908 35.9832 51.1343 37.4554 52.6813C34.2474 55.662 31.2365 57.2951 29.1891 57.2951C28.8028 57.2993 28.4214 57.2081 28.0789 57.0296V57.0276ZM51.4175 49.5316C51.8801 53.2907 51.3089 56.213 49.9795 56.9894C49.6858 57.1664 49.3017 57.2448 48.8491 57.2448C46.8117 57.2448 43.7908 55.6217 40.5829 52.6591C42.0489 51.1187 43.4071 49.4789 44.6476 47.7517C46.7558 47.5357 48.8464 47.1742 50.9046 46.6696C51.1319 47.6632 51.3069 48.6165 51.4175 49.5316ZM55.2047 42.9689C54.36 43.3329 53.4348 43.6588 52.4795 43.9625C51.878 41.9176 51.1389 39.9159 50.2671 37.9709C51.1721 35.9255 51.8982 33.9283 52.4493 32.0095C53.3866 32.2998 54.3095 32.6347 55.2148 33.0132C58.6983 34.4975 60.9509 36.4464 60.9509 37.991C60.9408 39.5357 58.6882 41.4946 55.2047 42.9689Z" fill={lightMode ? lightFill : darkFill}/>
                <path d="M38.9895 42.488C40.1822 42.488 41.3261 42.0142 42.1695 41.1708C43.0129 40.3274 43.4867 39.1836 43.4867 37.9908C43.4867 36.7981 43.0129 35.6542 42.1695 34.8108C41.3261 33.9675 40.1822 33.4937 38.9895 33.4937C37.7968 33.4937 36.6529 33.9675 35.8095 34.8108C34.9661 35.6542 34.4923 36.7981 34.4923 37.9908C34.4923 39.1836 34.9661 40.3274 35.8095 41.1708C36.6529 42.0142 37.7968 42.488 38.9895 42.488Z" fillOpacity="0.7" fill={lightMode ? lightFill : darkFill}/>
            </g>
            <defs>
                <clipPath id="clip0_1743_169">
                    <rect width="48.2702" height="48.2702" fill={lightMode ? lightFill : darkFill} transform="translate(14.8649 14.481)"/>
                </clipPath>
            </defs>
        </svg>
    )
};