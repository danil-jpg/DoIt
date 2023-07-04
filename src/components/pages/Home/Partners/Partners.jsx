import React from "react";
import s from "./Partners.module.scss"
import TitleSliders from "../TitleSlider/TitleSliders";
import { partnersIcon } from "../../../../store/store";
import Picture from "../../../UI/Picture/Picture";
const Partners = (props) => {
    return ( 
        <div className={s.main}>
                <div className={s.main__top}>
                <TitleSliders title={'Partners'}/>
                    </div>
                 <div className={s.main__partners}>
                <Picture img={partnersIcon.img.google}
                         webp={partnersIcon.img.googleWebp}
                         alt="google logo"
                         imgMob={partnersIcon.img.googleMob}
                         webpMob={partnersIcon.img.googleMobWebp}
                         widthMob='375'/>
                <Picture img={partnersIcon.img.nasa}
                         webp={partnersIcon.img.nasaWebp}
                         alt="nasa logo"
                         imgMob={partnersIcon.img.nasaMob}
                         webpMob={partnersIcon.img.nasaMobWebp}
                         widthMob='375'/>
                <Picture img={partnersIcon.img.navi}
                         webp={partnersIcon.img.naviWebp}
                         alt="navi logo"
                         imgMob={partnersIcon.img.naviMob}
                         webpMob={partnersIcon.img.naviMobWebp}
                         widthMob='375'/>
                <Picture img={partnersIcon.img.airbnb}
                         webp={partnersIcon.img.airbnbWebp}
                         alt="airnb logo"
                         imgMob={partnersIcon.img.airbnbMob}
                         webpMob={partnersIcon.img.airbnbMobWebp}
                         widthMob='375'/>
                <Picture img={partnersIcon.img.telegram}
                         webp={partnersIcon.img.telegramWebp}
                         alt="airnb logo"
                         imgMob={partnersIcon.img.telegramMob}
                         webpMob={partnersIcon.img.telegramMobWebp}
                         widthMob='375'
                         />
                 <Picture img={partnersIcon.img.youtube}
                         webp={partnersIcon.img.youtubeWebp}
                         alt="youtube logo"
                         imgMob={partnersIcon.img.youtubeMob}
                         webpMob={partnersIcon.img.youtubeMobWebp}
                         widthMob='375'/>
                <Picture img={partnersIcon.img.be}
                         webp={partnersIcon.img.beWebp}
                         alt="be logo"
                        className={s.disable}/>

            </div>
        </div>
     );
}
 
export default Partners;