import React from 'react';
import Button from '../../../UI/buttons/Button/Button';
import { onClickActiveHandler } from '../../../utils/onClickActiveHandler';
import s from './AdminButtonContainer.module.scss';

const AdminButtonContainer = ({style, buttonList, isEditing, setIsEditing, disableEditItem, onSaveBtnClickHandler }) => {

	const onCancelClickHandler = () => {
		onClickActiveHandler(isEditing, setIsEditing);
		disableEditItem();
	};

	return (
		<div className={s.list} style={style?style:{}}>
			{isEditing
				? <>
					<Button style={{ padding: '16px 44px' }}
						className={s.list__btn}
						to={buttonList.cancel.to} onCancelClickHandler
						onClick={onCancelClickHandler}
					>
						{buttonList.cancel.title}

					</Button>
					<Button style={{ padding: '16px 44px' }}
						className={s.list__btn}
						to={buttonList.add.to}
						onClick={onSaveBtnClickHandler}>
						{buttonList.save.title}
					</Button>
				</>
				: <>
					<Button style={{ padding: '16px 44px' }}
						className={s.list__btn}
						to={buttonList.edit.to}
						onClick={() => { onClickActiveHandler(isEditing, setIsEditing) }}
					>
						{buttonList.edit.title}
					</Button>
					<Button style={{ padding: '16px 44px' }}
						className={s.list__btn}
						to={buttonList.add.to}>
						{buttonList.add.title}
					</Button>
				</>}
		</div>
	);
};

export default AdminButtonContainer;
