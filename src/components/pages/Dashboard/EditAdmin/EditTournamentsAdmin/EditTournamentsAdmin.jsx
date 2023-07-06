import React from "react";
import EditAdminBtn from "../../../../UI/buttons/EditAdminBtn/EditAdminBtn";
import BasicInfo from "../accordionList/BasicInfo/BasicInfo";
import GameInfo from "../accordionList/GameInfo/GameInfo";
import RegInfo from "../accordionList/RegInfo/RegInfo";
import s from './EditTournamentsAdmin.module.scss';

const EditTournamentsAdmin = ({ state }) => {
	return (
		<>
			<EditAdminBtn>New/Edit Tournament</EditAdminBtn>
			<BasicInfo state={state.basic} />
			<GameInfo state={state.game}/>
			<RegInfo state={state.reg}/>
		</>
	)
}

export default EditTournamentsAdmin;