import React from 'react';
import s from './tournamentCard.module.scss';
import Picture from '../../../UI/Picture/Picture';
import { tournamentsMain } from '../../../../store/store';

const TournamentCard = ({
  status = 'Ongoing',
  color = '#0A68F5',
  price = '10$',
  enterFee = 'Free to enter',
  server = 'Europe',
  platform = 'PS3',
  className,
}) => {
  return (
    <div className={`${s.card} ${className}`}>
      <div className={s.cardLeft}>
        <div className={s.cardStatus} style={{ background: color }}>
          {status}
        </div>
        <Picture
          img={tournamentsMain.imgs.dotaInGame}
          webp={tournamentsMain.imgs.dotaInGameW}
          className={s.cardGameImg}
        />
      </div>
      <div className={s.cardRight}>
        <p className={s.cardGameTitle}>Dota 2 5v5 #2 - Sunday</p>
        <div className={s.cardGameBottom}>
          <div className={s.cardGameParams}>
            <p className={s.cardGameParamTitle}>Prize</p>
            <p className={s.cardGameParamDescr}>{price}</p>
          </div>
          <div className={s.cardGameParams}>
            <p className={s.cardGameParamTitle}>Entry fee</p>
            <p className={s.cardGameParamDescr}>{enterFee}</p>
          </div>
          <div className={s.cardGameParams}>
            <p className={s.cardGameParamTitle}>platform</p>
            <p className={s.cardGameParamDescr}>{platform}</p>
          </div>
          <div className={s.cardGameParams}>
            <p className={s.cardGameParamTitle}>Slots</p>
            <p className={s.cardGameParamDescr}>2 / 8</p>
          </div>
          <div className={s.cardGameParams}>
            <p className={s.cardGameParamTitle}>Mode</p>
            <p className={s.cardGameParamDescr}>Capitains mode</p>
          </div>
          <div className={s.cardGameParams}>
            <p className={s.cardGameParamTitle}>Server</p>
            <p className={s.cardGameParamDescr}>{server}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
