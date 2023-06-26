import React from "react";
import s from "./Tournaments.module.scss"
import TitleSliders from "../TitleSlider/TitleSliders";
import ButtonSliderAll from "../ButtonSlider/ButtonSliderAll/ButtonSliderAll";
import { sliderCards } from "../../../../store/store";
import GameCardsSmall from "../../../GameCards/GameCardsSmall/GameCardsSmall";
import CustomSwiper from "../CustomSwiper/CustomSwiper";
const Tournaments = (props) => {
    
    const slide =[<GameCardsSmall 
                   img={sliderCards.img.dotaImg} 
                   img__webp={sliderCards.img.dotaImgWebp} 
                   alt={'Dota2'} imgMob={sliderCards.img.dotaMob}
                   webpMob={sliderCards.img.dotaMobWebp}
                   title={sliderCards.title.title}
                   subtitle1={sliderCards.subtitle1}
                   subtitle2={sliderCards.subtitle2}
                   subtitle3={sliderCards.subtitle3}
                   subtitle4={sliderCards.subtitle4}
                   status1={sliderCards.number1}
                   status2={sliderCards.number2}
                   status3={sliderCards.number3}
                   status4={sliderCards.number4}
                   />,
                   <GameCardsSmall 
                   img={sliderCards.img.fortnite} 
                   img__webp={sliderCards.img.fortniteWebp} 
                   alt={'Dota2'} imgMob={sliderCards.img.fortniteMob}
                   webpMob={sliderCards.img.fortniteMobWebp}
                   title={sliderCards.title.title2}
                   subtitle1={sliderCards.subtitle1}
                   subtitle2={sliderCards.subtitle2}
                   subtitle3={sliderCards.subtitle3}
                   subtitle4={sliderCards.subtitle4}
                   status1={sliderCards.number1}
                   status2={sliderCards.number2}
                   status3={sliderCards.number3}
                   status4={sliderCards.number4}
                   />,
                   <GameCardsSmall 
                   img={sliderCards.img.csgo} 
                   img__webp={sliderCards.img.csgoWebp} 
                   alt={'Dota2'} imgMob={sliderCards.img.csgoMob}
                   webpMob={sliderCards.img.csgoMobWebp}
                   title={sliderCards.title.title3}
                   subtitle1={sliderCards.subtitle1}
                   subtitle2={sliderCards.subtitle2}
                   subtitle3={sliderCards.subtitle3}
                   subtitle4={sliderCards.subtitle4}
                   status1={sliderCards.number1}
                   status2={sliderCards.number2}
                   status3={sliderCards.number3}
                   status4={sliderCards.number4}
                   />,
                   <GameCardsSmall 
                   img={sliderCards.img.fortnite} 
                   img__webp={sliderCards.img.fortniteWebp} 
                   alt={'Dota2'} imgMob={sliderCards.img.fortniteMob}
                   webpMob={sliderCards.img.fortniteMobWebp}
                   title={sliderCards.title.title2}
                   subtitle1={sliderCards.subtitle1}
                   subtitle2={sliderCards.subtitle2}
                   subtitle3={sliderCards.subtitle3}
                   subtitle4={sliderCards.subtitle4}
                   status1={sliderCards.number1}
                   status2={sliderCards.number2}
                   status3={sliderCards.number3}
                   status4={sliderCards.number4}
                   />,
]
    return ( 
        <div className={s.main}>
            <div className={s.main__top}>
                <TitleSliders title={'Tournaments'}/>
                <div className={s.main__actions}>
                <ButtonSliderAll/>
                </div>
            </div>
            <div className={s.main__bottom}>
                <div className={s.main__slider}>
                    <CustomSwiper  slides={slide}/>
                </div>
            </div>
        </div>
     );
}
 
export default Tournaments;