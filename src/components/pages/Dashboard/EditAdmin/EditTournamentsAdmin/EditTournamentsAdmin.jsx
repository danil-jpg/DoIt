import React from "react";
import Button from "../../../../UI/buttons/Button/Button";
import EditAdminBtn from "../../../../UI/buttons/EditAdminBtn/EditAdminBtn";
import AdditionalInfo from "../accordionList/AdditionalInfo/AdditionalInfo";
import BasicInfo from "../accordionList/BasicInfo/BasicInfo";
import ExtraInfo from "../accordionList/ExtraInfo/ExtraInfo";
import GameInfo from "../accordionList/GameInfo/GameInfo";
import IfPaid from "../accordionList/IfPaid/IfPaid";
import LeagueInfo from "../accordionList/LeagueInfo/LeagueInfo";
import PlayerList from "../accordionList/PlayerList/PlayerList";
import PrizePool from "../accordionList/PrizePool/PrizePool";
import RegInfo from "../accordionList/RegInfo/RegInfo";
import Rules from "../accordionList/Rules/Rules";
import Sponsors from "../accordionList/Sponsors/Sponsors";
import Streams from "../accordionList/Streams/Streams";
import VotingInfo from "../accordionList/VotingInfo/VotingInfo";
import s from './EditTournamentsAdmin.module.scss';

const EditTournamentsAdmin = ({ state }) => {
	return (
		<>
			<EditAdminBtn>New/Edit Tournament</EditAdminBtn>
			<BasicInfo state={state.basic} />
			<GameInfo state={state.game} />
			<RegInfo state={state.reg} />
			<IfPaid state={state.ifPaid} />
			<PlayerList state={state.players} />
			<LeagueInfo state={state.leagues} />
			<PrizePool state={state.prize} />
			<VotingInfo state={state.voting} />
			<AdditionalInfo state={state.additional} />
			<ExtraInfo state={state.extra} />
			<Streams state={state.streams} />
			<Sponsors state={state.sponsors} />
			<Rules state={state.rules} />

			<div className={s.buttons}>
				{state.buttonList.map(el => (
					<Button
						style={{padding: '16px 10px'}}
						to={el.title}
						key={el.id}>{el.title}</Button>
				))}
			</div>
		</>
	)
}

export default EditTournamentsAdmin;