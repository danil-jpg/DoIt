import React from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './Rules.module.scss';
import { useState } from "react";
import TextareaFormContainer from "../../../../../UI/forms/TextareaFormContainer/TextareaFormContainer";

const Rules = ({ state }) => {
	const [lobbyValue, setLobbyValue] = useState();

	return (
		<Accordion
			header={state.title}
		>
			<TextareaFormContainer
				style={{ margin: '0' }}
				height='348px'
				title={state.field.title}
				ph={state.field.ph}
			/>
		</Accordion>
	)
}

export default Rules;