import React, { useState } from "react";
import NavAdminPanel from "../NavAdminPanel/NavAdminPanel";
import NavPanel from "../NavAdminPanel/NavAdminPanel";
import s from './TournamentsAdmin.module.scss';

const TournamentsAdmin = ({ state, list }) => {

	console.log(list)

	return (
		<div className={s.admin}>
			<NavAdminPanel list={list} />
			
		</div>
	)
}

export default TournamentsAdmin;