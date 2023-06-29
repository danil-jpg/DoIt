import React from 'react';
import s from './tournamentTabs.module.scss';

const TournamentTab = ({ children, tabClass, contentClass, tabs = true, elemInsteadOfTab }) => {
  return (
    <div className={`${s.tournamentTabs} ${tabClass}`}>
      {tabs ? (
        <ul className={s.tournamentTabLinks}>
          <li className={`${s.tournamentTabLink} ${s.active}`}>Info</li>
          <li className={s.tournamentTabLink}>Bracket</li>
          <li className={s.tournamentTabLink}>Players</li>
          <li className={s.tournamentTabLink}>Rules</li>
          <li className={s.tournamentTabLink}>Support</li>
        </ul>
      ) : (
        <ul className={s.tournamentTabLinks}>
          <li className={`${s.tournamentTabLink} ${s.active}`}>{elemInsteadOfTab}</li>
        </ul>
      )}

      <div className={`${s.tournamentTabBody} ${contentClass}`}>{children}</div>
    </div>
  );
};

export default TournamentTab;
