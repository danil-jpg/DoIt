import React from "react";
import s from './Main.module.scss';
import Header from '../Header/Header';
import Container from "../Container/Container";
import Home from "../../pages/Home/Home";
;

const Main = (props) => {

  return (
    <main className={s.main}>
      <Header />
      <Container>
	      <Home/>
      </Container>
    </main>
  )
}

export default Main;