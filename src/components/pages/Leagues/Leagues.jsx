import React from "react";
import s from  './Leagues.module.scss'
import Container from "../../containers/Container/Container";
import { leaguesPageData } from "../../../store/store";
import Picture from "../../UI/Picture/Picture";
import LeaguesFeature from "./LeaguesSliders/LeaguesFeature/LeaguesFeature";
import LeaguesNews from "./LeaguesSliders/LeaguesNews/LeaguesNews";
const Leagues = (props) => {
    return ( 
        <div className={s.main}>
                <Container>
                    <div className={s.main__wrapper}>
                        <div className={s.main__top}>
                        <h1 className={s.main__title}>{leaguesPageData.title.title}</h1>
                        <Picture
                        img={leaguesPageData.img.leaguesStarCraftLogo}
                        webp={leaguesPageData.img.leaguesStarCraftLogoWebp}
                        alt="logo"
                        width='253'
                        height='83'
                        className={s.card__picture}
                        />
                        </div>
                        <div className={s.main__features}>
                            <LeaguesFeature/>
                        </div>

                        <div className={s.main__news}>
                        <LeaguesNews/>
                        </div>
                    </div>
                </Container>
        </div>
     );
}
 
export default Leagues;