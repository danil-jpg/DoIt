import React from "react";
import EditAdminBtn from "../../../../UI/buttons/EditAdminBtn/EditAdminBtn";
import BasicInfo from "../accordionList/BasicInfo/BasicInfo";
import s from './EditTournamentsAdmin.module.scss';

const EditTournamentsAdmin = ({ state }) => {
	return (
		<>
			<EditAdminBtn>New/Edit Tournament</EditAdminBtn>
			<BasicInfo />
		</>
	)
}

export default EditTournamentsAdmin;