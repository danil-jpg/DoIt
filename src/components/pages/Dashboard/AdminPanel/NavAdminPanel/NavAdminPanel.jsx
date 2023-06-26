import React from "react";
import './NavAdminPanel.scss';
import { NavLink } from "react-router-dom";

const NavAdminPanel = ({ style, list }) => {

	return (
		<div className='nav-admin' style={style ? style : {}}>
			<ul className='nav-admin__list'>
				{list.map(el => (
					<li key={el.id} className='nav-admin__item'>
						<NavLink to={el.link} className='nav-admin__link'>
							{el.title}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavAdminPanel;