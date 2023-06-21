import React from "react";
import s from './Main.module.scss';
import Header from '../Header/Header';
import Container from "../Container/Container";;

const Main = (props) => {

	return (
		<main className={s.main}>
			<Header />
			<Container>

			</Container>
		</main>
	)
}

export default Main;
