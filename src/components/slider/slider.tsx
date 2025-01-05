import React, { useContext, useEffect, useState } from "react";
import { Slide } from "../portfolio/project-item";
import css from "./slider.module.css";
import { Marker, SliderArrow, color } from "./markers";
import parse from "html-react-parser";
import { AppContext } from "../../contexts/AppContext";

interface SliderData{
    data: Slide[];
}

export const Slider = ( props : SliderData) => {
    const { data } = props;
    const [currentSlide, setCurrent] = useState(0);
    const size = data?.length;
    const { lang } = useContext(AppContext);

    const previousSlide = () => {
        const newSlide = (
            currentSlide > 0 ? 
                currentSlide - 1 : size-1 
        );
        setCurrent(newSlide);
    };

    const nextSlide = () => {
        const newSlide = (
            currentSlide < (size-1) ? 
                currentSlide + 1 : 0
        );
        setCurrent(newSlide);
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                previousSlide();
            } else if (event.key === "ArrowRight") {
                nextSlide();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [currentSlide]);

    return(
        <div>
            { size > 0 &&
                <div className={css.slide}>
                    <div className={css.slideThumb}>
                        {   size > 1 &&
                            <button 
                                className={css.arrowLeft} 
                                onClick={previousSlide}
                            >
                                <SliderArrow/>
                            </button>
                        }
                        <img src={data[currentSlide].thumb}/>
                        {   size > 1 &&
                            <button 
                                className={css.arrowRight} 
                                onClick={nextSlide}
                            >
                                <SliderArrow/>
                            </button>
                        }
                    </div>
                    <p className={css.caption}>
                        { parse(data[currentSlide]?.caption[lang]) }
                    </p>
                </div>
            }
            { data && size > 1 &&  
                <div className={css.controls}>
                    { data?.map((_,index)=> 
                        <Marker 
                            fill={ currentSlide === index ? 
                                color.MARKED : 
                                color.NORMAL
                            }
                            key={`slide-marker-${index}`}
                        />
                    )}
                </div>
            }
        </div>
    )
}