import React from "react";
import s from "./GameCardsBig.module.scss"
import Picture from "../../common/Picture/Picture";
const GameCardsBig = (props) => {
    return ( 
        <div className={s.card}>
            <div className={s.card__top}>
            <Picture 
                 img={props.img}
                 webp={props.img__webp}
                 alt={props.alt} 
                 width={props.width}
                 height={props.height}
                 imgMob={props.imgMob}
                 webpMob={props.webpMob} 
                 widthMob='375'
                 className={s.card__picture}
                 />
            </div>
            <div className={s.card__bottom}>
            <div className={s.card__name}>
            <span className={s.card__title}>{props.card__title}</span>
            </div>
            <div className={s.card__desc}>
            <p className={s.card__subtitle}>{props.card__subtitle}</p>
            </div>
            </div>
        </div>
     );
}
 
export default GameCardsBig;