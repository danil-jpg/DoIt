import React from "react";
import s from "./PremiumCardsYellow.module.scss"
import Button from "../../../UI/buttons/Button/Button";

const PremiumCardsYellow = (props,styles) => {
    return ( 
        <div className={s.card} style={props.styles}>
                <div className={s.card__wrapper}>
                <div className={s.card__top}>
                    <span className={s.card__popular}>most popular</span>
                    <span className={s.card__title} style={props.colorTitle}>{props.title}</span>
                </div>
                <div className={s.card__info}>
                    <span className={s.card__subtitle}>{props.subtitle}</span>
                    <div className={s.card__list}>
                        <span className={s.card__item}>- usecase 1</span>
                        <span className={s.card__item}>- usecase 1</span>
                        <span className={s.card__item}>- usecase 1</span>
                        <span className={s.card__item}>- usecase 1</span>
                        <span className={s.card__item}>- usecase 1</span>
                    </div>
                </div>
                <div className={s.card__actions}>
                    <Button color={props.color}>Sign up</Button>
                </div>
                </div>
        </div>
     );
}
 
export default PremiumCardsYellow ;