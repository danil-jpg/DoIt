import React from 'react';
import s from './tournamentsBet.module.scss';
import Container from '../../containers/Container/Container';
import TournamentsTop from '../../common/TournamentsTop/TournamentsTop';
import TournamentsReturn from '../../common/TournamentsTop/tournamentsReturn/TournamentsReturn';
import TournamentRight from '../../common/tournamentRight/tournamentRight';
import TournamentBetTab from './TournamentBetTab/TournamentBetTab';

const TournamentsBet = () => {
  return (
    <Container>
      <div className={s.tournamentsInfo}>
        <div className={s.infoLeft}>
          <TournamentsReturn />
          <TournamentsTop />
          <TournamentBetTab />
        </div>
        <TournamentRight />
      </div>
    </Container>
  );
};

export default TournamentsBet;
