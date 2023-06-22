import React from "react";
import { Link } from "react-router-dom";
import './Button.scss';

const Button = ({ to, style, children, onClick, color }) => {

	const getColor = (color) => {
		switch (color) {
			case 'blue':
				return 'blue';
			default:
				return '';
		}
	} 

	return (
		<Link to={to}
			style={style ? style: {}}
			className={`button ${getColor(color)}`}
			onClick={onClick ? onClick : () => { }}
		>
			{children}
		</Link>
	)
}

export default Button;