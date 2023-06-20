import React from "react";
import { Link } from "react-router-dom";
import { IconCommunity, IconCup, IconHorse, IconMegaphone, IconRating, IconTarget } from "../../universal/SVGIcons/SVGIcons";
import s from './Navbar.module.scss';
import { test } from "../../../store/store";

const Navbar = (props) => {

	return (
		<nav className={s.wrap}>
			<ul className={s.list}>
				<li className={s.item}>
					<Link className={s.link}>
						<IconHorse/>
					</Link>
				</li>

				<li className={s.item}>
					<Link className={s.link}>
						<IconCup/>
					</Link>
				</li>

				<li className={s.item}>
					<Link className={s.link}>
						<IconRating/>
					</Link>
				</li>

				<li className={s.item}>
					<Link className={s.link}>
						<IconCommunity/>
					</Link>
				</li>

				<li className={s.item}>
					<Link className={s.link}>
						<IconTarget/>
					</Link>
				</li>

				<li className={s.item}>
					<Link className={s.link}>
						<IconMegaphone/>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;
