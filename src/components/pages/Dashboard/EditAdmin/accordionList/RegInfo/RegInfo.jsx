import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import DatepickerContainer from "../../../../../UI/forms/DatepickerContainer/DatepickerContainer";
import RadioBtnList from "../../../../../UI/forms/RadioBtnList/RadioBtnList";
import CheckboxAdmin from '../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin';
import SelectForm from '../../../../../UI/forms/SelectForm/SelectForm';
import s from './RegInfo.module.scss';
import { Link } from "react-router-dom";

const RegInfo = ({ state }) => {

	return (
		<Accordion
			header={state.title}
		>
			<RadioBtnList
				list={state.plan.list}
				title={state.plan.title}
				def={state.plan.default} />

			<DatepickerContainer
				title={state.start.title} />

			<DatepickerContainer
				title={state.estimate.title} />

			<CheckboxAdmin
				style={{ margin: '0 0 22px' }}
				title={state.checkTime.title}
				checked={state.checkTime.checked} />

			<SelectForm
				style={{ margin: '0 0 30px', maxWidth: '160px' }}
				list={state.timeList} />

			<p className={s.text}>
				<span>{state.text}</span>
				<Link to={state.settingLink.link}>
					{state.settingLink.title}
				</Link>
			</p>
		</Accordion>
	)
}

export default RegInfo;