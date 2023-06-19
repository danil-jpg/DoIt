import React from "react";
import './App.scss';
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

const App = ({ store }) => {

	return (
		<div className="wrapper">
			<div className="container">
				<Navbar />
				<Main />
			</div>
		</div>
	)
}

export default App;
