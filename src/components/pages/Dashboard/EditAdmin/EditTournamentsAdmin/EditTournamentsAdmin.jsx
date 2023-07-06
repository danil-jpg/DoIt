import React from "react";
import EditAdminBtn from "../../../../UI/buttons/EditAdminBtn/EditAdminBtn";
import BasicInfo from "../accordionList/BasicInfo/BasicInfo";
import GameInfo from "../accordionList/GameInfo/GameInfo";
import IfPaid from "../accordionList/IfPaid/IfPaid";
import LeagueInfo from "../accordionList/LeagueInfo/LeagueInfo";
import PlayerList from "../accordionList/PlayerList/PlayerList";
import RegInfo from "../accordionList/RegInfo/RegInfo";
import s from './EditTournamentsAdmin.module.scss';

const EditTournamentsAdmin = ({ state }) => {
	return (
		<>
			<EditAdminBtn>New/Edit Tournament</EditAdminBtn>
			<BasicInfo state={state.basic} />
			<GameInfo state={state.game} />
			<RegInfo state={state.reg} />
			<IfPaid state={state.ifPaid} />
			<PlayerList state={state.players} />
			<LeagueInfo state={state.leagues} />
		</>
	)
}

export default EditTournamentsAdmin;