import React from 'react';
import s from './userPanelTemp.module.scss';
import { Outlet } from 'react-router-dom';
import PlayerStat from '../../../Profile/PlayerStat/PlayerStat';

const UserPanelTemp = () => {
  return (
    <div className={s.panel}>
      <PlayerStat />
      <Outlet />
    </div>
  );
};

export default UserPanelTemp;
