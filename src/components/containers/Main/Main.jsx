import React, { Suspense } from "react";
import s from './Main.module.scss';
import Header from '../Header/Header';
import Container from "../Container/Container";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('../../pages/Home/Home.jsx'));

const Main = (props) => {

  return (
    <main className={s.main}>
      <Header />
      <Container>
        <Suspense fallback={<>Loading</>}>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Suspense>
      </Container>
    </main>
  )
}

export default Main;