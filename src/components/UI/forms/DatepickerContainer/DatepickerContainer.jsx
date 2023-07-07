import React from "react";
import { useState } from "react";
import TitleForm from "../TitleForm/TitleForm";
import './DatepickerContainer.scss';
import DatePicker from "react-datepicker";

const DatepickerContainer = ({ title, style = {} }) => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<>
			<TitleForm title={title} />
			<div className="datepicker" style={style}>
				<div className="datepicker__container">
					<DatePicker
						style={{ margin: '0 10px 0 0' }}
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						dateFormat="dd.MM.yyyy"
					/>
				</div>
				<div className="datepicker__container">
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={15}
						timeCaption="Time"
						dateFormat="h:mm aa"
					/>
				</div>
			</div>
		</>
	)
}

export default DatepickerContainer;