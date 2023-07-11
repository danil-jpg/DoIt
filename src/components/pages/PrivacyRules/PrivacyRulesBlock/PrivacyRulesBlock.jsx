import React from "react";
import s from "./PrivacyRulesBlock.module.scss"

const PrivacyRulesBlock = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__blok}>
                <div className={s.main__left}>
                    <span className={s.main__number}>{props.number}</span>
                </div>
                <div className={s.main__right}>
                    <p className={s.main__descr}>{props.descr}</p>
                </div>
            </div>
        </div>
     );
}
 
export default PrivacyRulesBlock;