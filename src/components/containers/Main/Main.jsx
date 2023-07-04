import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Main.module.scss';
import Header from '../../common/Header/Header';

const Home = React.lazy(() => import('../../pages/Home/Home.jsx'));
const News = React.lazy(() => import('../../pages/News/News.jsx'));
const Premium = React.lazy(() => import('../../pages/Premium/Premium.jsx'));
const Profile = React.lazy(() => import('../../pages/Profile/Profile.jsx'));
const AdminPanel = React.lazy(() => import('../../pages/Dashboard/AdminPanel/AdminPanel'));
const About = React.lazy(() => import('../../pages/AboutUs/AboutUs.jsx'));
const Contact = React.lazy(() => import('../../pages/ContactUs/ContactUs.jsx'));
const TournamentsMain = React.lazy(() => import('../../pages/Tournaments/TournamentsMain.jsx'));
const TournamentsInfo = React.lazy(() => import('../../pages/TournamentsInfo/TournamentsInfo.jsx'));
const TournamentsPlayer = React.lazy(() =>
  import('../../pages/TournamentsPlayer/TournamentsPlayer.jsx')
);
const TournamentsStanding = React.lazy(() =>
  import('../../pages/TournamentsStanding/TournamentStanding.jsx')
);
const TournamentBet = React.lazy(() => {
  import('../../pages/TournamentsBet/TournamentsBet.jsx');
});
const TournamentsBracket = React.lazy(() =>
  import('../../pages/TournamentsBracket/TournamentsBracket.jsx')
);

const Main = (props) => {
  return (
    <main className={s.main}>
      <Header />
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/*' element={<AdminPanel />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/tournamentsMain' element={<TournamentsMain />} />
          <Route path='/tournamentsInfo' element={<TournamentsInfo />} />
          <Route path='/tournamentsPlayer' element={<TournamentsPlayer />} />
          <Route path='/tournamentsStanding' element={<TournamentsStanding />} />
          <Route path='/tournamentBet' element={<TournamentBet />} />
          <Route path='/tournamentsBracket' element={<TournamentsBracket />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
