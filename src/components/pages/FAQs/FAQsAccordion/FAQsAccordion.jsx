import React, { useState } from 'react';
import s from "./FAQsAccordion.module.scss"
const FAQsAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.main}>
      <div onClick={toggleAccordion} className={s.main__accordion}>
        <h3 className={s.main__title}>Заголовок</h3>
        <div className={s.main__circle}>
        <button className={s.main__btn}>{isOpen ? '-' : '+'}</button>
        </div>
      </div>
      {isOpen && (
        <div className={s.main__info}>
          <p className={s.main__descr}>Содержимое меню аккордеона</p>
        </div>
      )}
    </div>
  );
};

export default FAQsAccordion;
