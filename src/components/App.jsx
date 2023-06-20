import React from "react";
import './App.scss';
import DropdownList from "./DropdownList/DropdownList";

const App = ({ store }) => {

	return (
		<div className="wrapper">
			<DropdownList/>
		</div>
	)
}

export default App;
