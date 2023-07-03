import React from 'react';
import s from './tournamentStandingTab.module.scss';
import TournamentTab from '../../../common/TournamentTabsTemplate/TournamentTabs';
import Picture from '../../../UI/Picture/Picture';
import { tournamentPlayer } from '../../../../store/store';

const TournamentStandingTab = () => {
  return (
    <>
      <TournamentTab activeTab={3} contentClass={s.contentClassStandings} tabClass={s.tabClass}>
        <div className={s.tableTop}>
          <p className={s.tableTitle}>Group A</p>
          <div className={s.tableToggleEl}>
            <p className={s.tableToggleTitle}>Classic</p>
            <p className={s.tableToggleCash}>Cash prize</p>
          </div>
        </div>
        <div className={s.tableCenter}>
          <div className={`${s.lattice}`}>#</div>
          <div className={`${s.county}`}>Country</div>
          <div className={`${s.name}`}>Name / Nickname / Team</div>
          <div className={`${s.wins}`}>Wins</div>
          <div className={`${s.Loses}`}>Loses</div>
          <div className={`${s.Draws}`}>Draws</div>
          <div className={`${s.Points}`}>Points</div>
        </div>
        <div className={s.tableBottom}>
          <div className={s.tableLine}>
            <div className={`${s.lattice1}`}>2</div>
            <div className={`${s.county1}`}>
              <Picture
                webp={tournamentPlayer.img.japanW}
                img={tournamentPlayer.img.japan}
                className={s.countryImg}
              />
            </div>
            <div className={`${s.name1}`}>Pongu nango butto / astabremo firto</div>
            <div className={`${s.wins1}`}>22</div>
            <div className={`${s.Loses1}`}>22</div>
            <div className={`${s.Draws1}`}>22</div>
            <div className={`${s.Points1}`}>222</div>
          </div>{' '}
          <div className={s.tableLine}>
            <div className={`${s.lattice1}`}>2</div>
            <div className={`${s.county1}`}>
              <Picture
                webp={tournamentPlayer.img.japanW}
                img={tournamentPlayer.img.japan}
                className={s.countryImg}
              />
            </div>
            <div className={`${s.name1}`}>Pongu nango butto / astabremo firto</div>
            <div className={`${s.wins1}`}>22</div>
            <div className={`${s.Loses1}`}>22</div>
            <div className={`${s.Draws1}`}>22</div>
            <div className={`${s.Points1}`}>222</div>
          </div>{' '}
          <div className={s.tableLine}>
            <div className={`${s.lattice1}`}>2</div>
            <div className={`${s.county1}`}>
              <Picture
                webp={tournamentPlayer.img.japanW}
                img={tournamentPlayer.img.japan}
                className={s.countryImg}
              />
            </div>
            <div className={`${s.name1}`}>Pongu nango butto / astabremo firto</div>
            <div className={`${s.wins1}`}>22</div>
            <div className={`${s.Loses1}`}>22</div>
            <div className={`${s.Draws1}`}>22</div>
            <div className={`${s.Points1}`}>222</div>
          </div>{' '}
          <div className={s.tableLine}>
            <div className={`${s.lattice1}`}>2</div>
            <div className={`${s.county1}`}>
              <Picture
                webp={tournamentPlayer.img.japanW}
                img={tournamentPlayer.img.japan}
                className={s.countryImg}
              />
            </div>
            <div className={`${s.name1}`}>Pongu nango butto / astabremo firto</div>
            <div className={`${s.wins1}`}>22</div>
            <div className={`${s.Loses1}`}>22</div>
            <div className={`${s.Draws1}`}>22</div>
            <div className={`${s.Points1}`}>222</div>
          </div>{' '}
          <div className={s.tableLine}>
            <div className={`${s.lattice1}`}>2</div>
            <div className={`${s.county1}`}>
              <Picture
                webp={tournamentPlayer.img.japanW}
                img={tournamentPlayer.img.japan}
                className={s.countryImg}
              />
            </div>
            <div className={`${s.name1}`}>Pongu nango butto / astabremo firto</div>
            <div className={`${s.wins1}`}>22</div>
            <div className={`${s.Loses1}`}>22</div>
            <div className={`${s.Draws1}`}>22</div>
            <div className={`${s.Points1}`}>222</div>
          </div>{' '}
          <div className={s.tableLine}>
            <div className={`${s.lattice1}`}>2</div>
            <div className={`${s.county1}`}>
              <Picture
                webp={tournamentPlayer.img.japanW}
                img={tournamentPlayer.img.japan}
                className={s.countryImg}
              />
            </div>
            <div className={`${s.name1}`}>Pongu nango butto / astabremo firto</div>
            <div className={`${s.wins1}`}>22</div>
            <div className={`${s.Loses1}`}>22</div>
            <div className={`${s.Draws1}`}>22</div>
            <div className={`${s.Points1}`}>222</div>
          </div>{' '}
          <div className={s.tableLine}>
            <div className={`${s.lattice1}`}>2</div>
            <div className={`${s.county1}`}>
              <Picture
                webp={tournamentPlayer.img.japanW}
                img={tournamentPlayer.img.japan}
                className={s.countryImg}
              />
            </div>
            <div className={`${s.name1}`}>Pongu nango butto / astabremo firto</div>
            <div className={`${s.wins1}`}>22</div>
            <div className={`${s.Loses1}`}>22</div>
            <div className={`${s.Draws1}`}>22</div>
            <div className={`${s.Points1}`}>222</div>
          </div>
        </div>
      </TournamentTab>
    </>
  );
};

export default TournamentStandingTab;
