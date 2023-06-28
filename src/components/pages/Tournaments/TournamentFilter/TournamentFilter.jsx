import React, { useState } from 'react';
import s from './tournament.module.scss';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import arrowSvg from '../../../../assets/icons/arrow.svg';
import x from '../../../../assets/icons/x.svg';

const TournamentFilter = () => {
  const [clear, setClear] = useState('');
  const [mobileFilterClose, setMobileFilter] = useState(false);

  return (
    <div className={s.filter}>
      <div
        className={s.filterTitleWr}
        onClick={() => {
          setMobileFilter(!mobileFilterClose);
        }}>
        <p className={s.filterTitle}>Filters</p>
        <img
          className={`${s.filterArrow} ${mobileFilterClose ? s.rotate180 : ''}`}
          src={arrowSvg}></img>
        <div
          className={s.filterclear}
          onClick={() => {
            setClear(false);
          }}>
          clear
        </div>
      </div>
      <div className={s.filterAdded}>
        <div className={s.filterAddedText}>
          5v5
          <img src={x} />
        </div>
        <div className={s.filterAddedText}>
          Upcoming <img src={x} />
        </div>
        <div
          className={s.filterClearTab}
          onClick={() => {
            setClear(false);
          }}>
          clear
        </div>
      </div>
      <div className={`${s.filterItem} ${mobileFilterClose ? s.filterItemClose : ''}`}>
        <p className={s.filterItemTitle}>Game mode</p>
        <div className={s.filterItemCheckboxWr}>
          <div className={s.checkboxWr}>
            <Checkbox />
            <p className={s.checkboxDescr}>1v1</p>
          </div>
          <div className={s.checkboxWr}>
            <Checkbox />
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
