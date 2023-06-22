import { v1 } from "uuid";
import triangleBig from "../assets/images/homePage/triangleBig.svg"
import triangleSmall from "../assets/images/homePage/triangleSmall.svg"
import logo from "../assets/images/logo.png";
import logoWebp from "../assets/images/logo.png?as=webp";
export const headerData = {
	logo: {
		img: logo,
		logoWebp: logoWebp
	},
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

export const navbar = {
	list: [
		{
			id: v1(),
			iconId: "horse",
			link: ""
		},
		{
			id: v1(),
			iconId: "cup",
			link: ""
		},
		{
			id: v1(),
			iconId: "rating",
			link: ""
		},
		{
			id: v1(),
			iconId: "community",
			link: ""
		},
		{
			id: v1(),
			iconId: "target",
			link: ""
		},
		{
			id: v1(),
			iconId: "megaphone",
			link: ""
		},
	]
}

export const store = {
	headerData: headerData
}

export const homeHero = {
	img: {
		triangleBig: triangleBig,
		triangleSmall: triangleSmall
	}
}