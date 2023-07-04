import React from 'react';
import s from './popUpSignIn.module.scss';
import PopUpTemp from '../PopUpTemp';
import logo from '../../../../assets/images/PopUps/logo.png';
import logoW from '../../../../assets/images/PopUps/logo.png?as=webp';
import face from '../../../../assets/images/PopUps/face.png';
import faceW from '../../../../assets/images/PopUps/face.png?as=webp';
import bliz from '../../../../assets/images/PopUps/bliz.png';
import blizW from '../../../../assets/images/PopUps/bliz.png?as=webp';
import google from '../../../../assets/images/PopUps/goog.png';
import googleW from '../../../../assets/images/PopUps/goog.png?as=webp';
import steam from '../../../../assets/images/PopUps/steam.png';
import steamW from '../../../../assets/images/PopUps/steam.png?as=webp';
import Picture from '../../../UI/Picture/Picture';

const PopUpSignIn = () => {
  return (
    <PopUpTemp>
      <div className={s.body}>
        <Picture img={logo} webp={logoW} className={s.logo} />
        <p className={s.title}>Login</p>
      </div>
    </PopUpTemp>
  );
};

export default PopUpSignIn;
