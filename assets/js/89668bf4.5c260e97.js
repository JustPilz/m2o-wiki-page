"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1278],{5524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const r={sidebar_position:2},o="setPlayerPosition",l={id:"serverFunctions/SetPlayerPosition",title:"setPlayerPosition",description:"This function is used to set a players position",source:"@site/docs/serverFunctions/SetPlayerPosition.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/SetPlayerPosition",permalink:"/m2n-wiki/docs/serverFunctions/SetPlayerPosition",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"setPlayerModel",permalink:"/m2n-wiki/docs/serverFunctions/SetPlayerModel"},next:{title:"setPlayerRotation",permalink:"/m2n-wiki/docs/serverFunctions/SetPlayerRotation"}},a={},c=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setplayerposition",children:"setPlayerPosition"}),"\n",(0,s.jsx)(n.p,{children:"This function is used to set a players position"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"(playerid: integer, X: float, Y: float, Z: float)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"playerid - The ID of the player"}),"\n",(0,s.jsx)(n.li,{children:"X - The X position to set"}),"\n",(0,s.jsx)(n.li,{children:"Y - The Y position to set"}),"\n",(0,s.jsx)(n.li,{children:"Z - The Z position to set"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-squirrel",children:'function playerSpawnEvent(playerid) {\r\n    setPlayerPosition(playerid, 0.0, 0.0, 0.0);\r\n    return 1;\r\n}\r\naddEventHandler("onPlayerSpawn", playerSpawnEvent);\r\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);