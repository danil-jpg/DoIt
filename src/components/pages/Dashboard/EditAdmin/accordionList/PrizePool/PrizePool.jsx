import React, { useState } from "react";
import Accordion from "../../../../../common/Accordion/Accordion";
import CheckboxAdmin from "../../../../../UI/forms/CheckboxAdmin/CheckboxAdmin";
import InputForm from "../../../../../UI/forms/InputForm/InputForm";
import RadioFormContainer from "../../../../../UI/forms/RadioFormContainer/RadioFormContainer";
import s from './PrizePool.module.scss';

const PrizePool = ({ state }) => {
	const [prizeValue, setPrizeValue] = useState(state.prize.value);
	const [payersValue, setPlayersValue] = useState(state.players.value);
	const [first, setFirst] = useState(state.first.value);
	const [second, setSecond] = useState(state.second.value);
	const [third, setThird] = useState(state.third.value);
	const [fourth, setFourth] = useState(state.fourth.value);
	const [ro8, setRo8] = useState(state.ro8.value);
	const [ro16, setRo16] = useState(state.ro16.value);
	const [ro32, setRo32] = useState(state.ro32.value);
	const [ro64, setRo64] = useState(state.ro64.value);
	const [ro128, setRo128] = useState(state.ro128.value);
	const [ro256, setRo256] = useState(state.ro256.value);
	const [ro512, setRo512] = useState(state.ro512.value);
	const [typeChecked, setTypeChecked] = useState(state.type.default);
	const [donateChecked, setDonateChecked] = useState(state.donate.default);

	const inputStyle = {
		padding: '4px 16px',
		textAlign: 'center',
		fontWeight: 700,
	}

	return (
		<Accordion
			header={state.title}
		>
			<div className={s.prize}>
				<ul className={`${s.prize__list} ${s.header}`}>
					<li className={`${s.prize__item} ${s.header}`}>
						<p className={s.prize__text}>{state.prize.title}</p>
						<InputForm
							style={inputStyle}
							value={prizeValue}
							setValue={setPrizeValue}
						/>
					</li>
					<li className={`${s.prize__item} ${s.header}`}>
						<p className={s.prize__text}>{state.players.title}</p>
						<InputForm
							style={inputStyle}
							value={payersValue}
							setValue={setPlayersValue}
						/>
					</li>
				</ul>

				<CheckboxAdmin
					style={{ margin: '0 0 22px' }}
					title={state.checkPlace.title}
					checked={state.checkPlace.checked}
				/>

				<div className={s.prize__body}>
					<div className={s.prize__left}>
						<ul className={`${s.prize__list}`}>
							<li className={`${s.prize__item}`}>
								<p className={s.prize__text}>{state.first.title}</p>
								<InputForm
									style={inputStyle}
									value={first}
									setValue={setFirst}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.second.title}</p>
								<InputForm
									style={inputStyle}
									value={second}
									setValue={setSecond}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.third.title}</p>
								<InputForm
									style={inputStyle}
									value={third}
									setValue={setThird}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.fourth.title}</p>
								<InputForm
									style={inputStyle}
									value={fourth}
									setValue={setFourth}
								/>
							</li>
						</ul>

						<RadioFormContainer
							title={state.type.title}
							list={state.type.list}
							name={state.type.name}
							checked={typeChecked}
							setChecked={setTypeChecked}
						/>
					</div>
					<div className={s.prize__right}>
						<ul className={s.prize__list}>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.ro8.title}</p>
								<InputForm
									style={inputStyle}
									value={ro8}
									setValue={setRo8}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.ro16.title}</p>
								<InputForm
									style={inputStyle}
									value={ro16}
									setValue={setRo16}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.ro32.title}</p>
								<InputForm
									style={inputStyle}
									value={ro32}
									setValue={setRo32}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.ro64.title}</p>
								<InputForm
									style={inputStyle}
									value={ro64}
									setValue={setRo64}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.ro128.title}</p>
								<InputForm
									style={inputStyle}
									value={ro128}
									setValue={setRo128}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.ro256.title}</p>
								<InputForm
									style={inputStyle}
									value={ro256}
									setValue={setRo256}
								/>
							</li>
							<li className={s.prize__item}>
								<p className={s.prize__text}>{state.ro512.title}</p>
								<InputForm
									style={inputStyle}
									value={ro512}
									setValue={setRo512}
								/>
							</li>
						</ul>

						<RadioFormContainer
							title={state.donate.title}
							list={state.donate.list}
							name={state.donate.name}
							checked={donateChecked}
							setChecked={setDonateChecked}
						/>
					</div>

				</div>
			</div>
		</Accordion>
	)
}

export default PrizePool;