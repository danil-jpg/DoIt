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
		name: 'prizeDonate',
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

const extraTour = {
	title: 'Extra',
	lobby: {
		title: 'Lobby',
		value: 'OCR32'
	},
	mode: {
		title: 'Mode',
		value: 'OCR32'
	},
	veto: {
		title: 'VETO',
		value: 'ABABABA'
	},
	discord: {
		title: 'Discord URL',
		value: 'https://discord.gg/dfsdfas'
	},
	facebook: {
		title: 'Facebook URL',
		value: 'https://discord.gg/dfsdfas'
	},
	twitter: {
		title: 'Twitter URL',
		value: 'https://discord.gg/dfsdfas'
	},
	twitch: {
		title: 'Twitch URL',
		value: 'https://discord.gg/dfsdfas'
	},
	youtube: {
		title: 'Youtube URL',
		value: 'https://discord.gg/dfsdfas'
	},

	server: {
		title: 'Server region',
		list: [
			{
				id: v1(),
				title: 'europe nordic & east',
				checked: false,
			},
			{
				id: v1(),
				title: 'Europe West',
				checked: false,
			},
			{
				id: v1(),
				title: 'Australia & Oceania',
				checked: false,
			},
			{
				id: v1(),
				title: 'china',
				checked: false,
			},
			{
				id: v1(),
				title: 'Asia',
				checked: false,
			},
			{
				id: v1(),
				title: 'Amercia',
				checked: false,
			},
		]
	},
	platform: {
		title: 'Platform',
		list: [
			{
				id: v1(),
				title: 'PC',
				checked: false,
			},
			{
				id: v1(),
				title: 'Xbox one',
				checked: false,
			},
			{
				id: v1(),
				title: 'ps4',
				checked: false,
			},
			{
				id: v1(),
				title: 'nintendo switch',
				checked: false,
			},
			{
				id: v1(),
				title: 'PS5',
				checked: false,
			},
			{
				id: v1(),
				title: 'Xbox Series X',
				checked: false,
			},
		]
	},
}

const streamsTour = {
	title: 'Streams',
	titleBtn: '+ Add Stream',
	stream1: {
		title: 'Twitch Stream',
		value: 'https://player.twitch.tv/dssadsa',
		list: ['Ukraine', 'Polish', 'England']
	},
	stream2: {
		title: 'Twitch Stream',
		value: 'https://player.twitch.tv/dssadsa',
		list: ['Brazil', 'Scotland', 'USA']
	},
	stream3: {
		title: 'Twitch Stream',
		value: 'https://player.twitch.tv/dssadsa',
		list: ['Spain', 'Polish', 'Latvia']
	},
}

const sponsorsTour = {
	title: 'Sponsors',
	titleBtn: '+ Add Stream',
	list: [
		{
			id: v1(),
			title: 'Sponsor logo #1',
			titleBtn: 'Upload',
			ph: 'banner url'
		},
		{
			id: v1(),
			title: 'Sponsor logo #2',
			titleBtn: 'Upload',
			ph: 'banner url'
		},
		{
			id: v1(),
			title: 'Sponsor logo #3',
			titleBtn: 'Upload',
			ph: 'banner url'
		},
	]
}

const rulesTour = {
	title: 'Rules',
	field: {
		title: 'Rules',
		ph: 'You can write here somebody about your tournament....'
	}
}

const buttonListTour = [
	{
		id: v1(),
		title: 'Delete Tournament',
		link: ''
	},
	{
		id: v1(),
		title: 'Finish Tournament',
		link: ''
	},
	{
		id: v1(),
		title: 'Save Tournament',
		link: ''
	},
]

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
	extra: extraTour,
	streams: streamsTour,
	sponsors: sponsorsTour,
	rules: rulesTour,
	buttonList: buttonListTour,
}

const basicPlayers = {
	title: 'Basic info',
	name: {
		title: 'Name',
		value: 'Nikodem Swider',
	},
	id: {
		title: 'ID',
		value: '123213423',
	},
	sex: {
		title: 'SEX',
		value: 'Male',
	},
	age: {
		title: 'Age',
		value: '22',
	},
	country: {
		title: 'Country',
		value: 'Poland',
	},
	national: {
		title: 'Nationality',
		value: 'Poland',
	},
	site: {
		title: 'Web-site',
		value: 'TeamBlacer.com',
	},
	url: {
		title: 'URL',
		value: '23241232',
		label: 'Doit.gg/'
	},
}

const advancePlayers = {
	title: 'Avatar 128 x 128',
	ph: 'avatar url',
}

export const playersEditData = {
	basic: basicPlayers,
	advance: advancePlayers,
	buttonList: buttonListTour,
}