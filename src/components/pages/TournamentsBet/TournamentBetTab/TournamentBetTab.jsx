import React from 'react';
import s from './tournamentBetTab.module.scss';
import TournamentTab from '../../../common/TournamentTabsTemplate/TournamentTabs';
import Picture from '../../../UI/Picture/Picture';
import { tournamentBet } from '../../../../store/store';
import { useState } from 'react';

const TournamentBetTab = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

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
            <div className={s.centerTopNames}>
              <p className={s.left}>NAME</p>
              <p className={s.right}>ESL - 3451516161714</p>
            </div>
            <div className={s.centerTopPass}>
              <p className={s.left}>PASSWORD</p>
              <p className={s.right}>121245W1SDA61CG6</p>
            </div>
            <div className={s.centerTopIp}>
              <p className={s.left}>SERVER IP</p>
              <p className={s.right}>453.647.484.14:2701</p>
            </div>
            <button className={s.centerTopBtn}>CONNECT</button>
          </div>
          <div className={s.report}>
            <p className={s.centerTopTitle}>Report scores</p>
            <div className={s.teamsCount}>
              <div className={s.teamCount}>
                <p className={s.teamCountTitle}>Team 1</p>
                <div className={s.teamCountWr}>
                  <p
                    className={s.sign}
                    onClick={() => {
                      setCount2((prev) => prev - 1);
                    }}>
                    -
                  </p>
                  <p className={s.count}>{count2}</p>
                  <p
                    className={s.sign}
                    onClick={() => {
                      setCount2((prev) => prev + 1);
                    }}>
                    +
                  </p>
                </div>
              </div>
              <div className={s.teamCount}>
                <p className={s.teamCountTitle}>Team 1</p>
                <div className={s.teamCountWr}>
                  <p
                    className={s.sign}
                    onClick={() => {
                      setCount((prev) => prev - 1);
                    }}>
                    -
                  </p>
                  <p className={s.count}>{count}</p>
                  <p
                    className={s.sign}
                    onClick={() => {
                      setCount((prev) => prev + 1);
                    }}>
                    +
                  </p>
                </div>
              </div>
            </div>
            <p className={s.verify}>Verify the winer</p>
            <div className={s.verifyLine}>
              <button className={s.verifyBtn}>TEAM 1</button>
              <button className={s.verifyBtn}>Tie</button>
              <button className={s.verifyBtn}>TEAM 2</button>
            </div>
          </div>
          <button className={s.bottomBtn}>Submit scores</button>
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
