import React from 'react';
import s from './tournaments.module.scss';
import arrow from '../../../../assets/icons/tournamentsInfo/arrowRight.svg';

const TournamentsReturn = () => {
  return (
    <div className={s.return}>
      <img src={arrow} className={s.returnImg} />
      <p className={s.returnText}>Back</p>
    </div>
  );
};

export default TournamentsReturn;
