import React from 'react';
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
import s from './popUpSignIn.module.scss';
import { useState } from 'react';

const PopUpSignIn = () => {
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PopUpTemp visible={visible} setVisible={setVisible}>
      <div className='bodyPopUp'>
        <Picture style={{ margin: '0 auto' }} img={logo} webp={logoW} classname={'popUpLogo'} />
        <p className='popUp__title'>Login</p>
        <InputFormContainer
          className={'inputWr'}
          style={{ width: '100%' }}
          ph={'google@gmail.com'}
          title={'Username or Email'}
          value={user}
          setValue={setUser}
        />
        <InputFormContainer
          className={'inputWr'}
          style={{ width: '100%' }}
          title={'Password'}
          type={'password'}
          value={password}
          setValue={setPassword}
        />
        <button className='buttonPopUp'>Login</button>
        <div className='loginVia'>
          <p className='loginViaText'>or login with</p>
          <div className='loginViaLine'>
            <div className='viaWr'>
              <Picture img={face} webp={faceW} />
            </div>
            <div className='viaWr'>
              <Picture img={bliz} webp={blizW} />
            </div>
            <div className='viaWr'>
              <Picture img={google} webp={googleW} />
            </div>
            <div className='viaWr'>
              <Picture img={steam} webp={steamW} />
            </div>
          </div>
        </div>
        <div className='links'>
          <p className='link'>Forgot password?</p>
          <p className='link'>
            Don't have an account?<span className='linkSign'>Sign up!</span>
          </p>
        </div>
      </div>
    </PopUpTemp>
  );
};

export default PopUpSignIn;
