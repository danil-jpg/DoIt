import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import InputFormContainer from "../../../../../UI/forms/InputFormContainer/InputFormContainer";
import UrlFormContainer from "../../../../../UI/forms/UrlFormContainer/UrlFormContainer";

const BasicInfoPlayers = ({ state }) => {
	const [nameValue, setNameValue] = useState(state.name.value);
	const [idValue, setIdValue] = useState(state.id.value);
	const [sexValue, setSexValue] = useState(state.sex.value);
	const [ageValue, setAgeValue] = useState(state.age.value);
	const [countryValue, setCountryValue] = useState(state.country.value);
	const [nationalValue, setNationalValue] = useState(state.national.value);
	const [siteValue, setSiteValue] = useState(state.site.value);
	const [urlValue, setUrlValue] = useState(state.url.value);

	return (
		<Accordion
			header={state.title}
		>
			<InputFormContainer
				title={state.name.title}
				name={state.name.title}
				ph={state.name.ph}
				value={nameValue}
				setValue={setNameValue}
			/>
			<InputFormContainer
				title={state.id.title}
				name={state.id.title}
				ph={state.id.ph}
				value={idValue}
				setValue={setIdValue}
			/>
			<InputFormContainer
				title={state.sex.title}
				name={state.sex.title}
				ph={state.sex.ph}
				value={sexValue}
				setValue={setSexValue}
			/>
			<InputFormContainer
				title={state.age.title}
				name={state.age.title}
				ph={state.age.ph}
				value={ageValue}
				setValue={setAgeValue}
			/>
			<InputFormContainer
				title={state.country.title}
				name={state.country.title}
				ph={state.country.ph}
				value={countryValue}
				setValue={setCountryValue}
			/>
			<InputFormContainer
				title={state.national.title}
				name={state.national.title}
				ph={state.national.ph}
				value={nationalValue}
				setValue={setNationalValue}
			/>
			<InputFormContainer
				title={state.site.title}
				name={state.site.title}
				ph={state.site.ph}
				value={siteValue}
				setValue={setSiteValue}
			/>

			<UrlFormContainer
				label={state.url.label}
				title={state.url.title}
				name={state.url.title}
				value={urlValue}
				setValue={setUrlValue}
			/>
		</Accordion>
	)
}

export default BasicInfoPlayers;