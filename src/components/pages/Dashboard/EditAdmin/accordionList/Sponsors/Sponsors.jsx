import React from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './Sponsors.module.scss';
import CheckboxAdmin from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";
import { useState } from "react";

const Sponsors = ({ state }) => {
	const [lobbyValue, setLobbyValue] = useState();

	return (
		<Accordion
			header={state.title}
		>

		</Accordion>
	)
}

export default Sponsors;