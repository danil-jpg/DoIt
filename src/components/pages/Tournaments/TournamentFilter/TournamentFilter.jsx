import React, { useState } from 'react';
import s from './tournament.module.scss';
import Checkbox from '../../../UI/Checkbox/Checkbox';

const TournamentFilter = () => {
  const [active, setActive] = useState(true);

  return (
    <div className={s.filter}>
      <div className={s.filterTitleWr}>
        <p className={s.filterTitle}>Filters</p>
        <div
          className={s.filterclear}
          onClick={() => {
            setActive(false);
          }}>
          clear
        </div>
      </div>
      <div className={s.filterItem}>
        <p className={s.filterItemTitle}>Game mode</p>
        <div className={s.filterItemCheckboxWr}>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>1v1</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox active={active} setActive={setActive} />
            <p className={s.checkboxDescr}>2v2</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>5v5</p>
          </div>
        </div>
        <p className={s.filterItemTitle}>Status</p>
        <div className={s.filterItemCheckboxWr}>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Upcoming</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Past</p>
          </div>
        </div>
        <p className={s.filterItemTitle}>Platform</p>
        <div className={s.filterItemCheckboxHorWr}>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>PC</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Xbox One</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>ps4</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>nintendo switch</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>PS5</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Xbox Series X</p>
          </div>
        </div>
        <p className={s.filterItemTitle}>Server region</p>
        <div className={s.filterItemCheckboxHorWr}>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Europe</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Singapore</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Australia</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Brazil</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>Peru</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>US East</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentFilter;
