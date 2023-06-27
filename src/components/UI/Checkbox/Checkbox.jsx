import React from 'react';
import s from './checkbox.module.scss';

const Checkbox = () => {
  return (
    <>
      <input type='checkbox' className={s.customCheckbox} id='checkbox' />
      <label className={s.customCheckboxLabel} htmlFor='checkbox'></label>
      <input type='checkbox' className={s.checkbox} id='happy' name='happy' value='yes' />
      <label htmlFor='happy'>Happy</label>
    </>
  );
};

export default Checkbox;
