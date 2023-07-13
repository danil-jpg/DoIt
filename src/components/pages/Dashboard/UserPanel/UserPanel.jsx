import React from 'react';
import s from './UserPanel.module.scss';
import Container from '../../../containers/Container/Container';
import PlayerStat from '../../Profile/PlayerStat/PlayerStat';
import { Routes, Route } from 'react-router-dom';
import UserPanelTemp from './UserPanelTemp/UserPanelTemp';
import ButtonPage from './ButtonPage/ButtonPage';
import SettingPage from './SettingPage/SettingPage';
import TeamPage from './TeamPage/TeamPage';
import PremiumPage from './PremiumPage/PremiumPage';

const UserPanel = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<UserPanelTemp />}>
          <Route index element={<ButtonPage />}></Route>
          <Route path='/settingPage' element={<SettingPage />}></Route>
          <Route path='/teamPage' element={<TeamPage />}></Route>
          <Route path='/premiumPage' element={<PremiumPage />}></Route>
        </Route>
      </Routes>
    </Container>
  );
};

export default UserPanel;
