import { v1 } from "uuid";

import logo from '../assets/icons/logo.svg';

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

export const store = {
	headerData: headerData
}
