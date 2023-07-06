import React, { useState } from "react";
import AdminTableContainer from "../../../../containers/AdminContainers/AdminTableContainer/AdminTableContainer";
import BodyContainerAdmin from "../../../../containers/AdminContainers/AdminTableContainer/BodyContainerAdmin/BodyContainerAdmin";
import HeaderAdminContainer from "../../../../containers/AdminContainers/AdminTableContainer/HeaderAdminContainer/HeaderAdminContainer";
import { IconRenderer } from "../../../../UI/IconRenderer/IconRenderer";
import s from './NewsAdmin.module.scss';
import { isActive } from "../../../../utils/isActive";
import { sortObjects } from "../../../../utils/sortObjects";
import AdminButtonContainer from "../../../../containers/AdminContainers/AdminButtonContainer/AdminButtonContainer";
import SearchAdminPanel from "../../../../UI/forms/SearchAdminPanel/SearchAdminPanel";
import ScItemsAdmin from "../ScItemsAdmin/ScItemsAdmin";

const NewsAdmin = ({ state, icons, search, buttonList }) => {
	const [newsState, setNewsState] = useState(state);
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [categories, setCategories] = useState('');
	const [date, setDate] = useState('');
	const [currentId, setCurrentId] = useState();

	const sortItems = (value, up) => {
		let newState = { ...newsState };

		sortObjects(newState.body, value, up);

		setNewsState({ ...newState });
	}


	const onEditClickHandler = (e, id, active) => {
		let newState = { ...newsState };

		newState.body.forEach(el => {
			el.active = false;

			if (el.id === id) {
				el.active = true;
				setCurrentId(id);
			}
		})

		let filterResult = newState.body.filter(el => el.id === id);
		let currentEl = filterResult[0];

		setTitle(currentEl.title);
		setAuthor(currentEl.author);
		setCategories(currentEl.categories);
		setDate(currentEl.date);
	}



	const onInputChangeHAndler = (e, func) => {
		func(e.currentTarget.value)
	};

	const disableEditItem = () => {
		let newState = { ...newsState };

		newState.body.forEach(el => {
			el.active = false;
		});

		setNewsState({ ...newState });
	}

	const onSaveBtnClickHandler = () => {
		let newState = { ...newsState };

		newState.body.forEach(el => {
			if (el.id === currentId) {
				el.title = title;
				el.author = author;
				el.categories = categories;
				el.date = date;
			}
		})

		disableEditItem();
		setNewsState({ ...newState });
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
					{newsState.header.map(el => (
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
					{newsState.body.map(el => (
						<ul className={
							`${s.itemBody} ${isActive(isEditing, s.edit)} ${isActive(el.active, s.currentEdit)}`
						}
							key={el.id}>
							<li className={`${s.itemBody__item}`}>
								<span>{el.title}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={title}
									onChange={e => { onInputChangeHAndler(e, setTitle) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>********</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={author}
									onChange={e => { onInputChangeHAndler(e, setAuthor) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{`${el.categories}`}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={categories}
									onChange={e => { onInputChangeHAndler(e, setCategories) }} />
							</li>
							<li className={`${s.itemBody__item} ${s.edit}`}>
								<span>{el.date}</span>
								<input
									className={s.itemBody__input}
									type="text"
									value={date}
									onChange={e => { onInputChangeHAndler(e, setDate) }} />
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

export default NewsAdmin;