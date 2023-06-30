import React from 'react';
import s from './tournaments.module.scss';
import { tournamentsInfo } from '../../../store/store';
import Picture from '../../UI/Picture/Picture';

const TournamentsTop = () => {
  return (
    <div className={s.tournamentsTop}>
      <div className={s.tournamentsTopLeft}>
        <Picture
          className={s.tournamentsTopImg}
          img={tournamentsInfo.imgs.mortalLogo}
          webp={tournamentsInfo.imgs.mortalLogoW}
        />
      </div>
      <div className={s.tournamentsTopRight}>
        <p className={s.tournamentsTopTitle}>MK11 (PS4) Open Cup #3 Europe</p>
        <p className={s.tournamentsTopDescr}>52 players signed up</p>
      </div>
    </div>
  );
};

export default TournamentsTop;
