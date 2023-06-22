import React from "react";
import "./App.scss";
import Navbar from "./common/Navbar/Navbar";
import Main from "./containers/Main/Main";

const App = ({ store }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
