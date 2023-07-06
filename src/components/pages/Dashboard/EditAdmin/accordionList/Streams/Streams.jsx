import React from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './Streams.module.scss';
import { useState } from "react";
import InputFormContainer from "../../../../../UI/forms/InputFormContainer/InputFormContainer";
import SelectForm from "../../../../../UI/forms/SelectForm/SelectForm";
import Button from "../../../../../UI/buttons/Button/Button";

const Streams = ({ state }) => {
	const [firstStream, setFirstStream] = useState(state.stream1.value);
	const [secondStream, setSecondStream] = useState(state.stream2.value);
	const [thirdStream, setThirdStream] = useState(state.stream3.value);

	const inputStyle = { margin: '0 0 12px' };
	const selectStyle = { maxWidth: '160px', margin: '0 0 0 auto' };

	return (
		<Accordion
			header={state.title}
		>
			<div className={s.streams}>
				<InputFormContainer
					style={inputStyle}
					title={state.stream1.title}
					value={firstStream}
					setValue={setFirstStream}
				/>
				<SelectForm
					style={selectStyle}
					list={state.stream1.list} />
			</div>

			<div className={s.streams}>
				<InputFormContainer
					style={inputStyle}
					title={state.stream2.title}
					value={secondStream}
					setValue={setSecondStream}
				/>
				<SelectForm
					style={selectStyle}
					list={state.stream2.list} />
			</div>

			<div className={s.streams}>
				<InputFormContainer
					style={inputStyle}
					title={state.stream3.title}
					value={thirdStream}
					setValue={setThirdStream}
				/>
				<SelectForm
					style={selectStyle}
					list={state.stream3.list} />
			</div>
			<Button to=''
				style={{ maxWidth: '187px', margin: '0 auto' }}>{state.titleBtn}</Button>
		</Accordion>
	)
}

export default Streams;