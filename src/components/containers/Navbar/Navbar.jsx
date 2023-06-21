import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.scss';
import { navbar } from "../../../store/store";
import { IconRenderer } from "../../UI/IconRenderer/IconRenderer";

const Navbar = (props) => {

	return (
		<nav className={s.wrap}>
			<ul className={s.list}>
				{navbar.list.map(el => (
					<li className={s.item} key={el.id}>
						<NavLink to={el.link} className={s.link}>
							<IconRenderer id={el.iconId} className={s.icon}></IconRenderer>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar;
