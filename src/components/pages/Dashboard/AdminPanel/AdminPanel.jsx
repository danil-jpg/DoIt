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
import NavAdminPanel from "./NavAdminPanel/NavAdminPanel";
import AdminContainer from '../../../containers/AdminContainers/AdminContainer/AdminContainer';

const AdminPanel = () => {
	const [state, setState] = useState(adminPanel);

	return (
		<div className={s.admin}>
			<Container>

				<NavAdminPanel list={state.links} />
				<Routes>
					<Route path="/tournaments" element={
						<TournamentsAdmin
							state={state.tournaments}
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList} />
					} />
					<Route path="/team" element={
						<TeamAdmin
							state={state.teams}
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList} />
					} />
					<Route path="/players" element={
						<PlayersAdmin
							state={state.players}
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList} />
					} />
					<Route path="/news" element={
						<NewsAdmin
							state={state.news}
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList} />
					} />
					<Route path="/leagues" element={
							<LeaguesAdmin
							state={state.league}
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList} />
					} />
				</Routes>
			</Container>
		</div>
	)
}

export default AdminPanel;