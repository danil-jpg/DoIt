import React, { useState } from "react";
import s from './UserBlockHeader.module.scss';
import { headerData } from "../../../store/store";
import Button from "../../UI/buttons/Button/Button";

const UserBlockHeader = (props) => {
	let [state, setState] = useState(headerData);

	let buttonStyles = {
		width: '100%',
		maxWidth: '400px',
		margin: '0 auto',
	}

	return (
		<div className={s.user}>
			<div className={s.user__buttonList}>
				<Button style={buttonStyles}>Login</Button>
				<Button style={buttonStyles} color={'blue'}>Sign up</Button>
			</div>
		</div>
	)
}

export default UserBlockHeader;