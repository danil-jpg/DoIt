import React from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { IconRenderer } from "./utils/IconRenderer/Icon";

const App = ({ store }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <Main />
        <IconRenderer id={"board"} />
      </div>
    </div>
  );
};

export default App;
