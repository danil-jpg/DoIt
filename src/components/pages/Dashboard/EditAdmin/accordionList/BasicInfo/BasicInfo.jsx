import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import InputFormContainer from "../../../../../UI/forms/InputFormContainer/InputFormContainer";
import SelectFormContainer from "../../../../../UI/forms/SelectFormContainer/SelectFormContainer";
import s from './BasicInfo.module.scss';

const BasicInfo = ({ state }) => {
	const [hostValue, setHostValue] = useState('');

	return (
		<Accordion
			header='Basic info'
		>
			<SelectFormContainer
				list={['Tournament name*', 'Basic info', 3]}
				title='Host'
			/>

			<InputFormContainer
				title='Tournament name*'
				name='Tournament name*'
				value={hostValue}
				setValue={setHostValue}
			/>
		</Accordion>
	)
}

export default BasicInfo;