import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { headerData } from '../../../redux/store';
import Picture from '../../UI/Picture/Picture';
import UserBlockHeader from './UserBlockHeader/UserBlockHeader';
import Container from '../../containers/Container/Container';
import Button from '../../UI/buttons/Button/Button';
import { isActive } from '../../utils/isActive';
import { onClickActiveHandler } from '../../utils/onClickActiveHandler';

const Header = ({ login, setLogin, signIn, setSignIn, signUp, setSignUp, ...props }) => {
  const [state, setState] = useState(headerData);
  const [activeBurger, setActiveBurger] = useState(false);

  useEffect(() => {
    if (activeBurger) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [activeBurger])

  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <div
          className={`${s.burger} ${isActive(activeBurger, s.active)}`}
          onClick={() => {
            onClickActiveHandler(activeBurger, setActiveBurger);
          }}>
          <span></span>
        </div>
        <Link to='/' className={s.logoWrap}>
          <Picture
            img={state.logo.img}
            webp={state.logo.webp}
            alt='logo'
            className={s.logo}
            width='72px'
            height='64px'
          />
        </Link>
        <div className={`${s.body} ${isActive(activeBurger, s.active)}`}>
          <ul className={s.list}>
            {state.links.map((el) => (
              <li className={s.item} key={el.id}>
                <Link to={el.link} className={s.link} onClick={() => { setActiveBurger(false) }}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>

          {login ? (
            <UserBlockHeader state={state.user} isActive={isActive} />
          ) : (
            <div className={s.buttonList}>
              <Button
                className={s.btn}
                onClick={() => {
                  setSignIn(!signIn);
                }}>
                Login
              </Button>
              <Button
                className={s.btn}
                color={'blue'}
                onClick={() => {
                  setSignUp(true);
                }}>
                Sign up
              </Button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
