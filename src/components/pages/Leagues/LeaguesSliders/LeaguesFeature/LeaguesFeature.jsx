import React from "react";
import s from "./LeaguesFeature.module.scss"
import { sliderCards } from "../../../../../store/store";
import GameCardsSmall from "../../../../common/GameCards/GameCardsSmall/GameCardsSmall";
import CustomSwiper from "../../../Home/CustomSwiper/CustomSwiper";
const LeaguesFeature = () => {
    const slide =[

        <GameCardsSmall 
        img={sliderCards.img.csgo} 
        img__webp={sliderCards.img.csgoWebp} 
        alt={'Dota2'} imgMob={sliderCards.img.csgoMob}
        webpMob={sliderCards.img.csgoMobWebp}
        title={sliderCards.title.title4}
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
        title={sliderCards.title.title4}
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
        title={sliderCards.title.title4}
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
        title={sliderCards.title.title4}
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
            <div className={s.main__wrapper}>
                <div className={s.main__top}>
                    <span className={s.main__title}>Feature leagues</span>
                </div>
                <div className={s.main__slider}>
                <CustomSwiper slides={slide}/>
                </div>
            </div>
        </div>
     );
}
 
export default LeaguesFeature