import React, { useState } from "react";
import AdminTableContainer from "../../../../containers/AdminContainers/AdminTableContainer/AdminTableContainer";
import BodyContainerAdmin from "../../../../containers/AdminContainers/AdminTableContainer/BodyContainerAdmin/BodyContainerAdmin";
import HeaderAdminContainer from "../../../../containers/AdminContainers/AdminTableContainer/HeaderAdminContainer/HeaderAdminContainer";
import { IconRenderer } from "../../../../UI/IconRenderer/IconRenderer";
import s from './LeaguesAdmin.module.scss';
import { isActive } from "../../../../utils/isActive";
import { sortObjects } from "../../../../utils/sortObjects";
import AdminButtonContainer from "../../../../containers/AdminContainers/AdminButtonContainer/AdminButtonContainer";
import SearchAdminPanel from "../../../../UI/forms/SearchAdminPanel/SearchAdminPanel";
import ScItemsAdmin from "../ScItemsAdmin/ScItemsAdmin";

const LeaguesAdmin = ({ state, icons, search, buttonList }) => {
	const [tourState, setTourState] = useState(state);
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState('');
	const [entryPrice, setEntryPrice] = useState('');
	const [poolPrice, setPoolPrice] = useState('');
	const [signed, setSigned] = useState('');
	const [start, setStart] = useState('');
	const [currentId, setCurrentId] = useState();

	const sortItems = (value, up) => {
		let newState = { ...tourState };

		sortObjects(newState.body, value, up);

		setTourState({ ...newState });
	}


	const onEditClickHandler = (e, id, active) => {
		let newState = { ...tourState };

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
		setEntryPrice(currentEl.entryPrice);
		setPoolPrice(currentEl.poolPrice);
		setSigned(currentEl.signed);
		setStart(currentEl.start);
	}



	const onInputChangeHAndler = (e, func) => {
		func(e.currentTarget.value)
	};

	const disableEditItem = () => {
		let newState = { ...tourState };

		newState.body.forEach(el => {
			el.active = false;
		});

		setTourState({ ...newState });
	}

	const onSaveBtnClickHandler = () => {
		let newState = { ...tourState };

		newState.body.forEach(el => {
			if (el.id === currentId) {
				el.name = name;
				el.entryPrice = entryPrice;
				el.poolPrice = poolPrice;
				el.signed = signed;
				el.start = start;
			}
		})

		disableEditItem();
		setTourState({ ...newState });
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
					{tourState.header.map(el => (
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
					{tourState.body.map(el => (
						<ul className={
							`${s.itemBody} ${isActive(isEditing, s.edit)} ${isActive(el.active, s.currentEdit)}`
						}
							key={el.id}>
							<li className={`${s.itemBody__item}`}>
								<span>{el.name}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={name}
									onChange={e => { onInputChangeHAndler(e, setName) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.entryPrice}$`}</span>
								<input
									className={s.itemBody__input}
									type="number"
									value={entryPrice}
									onChange={e => { onInputChangeHAndler(e, setEntryPrice) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.poolPrice}$`}</span>
								<input
									className={s.itemBody__input}
									type="number"
									value={poolPrice}
									onChange={e => { onInputChangeHAndler(e, setPoolPrice) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{el.signed}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={signed}
									onChange={e => { onInputChangeHAndler(e, setSigned) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.start} minutes`}</span>
								<input
									className={s.itemBody__input}
									type="number"
									value={start}
									onChange={e => { onInputChangeHAndler(e, setStart) }} />
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

export default LeaguesAdmin;