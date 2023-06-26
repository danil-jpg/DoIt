import React from 'react';
import s from './playerStat.module.scss';
import Picture from '../../../UI/Picture/Picture';
import { profile } from '../../../../store/store.js';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';

const PlayerStat = () => {
  return (
    <div className={s.profileStat}>
      <Picture img={profile.img.avatar} webp={profile.img.avatarW} className={s.avatar} />
      <div className={s.profileLeftImgDescr}>
        <p className={s.name}>Nikodem Świder</p>
        <p className={s.chanel}>BlacerLordTV </p>
        <p className={s.team}>Blacer team</p>
        <div className={s.profileLeftIconsWr}>
          <IconRenderer id={'plusProfile'} className={s.plus} />
          <IconRenderer id={'mailProfile'} className={s.mail} />
        </div>
        <ul className={s.profileLeftUl}>
          <li className={s.profileLeftLi}>Profile</li>
          <li className={s.profileLeftLi}>Number two</li>
          <li className={s.profileLeftLi}>About me</li>
          <li className={s.profileLeftLi}>Number four</li>
          <li className={s.profileLeftLi}>Awards and medals</li>
          <li className={s.profileLeftLi}>Number six</li>
          <li className={s.profileLeftLi}>Number seven</li>
          <li className={s.profileLeftLi}>Number eight</li>
          <li className={s.profileLeftLi}>Number nine</li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerStat;
