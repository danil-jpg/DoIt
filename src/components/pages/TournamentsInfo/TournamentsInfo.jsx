import React from 'react';
import s from './tournamentsInfo.module.scss';
import Picture from '../../UI/Picture/Picture';
import { tournamentsMain } from '../../../store/store';
import Container from '../../containers/Container/Container';

const TournamentsInfo = () => {
  return (
    <Container>
      <div className={s.tournamentsInfo}></div>
    </Container>
  );
};

export default TournamentsInfo;
