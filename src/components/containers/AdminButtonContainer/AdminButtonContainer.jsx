import React from 'react';
import Button from '../../UI/buttons/Button/Button';
import s from './AdminButtonContainer.module.scss';

const AdminButtonContainer = ({ buttonList }) => {
	return (
		<div className={s.list}>
			{buttonList.map(el => (
				<Button style={{padding: '16px 44px'}}
					className={s.list__btn}
					to={el.link}
					key={el.id}>
					{el.title}
				</Button>
			))}
		</div>
	);
};

export default AdminButtonContainer;
