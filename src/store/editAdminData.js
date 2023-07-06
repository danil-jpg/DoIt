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
		name: 'gameType',
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

const IfPaidTour = {
	title: 'if Paid',
	text: 'Register cost'
}

const playerListTour = {
	title: 'Player list',
	btnList: [
		{
			id: v1(),
			title: 'List of players',
			link: '',
		},
		{
			id: v1(),
			title: 'Edit list of players',
			link: '',
		}
	],
	checkbox: {
		title: 'Don’t show tournament on website',
		checked: false,
	}
}

const leaguesTour = {
	title: 'Leagues',
	text: 'Connect tournament with league',
	titleBtn: {
		title: 'Choose League',
		link: ''
	},
	checkbox: {
		title: 'Only League System',
		checked: false,
	}
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
	},
	start: {
		title: 'Start time*'
	},
	estimate: {
		title: 'Estimated end*'
	},
	checkTime: {
		title: 'Checking Time',
		checked: false
	},
	timeList: ['30 minute', '15 minute'],
	text: '(GMT -05:00) Eastern time — set the time zone from your',
	settingLink: {
		link: '',
		title: 'settings'
	},
}

const prizePoolTour = {
	title: 'Prize pool',
	prize: {
		title: 'Prize pool:',
		value: '$ 100'
	},
	players: {
		title: 'MAX players/teams number:',
		value: ''
	},
	first: {
		title: '1st   place:',
		value: '30%'
	},
	second: {
		title: '2nd place:',
		value: '20%'
	},
	third: {
		title: '3rd place:',
		value: '10%'
	},
	fourth: {
		title: '4th place:',
		value: ''
	},
	ro8: {
		title: 'Ro8',
		value: ''
	},
	ro16: {
		title: 'Ro16',
		value: ''
	},
	ro32: {
		title: 'Ro32',
		value: ''
	},
	ro64: {
		title: 'Ro64',
		value: ''
	},
	ro128: {
		title: 'Ro128',
		value: ''
	},
	ro256: {
		title: 'Ro256',
		value: ''
	},
	ro512: {
		title: 'Ro512',
		value: ''
	},
	type: {
		title: 'Type',
		default: 'money',
		name: 'prizeType',
		list: [
			{
				id: v1(),
				title: 'Money',
				value: 'money'
			},
			{
				id: v1(),
				title: 'Thing',
				value: 'thing'
			},
			{
				id: v1(),
				title: 'Money + Thing',
				value: 'moneyThing'
			},
			{
				id: v1(),
				title: 'Nothing',
				value: 'nothing'
			},
			{
				id: v1(),
				title: 'Qualifiers',
				value: 'qualifiers'
			},
		]
	},
	donate: {
		title: 'Donate',
		default: 'notActive',
		name:'prizeDonate',
		list: [
			{
				id: v1(),
				title: 'Active',
				value: 'active'
			},
			{
				id: v1(),
				title: 'No Active',
				value: 'notActive'
			},
		]
	},
	checkPlace: {
		title: '3rd place turn on?',
		checked: false,
	},
}

const votingTour = {
	title: 'VOTING',
	check1: {
		title: 'Allow registred users in tournamnet to provide scores for every match',
		checked: false,
	},
	check2: {
		title: 'Allow regsitred users only in their match to provide scores',
		checked: false,
	}
}

const additionalTour = {
	title: 'Additional requirements',
	country: {
		title: 'Country:',
		titleBtn: 'Choose country',
		link: ''
	},
	age: {
		title: 'Min Age:',
		value: ''
	},
	list: [
		{
			id: v1(),
			title: 'PSN Account',
			checked: false
		},
		{
			id: v1(),
			title: 'Xbox Account',
			checked: false
		},
		{
			id: v1(),
			title: 'Steam Account',
			checked: false
		},
		{
			id: v1(),
			title: 'League of Legends',
			checked: false
		},
		{
			id: v1(),
			title: 'Blizzard Account',
			checked: false
		},
		{
			id: v1(),
			title: 'Steam Account',
			checked: false
		},

	]
}

export const tournamentEditData = {
	basic: basicTour,
	game: gameTour,
	reg: regTour,
	ifPaid: IfPaidTour,
	players: playerListTour,
	leagues: leaguesTour,
	prize: prizePoolTour,
	voting: votingTour,
	additional: additionalTour,
}