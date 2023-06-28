import { v1 } from 'uuid';
//Header
import logo from "../assets/images/logo.png";
import logoWebp from "../assets/images/logo.png?as=webp";
import headerAvatar from '../assets/images/header/header_avatar.jpg';
import headerAvatarWebp from '../assets/images/header/header_avatar.jpg?as=webp';

import triangleBig from '../assets/images/homePage/triangleBig.svg'
import triangleSmall from '../assets/images/homePage/triangleSmall.svg'
import dotaImg from '../assets/images/homePage/sliderCards/dota.png'
import csgo from '../assets/images/homePage/sliderCards/cs.png'
import fortnite from '../assets/images/homePage/sliderCards/fortnite.png'
import dotaImgWebp from '../assets/images/homePage/sliderCards/dota.png?as=webp'
import csgoWebp from '../assets/images/homePage/sliderCards/cs.png?as=webp'
import fortniteWebp from '../assets/images/homePage/sliderCards/fortnite.png?as=webp'
import fortniteMob from '../assets/images/homePage/sliderCards/fortniteMob.png'
import fortniteMobWebp from '../assets/images/homePage/sliderCards/fortniteMob.png?as=webp'
import dotaMob from '../assets/images/homePage/sliderCards/dotaMob.png'
import dotaMobWebp from '../assets/images/homePage/sliderCards/dotaMob.png?as=webp'
import csgoMob from '../assets/images/homePage/sliderCards/csMob.png'
import csgoMobWebp from '../assets/images/homePage/sliderCards/csMob.png?as=webp'
import witcher from '../assets/images/homePage/sliderCards/witcher.png'
import witcherWebp from '../assets/images/homePage/sliderCards/witcher.png?as=webp'
import witcherMob from "../assets/images/homePage/sliderCards/witcherMob.png"
import witcherMobWebp from "../assets/images/homePage/sliderCards/witcherMob.png?as=webp"
import dast from "../assets/images/homePage/sliderCards/dast2.png"
import dastWebp from "../assets/images/homePage/sliderCards/dast2.png?as=webp"
import dastMob from "../assets/images/homePage/sliderCards/dast2Mob.png"
import dastMobWebp from "../assets/images/homePage/sliderCards/dast2Mob.png?as=webp"
import mafia from '../assets/images/homePage/sliderCards/mafia.png'
import mafiaWebp from '../assets/images/homePage/sliderCards/mafia.png?as=webp'
import mafiaMob from "../assets/images/homePage/sliderCards/mafiaMob.png"
import mafiaMobWebp from "../assets/images/homePage/sliderCards/mafiaMob.png?as=webp"
import google from "../assets/images/homePage/Partners/google.png"
import googleWebp from "../assets/images/homePage/Partners/google.png?as=webp"
import googleMob from "../assets/images/homePage/Partners/googleMob.png"
import googleMobWebp from "../assets/images/homePage/Partners/googleMob.png?as=webp"
import nasa from "../assets/images/homePage/Partners/nasa.png"
import nasaWebp from "../assets/images/homePage/Partners/nasa.png?as=webp"
import nasaMob from "../assets/images/homePage/Partners/nasaMob.png"
import nasaMobWebp from "../assets/images/homePage/Partners/nasaMob.png?as=webp"
import navi from "../assets/images/homePage/Partners/navi.png"
import naviWebp from "../assets/images/homePage/Partners/navi.png?as=webp"
import naviMob from "../assets/images/homePage/Partners/naviMob.png"
import naviMobWebp from "../assets/images/homePage/Partners/naviMob.png?as=webp"
import airbnb from "../assets/images/homePage/Partners/airbnb.png"
import airbnbWebp from "../assets/images/homePage/Partners/airbnb.png?as=webp"
import airbnbMob from "../assets/images/homePage/Partners/airbnbMob.png"
import airbnbMobWebp from "../assets/images/homePage/Partners/airbnbMob.png?as=webp"
import telegram from "../assets/images/homePage/Partners/telegram.png"
import telegramWebp from "../assets/images/homePage/Partners/telegram.png?as=webp"
import telegramMob from "../assets/images/homePage/Partners/telegramMob.png"
import telegramMobWebp from "../assets/images/homePage/Partners/telegramMob.png?as=webp"
import youtube from "../assets/images/homePage/Partners/youtube.png"
import youtubeWebp from "../assets/images/homePage/Partners/youtube.png?as=webp"
import youtubeMob from "../assets/images/homePage/Partners/youtubeMob.png"
import youtubeMobWebp from "../assets/images/homePage/Partners/youtubeMob.png?as=webp"
import be from "../assets/images/homePage/Partners/be.png"
import beWebp from "../assets/images/homePage/Partners/be.png?=webp"
import menVr from "../assets/images/NewsPage/menVr.png"
import menVrWebp from "../assets/images/NewsPage/menVr.png?as=webp"
import menVrMob from "../assets/images/NewsPage/menVrMob.png"
import menVrMobWebp from "../assets/images/NewsPage/menVrMob.png?as=webp"
import watch from "../assets/images/NewsPage/watch.png"
import watchWebp from "../assets/images/NewsPage/watch.png?as=webp"
import woomenNews from "../assets/images/NewsPage/women.png"
import woomenNewsWebp from "../assets/images/NewsPage/women.png?as=webp"
import woomenNewsMob from "../assets/images/NewsPage/womenMob.png"
import woomenNewsMobWebp from "../assets/images/NewsPage/womenMob.png?as-webp"
import laptopNews from "../assets/images/NewsPage/laptop.png"
import laptopNewsWebp from "../assets/images/NewsPage/laptop.png?as=webp"
import laptopNewsMob from "../assets/images/NewsPage/laptopMob.png"
import laptopNewsMobWebp from "../assets/images/NewsPage/laptopMob.png?as=webp"
import blackMen from "../assets/images/NewsPage/blackMen.png"
import blackMenWebp from "../assets/images/NewsPage/blackMen.png?as=webp"
import blackMenMob from "../assets/images/NewsPage/blackMenMob.png"
import blackMenMobWebp from "../assets/images/NewsPage/blackMenMob.png?as=webp"
import woomenNews2 from "../assets/images/NewsPage/women2.png"
import woomenNews2Webp from "../assets/images/NewsPage/women2.png?as=webp"
import locationIcon from "../assets/icons/Aboute/locationIcon.svg"
import mailIcon from "../assets/icons/Aboute/mailIcon.svg"
import phoneIcon from "../assets/icons/Aboute/phoneIcon.svg"
import avatarProfile from '../assets/images/Profile/avatar.png';
import avatarProfileWebp from '../assets/images/Profile/avatar.png?as=webp';
import streamIcon from "../assets/images/homePage/stream.svg"

export const headerData = {
	logo: {
		img: logo,
		logoWebp: logoWebp
	},
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
			iconId: 'horse',
			link: ''
		},
		{
			id: v1(),
			iconId: 'cup',
			link: ''
		},
		{
			id: v1(),
			iconId: 'rating',
			link: ''
		},
		{
			id: v1(),
			iconId: 'community',
			link: ''
		},
		{
			id: v1(),
			iconId: 'target',
			link: ''
		},
		{
			id: v1(),
			iconId: 'megaphone',
			link: ''
		},
	]
}

export const profile = {
	img: {
		avatar: avatarProfile,
		avatarW: avatarProfileWebp
	}
}

export const store = {
	headerData: headerData
}

export const homeHero ={
	img:{
		triangleBig:triangleBig,
		triangleSmall:triangleSmall
	},
  info:{
    title:'DOIT',
    descr:'Prepare for your esports career and get ready for awesome tournaments with big prize pools and many fun! Register Now!'
  }
}
export const sliderCards ={
	img:{
		dotaImg:dotaImg,
		csgo:csgo,
		fortnite:fortnite,
		dotaImgWebp:dotaImgWebp,
		csgoWebp:csgoWebp,
		fortniteWebp:fortniteWebp,
		fortniteMob:fortniteMob,
		fortniteMobWebp:fortniteMobWebp,
		dotaMob:dotaMob,
		dotaMobWebp:dotaMobWebp,
		csgoMob:csgoMob,
		csgoMobWebp:csgoMobWebp
	},
	title:{
		title:'Tournament’s name will be here, maybe, in two lines',
		title2:'Fortnitity evolution X',
		title3:'CS:GO Mirageby tournament'
	},
	subtitle1:'Start',
	subtitle2:'Mode',
	subtitle3:'Slots',
	subtitle4:'Pool',
	number1:'07/06',
	number2:'5v5',
	number3:'16/30',
	number4:'$ 1500'
}
export const newsCard={
	img:{
		witcher:witcher,
		witcherWebp:witcherWebp,
		witcherMob:witcherMob,
		witcherMobWebp:witcherMobWebp,
		dast:dast,
		dastWebp:dastWebp,
		dastMob:dastMob,
		dastMobWebp:dastMobWebp,
		mafia:mafia,
		mafiaWebp:mafiaWebp,
		mafiaMob:mafiaMob,
		mafiaMobWebp:mafiaMobWebp
	},
	title:{
		title1:`Fortnite map makers recreate Counter-Strike's Dust 2`,
		title2:'Your Witcher 3 saves from Steam and GOG will now work on the Nintendo Switch',
		title3:'Empire of Sin has been delayed until autumn 2020'
	},
	subtitle:{
		subtitle1:`Team Evolve, a collective of players who create and share impressive maps using Fortnite's in-game Creative mode...`,
		subtitle2:'If you played The Witcher 3: Wild Hunt when it was new but not the Hearts of Stone...',
		subtitle3:`Drink up, folks, there's been a change of plans. Prohibition-era gangster tactics game Empire of Sin will no longer be...`
	}
}
export const partnersIcon ={
	img:{
		google:google,
		googleWebp:googleWebp,
		googleMob:googleMob,
		googleMobWebp:googleMobWebp,
		nasa:nasa,
		nasaWebp:nasaWebp,
		nasaMob:nasaMob,
		nasaMobWebp:nasaMobWebp,
		navi:navi,
		naviWebp:naviWebp,
		naviMob:naviMob,
		naviMobWebp:naviMobWebp,
		airbnb:airbnb,
		airbnbWebp:airbnbWebp,
		airbnbMob:airbnbMob,
		airbnbMobWebp:airbnbMobWebp,
		telegram:telegram,
		telegramWebp:telegramWebp,
		telegramMob:telegramMob,
		telegramMobWebp:telegramMobWebp,
		youtube:youtube,
		youtubeWebp:youtubeWebp,
		youtubeMob:youtubeMob,
		youtubeMobWebp:youtubeMobWebp,
		be:be,
		beWebp:beWebp
	}
}
export const newsData ={
	img:{
		menVr:menVr,
		menVrWebp:menVrWebp,
		menVrMob:menVrMob,
		menVrMobWebp:menVrMobWebp,
		watch:watch,
		watchWebp:watchWebp,
		woomenNews:woomenNews,
		woomenNewsWebp:woomenNewsWebp,
		woomenNewsMob:woomenNewsMob,
		woomenNewsMobWebp:woomenNewsMobWebp,
		laptopNews:laptopNews,
		laptopNewsWebp:laptopNewsWebp,
		laptopNewsMob:laptopNewsMob,
		laptopNewsMobWebp:laptopNewsMobWebp,
		blackMen:blackMen,
		blackMenWebp:blackMenWebp,
		blackMenMob:blackMenMob,
		blackMenMobWebp:blackMenMobWebp,
		woomenNews2:woomenNews2,
		woomenNews2Webp:woomenNews2Webp
	},
	title:{
		title:`Brazil end 12-year wait for Copa America`
	},
	subtitle:{
		subtitle:'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.'
	}
}

export const premiumData ={
	title:{
		title:"Premium"
	},
	titleCards:{
		free:'FREE',
		pro:'PRO',
		Organizer:'Organizer'
	},
	subtitle:{
		subtitleFree:'$10 per mounth',
		subtitlePro:'$4.99 per mounth',
		subtitleOrg:'$15 per mounth'
	},
	descr:{
		descr:'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company. A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
		listItem:"- usecase1"

	}
}
export const abouteData ={
	title:{
		aboute:'About us',
		contact:'Contact us'
	},
	icon:{
		locationIcon:locationIcon,
		mailIcon:mailIcon,
		phoneIcon:phoneIcon
	},
	descr:{
		location:'2440, Daisy Dr undefined Pembroke Pines, Arizona',
		phoneNumber:'Headquater   (+48) 517 429 774',
	},
	mail:{
		support:'Support@doit.gg',
		organizer:'Organizer@doit.gg',
		spon:'Sponsorship@doit.gg'
		
	}
}
 
export const streamsData ={
	title:{
		title:'Streams'
	},
	icon:{
		icon:streamIcon
	}
}

