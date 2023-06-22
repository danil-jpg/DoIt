import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from './Header.module.scss';
import { headerData } from "../../../store/store";
import Picture from '../../UI/Picture/Picture';
import UserBlockHeader from "./UserBlockHeader/UserBlockHeader";
import Container from "../../containers/Container/Container";

const Header = (props) => {
  const [state, setState] = useState(headerData);
  const [activeBurger, setActiveBurger] = useState(false);

  const isBurger = (selector) => activeBurger ? selector : '';
  const onBurgerClickHandler = () => setActiveBurger(!activeBurger);

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div className={`${s.burger} ${isBurger(s.active)}`}
          onClick={onBurgerClickHandler}>
          <span></span>
        </div>
        <Link to="/" className={s.logoWrap}>
          <Picture
            img={state.logo.img}
            webp={state.logo.webp}
            alt="logo"
            className={s.logo}
            width='72px'
            height='64px'
          />
        </Link>
        <div className={`${s.body} ${isBurger(s.active)}`}>
          <ul className={s.list}>
            {state.links.map(el => (
              <li className={s.item} key={el.id}>
                <Link to={el.link} className={s.link}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>

          <UserBlockHeader />
        </div>

      </Container>
    </header>
  )
}

export default Header;