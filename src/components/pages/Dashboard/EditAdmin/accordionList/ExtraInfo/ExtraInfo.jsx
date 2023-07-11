import React from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import s from './ExtraInfo.module.scss';
import CheckboxAdmin from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";
import { useState } from "react";
import InputFormContainer from "../../../../../UI/forms/InputFormContainer/InputFormContainer";

const ExtraInfo = ({ state }) => {
	const [lobbyValue, setLobbyValue] = useState(state.lobby.value);
	const [modeValue, setModeValue] = useState(state.mode.value);
	const [vetoValue, setVetoValue] = useState(state.veto.value);
	const [discordValue, setDiscordValue] = useState(state.discord.value);
	const [facebookValue, setFacebookValue] = useState(state.facebook.value);
	const [twitterValue, setTwitterValue] = useState(state.twitter.value);
	const [twitchValue, setTwitchValue] = useState(state.twitch.value);
	const [youtubeValue, setYoutubeValue] = useState(state.youtube.value);

	const checkboxStyle = {
		margin: '0 0 8px',
		textTransform: 'uppercase'
	}
	return (
		<Accordion
			header={state.title}
		>
			<InputFormContainer
				title={state.lobby.title}
				value={lobbyValue}
				setValue={setLobbyValue}
			/>
			<InputFormContainer
				title={state.mode.title}
				value={modeValue}
				setValue={setModeValue}
			/>
			<InputFormContainer
				title={state.veto.title}
				value={vetoValue}
				setValue={setVetoValue}
			/>

			<div className={s.checkboxes}>
				<div className={s.checkboxes__left}>
					<h2 className={s.checkboxes__title}>{state.server.title}</h2>
					<div className={s.checkboxes__list}>
						{state.server.list.map((el, index) => (
							<CheckboxAdmin
								style={index !== state.platform.list.length
									? checkboxStyle
									: { margin: 0 }}
								key={el.id}
								title={el.title}
								checked={el.checked}
							/>
						))}
					</div>
				</div>
				<div className={s.checkboxes__right}>
					<h2 className={s.checkboxes__title}>{state.platform.title}</h2>
					<div className={s.checkboxes__list}>
						{state.platform.list.map((el, index) => (
							<CheckboxAdmin
								style={index !== state.platform.list.length
									? checkboxStyle
									: { margin: 0 }}
								key={el.id}
								title={el.title}
								checked={el.checked}
							/>
						))}
					</div>
				</div>
			</div>

			<InputFormContainer
				title={state.discord.title}
				value={discordValue}
				setValue={setDiscordValue}
			/>
			<InputFormContainer
				title={state.facebook.title}
				value={facebookValue}
				setValue={setFacebookValue}
			/>
			<InputFormContainer
				title={state.twitter.title}
				value={twitterValue}
				setValue={setTwitterValue}
			/>
			<InputFormContainer
				title={state.twitch.title}
				value={twitchValue}
				setValue={setTwitchValue}
			/>
			<InputFormContainer
				style={{margin: 0}}
				title={state.youtube.title}
				value={youtubeValue}
				setValue={setYoutubeValue}
			/>
		</Accordion>
	)
}

export default ExtraInfo;