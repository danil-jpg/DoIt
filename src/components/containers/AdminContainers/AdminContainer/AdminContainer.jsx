import React from 'react';
import ScItemsAdmin from '../../../pages/Dashboard/AdminPanel/ScItemsAdmin/ScItemsAdmin';
import SearchAdminPanel from '../../../UI/forms/SearchAdminPanel/SearchAdminPanel';
import AdminButtonContainer from '../AdminButtonContainer/AdminButtonContainer';
import s from './AdminContainer.module.scss';

const AdminContainer = ({ icons, search, buttonList, children, isEditing, setIsEditing }) => {

	return (
		<>
			<div className={s.header}>
				<ScItemsAdmin list={icons} />
				<SearchAdminPanel ph={search.ph} name={search.name} />
				<AdminButtonContainer
					buttonList={buttonList}
					// isEditing={isEditing}
					// setIsEditing={setIsEditing}
				/>
			</div>

			{children}
		</>
	);
};

export default AdminContainer;
