import React from 'react';
import s from './tournamentsPlayer.module.scss';
import Container from '../../containers/Container/Container';
import TournamentsTop from '../../common/TournamentsTop/TournamentsTop';
import TournamentsReturn from '../../common/TournamentsTop/tournamentsReturn/TournamentsReturn';
import TournamentRight from '../../common/tournamentRight/tournamentRight';
import TournamentPlayerTab from './TournamentPlayerTab/TournamentsPlayerTab';

const TournamentsPlayer = () => {
  return (
    <Container>
      <div className={s.tournamentsInfo}>
        <div className={s.infoLeft}>
          <TournamentsReturn />
          <TournamentsTop />
          <TournamentPlayerTab />
        </div>
        <TournamentRight />
      </div>
    </Container>
  );
};

export default TournamentsPlayer;
