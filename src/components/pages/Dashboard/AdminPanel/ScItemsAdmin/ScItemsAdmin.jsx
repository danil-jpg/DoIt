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
							alt={'icon'}
							width='32'
							height='32'
						/>
					</div>
				</li>
			))}
		</ul>
	)
}

export default ScItemsAdmin;