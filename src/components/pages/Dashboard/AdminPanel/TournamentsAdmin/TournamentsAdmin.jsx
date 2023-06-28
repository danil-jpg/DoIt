import React, { useState } from "react";
import AdminTableContainer from "../../../../containers/AdminContainers/AdminTableContainer/AdminTableContainer";
import BodyContainerAdmin from "../../../../containers/AdminContainers/AdminTableContainer/BodyContainerAdmin/BodyContainerAdmin";
import HeaderAdminContainer from "../../../../containers/AdminContainers/AdminTableContainer/HeaderAdminContainer/HeaderAdminContainer";
import s from './TournamentsAdmin.module.scss';

const TournamentsAdmin = ({ state }) => {

	return (
		<AdminTableContainer>
			<HeaderAdminContainer>
				<div className={`${s.itemHeader}`}></div>
				<div className={`${s.itemHeader}`}></div>
				<div className={`${s.itemHeader}`}></div>
				<div className={`${s.itemHeader}`}></div>
				<div className={`${s.itemHeader}`}></div>
			</HeaderAdminContainer>
			<BodyContainerAdmin>
				<div className={`${s.itemBody}`}>
					
				</div>
				<div className={`${s.itemBody}`}></div>
				<div className={`${s.itemBody}`}></div>
				<div className={`${s.itemBody}`}></div>
				<div className={`${s.itemBody}`}></div>
			</BodyContainerAdmin>
		</AdminTableContainer>
	)
}

export default TournamentsAdmin;