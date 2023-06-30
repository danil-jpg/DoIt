import React from 'react';
import s from './tournamentStanding.module.scss';
import Container from '../../containers/Container/Container';
import TournamentsTop from '../../common/TournamentsTop/TournamentsTop';
import TournamentsReturn from '../../common/TournamentsTop/tournamentsReturn/TournamentsReturn';
import TournamentRight from '../../common/tournamentRight/tournamentRight';
import TournamentStandingTab from './TounamentStandinsTab/TournamentStandingTab';

const TournamentStanding = () => {
  return (
    <Container>
      <div className={s.tournamentsInfo}>
        <div className={s.infoLeft}>
          <TournamentsReturn />
          <TournamentsTop title='StarCraft II:  Europe League' />
          <TournamentStandingTab />
        </div>
        <TournamentRight />
      </div>
    </Container>
  );
};

export default TournamentStanding;
