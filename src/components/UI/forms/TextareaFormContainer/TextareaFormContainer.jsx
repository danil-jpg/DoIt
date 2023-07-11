import React from "react";
import TextareaForm from "../TextareaForm/TextareaForm";
import s from './TextareaFormContainer.module.scss';

const TextareaFormContainer = ({ style, title, name, type, ph, value, setValue, height, error }) => {


	return (
		<div
			className={`${s.textareaContainer}`} style={style ? style : {}}>
			<h2 className={`${s.textareaContainer__title}`}>{title}</h2>
			<TextareaForm
				style={height ? { height: height } : {}}
				name={name}
				ph={ph}
				type={type}
				value={value}
				setValue={setValue}
			/>
			
		</div>
	)
}

export default TextareaFormContainer;