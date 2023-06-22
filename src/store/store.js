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
	}
}
