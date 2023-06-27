import React, { useState } from "react";
import NavAdminPanel from "../NavAdminPanel/NavAdminPanel";
import NavPanel from "../NavAdminPanel/NavAdminPanel";
import ScItemsAdmin from "../ScItemsAdmin/ScItemsAdmin";
import s from './TournamentsAdmin.module.scss';

const TournamentsAdmin = ({ state, links, icons }) => {

	return (
		<div className={s.tournaments}>
			<NavAdminPanel list={links} />
			<div className={s.tournaments__header}>
				<ScItemsAdmin list={icons} />
			</div>
		</div>
	)
}

export default TournamentsAdmin;