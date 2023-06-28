import React from "react";
import s from "./News.module.scss"
import TitleSliders from "../TitleSlider/TitleSliders";
import ButtonSliderAll from "../ButtonSlider/ButtonSliderAll/ButtonSliderAll";
import GameCardsBig from "../../../common/GameCards/GameCardsBig/GameCardsBig";
import { newsCard } from "../../../../store/store";
import CustomSwiper from "../CustomSwiper/CustomSwiper";
const News = (props) => {
    const slide =[
        <GameCardsBig
        img={newsCard.img.dast}
        img__webp={newsCard.img.dastWebp}
        alt={'slide'}imgMob={newsCard.img.dastMob}
        webpMob={newsCard.img.dastMobWebp}
        card__title={newsCard.title.title1}
        card__subtitle={newsCard.subtitle.subtitle1}
        />,
        <GameCardsBig
        img={newsCard.img.witcher}
        img__webp={newsCard.img.witcherWebp}
        alt={'slide'}imgMob={newsCard.img.witcherMob}
        webpMob={newsCard.img.witcherMobWebp}
        card__title={newsCard.title.title2}
        card__subtitle={newsCard.subtitle.subtitle2}
        />,
        <GameCardsBig
        img={newsCard.img.mafia}
        img__webp={newsCard.img.mafiaWebp}
        alt={'slide'}imgMob={newsCard.img.mafiaMob}
        webpMob={newsCard.img.mafiaMobWebp}
        card__title={newsCard.title.title3}
        card__subtitle={newsCard.subtitle.subtitle3}
        />,
        <GameCardsBig
        img={newsCard.img.witcher}
        img__webp={newsCard.img.witcherWebp}
        alt={'slide'}imgMob={newsCard.img.witcherMob}
        webpMob={newsCard.img.witcherMobWebp}
        card__title={newsCard.title.title2}
        card__subtitle={newsCard.subtitle.subtitle2}
        />,

    ]
    return ( 
        <div className={s.main}>
            <div className={s.main__top}>
                <TitleSliders title={'News'}/>
                <div className={s.main__actions}>
                    <ButtonSliderAll/>
                </div>
            </div>
            <div className={s.main__bottom}>
            <div className={s.main__slider}>
                <CustomSwiper slides={slide}/>
            </div>
            </div>
        </div>
     );
}
 
export default News;