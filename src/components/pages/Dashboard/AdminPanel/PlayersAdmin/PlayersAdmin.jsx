import React from "react";
import NavAdminPanel from "../NavAdminPanel/NavAdminPanel";
import s from './PlayersAdmin.module.scss';

const PlayersAdmin = ({ state, list }) => {

	console.log(list)

	return (
		<div className={s.admin}>
			<NavAdminPanel list={list} />

		</div>
	)
}

export default PlayersAdmin;