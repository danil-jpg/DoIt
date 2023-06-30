import React from 'react';
import s from './tournamentRight.module.scss';
import { tournamentsInfo, tournamentsMain } from '../../../store/store';
import Picture from '../../UI/Picture/Picture';

import face from '../../../assets/icons/tournamentsInfo/face.svg';
import twitt from '../../../assets/icons/tournamentsInfo/twit.svg';
import inst from '../../../assets/icons/tournamentsInfo/inst.svg';
import pin from '../../../assets/icons/tournamentsInfo/pin.svg';
import git from '../../../assets/icons/tournamentsInfo/git.svg';

const TournamentRight = () => {
  return (
    <div className={s.infoRight}>
      <Picture
        className={s.infoDota}
        img={tournamentsInfo.imgs.gameLogo}
        webp={tournamentsInfo.imgs.gameLogoW}
      />
      <div className={s.infoRightSubInfo}>
        <div className={s.infoSubInfoTop}>Requirements</div>
        <div className={s.infoSubInfoCenter}>
          <div className={s.infoMinAge}>
            <p className={s.infoTextTop}>Minimum age</p>
            <p className={s.infoTextBottom}>At least 18 years old</p>
          </div>
          <div className={s.infoResidence}>
            <p className={s.infoTextTop}>Residence</p>
            <p className={`${s.infoTextBottom} ${s.infoTextBottomBlue}`}>More info</p>
          </div>
          <div className={s.infoResidence}>
            <p className={s.infoTextTop}>PSN account</p>
            <p className={s.infoTextBottom}>Register your name ID</p>
          </div>
          <div className={s.infoResidence}>
            <p className={s.infoTextTop}>Play</p>
            <p className={s.infoTextBottom}>Please log in to take part in this tournament.</p>
          </div>
        </div>
        <div className={s.infoSubInfoBottom}>
          <p className={s.infoClose}>Sign up closes in 43 minutes</p>
          <button className={s.infoBottomBtn}>Log in / Register</button>
        </div>
        <div className={s.infoSubSocials}>
          <img src={face} className={s.social} />
          <img src={twitt} className={s.social} />
          <img src={inst} className={s.social} />
          <img src={pin} className={s.social} />
          <img src={git} className={s.social} />
        </div>
      </div>
    </div>
  );
};

export default TournamentRight;
