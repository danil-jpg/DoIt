import Container from "../../containers/Container/Container";
import React from "react";
import s from "./Home.module.scss"
import HeroBlock from "./HeroBlock/HeroBlock";
const Home = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.main__hero}>
                    <HeroBlock/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;