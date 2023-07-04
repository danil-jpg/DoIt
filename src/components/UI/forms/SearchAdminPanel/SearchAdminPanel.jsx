import React, { useState } from "react";
import s from './SearchAdminPanel.module.scss';
import { IconRenderer } from '../../IconRenderer/IconRenderer';

const SearchAdminPanel = ({ style, ph, name, }) => {
	const [value, setValue] = useState('');

	const onValueChangeHandler = e => {
		setValue(e.currentTarget.value);
	}

	return (
		<div className={s.search} style={style ? style : {}}>
			<input
				type="text"
				className={s.search__input}
				value={value}
				onChange={e => { onValueChangeHandler(e) }}
				placeholder={ph ? ph : ''}
				name={name ? name : ''}
			/>
			<button className={s.search__btn}>
				<IconRenderer id="iconSearch" className={s.search__iconBtn} />
			</button>
		</div>
	)
}

export default SearchAdminPanel;