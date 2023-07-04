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
import InputFormContainer from '../../../UI/forms/InputFormContainer/InputFormContainer';
import { useState } from 'react';
import Button from '../../../UI/buttons/Button/Button';

const PopUpSignIn = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PopUpTemp>
      <div className={s.body}>
        <Picture img={logo} webp={logoW} className={s.logo} />
        <p className={s.title}>Login</p>
        <InputFormContainer
          style={{ width: '100%' }}
          ph={'google@gmail.com'}
          title={'Username or Email'}
          value={user}
          setValue={setUser}
        />
        <InputFormContainer
          style={{ width: '100%' }}
          title={'Password'}
          type={'password'}
          value={password}
          setValue={setPassword}
        />
        <button className={s.button}>Login</button>
        <div className={s.loginVia}>
          <p className={s.loginViaText}>or login with</p>
          <div className={s.loginViaLine}>
            <div className={s.viaWr}>
              <Picture img={face} webp={faceW} />
            </div>
            <div className={s.viaWr}>
              <Picture img={bliz} webp={blizW} />
            </div>
            <div className={s.viaWr}>
              <Picture img={google} webp={googleW} />
            </div>
            <div className={s.viaWr}>
              <Picture img={steam} webp={steamW} />
            </div>
          </div>
        </div>
        <div className={s.links}>
          <button className={s.link}>Forgot password?</button>
          <button className={s.link}>
            Don't have an account?<p className={s.linkSign}>Sign up!</p>
          </button>
        </div>
      </div>
    </PopUpTemp>
  );
};

export default PopUpSignIn;
