import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Container from "../../../containers/Container/Container";
import s from './EditAdmin.module.scss';
import EditTournamentsAdmin from "./EditTournamentsAdmin/EditTournamentsAdmin";
import { editAdminData } from "../../../../store/store";
import { useState } from "react";
import EditLeagueAdmin from "./EditLeagueAdmin/EditLeagueAdmin";
import EditPlayersAdmin from "./EditPlayersAdmin/EditPlayersAdmin";

const EditAdmin = () => {
	const [state, setState] = useState(editAdminData);

	return (
		<Container className={s.container}>
			<Routes>
				<Route index element={<>
					<Link to='/edit/tournaments'>EditTournamentsAdmin</Link>
					<Link to='/edit/league'>EditLeagueAdmin</Link>
					<Link to='/edit/players'>EditLeagueAdmin</Link>
				</>} />
				<Route path='tournaments' element={
					<EditTournamentsAdmin state={state.tournaments} />
				} />
				<Route path='league' element={
					<EditLeagueAdmin state={state.tournaments} />
				} />
				<Route path='players' element={
					<EditPlayersAdmin state={state.players} />
				} />
			</Routes>
		</Container>
	)
}

export default EditAdmin;