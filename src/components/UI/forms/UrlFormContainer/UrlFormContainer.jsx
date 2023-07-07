import React from "react";
import InputForm from "../InputForm/InputForm";
import s from './UrlFormContainer.module.scss';

const UrlFormContainer = ({ style, title, name, type, ph, value, setValue, label, error }) => {


	return (
		<div
			className={`${s.inputContainer}`} style={style ? style : {}}>
			<h2 className={`${s.inputContainer__title}`}>{title}</h2>
			<div className={`${s.inputContainer__wrap}`}>
				<InputForm
					style={{paddingLeft: '110px'}}
					name={name}
					ph={ph}
					type={type}
					value={value}
					setValue={setValue}
				/>
				<span className={s.inputContainer__label}>{label}</span>
			</div>
		</div>
	)
}

export default UrlFormContainer;