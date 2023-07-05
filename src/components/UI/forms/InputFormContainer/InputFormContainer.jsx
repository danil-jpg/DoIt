import React from "react";
import InputForm from "../InputForm/InputForm";
import s from './InputFormContainer.module.scss';

const InputFormContainer = ({ style, title, name, type, ph, value, setValue, error }) => {


	return (
		<div
			className={`${s.inputContainer}`} style={style ? style : {}}>
			<h2 className={`${s.inputContainer__title}`}>{title}</h2>
			<InputForm
				name={name}
				ph={ph}
				type={type}
				value={value}
				setValue={setValue}
			/>
		</div>
	)
}

export default InputFormContainer;