import React from "react";
import Button from "../../../../UI/buttons/Button/Button";
import EditAdminBtn from "../../../../UI/buttons/EditAdminBtn/EditAdminBtn";
import AdvanceInfo from "../accordionList/AdvanceInfo/AdvanceInfo";
import BasicInfoPlayers from "../accordionList/BasicInfo/BasicInfoPlayers";
import s from './EditPlayersAdmin.module.scss';

const EditPlayersAdmin = ({ state }) => {
	return (
		<>
			<EditAdminBtn>New/Edit Players</EditAdminBtn>
			<BasicInfoPlayers state={state.basic} />
			<AdvanceInfo state={state.advance}/>

			<div className={s.buttons}>
				{state.buttonList.map(el => (
					<Button
						style={{ padding: '16px 10px' }}
						to={el.title}
						key={el.id}>{el.title}</Button>
				))}
			</div>
		</>
	)
}

export default EditPlayersAdmin;