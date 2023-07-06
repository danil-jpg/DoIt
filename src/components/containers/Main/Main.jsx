import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Main.module.scss';
import Header from '../../common/Header/Header';
import PopUpSignIn from '../../common/PopUp/PopUpSingIn/PopUpSignIn';
import PopUpSignUp from '../../common/PopUp/PopUpSignUp/PopUpSignUp';
import PopUpReset from '../../common/PopUp/PopUpReset/PopUpReset';
import { useState } from 'react';
import TournamentBet from '../../pages/TournamentsBet/TournamentsBet.jsx';

const Home = React.lazy(() => import('../../pages/Home/Home.jsx'));
const News = React.lazy(() => import('../../pages/News/News.jsx'));
const Premium = React.lazy(() => import('../../pages/Premium/Premium.jsx'));
const Profile = React.lazy(() => import('../../pages/Profile/Profile.jsx'));
const AdminPanel = React.lazy(() => import('../../pages/Dashboard/AdminPanel/AdminPanel'));
const About = React.lazy(() => import('../../pages/AboutUs/AboutUs.jsx'));
const Contact = React.lazy(() => import('../../pages/ContactUs/ContactUs.jsx'));
const EditAdmin = React.lazy(() => import('../../pages/Dashboard/EditAdmin/EditAdmin'));
const TournamentsMain = React.lazy(() => import('../../pages/Tournaments/TournamentsMain.jsx'));
const TournamentsInfo = React.lazy(() => import('../../pages/TournamentsInfo/TournamentsInfo.jsx'));
const TournamentsPlayer = React.lazy(() =>
  import('../../pages/TournamentsPlayer/TournamentsPlayer.jsx')
);
const TournamentsStanding = React.lazy(() =>
  import('../../pages/TournamentsStanding/TournamentStanding.jsx')
);
// const TournamentBet = React.lazy(() => {
//   import('../../pages/TournamentsBet/TournamentsBet.jsx');
// });
const TournamentsBracket = React.lazy(() =>
  import('../../pages/TournamentsBracket/TournamentsBracket.jsx')
);

const Main = (props) => {
  const [login, setLogin] = useState(false);

  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [reset, setReset] = useState(false);

  return (
    <main className={s.main}>
      <Header
        login={login}
        setLogin={setLogin}
        signIn={signIn}
        setSignIn={setSignIn}
        signUp={signUp}
        setSignUp={setSignUp}
      />
      <PopUpSignIn
        signIn={signIn}
        setSignIn={setSignIn}
        setSignUp={setSignUp}
        setLogin={setLogin}
        setReset={setReset}
      />
      <PopUpSignUp
        setSignIn={setSignIn}
        signUp={signUp}
        setSignUp={setSignUp}
        setLogin={setLogin}
      />
      <PopUpReset reset={reset} setReset={setReset} setSignIn={setSignIn} />
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/*' element={<AdminPanel />} />
          <Route path='/edit/*' element={<EditAdmin />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/tournamentsMain' element={<TournamentsMain />} />
          <Route path='/tournamentsInfo' element={<TournamentsInfo />} />
          <Route path='/tournamentsPlayer' element={<TournamentsPlayer />} />
          <Route path='/tournamentsStanding' element={<TournamentsStanding />} />
          <Route path='/tournamentsBet' element={<TournamentBet />} />
          <Route path='/tournamentsBracket' element={<TournamentsBracket />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
