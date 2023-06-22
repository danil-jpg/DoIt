import Container from "../../containers/Container/Container";
import React from "react";
import s from "./Home.module.scss"
import HeroBlock from "./HeroBlock/HeroBlock";
import Tournaments from "./Tournaments/Tournaments";
const Home = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.main__hero}>
                   <Container>
                  <div className={s.main__doit}>
                  <HeroBlock/>
                  </div>
                   </Container>
                   <div className={s.main__tournaments}>
                   <Tournaments/>
                      </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;