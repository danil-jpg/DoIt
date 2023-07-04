import React, {useState} from "react";
import s from './Accordion.module.scss';
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionHeader from "./AccordionHeader/AccordionHeader";

const Accordion = ({ children, header }) => {
	const [opened, setOpened] = useState(false);

	return (
		<div className={s.accordion}>
			<AccordionHeader
				opened={opened}
				setOpened={setOpened}>
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