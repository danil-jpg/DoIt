import React, { useEffect, useState } from 'react';
import s from './teamPage.module.scss';
import { useNavigate } from 'react-router-dom';
import ButtonUi from '../buttonUi/ButtonUi';

const TeamPage = () => {
  const [btnArr, setBtnArr] = useState([
    {
      to: '',
      text: 'Team Blacer',
    },
    {
      to: '',
      text: 'Team Scorpio',
    },
    {
      to: '',
      text: 'Team Ez game',
    },
  ]);
  const [input, setInput] = useState('');
  const [updated, setUpdated] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUpdated(input);
      setBtnArr([...btnArr, { to: '', text: input }]);
    }
  };

  return (
    <div>
      <p className={s.title}>My Team</p>
      <div className={s.buttonBlock}>
        {btnArr.map((el) => (
          <ButtonUi key={el.text} to={el.to} text={el.text} lastBtnClass={el.lastBtnClass} />
        ))}
        <button className={s.button}>
          <input
            placeholder=' Create Team +'
            className={s.input}
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </button>
      </div>
    </div>
  );
};

export default TeamPage;
