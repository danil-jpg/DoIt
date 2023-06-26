import React from "react";
import s from "./ButtonSliderAll.module.scss"
import ButtonSlider from "../ButtonSlider";
const ButtonSliderAll = (props) => {
    return ( 
        <div className={s.main}>
            <ButtonSlider text='All'/>
            <ButtonSlider text='StarCraft II'/>
            <ButtonSlider text='Dota II'/>
            <ButtonSlider text='CS:GO'/>
            <ButtonSlider text='LOL'/>
            <ButtonSlider text='Fortnite'/>
        </div>
     );
}
 
export default ButtonSliderAll;