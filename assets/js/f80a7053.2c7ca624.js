"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4861],{1623:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var t=i(4848),s=i(8453);const r={sidebar_position:2},o="unbindKey",d={id:"clientFunctions/bind/UnbindKey",title:"unbindKey",description:"This function is used to unbind a key from a bindKey.",source:"@site/docs/clientFunctions/bind/UnbindKey.md",sourceDirName:"clientFunctions/bind",slug:"/clientFunctions/bind/UnbindKey",permalink:"/m2n-wiki/docs/clientFunctions/bind/UnbindKey",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"bindKey",permalink:"/m2n-wiki/docs/clientFunctions/bind/BindKey"},next:{title:"isKeyBound",permalink:"/m2n-wiki/docs/clientFunctions/bind/IsKeyBound"}},c={},u=[];function l(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"unbindkey",children:"unbindKey"}),"\n",(0,t.jsx)(e.p,{children:"This function is used to unbind a key from a bindKey."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'(key: string, state: "up" | "down")\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"key - The key to unbind"}),"\n",(0,t.jsx)(e.li,{children:"state - The state of the key to unbind"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-squirrel",children:'function fOnePressed() {\r\n    sendMessage("Removing bindKey...");\r\n    unbindKey("f1", "up");\r\n}\r\n\r\naddEventHandler("onClientScriptInit", function() {\r\n    bindKey("f1", "up", fOnePressed);\r\n});\n'})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>d});var t=i(6540);const s={},r=t.createContext(s);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);