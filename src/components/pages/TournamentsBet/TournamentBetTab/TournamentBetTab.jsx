import React from 'react';
import s from './tournamentBetTab.module.scss';
import TournamentTab from '../../../common/TournamentTabsTemplate/TournamentTabs';
import Picture from '../../../UI/Picture/Picture';
import { tournamentBet } from '../../../../store/store';

const TournamentBetTab = () => {
  return (
    <>
      <TournamentTab contentClass={s.contentClass} tabClass={s.betTab} activeTab={4}>
        <div className={s.team}>
          <p className={s.title}>Team 1</p>
          <div className={s.cardsWr}>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Benjamin Shrekson</p>
                <p className={s.cardNick}>ShrekSlayer</p>
              </div>
            </div>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Amelia Shreksa</p>
                <p className={s.cardNick}>ShreksaSorcerer</p>
              </div>
            </div>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Lucas Shrigmaire</p>
                <p className={s.cardNick}>ShrigmaDestroyer</p>
              </div>
            </div>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Olivia Shreksley</p>
                <p className={s.cardNick}>SwampyShrek</p>
              </div>
            </div>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Noah Shrekson</p>
                <p className={s.cardNick}>ShreksaWarrior</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.center}>
          <div className={s.centerTop}>
            <p className={s.centerTopTitle}>lobby details</p>
            <div className={s.center}></div>
          </div>
        </div>
        <div className={s.team}>
          <p className={s.title}>Team 1</p>
          <div className={s.cardsWr}>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Benjamin Shrekson</p>
                <p className={s.cardNick}>ShrekSlayer</p>
              </div>
            </div>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Amelia Shreksa</p>
                <p className={s.cardNick}>ShreksaSorcerer</p>
              </div>
            </div>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Lucas Shrigmaire</p>
                <p className={s.cardNick}>ShrigmaDestroyer</p>
              </div>
            </div>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Olivia Shreksley</p>
                <p className={s.cardNick}>SwampyShrek</p>
              </div>
            </div>
            <div className={s.card}>
              <Picture
                img={tournamentBet.img.shrigma}
                webp={tournamentBet.img.shrigmaW}
                className={s.avatarImg}
              />
              <div className={s.cardTextWr}>
                <p className={s.cardName}>Noah Shrekson</p>
                <p className={s.cardNick}>ShreksaWarrior</p>
              </div>
            </div>
          </div>
        </div>
      </TournamentTab>
    </>
  );
};

export default TournamentBetTab;
