import React from "react";
import s from "./FAQsItem.module.scss"

const FAQsItem = (props) => {
    return (  
        <div className={s.main}>
            <span className={s.main__title}>{props.text}</span>
        </div>
    ); 
}
 
export default FAQsItem;