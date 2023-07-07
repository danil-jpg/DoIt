import React, { useState } from 'react';
import s from './RadioBtnList.module.scss';
import { isChecked } from '../../../utils/isActive';
import TitleForm from '../TitleForm/TitleForm';

const RadioBtnList = ({ list, title, def }) => {
	const [checked, setChecked] = useState(def);

	const onClickHandler = (value) => setChecked(value);

	return (
		<>
			<TitleForm title={title} />
			<ul className={s.list}>
				{list.map(el => (
					<li key={el.id}
						className={`${s.item} ${isChecked(checked, el.value, s.active)}`}
						onClick={() => { onClickHandler(el.value) }}
					>
						{el.title}
					</li>
				))}
			</ul>
		</>
	);
}

export default RadioBtnList;