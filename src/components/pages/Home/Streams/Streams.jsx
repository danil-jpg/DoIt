import React from "react";
import s from "./Streams.module.scss"
import Container from "../../../containers/Container/Container";
import { streamsData } from "../../../../store/store";
import TitleSliders from "../TitleSlider/TitleSliders";
import ButtonSliderAll from "../ButtonSlider/ButtonSliderAll/ButtonSliderAll";
import TwitchSwiper from "./StreamsTwichSwiper/StreamsTwichSwiper";
import { useState } from "react";
const Streams = (props) => {
    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
      setShowContent(!showContent);
    }
    return ( 

        <div className={s.main}>
          
           <div className={s.main__wrapper}>
                    <div className={s.main__nav}>
                        <div className={s.main__title}>
                            <TitleSliders title={streamsData.title.title}/>
                            <div className={s.main__icon}>
                                <img src={streamsData.icon.icon} alt="icon" />
                            </div>
                        </div>
                        <div className={s.main__actions}>
                            <ButtonSliderAll/>
                        </div>
                    </div>
                    <div className={s.main__slider}>
                        {/* <TwitchSwiper/> */}
                        <div>
                        <button className={s.main__btn} onClick={handleClick}>Start Streams</button>
                        {showContent && <div style={{ display: 'block' }}><TwitchSwiper/></div>}
                        </div>
                    </div>
                </div>
           
        </div>
     );
}
 
export default Streams;