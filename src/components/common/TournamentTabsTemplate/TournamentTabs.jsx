import React from 'react';
import s from './tournamentTabs.module.scss';
import { useNavigate } from 'react-router-dom';

const TournamentTab = ({
  activeTab = 0,
  children,
  tabClass,
  contentClass,
  tabs = true,
  elemInsteadOfTab,
}) => {
  const nav = useNavigate();

  return (
    <div className={`${s.tournamentTabs} ${tabClass}`}>
      {tabs ? (
        <ul className={s.tournamentTabLinks}>
          <li
            className={`${s.tournamentTabLink} ${activeTab === 0 ? s.active : ''}`}
            onClick={() => {
              nav('../tournamentsInfo');
            }}>
            Info
          </li>
          <li
            className={`${s.tournamentTabLink} ${activeTab === 1 ? s.active : ''}`}
            onClick={() => {
              nav('../tournamentsBracket');
            }}>
            Bracket
          </li>
          <li
            className={`${s.tournamentTabLink} ${activeTab === 2 ? s.active : ''}`}
            onClick={() => {
              nav('../tournamentsPlayer');
            }}>
            Players
          </li>
          <li
            className={`${s.tournamentTabLink} ${activeTab === 3 ? s.active : ''}`}
            onClick={() => {
              nav('../tournamentsStanding');
            }}>
            Rules
          </li>
          <li
            className={`${s.tournamentTabLink} ${activeTab === 4 ? s.active : ''}`}
            onClick={() => {
              nav('../tournamentsBet');
            }}>
            Support
          </li>
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
