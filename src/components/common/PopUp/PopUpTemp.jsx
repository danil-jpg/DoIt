import React, { useEffect, useRef, useState } from 'react';
import s from './popUpTemp.module.scss';
import { useScrollbarWidth } from '../../utils/useScrollbarWidth';
import closeIcon from '../../../assets/icons/close.svg';
import './popUp.scss';

const PopUpTemp = ({ visible, setVisible, modalClass = '', children }) => {
  const res = useScrollbarWidth();

  const cssStyles = ['subStrate'];

  function bodyScroll(num) {
    document.body.classList.toggle('overflow-y');
    if (document.body.classList.contains('overflow-y')) {
      document.body.style = `padding-right:${res}px`;
    } else {
      document.body.style = 'padding-right:0';
    }
  }

  if (visible === true) {
    cssStyles.push('active');
  }
  useEffect(() => {
    if (visible === true) {
      bodyScroll(res);
    }
  }, [visible]);

  return (
    <div
      className={`${cssStyles.join(' ')}`}
      onClick={() => {
        setVisible(false);
        bodyScroll(res);
      }}>
      <div
        className={`${s.modal} ${modalClass}`}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className={s.crossWr}>
          <img
            src={closeIcon}
            id='cross'
            className={s.cross}
            onClick={() => {
              setVisible(false);
              bodyScroll(res);
            }}></img>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUpTemp;
