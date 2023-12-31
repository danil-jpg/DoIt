import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import CheckboxAdmin from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";
import RadioFormContainer from "../../../../../UI/forms/RadioFormContainer/RadioFormContainer";
import SelectFormContainer from "../../../../../UI/forms/SelectFormContainer/SelectFormContainer";
import UploadForm from "../../../../../UI/forms/UploadForm/UploadForm";
import s from './GameInfo.module.scss';

const GameInfo = ({ state }) => {
	const [gameData, setGameData] = useState(state);
	const [typeGChecked, setTypeGChecked] = useState(gameData.type.default);

	return (
		<Accordion
			header={gameData.title}
		>
			<SelectFormContainer
				title={gameData.game.title}
				name={gameData.game.title}
				list={gameData.game.list}
				def={gameData.game.default}
			/>

			<RadioFormContainer
				title={gameData.type.title}
				name={gameData.type.name}
				list={gameData.type.radios}
				checked={typeGChecked}
				setChecked={setTypeGChecked}
			/>

			<SelectFormContainer
				title={gameData.format.title}
				name={gameData.format.title}
				list={gameData.format.list}
				def={gameData.format.default}
			/>

			<CheckboxAdmin style={{ marginBottom: '22px' }}
				title={gameData.matchInclude.title}
				checked={gameData.matchInclude.checked}
			/>

			<div className={s.selectList}>
				<SelectFormContainer
					style={{ flex: '0 0 108px' }}
					title={gameData.mode.title}
					name={gameData.mode.title}
					list={gameData.mode.list}
					def={gameData.mode.default}
				/>

				<SelectFormContainer
					style={{ flex: '0 0 276px' }}
					title={gameData.map.title}
					name={gameData.map.title}
					list={gameData.map.list}
					def={gameData.map.default}
				/>
			</div>

			<UploadForm
				title={gameData.bannerUpload.title}
				text={gameData.bannerUpload.ph}
				titleBtn={gameData.bannerUpload.titleBtn}
			/>

			<UploadForm
				style={{ margin: 0 }}
				title={gameData.bgUpload.title}
				text={gameData.bgUpload.ph}
				titleBtn={gameData.bgUpload.titleBtn}
			/>
		</Accordion>
	)
}

export default GameInfo;