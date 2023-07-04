import React from "react";
import SelectForm from "../SelectForm/SelectForm";
import s from './SelectFormContainer.module.scss';

const SelectFormContainer = ({ style, title, list, def}) => {
	return (
		<div className={s.selectContainer} style={style ? style : {}}>
			<h2 className={s.selectContainer__title}>{title}</h2>
			<SelectForm
				list={list}
				def={def}
			/>
		</div>
	)
}

export default SelectFormContainer;