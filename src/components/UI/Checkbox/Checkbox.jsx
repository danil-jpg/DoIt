import React, { useState } from 'react';
import s from './checkbox.module.scss';

const Checkbox = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <label
        className={`${s.customCheckboxLabel} ${active ? s.active : ''}`}
        htmlFor='checkbox'
        onClick={() => {
          setActive(!active);
        }}></label>
    </>
  );
};

export default Checkbox;
