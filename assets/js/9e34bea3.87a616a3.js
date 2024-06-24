"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4639],{710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(4848),o=t(8453);const s={sidebar_position:2},r="setVehicleRotation",c={id:"serverFunctions/SetVehicleRotation",title:"setVehicleRotation",description:"This function is used to set a vehicles rotation position.",source:"@site/docs/serverFunctions/SetVehicleRotation.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/SetVehicleRotation",permalink:"/m2n-wiki/docs/serverFunctions/SetVehicleRotation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"setVehiclePosition",permalink:"/m2n-wiki/docs/serverFunctions/SetVehiclePosition"},next:{title:"setVehicleSirenState",permalink:"/m2n-wiki/docs/serverFunctions/SetVehicleSirenState"}},l={},a=[];function h(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"setvehiclerotation",children:"setVehicleRotation"}),"\n",(0,i.jsx)(n.p,{children:"This function is used to set a vehicles rotation position."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(vehcileid: integer, rx: float, ry: float, rz: float)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"vehcileid - The vehicle you would like to change rotation position"}),"\n",(0,i.jsx)(n.li,{children:"rx - The RX position to change to"}),"\n",(0,i.jsx)(n.li,{children:"ry - The RY position to change to"}),"\n",(0,i.jsx)(n.li,{children:"rz - The RZ position to change to"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onPlayerSpawn", function (playerid) {\r\n    local vehicleid = createVehicle(0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\r\n\r\n    // We can set these positions within createVehicle, however for an example:\r\n    setVehiclePosition(vehicleid, 20.0, 20.0, 1.0);\r\n    setVehicleRotation(vehicleid, 50.0, 10.0, 2.0);\r\n    return 1;\r\n});\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);