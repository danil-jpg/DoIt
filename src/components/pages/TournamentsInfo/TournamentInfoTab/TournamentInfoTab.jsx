import React from 'react';
import s from './tournamentInfoTab.module.scss';
import TournamentTab from '../../../common/TournamentTabsTemplate/TournamentTabs';
import game from '../../../../assets/icons/tournamentsInfo/game 1.svg';
import dollar from '../../../../assets/icons/tournamentsInfo/money 1.svg';
import check from '../../../../assets/icons/tournamentsInfo/check 1.svg';
import ball from '../../../../assets/icons/tournamentsInfo/basketball 1.svg';
import alert from '../../../../assets/icons/tournamentsInfo/alert 1.svg';
import addReq from '../../../../assets/icons/tournamentsInfo/receipt 1.svg';
import lobby from '../../../../assets/icons/tournamentsInfo/tag 1.svg';

const TournamentInfoTab = () => {
  return (
    <>
      <TournamentTab contentClass={s.contentClass} tabClass={s.infoTab}>
        <div className={`${s.item} ${s.itemFirstColumn}`}>
          <p className={s.itemText}>Today, 05 oct 2019 at 19:45 CEST</p>
        </div>
        <div className={s.item}>
          <div className={s.itemTop}>
            <img src={game} className={s.itemIcon} />
            <p className={s.itemTitle}>Game</p>
          </div>
          <div className={s.itemBottom}>
            <p className={s.itemText}>Mortal Kombat 11 (PS4)</p>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemTop}>
            <img src={dollar} className={s.itemIcon} />
            <p className={s.itemTitle}>Prize pool</p>
          </div>
          <div className={s.itemBottom}>
            <p className={s.itemText}>100 USD</p>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemTop}>
            <img src={check} className={s.itemIcon} />
            <p className={s.itemTitle}>Check in time</p>
          </div>
          <div className={s.itemBottom}>
            <p className={s.itemText}>Today, 05 oct 2019 at 17:30 CEST</p>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemTop}>
            <img src={ball} className={s.itemIcon} />
            <p className={s.itemTitle}>Mode</p>
          </div>
          <div className={s.itemBottom}>
            <p className={s.itemText}>1 on 1 - single elimination BO1 | Final BO3</p>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemTop}>
            <img src={alert} className={s.itemIcon} />
            <p className={s.itemTitle}>VETO</p>
          </div>
          <div className={s.itemBottom}>
            <p className={s.itemText}>ABABA Start player with higher seed</p>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemTop}>
            <img src={addReq} className={s.itemIcon} />
            <p className={s.itemTitle}>Additional requirements</p>
          </div>
          <div className={s.itemBottom}>
            <p className={s.itemText}>At least 18 years old Linked PSN Account PS4</p>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemTop}>
            <img src={lobby} className={s.itemIcon} />
            <p className={s.itemTitle}>Lobby</p>
          </div>
          <div className={s.itemBottom}>
            <p className={s.itemText}>Game chat: OCR3</p>
          </div>
        </div>
        <div className={s.item}>
          <button className={s.itemBtn}>MORE RULES</button>
        </div>
      </TournamentTab>
      <TournamentTab
        contentClass={s.contentClassLorem}
        tabClass={`${s.infoTab} ${s.displayNoneMob}`}
        tabs={false}
        elemInsteadOfTab={'Quick rules'}>
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

export default TournamentInfoTab;
