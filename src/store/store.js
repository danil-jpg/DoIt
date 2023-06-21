import { v1 } from "uuid";

import logo from '../assets/icons/logo.svg';
import image from '../assets/images/1.png';
import imageWebp from '../assets/images/1.png?as=webp';
import triangleBig from "../assets/images/homePage/triangleBig.svg"
import triangleSmall from "../assets/images/homePage/triangleSmall.svg"
export const headerData = {
	logo: logo,
	links: [
		{
			id: v1(),
			title: 'Play',
			link: ''
		},
		{
			id: v1(),
			title: 'News',
			link: ''
		},
		{
			id: v1(),
			title: 'Games',
			link: ''
		},
		{
			id: v1(),
			title: 'Shop',
			link: ''
		},
		{
			id: v1(),
			title: 'Sponsorship',
			link: ''
		},
	]
}

export const test = {
	img: {
		img: image,
		webp: imageWebp
	}
}

export const store = {
	headerData: headerData
}

export const homeHero ={
	img:{
		triangleBig:triangleBig,
		triangleSmall:triangleSmall
	}
}