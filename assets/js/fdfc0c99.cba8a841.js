"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9137],{468:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=n(4848),o=n(8453);const i={sidebar_position:2},s="onScriptError",c={id:"serverEvents/common/OnScriptError",title:"onScriptError",description:"This event is triggered when the script encounters an error .",source:"@site/docs/serverEvents/common/OnScriptError.md",sourceDirName:"serverEvents/common",slug:"/serverEvents/common/OnScriptError",permalink:"/m2n-wiki/docs/serverEvents/common/OnScriptError",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"onConsoleInput",permalink:"/m2n-wiki/docs/serverEvents/common/OnConsoleInput"},next:{title:"onScriptExit",permalink:"/m2n-wiki/docs/serverEvents/common/OnScriptExit"}},l={},p=[];function d(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"onscripterror",children:"onScriptError"}),"\n",(0,t.jsx)(r.p,{children:"This event is triggered when the script encounters an error ."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"(type: integer, line: integer, column: integer, error: string)\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"type - The type of error"}),"\n",(0,t.jsx)(r.li,{children:"line - The line number of which the error is on"}),"\n",(0,t.jsx)(r.li,{children:"column - The column number of which the error is on"}),"\n",(0,t.jsx)(r.li,{children:"error - The error message"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Example"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-squirrel",children:'addEventHandler("onScriptError", function(type, line, column, error) {\r\n    log("Error: Type: " + type + "; Line: " + line + "; Column: " + Column + "; Error: " + error);\r\n});\n'})})]})}function m(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var t=n(6540);const o={},i=t.createContext(o);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);