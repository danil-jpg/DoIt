import React from 'react';
import s from './checkbox.module.scss';

const Checkbox = () => {
  return (
    <>
      <input type='checkbox' className={s.customCheckbox} id='checkbox' />
      <label className={s.customCheckboxLabel} htmlFor='checkbox'></label>
    </>
  );
};

export default Checkbox;
