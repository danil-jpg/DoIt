import React from "react";
import './App.scss';
import { Route,Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";

const App = ({ store }) => {

	return (
		<div className="wrapper">
			<Navbar/>
			<Main/>
		</div>		
	)
}

export default App;
