import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './AdditionalInfo.module.scss';
import CheckboxAdmin from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";
import InputForm from "../../../../../UI/forms/InputForm/InputForm";
import Button from "../../../../../UI/buttons/Button/Button";

const AdditionalInfo = ({ state }) => {
	const [ageValue, setAgeValue] = useState(state.age.value);

	return (
		<Accordion
			header={state.title}
		>
			<div className={s.additional}>
				<div className={s.additional__left}>
					{state.list.map((el, index) => (
						<CheckboxAdmin
							style={
								index === state.list.length - 1
									? { margin: 0 }
									: { margin: '0 0 22px' }
							}
							key={el.id}
							title={el.title}
							checked={el.checked}
						/>
					))}
				</div>
				<div className={s.additional__right}>
					<div className={s.additional__wrap}>
						<p className={s.additional__text}>
							{state.country.title}
						</p>

						<Button
							style={{ color: '#0A61E1', padding: '12px 9px' }}
							to={state.country.link}
						>
							{state.country.titleBtn}
						</Button>
					</div>
					<div className={s.additional__wrap}>
						<p className={s.additional__text}>
							{state.age.title}
						</p>

						<InputForm
							style={{padding: '4px 10px'}}
							value={ageValue}
							setValue={setAgeValue}
						/>
					</div>
				</div>
			</div>
		</Accordion>
	)
}

export default AdditionalInfo;