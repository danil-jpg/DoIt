import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import InputFormContainer from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";
import SelectFormContainer from "../../../../../UI/forms/SelectFormContainer/SelectFormContainer";
import TextareaFormContainer from "../../../../../UI/forms/TextareaFormContainer/TextareaFormContainer";
import UrlFormContainer from "../../../../../UI/forms/UrlFormContainer/UrlFormContainer";
import s from './BasicInfo.module.scss';

const BasicInfo = ({ state }) => {
	const [hostValue, setHostValue] = useState('');
	const [rulesValue, setRulesValue] = useState('');
	const [urlValue, setUrlValue] = useState(state.url.value);

	return (
		<Accordion
			header={state.title}
		>
			<SelectFormContainer
				list={state.host.list}
				title={state.host.title}
			/>

			<InputFormContainer
				title={state.name.title}
				name={state.name.title}
				ph={state.name.ph}
				value={hostValue}
				setValue={setHostValue}
			/>

			<UrlFormContainer
				label={state.url.label}
				title={state.url.title}
				name={state.url.title}
				value={urlValue}
				setValue={setUrlValue}
			/>

			<TextareaFormContainer
				style={{ margin: '0' }}
				title={state.rules.title}
				name={state.rules.title}
				ph={state.rules.ph}
				value={rulesValue}
				setValue={setRulesValue}
			/>
		</Accordion>
	)
}

export default BasicInfo;