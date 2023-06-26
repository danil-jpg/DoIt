import React, { useState } from "react";
import s from './UserBlockHeader.module.scss';
import { Link } from "react-router-dom";
import Picture from "../../../UI/Picture/Picture";
import { IconRenderer } from "../../../UI/IconRenderer/IconRenderer";

const UserBlockHeader = ({ isActive, state }) => {
	const [activeMenu, setActiveMenu] = useState(false);

	const onMenuClickHandler = () => setActiveMenu(!activeMenu);

	return (
		<div className={s.user}>
			<div
				className={`${s.user__header} ${isActive(activeMenu, s.active)}`}
				onClick={onMenuClickHandler}>
				<div className={`${s.user__info} ${isActive(activeMenu, s.active)}`}>
					<div className={s.user__imageWrap}>
						<Picture
							className={s.user__image}
							img={state.image.img}
							webp={state.image.webp}
							width="40px"
							height="40px"
							alt={state.name}
						/>
					</div>

					<div className={s.user__infoBody}>
						<p className={s.user__name}>{state.name}</p>
						<p className={s.user__money}>
							<span>{state.money}</span>
							/
							<span>{state.crypto}</span>
						</p>
					</div>

					<IconRenderer
						id='dropDownArrow'
						className={`${s.user__icon} ${isActive(activeMenu, s.active)}`} />
					
					<div className={`${s.user__level} ${isActive(activeMenu, s.active)}`}>
						<p className={s.user__levelValue}>
							{state.level}
						</p>
						<span className={s.user__leverLine}></span>
					</div>
				</div>
			</div>

			<div className={s.user__body}>
				<ul className={s.user__list}>
					{state.list.map(el => (
						<li className={s.user__item} key={el.id}>
							<Link to={el.to} className={s.user__link}>{el.title}</Link>
						</li>
					))}
				</ul>

				<ul className={s.user__bottomList}>
					{state.bottomList.map(el => (
						<li key={el.id} className={s.user__bottomItem}>
							<Link to={el.to} className={s.user__bottomLink}>{el.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default UserBlockHeader;