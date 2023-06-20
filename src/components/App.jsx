import React from "react";
import './App.scss';
import Main from "./containers/Main/Main"
import Navbar from "./containers/Navbar/Navbar";


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
