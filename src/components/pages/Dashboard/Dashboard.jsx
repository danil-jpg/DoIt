import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../../containers/Container/Container";
import AdminPanel from "./AdminPanel/AdminPanel";
import UserPanel from "./UserPanel/UserPanel";

const Dashboard = () => {
	return (
		<Container>
			<Routes>
				<Route path="/*" element={<AdminPanel />} />
				{/* <Route path='user' element={<UserPanel />} /> */}
			</Routes>
		</Container>
	)
}

export default Dashboard;