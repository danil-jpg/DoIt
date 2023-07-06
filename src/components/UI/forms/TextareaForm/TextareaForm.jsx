import React from "react";
import s from './TextareaForm.module.scss';

const TextareaForm = ({
	type,
	ph,
	name,
	value,
	setValue,
	style,
	error
}) => {

	const onInputChangeHandler = e => { setValue(e.currentTarget.value) }

	return (
		<>
			<textarea
				style={style ? style : {}}
				className={`${s.textarea}`}
				type={type ? type : 'text'}
				placeholder={ph ? ph : ''}
				name={name ? name : ''}
				aria-label={name ? name : ''}
				value={value}
				onChange={e => { onInputChangeHandler(e) }}
			></textarea>
		</>
	)
}

export default TextareaForm;