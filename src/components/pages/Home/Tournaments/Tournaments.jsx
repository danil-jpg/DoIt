import React from "react";
import s from "./Tournaments.module.scss"
import TitleSliders from "../TitleSlider/TitleSliders";
import ButtonSliderAll from "../ButtonSlider/ButtonSliderAll/ButtonSliderAll";
import { sliderCards } from "../../../../store/store";
import GameCardsSmall from "../../../GameCards/GameCardsSmall/GameCardsSmall";
const Tournaments = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__top}>
                <TitleSliders title={'Tournaments'}/>
                <div className={s.main__actions}>
                <ButtonSliderAll/>
                </div>
            </div>
            <div className={s.main__bottom}>
            
            </div>
        </div>
     );
}
 
export default Tournaments;