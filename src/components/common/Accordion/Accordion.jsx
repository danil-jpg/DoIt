import React, { useState } from "react";
import s from './Accordion.module.scss';
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionHeader from "./AccordionHeader/AccordionHeader";
import { isActive } from "../../utils/isActive";

const Accordion = ({ children, header }) => {
	const [opened, setOpened] = useState(true);

	const onOpenClickHandler = () => setOpened(!opened);

	return (
		<div className={`${s.accordion} ${isActive(opened, s.active)}`}>
			<AccordionHeader
				opened={opened}
				setOpened={setOpened}
				onClick={onOpenClickHandler}
			>
				{header}
			</AccordionHeader>
			<AccordionBody
				opened={opened}
				setOpened={setOpened}>
				{children}
			</AccordionBody>
		</div>
	)
}

export default Accordion;