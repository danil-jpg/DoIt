import React from "react";
import s from './InputBody.module.scss';

const InputBody = ({ title, text, style }) => {
	return (
		<div className={s.inputBody} style={style ? style : {}}>
			<h1 className={s.inputBody__title}>{title}</h1>
			{
				text
					? <p className={s.inputBody__text}>{text}</p>
					: <></>
			}
		</div>
	)
}

export default InputBody;