import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './IfPaid.module.scss';
import InputForm from "../../../../../UI/forms/InputForm/InputForm";

const IfPaid = ({ state }) => {
	const [value, setValue] = useState('');

	return (
		<Accordion
			header={state.title}
		>
			<div className={s.paid}>
				<p className={s.paid__text}>{state.text}</p>
				<InputForm
					style={{maxWidth: '214px'}}
					value={value}
					setValue={setValue} />
			</div>
		</Accordion>
	)
}

export default IfPaid;