import React from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import UploadForm from "../../../../../UI/forms/UploadForm/UploadForm";

const AdvanceInfo = ({ state }) => {

	return (
		<Accordion
			header={state.title}
		>
			<UploadForm
				title={state.title}
				text={state.ph}
			/>
		</Accordion>
	)
}

export default AdvanceInfo;