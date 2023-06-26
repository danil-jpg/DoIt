import React, { Suspense } from "react";
import s from './Main.module.scss';
import { Route, Routes } from "react-router-dom";
import Header from "../../common/Header/Header";
import Container from "../Container/Container";
const Home = React.lazy(() => import('../../pages/Home/Home.jsx'));
const News = React.lazy(()=> import('../../pages/News/News.jsx'))
const Premium =React.lazy(()=> import("../../pages/Premium/Premium.jsx") )
const About =React.lazy(()=>import("../../pages/AboutUs/AboutUs.jsx"))
const Contact = React.lazy(()=>import ("../../pages/ContactUs/ContactUs.jsx"))
const Main = (props) => {

  return (
    <main className={s.main}>
      <Header />
      <Container>
        <Suspense fallback={<>Loading</>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/news" element={<News/>}/>
            <Route path="/premium" element={<Premium/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Suspense>
      </Container>
    </main>
  )
}

export default Main;