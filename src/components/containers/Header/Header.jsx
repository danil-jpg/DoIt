import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import s from './Header.module.scss';
import { headerData } from "../../../store/store";
import Picture from '../../common/Picture/Picture';
import Button from "../../UI/buttons/Button/Button";

const Header = (props) => {
  let [state, setState] = useState(headerData);

  return (
    <header className={s.wrap}>
      <Container className={s.container}>
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
        <div className={s.body}>
          <ul className={s.list}>
            {state.links.map(el => (
              <li className={s.item} key={el.id}>
                <Link to={el.link} className={s.link}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className={s.userBlock}>
            

            <div className={s.buttonList}>
              <Button>Login</Button>
              <Button color={'blue'}>Sign up</Button>
            </div>
          </div>
        </div>

      </Container>
    </header>
  )
}

export default Header;