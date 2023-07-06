import React, { Children } from "react";
import s from '../Accordion.module.scss';

const AccordionHeader = ({ children, onClick, opened }) => {
	return (
		<div className={`${s.accordion__header}`}
			onClick={onClick}
		>
			{children}
		</div>
	)
}

export default AccordionHeader;