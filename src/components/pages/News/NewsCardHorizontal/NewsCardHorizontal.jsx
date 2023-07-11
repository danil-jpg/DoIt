import React from "react";
import s from "./NewsCardHorizontal.module.scss"
import Picture from "../../../UI/Picture/Picture";
const NewsCardHorizontal = (props) => {
    return ( 
        <div className={s.card}>
            <div className={s.card__wrapper}>
            <div className={s.card__top}>
                <Picture 
                 img={props.img}
                 webp={props.img__webp}
                 alt={props.alt} 
                 imgMob={props.imgMob}
                 webpMob={props.webpMob} 
                 widthMob='490'
                 />
                </div>
                <div className={s.card__bottom}>
                <div className={s.card__info}>
                <span className={s.card__title}>{props.title}</span>
                </div>
                <div className={s.card__descr}>
                    <span className={s.card__subtitle}>{props.descr}</span>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewsCardHorizontal;