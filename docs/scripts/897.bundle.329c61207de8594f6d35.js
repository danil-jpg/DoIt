"use strict";(self.webpackChunkDoIT=self.webpackChunkDoIT||[]).push([[897],{897:(A,e,n)=>{n.r(e),n.d(e,{default:()=>w});var t=n(885),a=n(7294),i=n(3379),o=n.n(i),l=n(7795),s=n.n(l),m=n(569),r=n.n(m),C=n(3565),c=n.n(C),p=n(9216),g=n.n(p),f=n(4589),x=n.n(f),d=n(818),h={};h.styleTagTransform=x(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=g();o()(d.Z,h);const u=d.Z&&d.Z.locals?d.Z.locals:void 0;var _=n(9803),y=n(5755),B=n(2855),T=n(3158),E=n(9250),b=n(5893);const w=function(){var A=(0,E.s0)(),e=(0,a.useState)(""),n=(0,t.Z)(e,2),i=n[0],o=n[1];return(0,b.jsxs)(T.Z,{children:[(0,b.jsxs)("div",{className:u.gameTop,children:[(0,b.jsx)("p",{className:u.gameTopText,children:"Games"}),(0,b.jsx)(B.Z,{value:i,setValue:o,ph:"Search the game",className:u.gameSearch})]}),(0,b.jsx)("ul",{className:u.ul,children:_.DX.cards.map((function(e){return(0,b.jsxs)("li",{className:u.li,onClick:function(){A("../TournamentsInfo")},children:[(0,b.jsx)(y.Z,{className:u.gameImg,img:e.img,webp:e.webp}),(0,b.jsx)("p",{className:u.liText,children:e.name})]},e.key)}))})]})}},818:(A,e,n)=>{n.d(e,{Z:()=>l});var t=n(7537),a=n.n(t),i=n(3645),o=n.n(i)()(a());o.push([A.id,".gameTop__Iv9sY{display:flex;justify-content:space-between;align-items:center}.gameTopText__ZSa6v{color:#f5f5f5;font-family:Rubik;font-size:44px;font-style:normal;font-weight:700;line-height:100%;margin-bottom:30px;margin-top:30px}.gameSearch__FG1Km{width:30%;color:#cccdcd;font-family:Rubik;font-size:16px;font-style:normal;font-weight:400;line-height:100%;height:40px}.ul__RmQyO{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}.li__lneYS{position:relative;cursor:pointer}.liText__PBU9h{position:absolute;bottom:30px;left:50%;transform:translate(-50%);color:#f5f5f5;text-align:center;font-size:30px;font-style:normal;font-weight:700;line-height:100%}.gameImg__pyRiL{aspect-ratio:387/500}@media screen and (max-width: 1400px){.gameTop__Iv9sY{margin-top:50px;display:flex;flex-direction:column;margin-bottom:50px}.gameSearch__FG1Km{width:100%}.ul__RmQyO{grid-template-columns:1fr 1fr;gap:30px}.li__lneYS{justify-self:center}}@media screen and (max-width: 1200px){.ul__RmQyO{grid-template-columns:1fr}.gameImg__pyRiL{width:329px}}","",{version:3,sources:["webpack://./src/components/pages/GamesSub/gameSub.module.scss"],names:[],mappings:"AAAA,gBACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAGF,oBACE,aAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,kBAAA,CACA,eAAA,CAEF,mBACE,SAAA,CACA,aAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,WAAA,CAEF,WACE,YAAA,CACA,iCAAA,CACA,QAAA,CAEF,WACE,iBAAA,CACA,cAAA,CAEF,eACE,iBAAA,CACA,WAAA,CACA,QAAA,CACA,yBAAA,CACA,aAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CAGF,gBACE,oBAAA,CAGF,sCACE,gBACE,eAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CAEF,mBACE,UAAA,CAEF,WACE,6BAAA,CACA,QAAA,CAEF,WACE,mBAAA,CAAA,CAIJ,sCACE,WACE,yBAAA,CAEF,gBACE,WAAA,CAAA",sourcesContent:[".gameTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.gameTopText {\n  color: #f5f5f5;\n  font-family: Rubik;\n  font-size: 44px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 100%;\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n.gameSearch {\n  width: 30%;\n  color: #cccdcd;\n  font-family: Rubik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n  height: 40px;\n}\n.ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n}\n.li {\n  position: relative;\n  cursor: pointer;\n}\n.liText {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translate(-50%);\n  color: #f5f5f5;\n  text-align: center;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 100%;\n}\n\n.gameImg {\n  aspect-ratio: 387/500;\n}\n\n@media screen and (max-width: 1400px) {\n  .gameTop {\n    margin-top: 50px;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 50px;\n  }\n  .gameSearch {\n    width: 100%;\n  }\n  .ul {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n  .li {\n    justify-self: center;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .ul {\n    grid-template-columns: 1fr;\n  }\n  .gameImg {\n    width: 329px;\n  }\n}\n"],sourceRoot:""}]),o.locals={gameTop:"gameTop__Iv9sY",gameTopText:"gameTopText__ZSa6v",gameSearch:"gameSearch__FG1Km",ul:"ul__RmQyO",li:"li__lneYS",liText:"liText__PBU9h",gameImg:"gameImg__pyRiL"};const l=o}}]);
//# sourceMappingURL=897.bundle.329c61207de8594f6d35.js.map