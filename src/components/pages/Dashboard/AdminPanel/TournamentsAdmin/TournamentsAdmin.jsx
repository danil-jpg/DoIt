import React, { useState } from "react";
import AdminTableContainer from "../../../../containers/AdminContainers/AdminTableContainer/AdminTableContainer";
import BodyContainerAdmin from "../../../../containers/AdminContainers/AdminTableContainer/BodyContainerAdmin/BodyContainerAdmin";
import HeaderAdminContainer from "../../../../containers/AdminContainers/AdminTableContainer/HeaderAdminContainer/HeaderAdminContainer";
import { IconRenderer } from "../../../../UI/IconRenderer/IconRenderer";
import s from './TournamentsAdmin.module.scss';
import { isActive } from "../../../../utils/isActive";
import AdminContainer from "../../../../containers/AdminContainers/AdminContainer/AdminContainer";
import { sortObjects } from "../../../../utils/sortObjects";
import AdminButtonContainer from "../../../../containers/AdminContainers/AdminButtonContainer/AdminButtonContainer";
import SearchAdminPanel from "../../../../UI/forms/SearchAdminPanel/SearchAdminPanel";
import ScItemsAdmin from "../ScItemsAdmin/ScItemsAdmin";
import { useEffect } from "react";

const TournamentsAdmin = ({ state, icons, search, buttonList }) => {
	const [tourState, setTourState] = useState(state);
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState('');
	const [entryPrice, setEntryPrice] = useState('');
	const [poolPrice, setPoolPrice] = useState('');
	const [signed, setSigned] = useState('');
	const [start, setStart] = useState('');

	const sortItems = (value, up) => {
		let newState = { ...tourState };

		sortObjects(newState.body, value, up);

		setTourState({ ...newState });
	}

	useEffect(() => {
		console.log(name);
	}, [name]);


	const onEditClickHandler = (e, id) => {
		let newState = { ...tourState };

		let filterResult = newState.body.filter(el => el.id === id);
		let currentEl = filterResult[0];
		let parent = e.currentTarget.parentElement;
		
		parent.classList.add(s.currentEdit);
		console.log(parent)

		setName(currentEl.name);
		setEntryPrice(currentEl.entryPrice);
		setPoolPrice(currentEl.poolPrice);
		setSigned(currentEl.signed);
		setStart(currentEl.start);
	}

	const onInputChangeHAndler = (e, func) => func(e.currentTarget.value);

	return (
		<>
			<div className={s.header}>
				<ScItemsAdmin list={icons} />
				<SearchAdminPanel ph={search.ph} name={search.name} />
				<AdminButtonContainer
					buttonList={buttonList}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
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
						<ul className={`${s.itemBody}  ${isActive(isEditing, s.edit)}`} key={el.id}>
							<li className={`${s.itemBody__item}`}>
								<span>{el.name}</span>
								<input
									type="text"
									value={name}
									onChange={e => { onInputChangeHAndler(e, setName) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.entryPrice}$`}</span>
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.poolPrice}$`}</span>
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{el.signed}</span>
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.start} minutes`}</span>
							</li>
							<li className={`${s.itemBody__edit}`}
								onClick={e => { onEditClickHandler(e, el.id) }}>
								edit
							</li>
						</ul>
					))}
				</BodyContainerAdmin>

			</AdminTableContainer>
		</>
	)
}

export default TournamentsAdmin;