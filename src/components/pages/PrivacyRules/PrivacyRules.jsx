import React from "react";
import s from "./PrivacyRules.module.scss"
import Container from "../../containers/Container/Container";
import { privacyData } from "../../../store/store";
import PrivacyRulesBlock from "./PrivacyRulesBlock/PrivacyRulesBlock";
const PrivacyRules = (props) => {
    return ( 
        <div className={s.main}>
            <Container>
                <div className={s.main__wrapper}>
                    <div className={s.main__top}>
                        <h1 className={s.main__title}>{privacyData.title.title}</h1>
                    </div>
                    <div className={s.main__bottom}>
                        <div className={s.main__descr}>
                            <div className={s.main__left}>
                                <span className={s.main__number}>1.</span>
                            </div>
                            <div className={s.main__right}>
                            <div className={s.main__subtitle}>
                                <span className={s.main__text}>{privacyData.subtitle.subtitle}</span>
                            </div>
                            <div className={s.main__blok}>
                                <PrivacyRulesBlock number={"1.1."} descr={privacyData.descr.descr}/>
                                <PrivacyRulesBlock number={"1.2."} descr={privacyData.descr.descr}/>
                            </div>
                            </div>  
                        </div>
                        <div className={s.main__descr}>
                            <div className={s.main__left}>
                                <span className={s.main__number}>2.</span>
                            </div>
                            <div className={s.main__right}>
                            <div className={s.main__subtitle}>
                                <span className={s.main__text}>{privacyData.subtitle.subtitle}</span>
                            </div>
                            <div className={s.main__blok}>
                                <PrivacyRulesBlock number={"2.1."} descr={privacyData.descr.descr}/>                            </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default PrivacyRules;