import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from './Header.module.scss';
import { headerData } from "../../../store/store";
import Picture from '../../UI/Picture/Picture';
import UserBlockHeader from "./UserBlockHeader/UserBlockHeader";
import Container from "../../containers/Container/Container";
import Button from "../../UI/buttons/Button/Button";
import { isActive } from "../../utils/isActive";
import { onClickActiveHandler } from "../../utils/onClickActiveHandler";

const Header = (props) => {
  const [state, setState] = useState(headerData);
  const [activeBurger, setActiveBurger] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <div
          className={`${s.burger} ${isActive(activeBurger, s.active)}`}
          onClick={() => { onClickActiveHandler(activeBurger, setActiveBurger) }}>
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
        <div className={`${s.body} ${isActive(activeBurger, s.active)}`}>
          <ul className={s.list}>
            {state.links.map(el => (
              <li className={s.item} key={el.id}>
                <Link to={el.link} className={s.link}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>

          {
            login
              ? <UserBlockHeader
                state={state.user}
                isActive={isActive} />
              : <div className={s.buttonList}>
                <Button
                  onClick={() => onClickActiveHandler(login, setLogin)}
                >
                  Login
                </Button>
                <Button color={'blue'}>Sign up</Button>
              </div>
          }

        </div>

      </Container>
    </header>
  )
}

export default Header;