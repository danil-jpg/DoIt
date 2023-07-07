import React, { useState } from 'react';
import s from './gameSub.module.scss';
import { gameSub } from '../../../store/store';
import Picture from '../../UI/Picture/Picture';
import InputForm from '../../UI/forms/InputForm/InputForm';
import Container from '../../containers/Container/Container';
import { useNavigate } from 'react-router-dom';

const GameSub = () => {
  const nav = useNavigate();
  const [input, setInput] = useState('');

  return (
    <Container>
      <div className={s.gameTop}>
        <p className={s.gameTopText}>Games</p>
        <InputForm
          value={input}
          setValue={setInput}
          ph={'Search the game'}
          className={s.gameSearch}
        />
      </div>
      <ul className={s.ul}>
        {gameSub.cards.map((el) => {
          return (
            <li
              className={s.li}
              key={el.key}
              onClick={() => {
                nav('../TournamentsInfo');
              }}>
              <Picture className={s.gameImg} img={el.img} webp={el.webp} />
              <p className={s.liText}>{el.name}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default GameSub;
