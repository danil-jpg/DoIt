import React, { useState } from "react";
import AdminTableContainer from "../../../../containers/AdminContainers/AdminTableContainer/AdminTableContainer";
import BodyContainerAdmin from "../../../../containers/AdminContainers/AdminTableContainer/BodyContainerAdmin/BodyContainerAdmin";
import HeaderAdminContainer from "../../../../containers/AdminContainers/AdminTableContainer/HeaderAdminContainer/HeaderAdminContainer";
import { IconRenderer } from "../../../../UI/IconRenderer/IconRenderer";
import s from './TournamentsAdmin.module.scss';

const TournamentsAdmin = ({ state }) => {
	const [tourState, setTourState] = useState(state);

	const sortItems = (value, up) => {
		let newState = { ...tourState };

		newState.body.sort(function (a, b) {
			if (up) {
				if (a[value] < b[value]) {
					return 1;
				}

				if (a[value] > b[value]) {
					return -1;
				}

				return 0;
			} else {
				if (a[value] > b[value]) {
					return 1;
				}

				if (a[value] < b[value]) {
					return -1;
				}

				return 0;
			}
		});

		setTourState({ ...newState });
	}

	return (
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
					<ul className={`${s.itemBody}`} key={el.id}>
						<li className={`${s.itemBody__item}`}>
							{el.name}
						</li>
						<li className={`${s.itemBody__item}`}>
							{`${el.entryPrice}$`}
						</li>
						<li className={`${s.itemBody__item}`}>
							{`${el.poolPrice}$`}
						</li>
						<li className={`${s.itemBody__item}`}>
							{el.signed}
						</li>
						<li className={`${s.itemBody__item}`}>
							{`${el.start} minutes`}
						</li>
					</ul>
				))}
			</BodyContainerAdmin>
		</AdminTableContainer>
	)
}

export default TournamentsAdmin;