import React from 'react';
import s from './profile.module.scss';
import Container from '../../containers/Container/Container';
import PlayerStat from './PlayerStat/PlayerStat';
import PlayerData from './PlayerData/PlayerData';
import PlayerAwards from './PlayerAwards/PlayerAwards';

const Profile = () => {
  return (
    <div className={s.profile}>
      <Container className={s.cont}>
        <div className={s.hero}>
          <PlayerStat />
          <PlayerData />
          <PlayerAwards />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
