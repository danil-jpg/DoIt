import React from "react";
import s from './Main.module.scss';
import Header from '../Header/Header';
<<<<<<< HEAD
import Container from "../Container/Container";
import Picture from "../../common/Picture/Picture";
import { test } from "../../../store/store";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
=======
import Container from "../Container/Container";;
>>>>>>> dev-maks

const Main = (props) => {

	return (
		<main className={s.main}>
			{/* <Header />
			<Container>
<<<<<<< HEAD
<<<<<<< HEAD
				<Home/>
=======
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
>>>>>>> dev-max
=======

>>>>>>> dev-maks
			</Container>
			<Navbar/> */}
			<Home/>

		</main>
	)
}

export default Main;



	// <Picture
	// 				img={test.img.img}
	// 				web={test.img.webp}
	// 				imgMob={test.img.img}
	// 				webMob={test.img.webp}
	// 				widthMob='768'
	// 				widthTab='768'
	// 				lazy={true}
	// 				alt=''
	// 			/>