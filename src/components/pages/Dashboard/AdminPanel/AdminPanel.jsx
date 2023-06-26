import React, { useState } from "react";
import s from './AdminPanel.module.scss';
import { adminPanel } from "../../../../store/store";
import { Route, Routes } from "react-router-dom";
import TournamentsAdmin from "./TournamentsAdmin/TournamentsAdmin";
import TeamAdmin from "./TeamAdmin/TeamAdmin";
import PlayersAdmin from "./PlayersAdmin/PlayersAdmin";
import NewsAdmin from "./NewsAdmin/NewsAdmin";
import LeaguesAdmin from "./LeaguesAdmin/LeaguesAdmin";
import Container from "../../../containers/Container/Container";

const AdminPanel = () => {
	const [state, setState] = useState(adminPanel);

	return (
		<div className={s.admin}>
			<Container>
				<Routes>
					<Route path="/tournaments" element={
						<TournamentsAdmin state={state.tournaments} list={state.links} />
					} />
					<Route path="/team" element={
						<TeamAdmin state={state.tournaments} list={state.links} />
					} />
					<Route path="/players" element={
						<PlayersAdmin state={state.tournaments} list={state.links} />
					} />
					<Route path="/news" element={
						<NewsAdmin state={state.tournaments} list={state.links} />
					} />
					<Route path="/leagues" element={
						<LeaguesAdmin state={state.tournaments} list={state.links} />
					} />
				</Routes>
			</Container>
		</div>
	)
}

export default AdminPanel;