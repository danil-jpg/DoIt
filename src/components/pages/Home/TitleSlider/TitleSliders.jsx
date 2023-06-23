import React from "react";
import s from "./TitleSliders.module.scss"
const TitleSliders = (props) => {
    return ( 
        <h2 className={s.title}>{props.title}</h2>
     );
}
 
export default TitleSliders;