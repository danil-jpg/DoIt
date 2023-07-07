import React from "react";
import RadioForm from "../RadioForm/RadioForm";
import TitleForm from "../TitleForm/TitleForm";
import s from './RadioFormContainer.module.scss';

const RadioFormContainer = ({ style, list, name, title, checked, setChecked }) => {

	return (
		<div
			className={`${s.radioContainer}`} style={style ? style : {}}>
			<TitleForm title={title} />
			<div className={s.radioContainer__list}>
				{list.map(el => (
					<RadioForm
						key={el.id}
						name={name ? name : title}
						title={el.title}
						value={el.value}
						checked={checked}
						setChecked={setChecked}
					/>
				))}
			</div>

		</div>
	)
}

export default RadioFormContainer;