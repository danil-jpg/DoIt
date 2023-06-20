import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import s from './Header.module.scss';
import { headerData } from "../../../store/store";
import HeaderButtons from "../../universal/Buttons/HeaderButtons/HeaderButtons";

const Header = (props) => {
	let [state, setState] = useState(headerData);

	return (
		<header className={s.wrap}>
			<Container className={s.container}>
				<Link to="/" className={s.logoWtap}>
					<img
						width='72px'
						height='64px'
						src={state.logo}
						alt="Logo"
						className={s.logo} />
				</Link>
				<div className={s.body}>
					<ul className={s.list}>
						{state.links.map(el => (
							<li className={s.item} key={el.id}>
								<Link to={el.link} className={s.link}>
									{el.title}
								</Link>
							</li>
						))}
					</ul>

					<div className={s.userBlock}>
						<HeaderButtons/>
					</div>
				</div>

			</Container>
		</header>
	)
}

export default Header;
