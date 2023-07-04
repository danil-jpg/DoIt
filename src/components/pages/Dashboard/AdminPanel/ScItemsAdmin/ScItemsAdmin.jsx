import React, { useState } from "react";
import Picture from "../../../../UI/Picture/Picture";
import s from './ScItemsAdmin.module.scss';

const ScItemsAdmin = ({ state, list }) => {

	return (
		<ul className={s.scList}>
			{list.map(el => (
				<li
					style={el.type === 'fortnite' ? { background: '#D8DFEB' } : {}}
					key={el.id}
					className={s.scList__item}
				>
					<div className={s.scList__imageWrap}>
						<Picture
							img={el.image.img}
							webp={el.image.webp}
							className={s.scList__image}
							imgMob={el.imgMob}
							imgTab={el.imgTab}
							widthMob='768'
							widthTab='576'
							alt='icon'
							width='32px'
							height='32px'
						/>
					</div>
				</li>
			))}
		</ul>
	)
}

export default ScItemsAdmin;