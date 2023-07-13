import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './buttonUi.module.scss';

const ButtonUi = ({ text, to, lastBtnClass = '' }) => {
  const nav = useNavigate();

  return (
    <button
      className={`${s.button} ${lastBtnClass}`}
      onClick={() => {
        nav(to);
      }}>
      {text}
    </button>
  );
};

export default ButtonUi;
