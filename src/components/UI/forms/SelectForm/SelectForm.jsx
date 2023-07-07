import React, { useRef, useState, useEffect } from "react";
import s from './SelectForm.module.scss';
import { isActive } from "../../../utils/isActive";

const SelectForm = ({ style, list, def }) => {
	const [active, setActive] = useState(false);

	let selectHeader = useRef(null);
	let select = useRef(null);

	let firstChild = def ? def : '';

	useEffect(() => {
		function handleClickOutside(event) {
			if (select.current && !select.current.contains(event.target)) {
				setActive(false);
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [select]);

	const onHeaderClickHandler = () => {
		setActive(!active);
	}

	const onItemClickHandler = e => {
		let current = e.currentTarget.innerHTML;
		selectHeader.current.innerHTML = current;
		onHeaderClickHandler();
	}

	return (
		<div ref={select}
			className={`${s.select} ${isActive(active, s.active)}`}
			style={style ? style : {}}>
			<p className={`${s.select__header} ${isActive(active, s.active)}`}
				onClick={onHeaderClickHandler}
				ref={selectHeader}>
				{def
					? <span className={`${s.select__default}`}>{def}</span>
					: <>
						<span className={`${s.select__text}`}>
							{list[0]}
						</span>
					</>
				}
			</p>
			<ul className={`${s.select__list} ${isActive(active, s.active)}`}>
				{
					list.map((el, i) => (
						<li
							key={i}
							className={`${s.select__item}`}
							onClick={onItemClickHandler}
						>
							{el}
						</li>
					))
				}
			</ul>

		</div>
	)
}

export default SelectForm;