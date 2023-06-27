import React, { useState } from 'react';
import s from './checkbox.module.scss';

const Checkbox = ({ isActive }) => {
  const [active, setActive] = useState(isActive);

  return (
    <>
      <label
        className={`${s.customCheckboxLabel} ${active ? s.active : ''}`}
        htmlFor='checkbox'
        onClick={() => setActive(!active)}></label>
    </>
  );
};

export default Checkbox;
