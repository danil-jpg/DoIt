import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Main.module.scss';
import Header from '../../common/Header/Header';

const Home = React.lazy(() => import('../../pages/Home/Home.jsx'));
const News = React.lazy(() => import('../../pages/News/News.jsx'));
const Premium = React.lazy(() => import('../../pages/Premium/Premium.jsx'));
const Profile = React.lazy(() => import('../../pages/Profile/Profile.jsx'));
const Dashboard = React.lazy(() => import('../../pages/Dashboard/Dashboard.jsx'));
import PopUpTemp from '../../common/PopUp/PopUpTemp';

const Main = (props) => {
  return (
    <main className={s.main}>
      <Header />
      <PopUpTemp />
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/*' element={<Dashboard />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
