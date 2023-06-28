import React from 'react';
import s from './AdminTableContainer.module.scss';

const AdminTableContainer = ({ className, children }) => {

	return (
		<div className={`${s.adminBody} ${className ? className : ''}`}>
			{children}
		</div>
	);
};

export default AdminTableContainer;
