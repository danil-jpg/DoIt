import React from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './Rules.module.scss';
import { useState } from "react";
import TextareaFormContainer from "../../../../../UI/forms/TextareaFormContainer/TextareaFormContainer";

const Rules = ({ state }) => {
	const [rulesValue, setRulesValue] = useState();

	return (
		<Accordion
			header={state.title}
		>
			<TextareaFormContainer
				style={{ margin: '0' }}
				height='348px'
				title={state.field.title}
				ph={state.field.ph}
				value={rulesValue}
				setValue={setRulesValue}
			/>
		</Accordion>
	)
}

export default Rules;