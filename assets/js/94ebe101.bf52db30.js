"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9486],{7931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(4848),i=t(8453);const s={sidebar_position:2},c="timer::IsActive",o={id:"serverFunctions/Timer__IsActive",title:"timer::IsActive",description:"This function is used to check if a timer is running.",source:"@site/docs/serverFunctions/Timer__IsActive.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/Timer__IsActive",permalink:"/m2n-wiki/docs/serverFunctions/Timer__IsActive",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"timer",permalink:"/m2n-wiki/docs/serverFunctions/Timer"},next:{title:"timer::Kill",permalink:"/m2n-wiki/docs/serverFunctions/Timer__Kill"}},a={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"timerisactive",children:"timer::IsActive"}),"\n",(0,r.jsx)(n.p,{children:"This function is used to check if a timer is running."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"No\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns"})}),"\n",(0,r.jsx)(n.p,{children:"bool - true if the timer is active, else false"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-squirrel",children:'local task;\r\n\r\nfunction completeTask(text) {\r\n    // Output "Task Completed!"\r\n    sendPlayerMessageToAll(text);\r\n}\r\n\r\nfunction init() {\r\n    // Create a timer to send "Task Completed" in 10 minutes time\r\n    task = timer(completeTask, 600000, 0, "Task Completed!");\r\n}\r\naddEventHandler("onScriptInit", init);\r\n\r\naddCommandHandler("istaskcomplete" , function(playerid) {\r\n        // Check to see if the timer is still active\r\n        if(task.IsActive()) {\r\n            // The timer is still active\r\n            sendPlayerMessage(playerid, "The task isn\'t completed yet!");\r\n        }\r\n        else\r\n        {\r\n            // The timer is no longer active, completeTask() has been called\r\n            sendPlayerMessage(playerid, "The task is completed!");\r\n        }\r\n});\r\n\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);