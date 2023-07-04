import React from 'react';
import s from './tournamentsBracket.module.scss';
import Container from '../../containers/Container/Container';
import TournamentsTop from '../../common/TournamentsTop/TournamentsTop';
import TournamentsReturn from '../../common/TournamentsTop/tournamentsReturn/TournamentsReturn';
import TournamentRight from '../../common/tournamentRight/tournamentRight';
import TournamentsBracketTab from './TournamentsBracketTab/TournamentBracketTab.jsx';

const TournamentsBracket = () => {
  return (
    <Container>
      <div className={s.tournamentsInfo}>
        <div className={s.infoLeft}>
          <TournamentsReturn />
          <TournamentsTop />
          <TournamentsBracketTab />
        </div>
        <TournamentRight />
      </div>
    </Container>
  );
};

export default TournamentsBracket;
