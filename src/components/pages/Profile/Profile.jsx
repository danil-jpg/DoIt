import React from 'react';
import s from './profile.module.scss';
import Container from '../../containers/Container/Container';
import PlayerStat from './PlayerStat/PlayerStat';

const Profile = () => {
  return (
    <div className={s.profile}>
      <Container>
        <div className={s.hero}>
          <PlayerStat />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
