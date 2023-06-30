import React from 'react';
import s from './BodyContainerAdmin.module.scss';

const BodyContainerAdmin = ({children}) => {

	return (
		<div className={s.tableBody}>
			{children}
		</div>
	);
};

export default BodyContainerAdmin;
