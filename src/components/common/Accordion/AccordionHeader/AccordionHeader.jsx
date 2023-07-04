import React, { Children } from "react";
import s from '../Accordion.module.scss';

const AccordionHeader = ({ children }) => {
	return (
		<div className={s.accordeon__header}>
			{children}
		</div>
	)
}

export default AccordionHeader;