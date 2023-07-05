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
import { useState } from 'react';
import SelectFormContainer from '../../../UI/forms/SelectFormContainer/SelectFormContainer';
import Checkbox from '../../../UI/Checkbox/Checkbox';

const PopUpSignUp = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);

  return (
    <PopUpTemp visible={visible} setVisible={setVisible}>
      {step === 1 ? (
        <div className='bodyPopUp'>
          <Picture style={{ margin: '0 auto' }} img={logo} webp={logoW} classname={'popUpLogo'} />
          <p className='popUp__title'>Sign up 1/2</p>
          <InputFormContainer
            className={'inputWr'}
            style={{ width: '100%' }}
            ph={'google@gmail.com'}
            title={'Email'}
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
          <button className='buttonPopUp' onClick={() => setStep(2)}>
            Next step
          </button>
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
            <p className='link'>Already have an account?</p>
          </div>
        </div>
      ) : (
        <div className='bodyPopUp'>
          <Picture style={{ margin: '0 auto' }} img={logo} webp={logoW} classname={'popUpLogo'} />
          <p className='popUp__title'>Sign up 2/2</p>
          <InputFormContainer
            className={'inputWr'}
            style={{ width: '100%' }}
            ph={'BestPlayerInTheWorld2020'}
            title={'Username'}
            value={user}
            setValue={setUser}
          />
          <SelectFormContainer
            list={['Ukraine', 'Poland', 'USA']}
            className={'popUpSelect'}
            title={'Country'}
            value={password}
            setValue={setPassword}
          />
          <p className='date-text'>Date of birth</p>
          <div className='date'>
            <input type='text' placeholder='dd' className='date__input' />
            <input type='text' placeholder='mm' className='date__input' />
            <input type='text' placeholder='yy' className='date__input' />
          </div>
          <div className='agree'>
            <Checkbox />
            <p className='agree__text'>
              I’m have at least 13 years of age and agree to the <span>terms of service</span>
            </p>
          </div>
          <button className='buttonPopUp'>Create an account</button>
        </div>
      )}
    </PopUpTemp>
  );
};

export default PopUpSignUp;
