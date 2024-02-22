import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';
import { navbar } from '../../../redux/store';
import { IconRenderer } from '../../UI/IconRenderer/IconRenderer';

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  const onBtnClickHandler = () => setActive(!active);
  const isActive = () => (active ? s.active : '');

  return (
    <nav className={`${s.wrap} ${isActive()}`}>
      <div onClick={onBtnClickHandler} className={`${s.btn} ${isActive()}`}>
        <span></span>
      </div>
      <ul className={s.list}>
        {navbar.list.map((el) => (
          <li className={s.item} key={el.id}>
            <NavLink to={el.link} className={s.link}>
              <IconRenderer id={el.iconId} className={s.icon}></IconRenderer>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
