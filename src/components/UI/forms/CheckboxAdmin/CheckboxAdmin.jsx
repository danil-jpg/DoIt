import React, { useState } from 'react';
import InputBody from '../InputBody/InputBody';
import s from './CheckboxAdmin.module.scss';

const CheckboxAdmin = ({ style, name, text, title, checked = false }) => {
	let [check, setCheck] = useState(checked);

	const onChangeHandler = () => { setCheck(!check) }

	return (
		<label className={`${s.checkbox}`} style={style ? style : {}}>
			<input className={`${s.checkbox__input}`}
				type="checkbox"
				name={name}
				checked={check}
				onChange={onChangeHandler}
			/>
			<div className={s.checkbox__custom}></div>
			<InputBody
				title={title}
				text={text} />
		</label>
	);
}

export default CheckboxAdmin;