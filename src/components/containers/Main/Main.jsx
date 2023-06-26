import React, { Suspense } from 'react';
import s from './Main.module.scss';

import { Route, Routes } from "react-router-dom";
import Header from "../../common/Header/Header";
import Container from "../Container/Container";
const Home = React.lazy(() => import('../../pages/Home/Home.jsx'));
const News = React.lazy(()=> import('../../pages/News/News.jsx'));
const Premium = React.lazy(()=> import("../../pages/Premium/Premium.jsx"));
const Profile = React.lazy(() => import('../../pages/Profile/Profile'));

const Main = (props) => {
  return (
    <main className={s.main}>
      <Header />
        <Suspense fallback={<>Loading</>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/news" element={<News/>}/>
            <Route path="/premium" element={<Premium/>}/>
            <Route path='Profile' element={<Profile />} />
          </Routes>
        </Suspense>
    </main>
  );
};

export default Main;
