import React, { useState } from "react";
import NavAdminPanel from "../NavAdminPanel/NavAdminPanel";
import NavPanel from "../NavAdminPanel/NavAdminPanel";
import s from './LeaguesAdmin.module.scss';

const LeaguesAdmin = ({ state, list }) => {

	console.log(list)

	return (
		<div className={s.admin}>
			<NavAdminPanel list={list} />

		</div>
	)
}

export default LeaguesAdmin;