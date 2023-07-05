import React from "react";
import s from './TitleForm.module.scss';

const TitleForm = ({ title, style }) => {
	return (
		<h2 className={s.title} style={style ? style : {}}>{title}</h2>
	)
}

export default TitleForm;