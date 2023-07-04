import React, { useEffect, useState } from 'react';
import s from './checkbox.module.scss';

const Checkbox = ({ clear }) => {
  const [active, setActive] = useState(false);
  console.log(clear);
  useEffect(() => {
    setActive(false);
  }, [clear]);

  return (
    <>
      <div
        onClick={() => {
          setActive(!active);
        }}
        className={`${s.customCheckboxLabel} ${active ? s.active : ''} `}
        htmlFor='checkbox'
      />
    </>
  );
};

export default Checkbox;
