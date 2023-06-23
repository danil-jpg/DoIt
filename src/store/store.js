import { v1 } from 'uuid';
import triangleBig from '../assets/images/homePage/triangleBig.svg'
import triangleSmall from '../assets/images/homePage/triangleSmall.svg'
import logo from '../assets/images/logo.png'
import logoWebp from '../assets/images/logo.png?as=webp';
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