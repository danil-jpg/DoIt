import React from 'react';
import s from './tournamentTabs.module.scss';

const TournamentTab = ({
  activeTab = 0,
  children,
  tabClass,
  contentClass,
  tabs = true,
  elemInsteadOfTab,
}) => {
  return (
    <div className={`${s.tournamentTabs} ${tabClass}`}>
      {tabs ? (
        <ul className={s.tournamentTabLinks}>
          <li className={`${s.tournamentTabLink} ${activeTab === 0 ? s.active : ''}`}>Info</li>
          <li className={`${s.tournamentTabLink} ${activeTab === 1 ? s.active : ''}`}>Bracket</li>
          <li className={`${s.tournamentTabLink} ${activeTab === 2 ? s.active : ''}`}>Players</li>
          <li className={`${s.tournamentTabLink} ${activeTab === 3 ? s.active : ''}`}>Rules</li>
          <li className={`${s.tournamentTabLink} ${activeTab === 4 ? s.active : ''}`}>Support</li>
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
