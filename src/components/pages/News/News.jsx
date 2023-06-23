import React from "react";
import s from "./News.module.scss"
import TitleSliders from "../Home/TitleSlider/TitleSliders";
import ButtonSliderAll from "../Home/ButtonSlider/ButtonSliderAll/ButtonSliderAll";
import { newsData } from "../../../store/store";
import NewsCardVertical from "./NewsCardVertical/NewsCardVertical";
const News = (props) => {
    return ( 
        <div className={s.main}>
            
            <div className={s.main__container}>
                <div className={s.main__nav}>
                <TitleSliders title ={"News"}/>
                <div className={s.main__actions}>
                <ButtonSliderAll/>
                </div>
                </div>
                <div className={s.main__cards}>
                    <div className={s.cards__big}>
                    <NewsCardVertical
                    img={newsData.img.menVr}
                    webp={newsData.img.menVrWebp}
                    alt={'photo'}
                    imgMob={newsData.img.menVrMob}
                    webpMob={newsData.img.menVrMobWebp}
                    widthMob='375'
                    title={newsData.title.title}
                    descr={newsData.subtitle.subtitle}
                    />
                        <NewsCardVertical
                    img={newsData.img.menVr}
                    webp={newsData.img.menVrWebp}
                    alt={'photo'}
                    imgMob={newsData.img.menVrMob}
                    webpMob={newsData.img.menVrMobWebp}
                    widthMob='375'
                    title={newsData.title.title}
                    descr={newsData.subtitle.subtitle}
                    />
                    </div>
                    <div className={s.cards__small}>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default News;