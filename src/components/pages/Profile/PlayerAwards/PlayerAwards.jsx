import React from 'react';
import s from './playerAwards.module.scss';

const PlayerAwards = () => {
  return (
    <div className={s.award}>
      <p className={s.awTitle}>Level and awards</p>
      <div className={s.awStatWr}>
        <div className={s.awStatLeft}>
          <div className={s.awStatItem}>
            <div className={s.awStatItemTop}>
              <p className={s.awStatItemTitle}>StarCraft II</p>
              <p className={s.awStatItemNum}>15</p>
            </div>
            <div className={s.awStatItemLine}></div>
          </div>
          <div className={s.awStatItem}>
            <div className={s.awStatItemTop}>
              <p className={s.awStatItemTitle}>League of Legends</p>
              <p className={s.awStatItemNum}>3</p>
            </div>
            <div className={s.awStatItemLine}></div>
          </div>
          <div className={s.awStatItem}>
            <div className={s.awStatItemTop}>
              <p className={s.awStatItemTitle}>Hearthstone</p>
              <p className={s.awStatItemNum}>2</p>
            </div>
            <div className={s.awStatItemLine}></div>
          </div>
          <div className={s.awStatItem}>
            <div className={s.awStatItemTop}>
              <p className={s.awStatItemTitle}>World of Tanks</p>
              <p className={s.awStatItemNum}>15</p>
            </div>
            <div className={s.awStatItemLine}></div>
          </div>
          <div className={s.awStatItem}>
            <div className={s.awStatItemTop}>
              <p className={s.awStatItemTitle}>S.K.I.L.L. – Special Force II</p>
              <p className={s.awStatItemNum}>15</p>
            </div>
            <div className={s.awStatItemLine}></div>
          </div>
        </div>
        <div className={s.awStatRight}>
          <div className={s.awRound}></div>
          <div className={s.awRound}></div>
          <div className={s.awRound}></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerAwards;
