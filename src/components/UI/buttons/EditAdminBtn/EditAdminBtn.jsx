import React from "react";
import { Link } from "react-router-dom";
import './EditAdminBtn.scss';

const EditAdminBtn = ({ to, style, children, onClick, color }) => {

	return (
		<Link to={to}
			style={style ? style: {}}
			className={`edit-admin-btn`}
			onClick={onClick ? onClick : () => { }}
		>
			{children}
		</Link>
	)
}

export default EditAdminBtn;