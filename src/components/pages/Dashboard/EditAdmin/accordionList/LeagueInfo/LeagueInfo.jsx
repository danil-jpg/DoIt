import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import Button from "../../../../../UI/buttons/Button/Button";
import CheckboxAdmin from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";
import s from './LeagueInfo.module.scss';

const LeagueInfo = ({ state }) => {

	return (
		<Accordion
			header={state.title}
		>
			<div className={s.league}>
				<div className={s.league__wrap}>
					<p className={s.league__text}>
						{state.text}
					</p>

					<Button
						style={{ color: '#0A61E1' }}
						to={state.titleBtn.link}
					>
						{state.titleBtn.title}
					</Button>
				</div>

				<CheckboxAdmin
					title={state.checkbox.title}
					checked={state.checkbox.checked}
				/>
			</div>
		</Accordion>
	)
}

export default LeagueInfo;