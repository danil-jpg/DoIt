import React from 'react';
import s from './tournamentsInfo.module.scss';
import Container from '../../containers/Container/Container';
import TournamentsTop from '../../common/TournamentsTop/TournamentsTop';
import TournamentsReturn from '../../common/TournamentsTop/tournamentsReturn/TournamentsReturn';
import TournamentRight from '../../common/tournamentRight/tournamentRight';
import TournamentInfoTab from './TournamentInfoTab/TournamentInfoTab';

const TournamentsInfo = () => {
  return (
    <Container>
      <div className={s.tournamentsInfo}>
        <div className={s.infoLeft}>
          <TournamentsReturn />
          <TournamentsTop />
          <TournamentInfoTab />
        </div>
        <TournamentRight />
      </div>
    </Container>
  );
};

export default TournamentsInfo;
