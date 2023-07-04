import React from "react";
import s from '../Accordion.module.scss';
import { isActive } from "../../../utils/isActive";

const AccordionBody = ({ children, opened }) => {
	return (
		<div className={`${s.accordion__body} ${isActive(opened, s.active)}`}>
			<div className={s.accordion__container}>
				{children}
			</div>
		</div>
	)
}

export default AccordionBody;