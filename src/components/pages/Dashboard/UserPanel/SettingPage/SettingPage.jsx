import React from 'react';
import s from './settingPage.module.scss';
import { useNavigate } from 'react-router-dom';
import ButtonUi from '../buttonUi/ButtonUi';

const SettingPage = () => {
  const btnArr = [
    {
      to: '',
      text: 'Edit account details',
    },
    {
      to: '',
      text: 'Change adress email',
    },
    {
      to: '',
      text: 'Change password',
    },
    {
      to: '',
      text: 'Manage preferences',
    },
    {
      to: '',
      text: 'Close account',
    },
  ];

  return (
    <div>
      <p className={s.title}>Settings</p>
      <div className={s.buttonBlock}>
        {btnArr.map((el) => (
          <ButtonUi key={el.text} to={el.to} text={el.text} lastBtnClass={el.lastBtnClass} />
        ))}
      </div>
    </div>
  );
};

export default SettingPage;
