import React from 'react';
import s from './buttonPage.module.scss';
import { useNavigate } from 'react-router-dom';
import ButtonUi from '../buttonUi/ButtonUi';

const ButtonPage = () => {
  const btnArr = [
    {
      to: '',
      text: 'My profile',
    },
    {
      to: '',
      text: 'My Team',
    },
    {
      to: '',
      text: 'Withdraw',
    },
    {
      to: '',
      text: 'Deposit',
    },
    {
      to: '',
      text: 'Premium Account',
    },
    {
      to: '',
      text: 'Statistics',
    },
    {
      to: '',
      text: 'Support',
    },
    {
      to: '',
      text: 'Settings',
    },
    {
      to: '',
      text: 'Logout',
    },
    {
      to: '',
      text: 'Game profile',
      lastBtnClass: s.lastBtn,
    },
  ];

  return (
    <div>
      <p className={s.title}>User Panel</p>
      <div className={s.buttonBlock}>
        {btnArr.map((el) => (
          <ButtonUi key={el.text} to={el.to} text={el.text} lastBtnClass={el.lastBtnClass} />
        ))}
      </div>
    </div>
  );
};

export default ButtonPage;
