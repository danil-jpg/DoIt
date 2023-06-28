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
						<AdminContainer
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList}>
							<TournamentsAdmin
								state={state.tournaments}
							/>
						</AdminContainer>
					} />
					<Route path="/team" element={
						<AdminContainer
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList}>
							<TeamAdmin state={state.tournaments} list={state.links} />
						</AdminContainer>
					} />
					<Route path="/players" element={
						<AdminContainer
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList}>
							<PlayersAdmin state={state.tournaments} list={state.links} />
						</AdminContainer>
					} />
					<Route path="/news" element={
						<AdminContainer
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList}>
							<NewsAdmin state={state.tournaments} list={state.links} />
						</AdminContainer>
					} />
					<Route path="/leagues" element={
						<AdminContainer
							icons={state.icons}
							search={state.search}
							buttonList={state.tournaments.buttonList}>
							<LeaguesAdmin state={state.tournaments} list={state.links} />
						</AdminContainer>
					} />
				</Routes>
			</Container>
		</div>
	)
}

export default AdminPanel;