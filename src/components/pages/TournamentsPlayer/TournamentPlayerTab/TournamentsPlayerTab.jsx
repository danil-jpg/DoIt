import React from 'react';
import s from './TournamentsPlayerTab.module.scss';
import TournamentTab from '../../../common/TournamentTabsTemplate/TournamentTabs';
import game from '../../../../assets/icons/tournamentsInfo/game 1.svg';
import dollar from '../../../../assets/icons/tournamentsInfo/money 1.svg';
import check from '../../../../assets/icons/tournamentsInfo/check 1.svg';
import ball from '../../../../assets/icons/tournamentsInfo/basketball 1.svg';
import alert from '../../../../assets/icons/tournamentsInfo/alert 1.svg';
import addReq from '../../../../assets/icons/tournamentsInfo/receipt 1.svg';
import lobby from '../../../../assets/icons/tournamentsInfo/tag 1.svg';
import Picture from '../../../UI/Picture/Picture';
import { tournamentPlayer } from '../../../../store/store';

const TournamentPlayerTab = () => {
  return (
    <>
      <TournamentTab activeTab={2} contentClass={s.contentClassPlayer} tabClass={s.infoTab}>
        <div className={s.card}>
          <Picture
            img={tournamentPlayer.img.avatar}
            webp={tournamentPlayer.img.avatarW}
            className={s.playerImg}
          />
          <div className={s.cardBottom}>
            <div className={s.cardTextsTop}>
              <Picture
                img={tournamentPlayer.img.japan}
                webp={tournamentPlayer.img.japanW}
                className={s.playerImgCountry}
              />
              <p className={s.playerDescr}>Fresh young gun</p>
            </div>
            <div className={s.cardTextsBottom}>
              <p className={s.playerStatus}>registred</p>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <Picture
            img={tournamentPlayer.img.avatar}
            webp={tournamentPlayer.img.avatarW}
            className={s.playerImg}
          />
          <div className={s.cardBottom}>
            <div className={s.cardTextsTop}>
              <Picture
                img={tournamentPlayer.img.japan}
                webp={tournamentPlayer.img.japanW}
                className={s.playerImgCountry}
              />
              <p className={s.playerDescr}>Fresh young gun</p>
            </div>
            <div className={s.cardTextsBottom}>
              <p className={s.playerStatus}>registred</p>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <Picture
            img={tournamentPlayer.img.avatar}
            webp={tournamentPlayer.img.avatarW}
            className={s.playerImg}
          />
          <div className={s.cardBottom}>
            <div className={s.cardTextsTop}>
              <Picture
                img={tournamentPlayer.img.japan}
                webp={tournamentPlayer.img.japanW}
                className={s.playerImgCountry}
              />
              <p className={s.playerDescr}>Fresh young gun</p>
            </div>
            <div className={s.cardTextsBottom}>
              <p className={s.playerStatus}>registred</p>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <Picture
            img={tournamentPlayer.img.avatar}
            webp={tournamentPlayer.img.avatarW}
            className={s.playerImg}
          />
          <div className={s.cardBottom}>
            <div className={s.cardTextsTop}>
              <Picture
                img={tournamentPlayer.img.japan}
                webp={tournamentPlayer.img.japanW}
                className={s.playerImgCountry}
              />
              <p className={s.playerDescr}>Fresh young gun</p>
            </div>
            <div className={s.cardTextsBottom}>
              <p className={s.playerStatus}>registred</p>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <Picture
            img={tournamentPlayer.img.avatar}
            webp={tournamentPlayer.img.avatarW}
            className={s.playerImg}
          />
          <div className={s.cardBottom}>
            <div className={s.cardTextsTop}>
              <Picture
                img={tournamentPlayer.img.japan}
                webp={tournamentPlayer.img.japanW}
                className={s.playerImgCountry}
              />
              <p className={s.playerDescr}>Fresh young gun</p>
            </div>
            <div className={s.cardTextsBottom}>
              <p className={s.playerStatus}>registred</p>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <Picture
            img={tournamentPlayer.img.avatar}
            webp={tournamentPlayer.img.avatarW}
            className={s.playerImg}
          />
          <div className={s.cardBottom}>
            <div className={s.cardTextsTop}>
              <Picture
                img={tournamentPlayer.img.japan}
                webp={tournamentPlayer.img.japanW}
                className={s.playerImgCountry}
              />
              <p className={s.playerDescr}>Fresh young gun</p>
            </div>
            <div className={s.cardTextsBottom}>
              <p className={s.playerStatus}>registred</p>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <Picture
            img={tournamentPlayer.img.avatar}
            webp={tournamentPlayer.img.avatarW}
            className={s.playerImg}
          />
          <div className={s.cardBottom}>
            <div className={s.cardTextsTop}>
              <Picture
                img={tournamentPlayer.img.japan}
                webp={tournamentPlayer.img.japanW}
                className={s.playerImgCountry}
              />
              <p className={s.playerDescr}>Fresh young gun</p>
            </div>
            <div className={s.cardTextsBottom}>
              <p className={s.playerStatus}>registred</p>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <Picture
            img={tournamentPlayer.img.avatar}
            webp={tournamentPlayer.img.avatarW}
            className={s.playerImg}
          />
          <div className={s.cardBottom}>
            <div className={s.cardTextsTop}>
              <Picture
                img={tournamentPlayer.img.japan}
                webp={tournamentPlayer.img.japanW}
                className={s.playerImgCountry}
              />
              <p className={s.playerDescr}>Fresh young gun</p>
            </div>
            <div className={s.cardTextsBottom}>
              <p className={s.playerStatus}>registred</p>
            </div>
          </div>
        </div>
      </TournamentTab>
      <TournamentTab
        contentClass={s.contentClassLorem}
        tabClass={`${s.infoTab} ${s.displayNoneMob}`}
        tabs={false}
        elemInsteadOfTab={'Streams'}>
        {
          <p className={s.loremText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we
            use it? It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages
            and web page editors now use Lorem Ipsum as their default model text, and a search for
            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
            the like).
          </p>
        }
      </TournamentTab>
      <TournamentTab
        contentClass={s.contentClassLorem}
        tabClass={`${s.infoTab} ${s.displayNoneMob}`}
        tabs={false}
        elemInsteadOfTab={'Prize pool'}>
        {
          <p className={s.loremText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we
            use it? It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages
            and web page editors now use Lorem Ipsum as their default model text, and a search for
            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
            the like).
          </p>
        }
      </TournamentTab>
    </>
  );
};

export default TournamentPlayerTab;
