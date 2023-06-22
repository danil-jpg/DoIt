import React from "react";
import s from "./GameCardsSmall.module.scss"
import Picture from "../../common/Picture/Picture";
const GameCardsSmall = (props) => {
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
                <div className={s.card__name}><span className={s.card__title}>{props.title}</span>
                    </div> 
                    <div className={s.card__descr}>
                    <div className={s.card__info}>
                    <span className={s.card__subtitle}>{props.subtitle1}</span>
                    <span className={s.card__status}>{props.status1}</span>
                    </div>
                    <div className={s.card__info}>
                    <span className={s.card__subtitle}>{props.subtitle2}</span>
                    <span className={s.card__status}>{props.status2}</span>
                    </div>
                    <div className={s.card__info}>
                    <span className={s.card__subtitle}>{props.subtitle3}</span>
                    <span className={s.card__status}>{props.status3}</span>
                    </div>
                    <div className={s.card__info}>
                    <span className={s.card__subtitle}>{props.subtitle4}</span>
                    <span className={s.card__status}>{props.status4}</span>
                    </div>
                    </div>
            </div>
        </div>
     );
}
 
export default GameCardsSmall;