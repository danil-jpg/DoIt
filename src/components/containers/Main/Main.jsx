import React from "react";
import s from './Main.module.scss';
import Header from '../Header/Header';
import Container from "../Container/Container";
import Picture from "../../common/Picture/Picture";
import { test } from "../../../store/store";

const Main = (props) => {

	return (
		<main className={s.main}>
			<Header />
			<Container>
				<Picture
					img={test.img.img}
					web={test.img.webp}
					imgMob={test.img.img}
					webMob={test.img.webp}
					widthMob='768'
					widthTab='768'
					lazy={true}
					alt=''
				/>
				<div className={`${s.title} title`}>hello</div>
			</Container>
		</main>
	)
}

export default Main;
