import React from "react";
import s from './Container.module.scss';

const Container = ({ children, className, ...props }) => {

	return (
		<div className={s.container}>
			<div className={`${className ? className : ''}`}>
				{children}
			</div>
		</div>
	)
}

export default Container;
