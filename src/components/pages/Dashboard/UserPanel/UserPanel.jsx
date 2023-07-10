import React from 'react';
import s from './UserPanel.module.scss';
import Container from '../../../containers/Container/Container';
import PlayerStat from '../../Profile/PlayerStat/PlayerStat';
import { Routes, Route } from 'react-router-dom';
import UserPanelTemp from './UserPanelTemp/UserPanelTemp';
import ButtonPage from './ButtonPage/ButtonPage';

const UserPanel = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<UserPanelTemp />}>
          <Route index element={<ButtonPage />}></Route>
        </Route>
      </Routes>
    </Container>
  );
};

export default UserPanel;
