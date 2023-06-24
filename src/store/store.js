import { v1 } from "uuid";
import triangleBig from "../assets/images/homePage/triangleBig.svg"
import triangleSmall from "../assets/images/homePage/triangleSmall.svg"
import logo from "../assets/images/logo.png";
import logoWebp from "../assets/images/logo.png?as=webp";
import headerAvatar from '../assets/images/header/header_avatar.jpg';
import headerAvatarWebp from '../assets/images/header/header_avatar.jpg?as=webp';

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
	],
	user: {
		name: 'JohnsonBaby2020',
		money: '160 EUR',
		crypto: '16 DTC',
		image: {
			img: headerAvatar,
			webp: headerAvatarWebp
		},
		level: 'LVL 999',
		list: [
			{
				id: v1(),
				title: 'My profile',
				to: ''
			},
			{
				id: v1(),
				title: 'My team',
				to: ''
			},
			{
				id: v1(),
				title: 'Withdraw',
				to: ''
			},
			{
				id: v1(),
				title: 'Deposit',
				to: ''
			},
			{
				id: v1(),
				title: 'Premium',
				to: ''
			},
			{
				id: v1(),
				title: 'Statistics',
				to: ''
			},
		],
		bottomList: [
			{
				id: v1(),
				title: 'Support',
				to: ''
			},
			{
				id: v1(),
				title: 'Settings',
				to: ''
			},
			{
				id: v1(),
				title: 'Logout',
				to: ''
			},
		],
		
	}
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