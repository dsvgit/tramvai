"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8034:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>u,toc:()=>l,default:()=>p});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"create-reducer",title:"Create reducer"},c=void 0,u={unversionedId:"features/state/create-reducer",id:"features/state/create-reducer",title:"Create reducer",description:"The createReducer method creates reducer functions that describe the state during initialization and the reaction to state changes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/features/state/create-reducer.md",sourceDirName:"features/state",slug:"/features/state/create-reducer",permalink:"/en/docs/features/state/create-reducer",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/state/create-reducer.md",tags:[],version:"current",frontMatter:{id:"create-reducer",title:"Create reducer"},sidebar:"docs",previous:{title:"Tramvai integration",permalink:"/en/docs/features/state/tramvai-integration"},next:{title:"Papi introduction",permalink:"/en/docs/features/papi/introduction"}},l=[{value:"Method Description",id:"method-description",children:[],level:3},{value:"Typing",id:"typing",children:[],level:3},{value:"Subscription to events",id:"subscription-to-events",children:[],level:3},{value:"Automatic creation of events",id:"automatic-creation-of-events",children:[],level:3}],d={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer")," method creates reducer functions that describe the state during initialization and the reaction to state changes."),(0,i.kt)("p",null,"The working principle and api is built based on: ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/basics/reducers"},"https://redux.js.org/basics/reducers")," and the use interface from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pauldijou/redux-act#createreducerhandlers-defaultstate"},"https://github.com/pauldijou/redux-act#createreducerhandlers-defaultstate")),(0,i.kt)("h3",{id:"method-description"},"Method Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createReducer(name, initialState)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - unique name of the reducer. Should not overlap with other reducers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialState")," - default reducer state")),(0,i.kt)("h3",{id:"typing"},"Typing"),(0,i.kt)("p",null,"By default, the reducer state type and name are displayed automatically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createReducer } from '@tramvai/state';\n\nconst userReducer = createReducer('user', { name: 'anonymus' });\n")),(0,i.kt)("p",null,"Why do we need typing for the name of the reducer at all?\nThen this reducer will be more convenient to use together with ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector"),"."),(0,i.kt)("p",null,"If you pass the state type manually, it is desirable to specify the name as the second argument of the generic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createReducer } from '@tramvai/state';\n\ntype UserState = { name: string };\n\nconst userReducer = createReducer<UserState, 'user'>('user', { name: 'anonymus' });\n")),(0,i.kt)("p",null,"But, you can simply set the desired type for ",(0,i.kt)("inlineCode",{parentName:"p"},"initialState"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createReducer } from '@tramvai/state';\n\ntype UserState = { name?: string };\n\nconst userReducer = createReducer('user', {} as UserState);\n")),(0,i.kt)("h3",{id:"subscription-to-events"},"Subscription to events"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".on(evnet, reducer)")," When creating a reducer, the .on method becomes available, which allows you to subscribe to events and return a new state"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event")," - an event or a string to which the reducer will be subscribed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reducer(state, payload)")," - a pure function that takes the current ",(0,i.kt)("inlineCode",{parentName:"li"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"payload")," from the event and must return the new state of the reducer")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"An example of using the ",(0,i.kt)("inlineCode",{parentName:"em"},".on")," method"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createReducer, createEvent } from '@tramvai/state';\n\nexport const userLoadInformation = createEvent < { status: string } > 'user load information';\nexport const userAddInformation = createEvent < { name: string, info: {} } > 'user add information';\n\nconst userReducer = createReducer('user', {\n  info: {},\n})\n  .on(userLoadInformation, (state, info) => ({ info }))\n  .on(userAddInformation, (state, { name, info }) => ({\n    ...state,\n    state: {\n      ...state.info,\n      [name]: info,\n    },\n  }));\n")),(0,i.kt)("h3",{id:"automatic-creation-of-events"},"Automatic creation of events"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".createEvents(model)")," method that removes the need to create and explicitly bind events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"model")," - an object in which the key is the event identifier, which will then be passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"createEvent"),", and the value is the reducer function, which will get into the ",(0,i.kt)("inlineCode",{parentName:"li"},".on()")," method and will be called when the events are triggered")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"An example of using the ",(0,i.kt)("inlineCode",{parentName:"em"},".createEvents")," method"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createReducer } from '@tramvai/state';\n\nconst userReducer = createReducer('user', {\n  info: {},\n});\nexport const { userLoadInformation, userAddInformation } = userReducer.createEvents({\n  userLoadInformation: (state, info: { status: string }) => ({ info }),\n  userAddInformation: (state, { name, info }: { name: string; info: {} }) => ({\n    ...state,\n    state: {\n      ...state.info,\n      [name]: info,\n    },\n  }),\n});\n")),(0,i.kt)("p",null,"It is imperative to describe the types of the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," argument in reducers, otherwise type inference for events will not work."))}p.isMDXComponent=!0}}]);