import React, { useState } from "react";
import s from './UserBlockHeader.module.scss';
import { headerData } from "../../../store/store";
import Button from "../../UI/buttons/Button/Button";

const UserBlockHeader = (props) => {
	let [state, setState] = useState(headerData);

	return (
		<div className={s.user}>
			<div className={s.user__buttonList}>
				<Button>Login</Button>
				<Button color={'blue'}>Sign up</Button>
			</div>
		</div>
	)
}

export default UserBlockHeader;