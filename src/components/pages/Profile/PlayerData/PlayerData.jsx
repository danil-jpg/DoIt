import React from 'react';
import s from './playerData.module.scss';

const PlayerData = () => {
  return (
    <div className={s.data}>
      <p className={s.dataTitle}>Profile</p>
      <ul className={s.dataLeft}>
        <li className={s.dataLeftLi}>ID</li>
        <li className={s.dataLeftLi}>Name</li>
        <li className={s.dataLeftLi}>Nickname</li>
        <li className={s.dataLeftLi}>With us from</li>
        <li className={s.dataLeftLi}>Sex / Age</li>
        <li className={s.dataLeftLi}>Nationality</li>
        <li className={s.dataLeftLi}>Country</li>
        <li className={s.dataLeftLi}>Web-site</li>
      </ul>
      <ul className={s.dataRight}>
        <li className={s.dataRightLi}>7917450</li>
        <li className={s.dataRightLi}>Nikodem Świder </li>
        <li className={s.dataRightLi}>BlacerLordTV</li>
        <li className={s.dataRightLi}>28/08/13</li>
        <li className={s.dataRightLi}>Male / 22</li>
        <li className={s.dataRightLi}>Poland</li>
        <li className={s.dataRightLi}>Poland</li>
        <li className={s.dataRightLi}>http://blacerTV.com</li>
      </ul>
    </div>
  );
};

export default PlayerData;
