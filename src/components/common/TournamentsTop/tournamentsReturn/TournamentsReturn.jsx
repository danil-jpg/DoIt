import React from 'react';
import s from './tournaments.module.scss';
import arrow from '../../../../assets/icons/tournamentsInfo/arrowRight.svg';
import { useNavigate } from 'react-router-dom';

const TournamentsReturn = () => {
  const nav = useNavigate();

  return (
    <div className={s.return}>
      <img src={arrow} className={s.returnImg} />
      <p className={s.returnText} onClick={() => nav(-1)}>
        Back
      </p>
    </div>
  );
};

export default TournamentsReturn;
