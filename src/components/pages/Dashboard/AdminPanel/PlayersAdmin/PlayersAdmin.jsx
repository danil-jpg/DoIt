import React, { useState } from "react";
import AdminTableContainer from "../../../../containers/AdminContainers/AdminTableContainer/AdminTableContainer";
import BodyContainerAdmin from "../../../../containers/AdminContainers/AdminTableContainer/BodyContainerAdmin/BodyContainerAdmin";
import HeaderAdminContainer from "../../../../containers/AdminContainers/AdminTableContainer/HeaderAdminContainer/HeaderAdminContainer";
import { IconRenderer } from "../../../../UI/IconRenderer/IconRenderer";
import s from './PlayersAdmin.module.scss';
import { isActive } from "../../../../utils/isActive";
import { sortObjects } from "../../../../utils/sortObjects";
import AdminButtonContainer from "../../../../containers/AdminContainers/AdminButtonContainer/AdminButtonContainer";
import SearchAdminPanel from "../../../../UI/forms/SearchAdminPanel/SearchAdminPanel";
import ScItemsAdmin from "../ScItemsAdmin/ScItemsAdmin";

const PlayersAdmin = ({ state, icons, search, buttonList }) => {
	const [teamState, setTeamState] = useState(state);
	const [isEditing, setIsEditing] = useState(false);
	const [nick, setNick] = useState('');
	const [name, setName] = useState('');
	const [pass, setPass] = useState('');
	const [country, setCountry] = useState('');
	const [team, setTeam] = useState('');
	const [created, setCreated] = useState('');
	const [age, setAge] = useState('');
	const [currentId, setCurrentId] = useState();

	const sortItems = (value, up) => {
		let newState = { ...teamState };

		sortObjects(newState.body, value, up);

		setTeamState({ ...newState });
	}


	const onEditClickHandler = (e, id, active) => {
		let newState = { ...teamState };

		newState.body.forEach(el => {
			el.active = false;

			if (el.id === id) {
				el.active = true;
				setCurrentId(id);
			}
		})

		let filterResult = newState.body.filter(el => el.id === id);
		let currentEl = filterResult[0];

		setName(currentEl.name);
		setNick(currentEl.nick);
		setPass(currentEl.pass);
		setCountry(currentEl.country);
		setTeam(currentEl.team);
		setCreated(currentEl.created);
		setAge(currentEl.age);
	}



	const onInputChangeHAndler = (e, func) => {
		func(e.currentTarget.value)
	};

	const disableEditItem = () => {
		let newState = { ...teamState };

		newState.body.forEach(el => {
			el.active = false;
		});

		setTeamState({ ...newState });
	}

	const onSaveBtnClickHandler = () => {
		let newState = { ...teamState };

		newState.body.forEach(el => {
			if (el.id === currentId) {
				el.name = name;
				el.nick = nick;
				el.country = country;
				el.pass = pass;
				el.age = age;
				el.team = team;
				el.created = created;
			}
		})

		disableEditItem();
		setTeamState({ ...newState });
	}

	return (
		<>
			<div className={s.header}>
				<ScItemsAdmin list={icons} />
				<SearchAdminPanel
					ph={search.ph}
					name={search.name}
					style={{ margin: '0 0 0 10%' }} />
				<AdminButtonContainer style={{ margin: '0 0 0 auto' }}
					buttonList={buttonList}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
					disableEditItem={disableEditItem}
					onSaveBtnClickHandler={onSaveBtnClickHandler}
				/>
			</div>

			<AdminTableContainer>
				<HeaderAdminContainer>
					{teamState.header.map(el => (
						<div className={`${s.itemHeader}`} key={el.id}>
							<span>{el.title}</span>
							<div className={s.itemHeader__buttons}>
								<button className={s.itemHeader__btn}
									onClick={() => { sortItems(el.value, true) }}
								>
									<IconRenderer id="adminSortArrow" className={s.itemHeader__icon} />
								</button>
								<button className={`${s.itemHeader__btn}`}
									onClick={() => { sortItems(el.value) }}
								>
									<IconRenderer id="adminSortArrow"
										className={`${s.itemHeader__icon} ${s.iconReverse}`} />
								</button>
							</div>
						</div>
					))}
				</HeaderAdminContainer>

				<BodyContainerAdmin>
					{teamState.body.map(el => (
						<ul className={
							`${s.itemBody} ${isActive(isEditing, s.edit)} ${isActive(el.active, s.currentEdit)}`
						}
							key={el.id}>
							<li className={`${s.itemBody__item}`}>
								<span>{el.nick}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={nick}
									onChange={e => { onInputChangeHAndler(e, setNick) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>********</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={pass}
									onChange={e => { onInputChangeHAndler(e, setPass) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.country}`}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={country}
									onChange={e => { onInputChangeHAndler(e, setCountry) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{el.team}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={team}
									onChange={e => { onInputChangeHAndler(e, setTeam) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.name}`}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={name}
									onChange={e => { onInputChangeHAndler(e, setName) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.created}`}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={created}
									onChange={e => { onInputChangeHAndler(e, setCreated) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.age}`}</span>
								<input
									className={`${s.itemBody__input} ${s.age}`}
									type="number"
									value={age}
									onChange={e => { onInputChangeHAndler(e, setAge) }} />
							</li>
							<li className={`${s.itemBody__edit}`}
								onClick={e => { onEditClickHandler(e, el.id, el.active) }}>
								edit
							</li>
						</ul>
					))}
				</BodyContainerAdmin>

			</AdminTableContainer>
		</>
	)
}

export default PlayersAdmin;