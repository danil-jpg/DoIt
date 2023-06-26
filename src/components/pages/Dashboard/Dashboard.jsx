import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../../containers/Container/Container";
import AdminPanel from "./AdminPanel/AdminPanel";
import UserPanel from "./UserPanel/UserPanel";
import Premium from "../Premium/Premium";
const Dashboard = () => {
	return (
		<Container>
			<Routes>
				<Route index element={<AdminPanel />} />
				{/* <Route path='/user' element={<UserPanel />} /> */}
			</Routes>
		</Container>
	)
}

export default Dashboard;