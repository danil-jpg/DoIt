import React from "react";
import s from "./Games.module.scss"
import Picture from "../../../UI/Picture/Picture";
import { gamesData } from "../../../../store/store";
import TitleSliders from "../TitleSlider/TitleSliders";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';


const Games = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.main__top}>
                    <TitleSliders title={gamesData.title.title}/>
                </div>
                <div className={s.main__slider}>

                </div>
            </div>
        </div>
     );
}
 
export default Games;