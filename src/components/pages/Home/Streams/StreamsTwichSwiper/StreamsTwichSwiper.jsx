import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TwitchEmbed } from 'react-twitch-embed';
import s from "./StreamsTwichSwiper.module.scss"
import 'swiper/scss';
import { Pagination } from "swiper";
import "swiper/scss/pagination";
const TwitchSwiper = () => {
  const channels = ["coopertv", "fandercs", "buichka",'qrushcsgo'];
  return (
    <Swiper
    slidesPerView={1}
//     modules={[Pagination]}
    loop={true}
    lazy={true} 
    pagination={{
      clickable: true,
    }}
    >
        <SwiperSlide >
           <div className={s.slider}>
              <div className={s.slider__top}>
                <TwitchEmbed
          channel={"esl_dota2"}
          width="583px"
          height="320px"
          withChat={false}
          id="1"
          className={s.slide__video__big}
         />
          <div className={s.slide__video__dis}>
          <TwitchEmbed
          channel={"esl_csgo"}
          width="583px"
          height="320px"
          withChat={false}
          id="2"
          className={`${s.slide__video__big}`}
         />
          </div>
              </div>
              <div className={s.slider__bottom}>
              <TwitchEmbed
          channel={"faxuty"}
          withChat={false}
          id="3"
          height="152px"
          className={s.slide__video__small}
         />
               <TwitchEmbed
          channel={"otplol_"}
          withChat={false}
          id="4"
          height="152px"
          className={s.slide__video__small}
         />
               <TwitchEmbed
          channel={"just_ns"}
          withChat={false}
          id="5"
          height="152px"
          className={s.slide__video__small}
         />
               <TwitchEmbed
          channel={"esl_csgo"}
          withChat={false}
          id="6"
          height="152px"
          className={s.slide__video__small}
         />
              </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={s.slider}>
              <div className={s.slider__top}>
                <TwitchEmbed
          channel={"esl_dota2"}
          width="583px"
          height="320px"
          withChat={false}
          id="7"
          className={s.slide__video__big}
         />
          <div className={s.slide__video__dis}>
          <TwitchEmbed
          channel={"esl_csgo"}
          width="583px"
          height="320px"
          withChat={false}
          id="8"
          className={`${s.slide__video__big}`}
         />
          </div>
              </div>
              <div className={s.slider__bottom}>
              <TwitchEmbed
          channel={"nix"}
          withChat={false}
          id="9"
          height="152px"
          className={s.slide__video__small}
         />
               <TwitchEmbed
          channel={"cadenzie"}
          withChat={false}
          id="10"
          height="152px"
          className={s.slide__video__small}
         />
               <TwitchEmbed
          channel={"nefrizi4"}
          withChat={false}
          id="11"
          height="152px"
          className={s.slide__video__small}
         />
               <TwitchEmbed
          channel={"esl_csgo"}
          withChat={false}
          id="12"
          height="152px"
          className={s.slide__video__small}
         />
              </div>
           </div>
        </SwiperSlide>
    </Swiper>
  );
};

export default TwitchSwiper;