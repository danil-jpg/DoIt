import React, { useState } from "react";
import NavAdminPanel from "../NavAdminPanel/NavAdminPanel";
import s from './TeamAdmin.module.scss';

const TeamAdmin = ({ state, list }) => {

	console.log(list)

	return (
		<div className={s.admin}>
			<NavAdminPanel list={list} />

		</div>
	)
}

export default TeamAdmin;