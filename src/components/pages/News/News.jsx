import React from "react";
import s from "./News.module.scss"
import TitleSliders from "../Home/TitleSlider/TitleSliders";
import ButtonSliderAll from "../Home/ButtonSlider/ButtonSliderAll/ButtonSliderAll";
import { newsData } from "../../../store/store";
import NewsCardVertical from "./NewsCardVertical/NewsCardVertical";
import NewsCardHorizontal from "./NewsCardHorizontal/NewsCardHorizontal";
import Container from "../../containers/Container/Container";
const News = (props) => {
    return (
        <div className={s.main}>
            {/* <Container> */}
            <div className={s.main__container}>
                <div className={s.main__nav}>
                    <TitleSliders title={"News"} />
                    <div className={s.main__actions}>
                        <ButtonSliderAll />
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
                            img={newsData.img.watch}
                            webp={newsData.img.watchWebp}
                            imgMob={newsData.img.laptopNewsMob}
                            webpMob={newsData.img.laptopNewsMobWebp}
                            alt={'photo'}
                            title={newsData.title.title}
                            descr={newsData.subtitle.subtitle}

                        />
                    </div>
                    <div className={s.cards__small}>
                        <NewsCardHorizontal
                            img={newsData.img.woomenNews}
                            webp={newsData.img.woomenNewsWebp}
                            imgMob={newsData.img.woomenNewsMob}
                            webpMob={newsData.img.woomenNewsMobWebp}
                            alt={'photo'}
                            title={newsData.title.title}
                            descr={newsData.subtitle.subtitle}
                        />
                        <NewsCardHorizontal
                            img={newsData.img.laptopNews}
                            webp={newsData.img.laptopNewsWebp}
                            imgMob={newsData.img.laptopNewsMob}
                            webpMob={newsData.img.laptopNewsMobWebp}
                            alt={'photo'}
                            title={newsData.title.title}
                            descr={newsData.subtitle.subtitle}
                        />
                        <NewsCardHorizontal
                            img={newsData.img.blackMen}
                            webp={newsData.img.blackMenWebp}
                            imgMob={newsData.img.blackMenMob}
                            webpMob={newsData.img.blackMenMobWebp}
                            alt={'photo'}
                            title={newsData.title.title}
                            descr={newsData.subtitle.subtitle}
                        />
                        <NewsCardHorizontal
                            img={newsData.img.woomenNews2}
                            webp={newsData.img.woomenNews2Webp}
                            imgMob={newsData.img.blackMenMob}
                            webpMob={newsData.img.blackMenMobWebp}
                            alt={'photo'}
                            title={newsData.title.title}
                            descr={newsData.subtitle.subtitle}
                        />
                    </div>
                </div>
            </div>
            {/* </Container> */}
        </div>
    );
}

export default News;