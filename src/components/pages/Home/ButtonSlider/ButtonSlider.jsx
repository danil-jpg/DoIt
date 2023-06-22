import s from "./ButtonSlider.module.scss"
import React from "react";
const ButtonSlider = (props) => {
    return ( 
        <button className={s.btn}>{props.text}</button>
     );
}
 
export default ButtonSlider;