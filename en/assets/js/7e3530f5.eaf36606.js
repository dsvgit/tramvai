"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),v=a,d=p["".concat(s,".").concat(v)]||p[v]||u[v]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3332:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>m,default:()=>p});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={id:"create-event",title:"Create event"},s=void 0,l={unversionedId:"features/state/create-event",id:"features/state/create-event",title:"Create event",description:"The createEvent method creates an event that can be subscribed to in state management",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/features/state/create-event.md",sourceDirName:"features/state",slug:"/features/state/create-event",permalink:"/en/docs/features/state/create-event",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/state/create-event.md",tags:[],version:"current",frontMatter:{id:"create-event",title:"Create event"},sidebar:"docs",previous:{title:"Introduction",permalink:"/en/docs/features/state/overview"},next:{title:"React hooks",permalink:"/en/docs/features/state/hooks"}},m=[{value:"Method Description",id:"method-description",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Creating an event without parameters",id:"creating-an-event-without-parameters",children:[],level:4},{value:"Creating an event with parameters",id:"creating-an-event-with-parameters",children:[],level:4},{value:"Create event with payload conversion",id:"create-event-with-payload-conversion",children:[],level:4},{value:"Using Events in Actions",id:"using-events-in-actions",children:[],level:4}],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createEvent")," method creates an event that can be subscribed to in state management"),(0,i.kt)("h2",{id:"method-description"},"Method Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createEvent(eventName: string, payloadCreator?: PayloadTransformer): EventCreator")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventName")," - Unique identifier of the event"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payloadCreator")," - an optional function that allows you to combine multiple arguments into one, In cases where the event was called with multiple arguments.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"creating-an-event-without-parameters"},"Creating an event without parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createEvent } from '@tramvai/state';\n\nconst userLoadingInformation = createEvent('user loading information');\n\nuserLoadingInformation();\n")),(0,i.kt)("h4",{id:"creating-an-event-with-parameters"},"Creating an event with parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createEvent } from '@tramvai/state';\n\nconst userInformation = createEvent<{ age: number; name: string }>('user information');\n\nuserInformation({ age: 42, name: 'Tom' });\n")),(0,i.kt)("h4",{id:"create-event-with-payload-conversion"},"Create event with payload conversion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createEvent } from '@tramvai/state';\n\nconst itemPrice = createEvent('user information', (info: string, price: number) => ({\n  [info]: price,\n}));\n\nitemPrice('car', 3000);\n")),(0,i.kt)("h4",{id:"using-events-in-actions"},"Using Events in Actions"),(0,i.kt)("p",null,"We create an action in which, after loading the information, we create an event and throw it into context.dispatch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAction } from '@tramvai/core';\nimport { createEvent } from '@tramvai/state';\n\nconst userInformation = createEvent < { age: number, name: string } > 'user information';\n\nconst action = createAction({\n  name: 'userLoadInformation',\n  fn: async (context) => {\n    const result = await tinkoffRequest({ method: 'information' });\n    context.dispatch(userInformation(result));\n  },\n});\n")))}p.isMDXComponent=!0}}]);