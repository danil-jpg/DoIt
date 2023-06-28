import React from 'react';
import s from './tournamentsInfo.module.scss';
import Picture from '../../UI/Picture/Picture';
import { tournamentsInfo, tournamentsMain } from '../../../store/store';
import Container from '../../containers/Container/Container';
import TournamentsTop from '../../common/TournamentsTop/TournamentsTop';
import TournamentsReturn from '../../common/TournamentsTop/tournamentsReturn/TournamentsReturn';

const TournamentsInfo = () => {
  return (
    <Container>
      <div className={s.tournamentsInfo}>
        <div className={s.infoLeft}>
          <TournamentsReturn />
          <TournamentsTop />
        </div>
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TournamentsInfo;
