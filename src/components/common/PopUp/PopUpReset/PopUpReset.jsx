import React from 'react';
import PopUpTemp from '../PopUpTemp';
import logo from '../../../../assets/images/PopUps/logo.png';
import logoW from '../../../../assets/images/PopUps/logo.png?as=webp';
import Picture from '../../../UI/Picture/Picture';
import InputFormContainer from '../../../UI/forms/InputFormContainer/InputFormContainer';
import { useState } from 'react';

const PopUpReset = ({ reset, setReset, setSignIn }) => {
  const [user, setUser] = useState('');

  return (
    <PopUpTemp visible={reset} setVisible={setReset}>
      <div className='bodyPopUp bodyPopUpSm'>
        <Picture style={{ margin: '0 auto' }} img={logo} webp={logoW} classname={'popUpLogo'} />
        <p className='popUp__title popUp__title_sm'>Forgot password</p>
        <InputFormContainer
          className={'inputWr'}
          style={{ width: '100%' }}
          ph={'google@gmail.com'}
          title={'Username or Email'}
          value={user}
          setValue={setUser}
        />
        <button
          className='buttonPopUp'
          style={{ marginBottom: '0' }}
          onClick={() => {
            setReset(false);
            document.body.style = 'padding-right:0';
            document.body.classList.remove('overflow-y');
          }}>
          Reset password
        </button>
        <div
          className='links'
          onClick={() => {
            document.body.style = 'padding-right:0';
            document.body.classList.remove('overflow-y');
            setReset(false);
            setSignIn(true);
          }}>
          <p className='link'>Back to login</p>
        </div>
      </div>
    </PopUpTemp>
  );
};

export default PopUpReset;
