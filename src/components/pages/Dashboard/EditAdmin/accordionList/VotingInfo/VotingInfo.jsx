import React from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './VotingInfo.module.scss';
import CheckboxAdmin from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";

const VotingInfo = ({ state }) => {
	return (
		<Accordion
			header={state.title}
		>
			<CheckboxAdmin
				style={{margin: '0 0 22px'}}
				title={state.check1.title}
				checked={state.check1.checked} />
			<CheckboxAdmin
				title={state.check2.title}
				checked={state.check2.checked} />
		</Accordion>
	)
}

export default VotingInfo;