import React from "react";
import s from "./AboutInfo.module.scss"
const AboutInfo = (props) => {
    return ( 
        <div className={s.main}>
                <div className={s.main__wrapper}>
                    <div className={s.main__top}>
                        <span className={s.main__title}>{props.title}</span>
                    </div>
                    <div className={s.main__data}>
                        <div className={s.main__info}>
                            <div className={s.main__border}><img src={props.icon__location} alt="icon" /></div>
                            <span className={s.main__descr}>{props.descr}</span>
                        </div>
                        <div className={s.main__info}>
                            <div className={s.main__border}><img src={props.icon__phone} alt="icon" /></div>
                            <a  className={s.main__phone} href="tel:+48517429774">{props.phone}</a>
                        </div>
                        <div className={`${s.info}`}>
                        <div className={s.main__border}><img src={props.icon__mail} alt="icon" /></div>
                        <div className={s.main__support}>
                            <span className={s.main__mail}>{props.mail1}</span>
                            <span className={s.main__mail}>{props.mail2}</span>
                            <span className={s.main__mail}>{props.mail3}</span>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default AboutInfo;