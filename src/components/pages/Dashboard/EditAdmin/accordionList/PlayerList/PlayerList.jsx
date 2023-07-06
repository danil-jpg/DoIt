import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import Button from "../../../../../UI/buttons/Button/Button";
import CheckboxAdmin from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";
import s from './PlayerList.module.scss';

const PlayerList = ({ state }) => {

	return (
		<Accordion
			header={state.title}
		>
			<div className={s.players}>
				<div className={s.players__buttons}>
					{state.btnList.map(el => (
						<Button
							style={{ color: '#0A61E1' }}
							to={el.link}
							key={el.id}>{el.title}</Button>
					))}
				</div>

				<CheckboxAdmin
					title={state.checkbox.title}
					checked={state.checkbox.checked}
				/>
			</div>
		</Accordion>
	)
}

export default PlayerList;