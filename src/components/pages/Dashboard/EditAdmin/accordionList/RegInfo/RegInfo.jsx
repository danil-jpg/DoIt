import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import RadioBtnList from "../../../../../UI/forms/RadioBtnList/RadioBtnList";
import s from './RegInfo.module.scss';

const RegInfo = ({ state }) => {
	const [plan, setPlan] = useState('free')

	return (
		<Accordion
			header={state.title}
		>
			<RadioBtnList 
				list={state.plan.list}
				title={state.plan.title}
				def={state.plan.default}
			/>
		</Accordion>
	)
}

export default RegInfo;