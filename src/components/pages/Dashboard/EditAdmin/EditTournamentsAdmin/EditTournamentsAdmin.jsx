import React from "react";
import EditAdminBtn from "../../../../UI/buttons/EditAdminBtn/EditAdminBtn";
import BasicInfo from "../accordionList/BasicInfo/BasicInfo";
import GameInfo from "../accordionList/GameInfo/GameInfo";
import s from './EditTournamentsAdmin.module.scss';

const EditTournamentsAdmin = ({ state }) => {
	return (
		<>
			<EditAdminBtn>New/Edit Tournament</EditAdminBtn>
			<BasicInfo state={state.basic} />
			<GameInfo state={state.game}/>
		</>
	)
}

export default EditTournamentsAdmin;