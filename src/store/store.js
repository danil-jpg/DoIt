import { v1 } from "uuid";

import logo from "../assets/icons/logo.svg";
import image from "../assets/images/1.png";
import imageWebp from "../assets/images/1.png?as=webp";

export const headerData = {
	logo: logo,
	links: [
		{
			id: v1(),
			title: "Play",
			link: ""
		},
		{
			id: v1(),
			title: "News",
			link: ""
		},
		{
			id: v1(),
			title: "Games",
			link: ""
		},
		{
			id: v1(),
			title: "Shop",
			link: ""
		},
		{
			id: v1(),
			title: "Sponsorship",
			link: ""
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
