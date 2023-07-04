import React from 'react';
import s from './HeaderAdminContainer.module.scss';

const HeaderAdminContainer = ({ style, className, children }) => {

	return (
		<div className={`${s.tableHeader} ${className ? className : ''}`}
			style={style ? style : {}}>
			{children}
		</div>
	);
};

export default HeaderAdminContainer;
