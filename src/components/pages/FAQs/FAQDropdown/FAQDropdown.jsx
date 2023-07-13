import React, { useState } from 'react';
import s from "./FAQDropdown.module.scss"
import { faqData } from '../../../../store/store';
const FAQDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const dropdownItems = ['Counter Strike GO', 'DOTA 2', 'Fortnite'];

  return (
    <div className={s.main}>
     <div className={s.main__dropdown}>
      <div className={s.main__block}>
      <button className={s.main__btn} onClick={toggleDropdown}>Counter Strike GO</button>
      <img src={faqData.icon.arrow} alt="" />
      </div>
      {isOpen && (
        <ul className={s.main__list}>
          {dropdownItems.map((item, index) => (
            <li className={s.main__item} key={index} onClick={() => selectItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
</div>
    </div>
  );
};

export default FAQDropdown;
