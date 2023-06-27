import React, { useState } from "react";
import AdminButtonContainer from "../../../../containers/AdminButtonContainer/AdminButtonContainer";
import Button from "../../../../UI/buttons/Button/Button";
import SearchAdminPanel from "../../../../UI/forms/SearchAdminPanel/SearchAdminPanel";
import NavAdminPanel from "../NavAdminPanel/NavAdminPanel";
import ScItemsAdmin from "../ScItemsAdmin/ScItemsAdmin";
import s from './TournamentsAdmin.module.scss';

const TournamentsAdmin = ({ state, links, icons, search }) => {

	return (
		<div className={s.tournaments}>
			<NavAdminPanel list={links} />
			<div className={s.tournaments__header}>
				<ScItemsAdmin list={icons} />
				<SearchAdminPanel ph={search.ph} name={search.name} />
				<AdminButtonContainer buttonList={state.buttonList}/>
			</div>
		</div>
	)
}

export default TournamentsAdmin;