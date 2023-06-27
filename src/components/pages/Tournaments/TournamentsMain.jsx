import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';
import s from './tournamentsMain.module.scss';
import Picture from '../../UI/Picture/Picture';
import { tournamentsMain } from '../../../store/store';
import Container from '../../containers/Container/Container';
import TournamentCard from './TournamentCard/TournamentCard';

const TournamentsMain = () => {
  return (
    <Container>
      <div className={s.tournamentMain}>
        {/* <Checkbox /> */}
        <div className={s.tournamentsLeft}>
          <p className={s.tournamentsTitle}>DOTA II: TOURNAMNETS</p>
          <TournamentCard />
          {tournamentsMain.cardData.map((el) => {
            return (
              <TournamentCard
                status={el.status}
                key={el.key}
                color={el.color}
                platform={el.platform}
                server={el.server}
                enterFee={el.enterFee}
                price={el.price}
              />
            );
          })}
        </div>
        <div className={s.tournamentsRight}>
          <Picture
            img={tournamentsMain.imgs.gameLogo}
            webp={tournamentsMain.imgs.gameLogoW}
            className={s.tournamentsRightImg}
          />
        </div>
      </div>
    </Container>
  );
};

export default TournamentsMain;
