import React from "react";
import s from "./PremiumCard.module.scss"
import Button from "../../../UI/buttons/Button/Button";
const PremiumCard = (props,styles,) => {
    return ( 
        <div className={s.card} style={props.styles} >  
                <div className={s.card__top}>
                    <span className={s.card__title} style={props.colorTitle}>{props.title}</span>
                </div>
                <div className={s.card__info}>
                    <span className={s.card__subtitle}>{props.subtitle}</span>
                    <span className={s.card__desc}>{props.descr}</span>
                </div>
                <div className={s.card__actions}>
                    <Button color={props.color}>Sign up</Button>
                </div>
        </div>
     );
}
 
export default PremiumCard;