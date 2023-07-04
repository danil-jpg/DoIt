import React from 'react';
import s from './tournamentBracketTab.module.scss';
import './tournamentBracket.scss';
import TournamentTab from '../../../common/TournamentTabsTemplate/TournamentTabs';
import france from '../../../../assets/icons/tournamentsBracket/france.svg';
import swit from '../../../../assets/icons/tournamentsBracket/swit.svg';

const TournamentsBracketTab = () => {
  return (
    <>
      <TournamentTab contentClass={s.contentClass} tabClass={s.infoTab} activeTab={1}>
        <div className={s.topLine}></div>
        <div className='bracket'>
          <section className='round quarterfinals'>
            <div className='winners'>
              <div className='matchups'>
                <div className='matchup'>
                  <div className='participants'>
                    <div className='participant winner'>
                      <img src={france} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                    <div className='participant'>
                      <img src={swit} className='participant__country' />
                      <p className='participant__nick'>BF’s Squad</p>
                      <p className='participant__num'>8</p>
                    </div>
                  </div>
                </div>
                <div className='matchup'>
                  <div className='participants'>
                    <div className='participant'>
                      <img src={france} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                    <div className='participant winner'>
                      <img src={france} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='connector'>
                <div className='merger'></div>
                <div className='line'></div>
              </div>
            </div>
            <div className='winners'>
              <div className='matchups'>
                <div className='matchup'>
                  <div className='participants'>
                    <div className='participant'>
                      <img src={france} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                    <div className='participant winner'>
                      <img src={swit} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                  </div>
                </div>
                <div className='matchup'>
                  <div className='participants'>
                    <div className='participant'>
                      <img src={france} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                    <div className='participant winner'>
                      <img src={swit} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='connector'>
                <div className='merger'></div>
                <div className='line'></div>
              </div>
            </div>
          </section>
          <section className='round semifinals'>
            <div className='winners'>
              <div className='matchups'>
                <div className='matchup'>
                  <div className='participants'>
                    <div className='participant winner'>
                      <img src={france} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                    <div className='participant'>
                      <img src={swit} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                  </div>
                </div>
                <div className='matchup'>
                  <div className='participants'>
                    <div className='participant winner'>
                      <img src={swit} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                    <div className='participant'>
                      <img src={swit} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='connector'>
                <div className='merger'></div>
                <div className='line'></div>
              </div>
            </div>
          </section>
          <section className='round finals'>
            <div className='winners'>
              <div className='matchups'>
                <div className='matchup'>
                  <div className='participants'>
                    <div className='participant winner'>
                      <img src={swit} className='participant__country' />
                      <p className='participant__nick'>Walkower</p>
                      <p className='participant__num'>6</p>
                    </div>
                    <div className='participant'></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </TournamentTab>
    </>
  );
};

export default TournamentsBracketTab;
