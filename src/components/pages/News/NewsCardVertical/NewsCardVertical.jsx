import React from "react";
import s from "./NewsCardVertical.module.scss"
import Picture from "../../../UI/Picture/Picture";
const NewsCardVertical = (props) => {
    return ( 
        <div className={s.card}>
            <div className={s.card__wrapper}>
            <div className={s.card__image}>
            <Picture 
                 img={props.img}
                 webp={props.img__webp}
                 alt={props.alt} 
                 imgMob={props.imgMob}
                 webpMob={props.webpMob} 
                 widthMob='375'
                 className={s.card__picture}
                 />
                </div>
                <div className={s.card__info}>
                    <div className={s.card__top}>
                        <span className={s.card__title}>{props.title}</span>
                    </div>
                    <div className={s.card__bottom}>
                        <p className={s.card__descr}>{props.descr}</p>
                        <p className={s.card__descr}>{props.descr}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewsCardVertical;