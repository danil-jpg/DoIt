import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Container from "../../../containers/Container/Container";
import s from './EditAdmin.module.scss';
import EditTournamentsAdmin from "./EditTournamentsAdmin/EditTournamentsAdmin";
import { editAdminData } from "../../../../store/store";
import { useState } from "react";

const EditAdmin = () => {
	const [state, setState] = useState(editAdminData);

	return (
		<Container className={s.container}>
			<Routes>
				<Route index element={<>
					<Link to='/edit/tournaments'>EditTournamentsAdmin</Link>
				</>}/>
				<Route path='tournaments' element={<EditTournamentsAdmin state={state.tournaments} />} />
			</Routes>
		</Container>
	)
}

export default EditAdmin;