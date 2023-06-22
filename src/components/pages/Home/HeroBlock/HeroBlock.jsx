import React from 'react';
import s from './HeroBlock.module.scss';
import { homeHero } from '../../../../store/store';
import Picture from '../../../UI/Picture/Picture';
import Button from '../../../UI/buttons/Button/Button';
const HeroBlock = (props) => {
  return (
    <div className={s.main}>
      <div className={s.main__block}>
        <Picture
          className={`${s.main__triangle} ${s.triangle} ${s.triangle__first}`}
          img={homeHero.img.triangleBig}
          imgMob={homeHero.img.triangleSmall}
          widthMob='375'
        />
        <Picture
          className={`${s.main__triangle} ${s.triangle} ${s.triangle__second}`}
          img={homeHero.img.triangleBig}
          imgMob={homeHero.img.triangleSmall}
          widthMob='375'
        />
        <Picture
          className={`${s.main__triangle} ${s.triangle} ${s.triangle__three}`}
          img={homeHero.img.triangleBig}
          imgMob={homeHero.img.triangleSmall}
          widthMob='375'
        />
        <Picture
          className={s.small__triangle}
          img={homeHero.img.triangleBig}
          imgMob={homeHero.img.triangleSmall}
          widthMob='375'
        />
        <div className={s.main__info}>
          <h1 className={s.main__title}>{homeHero.info.title}</h1>
          <span className={s.main__desc}>{homeHero.info.descr}</span>
          <div className={s.actions}>
            <Button>Login</Button>
            <Button color={'blue'}>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
