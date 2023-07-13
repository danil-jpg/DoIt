import React from 'react';
import s from './premiumPage.module.scss';
import { useNavigate } from 'react-router-dom';
import ButtonUi from '../buttonUi/ButtonUi';
import PremiumCard from '../../../../common/PremiumCards/PremiumCardsBlueOrGreen/PremiumCard';
import PremiumCardsYellow from '../../../../common/PremiumCards/PremiumCardsYellow/PremiumCardsYellow';
import { premiumData } from '../../../../../store/store.js';

const PremiumPage = () => {
  const styleCard = {
    free: {
      background:
        'radial-gradient(330.73% 321.53% at -142.43% -152.09%, rgba(20, 114, 255, 0.35) 0%, rgba(20, 114, 255, 0.00) 95.84%), #181B1F',
      paddingRight: '16px',
    },
    organizer: {
      paddingRight: '16px',
      background:
        ' radial-gradient(335.33% 349.75% at -142.43% -152.09%, rgba(66, 232, 128, 0.30) 0%, rgba(66, 232, 128, 0.00) 84.90%), #181B1F',
    },
    pro: {
      background:
        'radial-gradient(330.73% 321.53% at -142.43% -152.09%, rgba(245, 200, 31, 0.25) 0%, rgba(245, 200, 31, 0.00) 95.84%), #181B1F',
    },
  };
  const styleTitle = {
    styleTitleFree: {
      background: 'linear-gradient(to top, #2788F6, #0960E0)',
      backgroundСlip: 'text',
      color: 'transparent',
      webkitBackgroundClip: 'text',
      webkitTextFillColor: 'transparent',
    },
    styleTitleOr: {
      background: 'linear-gradient(to top, #46F48C, #2B9D37)',
      backgroundСlip: 'text',
      color: 'transparent',
      webkitBackgroundClip: 'text',
      webkitTextFillColor: 'transparent',
    },
    styleCardPro: {
      background: 'linear-gradient(to top, #FFD321, #9C6C0D)',
      backgroundСlip: 'text',
      color: 'transparent',
      webkitBackgroundClip: 'text',
      webkitTextFillColor: 'transparent',
    },
  };

  return (
    <div>
      <p className={s.title}>Premium</p>
      <div className={s.buttonBlock}>
        <PremiumCard
          styles={styleCard.free}
          title={premiumData.titleCards.free}
          subtitle={premiumData.subtitle.subtitleFree}
          descr={premiumData.descr.descr}
          color={'blue'}
          colorTitle={styleTitle.styleTitleFree}
        />
        <PremiumCardsYellow
          styles={styleCard.pro}
          title={premiumData.titleCards.pro}
          colorTitle={styleTitle.styleCardPro}
          subtitle={premiumData.subtitle.subtitlePro}
          color={'yellow'}
        />
        <PremiumCard
          styles={styleCard.organizer}
          title={premiumData.titleCards.Organizer}
          subtitle={premiumData.subtitle.subtitleOrg}
          descr={premiumData.descr.descr}
          color={'green'}
          colorTitle={styleTitle.styleTitleOr}
        />
      </div>
    </div>
  );
};

export default PremiumPage;
