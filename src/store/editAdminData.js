import { v1 } from "uuid";

const basicTour = {
	title: 'Basic info',
	name: {
		title: 'Tournament name*',
		ph: 'Enter name'
	},
	host: {
		title: 'Host',
		list: ['User1990', 'Mike', 'Simon']
	},
	url: {
		title: 'URL',
		label: 'Doit.gg/',
		value: 'ivanenko-tournament'
	},
	rules: {
		title: 'Quick Rules',
		ph: 'You can write here somebody about your tournament....'
	}
}

const gameTour = {
	title: 'Game info',
	game: {
		title: 'Game',
		list: ['User1990', 'Mike', 'Simon'],
		default: 'The game or sport being played',
	},
	type: {
		title: 'Type',
		default: 'single',
		radios: [
			{
				id: v1(),
				title: 'Single stage tournament',
				value: 'single'
			},
			{
				id: v1(),
				title: 'Two stage tournament',
				value: 'multi'
			},
		]
	},
	format: {
		title: 'Format*',
		list: ['Single elimination', 'Multi elimination',]
	},
	matchInclude: {
		title: 'Include a match for 3rd place',
		checked: true
	},
	mode: {
		title: 'Mode*',
		list: ['5 vs 5', '4 vs 4', '3 vs 3'],
	},
	map: {
		title: 'Map voting system',
		list: ['Starcraft2', 'Warcraft2', 'Nuke'],
	},
	bannerUpload: {
		title: 'Main Banner 370x200*',
		ph: 'banner url',
		titleBtn: 'Upload'
	},
	bgUpload: {
		title: 'Tournament background min 2000 x 3000',
		ph: 'background url',
		titleBtn: 'Upload'
	},
}

const regTour = {
	title: 'Registration',
	plan: {
		title: 'Registration*',
		default: 'free',
		list: [
			{
				id: v1(),
				title: 'Free',
				value: 'free'
			},
			{
				id: v1(),
				title: 'Paid',
				value: 'paid'
			},
			{
				id: v1(),
				title: 'PREMIUM',
				value: 'premium'
			},
			{
				id: v1(),
				title: 'PRIVATE',
				value: 'private'
			},
		]
	}
} 

export const tournamentEditData = {
	basic: basicTour,
	game: gameTour,
	reg: regTour,
}