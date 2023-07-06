import React from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './Sponsors.module.scss';
import { useState } from "react";
import UploadForm from "../../../../../UI/forms/UploadForm/UploadForm";
import Button from "../../../../../UI/buttons/Button/Button";

const Sponsors = ({ state }) => {
	const [lobbyValue, setLobbyValue] = useState();

	return (
		<Accordion
			header={state.title}
		>
			<div className={s.sponsors}>
				{state.list.map((el, index) => (
					<UploadForm
						key={el.id}
						title={el.title}
						text={el.ph}
					/>
				))}
			</div>
			<Button to=''
				style={{ maxWidth: '187px', margin: '40px auto 0' }}>{state.titleBtn}</Button>
		</Accordion>
	)
}

export default Sponsors;