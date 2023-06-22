import Container from "../../containers/Container/Container";
import React from "react";
import s from "./Home.module.scss"
import HeroBlock from "./HeroBlock/HeroBlock";
import TitleSliders from "./TitleSlider/TitleSliders";
import ButtonSlider from "./ButtonSlider/ButtonSlider";
const Home = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.main__hero}>
                   <Container>
                  <HeroBlock/>
                   </Container>
                </div>
            </div>
        </div>
     );
}
 
export default Home;