"use strict";(self.webpackChunkDoIT=self.webpackChunkDoIT||[]).push([[897],{897:(A,e,n)=>{n.r(e),n.d(e,{default:()=>w});var r=n(885),t=n(7294),a=n(3379),i=n.n(a),o=n(7795),l=n.n(o),s=n(569),m=n.n(s),C=n(3565),c=n.n(C),p=n(9216),g=n.n(p),f=n(4589),x=n.n(f),d=n(818),h={};h.styleTagTransform=x(),h.setAttributes=c(),h.insert=m().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=g();i()(d.Z,h);const u=d.Z&&d.Z.locals?d.Z.locals:void 0;var _=n(9803),y=n(5755),B=n(2855),T=n(3158),E=n(9250),b=n(5893);const w=function(){var A=(0,E.s0)(),e=(0,t.useState)(""),n=(0,r.Z)(e,2),a=n[0],i=n[1];return(0,b.jsxs)(T.Z,{children:[(0,b.jsxs)("div",{className:u.gameTop,children:[(0,b.jsx)("p",{className:u.gameTopText,children:"Games"}),(0,b.jsx)(B.Z,{value:a,setValue:i,ph:"Search the game",className:u.gameSearch})]}),(0,b.jsx)("ul",{className:u.ul,children:_.DX.cards.map((function(e){return(0,b.jsxs)("li",{className:u.li,onClick:function(){A("../TournamentsInfo")},children:[(0,b.jsx)(y.Z,{className:u.gameImg,img:e.img,webp:e.webp}),(0,b.jsx)("p",{className:u.liText,children:e.name})]},e.key)}))})]})}},818:(A,e,n)=>{n.d(e,{Z:()=>o});var r=n(7537),t=n.n(r),a=n(3645),i=n.n(a)()(t());i.push([A.id,".gameTop__Iv9sY{display:flex;justify-content:space-between;align-items:center}.gameTopText__ZSa6v{color:#f5f5f5;font-family:Rubik;font-size:44px;font-style:normal;font-weight:700;line-height:100%;margin-bottom:30px;margin-top:30px}.gameSearch__FG1Km{width:30%;color:#cccdcd;font-family:Rubik;font-size:16px;font-style:normal;font-weight:400;line-height:100%;height:40px}.ul__RmQyO{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}.li__lneYS{position:relative;cursor:pointer}.liText__PBU9h{position:absolute;bottom:30px;left:50%;transform:translate(-50%);color:#f5f5f5;text-align:center;font-size:30px;font-style:normal;font-weight:700;line-height:100%}.gameImg__pyRiL{aspect-ratio:387/500}@media screen and (max-width: 1400px){.gameTop__Iv9sY{margin-top:50px;display:flex;flex-direction:column;margin-bottom:50px}.gameSearch__FG1Km{width:100%}.ul__RmQyO{grid-template-columns:1fr 1fr;gap:30px}.li__lneYS{justify-self:center}}@media screen and (max-width: 1200px){.ul__RmQyO{grid-template-columns:1fr}.gameImg__pyRiL{width:329px}}","",{version:3,sources:["webpack://./src/components/pages/GamesSub/gameSub.module.scss"],names:[],mappings:"AAAA,gBACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAGF,oBACE,aAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,kBAAA,CACA,eAAA,CAEF,mBACE,SAAA,CACA,aAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,WAAA,CAEF,WACE,YAAA,CACA,iCAAA,CACA,QAAA,CAEF,WACE,iBAAA,CACA,cAAA,CAEF,eACE,iBAAA,CACA,WAAA,CACA,QAAA,CACA,yBAAA,CACA,aAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CAGF,gBACE,oBAAA,CAGF,sCACE,gBACE,eAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CAEF,mBACE,UAAA,CAEF,WACE,6BAAA,CACA,QAAA,CAEF,WACE,mBAAA,CAAA,CAIJ,sCACE,WACE,yBAAA,CAEF,gBACE,WAAA,CAAA",sourcesContent:[".gameTop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.gameTopText {\r\n  color: #f5f5f5;\r\n  font-family: Rubik;\r\n  font-size: 44px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 100%;\r\n  margin-bottom: 30px;\r\n  margin-top: 30px;\r\n}\r\n.gameSearch {\r\n  width: 30%;\r\n  color: #cccdcd;\r\n  font-family: Rubik;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 100%;\r\n  height: 40px;\r\n}\r\n.ul {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  gap: 20px;\r\n}\r\n.li {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.liText {\r\n  position: absolute;\r\n  bottom: 30px;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  color: #f5f5f5;\r\n  text-align: center;\r\n  font-size: 30px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 100%;\r\n}\r\n\r\n.gameImg {\r\n  aspect-ratio: 387/500;\r\n}\r\n\r\n@media screen and (max-width: 1400px) {\r\n  .gameTop {\r\n    margin-top: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 50px;\r\n  }\r\n  .gameSearch {\r\n    width: 100%;\r\n  }\r\n  .ul {\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 30px;\r\n  }\r\n  .li {\r\n    justify-self: center;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .ul {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .gameImg {\r\n    width: 329px;\r\n  }\r\n}\r\n"],sourceRoot:""}]),i.locals={gameTop:"gameTop__Iv9sY",gameTopText:"gameTopText__ZSa6v",gameSearch:"gameSearch__FG1Km",ul:"ul__RmQyO",li:"li__lneYS",liText:"liText__PBU9h",gameImg:"gameImg__pyRiL"};const o=i}}]);
//# sourceMappingURL=897.bundle.cf2b0199f323b5dfacd0.js.map