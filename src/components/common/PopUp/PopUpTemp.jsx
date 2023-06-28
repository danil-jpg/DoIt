import React, { useEffect, useRef, useState } from 'react';
import s from './popUpTemp.module.scss';
import { useScrollbarWidth } from '../../utils/useScrollbarWidth';
import closeIcon from '../../../assets/icons/close.svg';

const PopUpTemp = ({ visible, setVisible, modalClass = '', children }) => {
  const res = useScrollbarWidth();

  const cssStyles = ['subStrate'];

  if (visible === true) {
    cssStyles.push('active');
  }

  return (
    <div
      className={`${cssStyles.join(' ')}`}
      onClick={() => {
        setVisible(false);
      }}>
      <div
        className={`${s.modal} ${modalClass}`}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className='cross-wr'>
          <img
            src={closeIcon}
            id='cross'
            className={s.cross}
            onClick={() => {
              setVisible(false);
            }}></img>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUpTemp;
