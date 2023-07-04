import React from "react";
import { useState } from "react";
import Accordion from "../../../../common/Accordion/Accordion";
import InputFormContainer from "../../../../UI/forms/InputFormContainer/InputFormContainer";
import SelectFormContainer from "../../../../UI/forms/SelectFormContainer/SelectFormContainer";
import s from './EditTournamentsAdmin.module.scss';

const EditTournamentsAdmin = () => {
	const [hostValue, setHostValue] = useState('');

	return (
		<>
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
		</>
	)
}

export default EditTournamentsAdmin;