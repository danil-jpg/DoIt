import React from 'react';
import s from './HeaderAdminContainer.module.scss';

const HeaderAdminContainer = ({ className, children }) => {

	return (
		<div className={`${s.tableHeader} ${className ? className : ''}`}>
			{children}
		</div>
	);
};

export default HeaderAdminContainer;
