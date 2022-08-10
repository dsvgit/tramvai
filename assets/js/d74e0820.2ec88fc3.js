"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2313],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?o.createElement(h,c(c({ref:n},p),{},{components:t})):o.createElement(h,c({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<r;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9688:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>m});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),c=["components"],a={},s=void 0,l={unversionedId:"how-to/actions-conditions",id:"how-to/actions-conditions",title:"actions-conditions",description:"For each action, you can specify the execution conditions, this mechanism is described in detail on the Action page. By default, a global action is executed once on the server for each user request, if the action does not have time to complete within a certain time, then its execution is transferred to the client.",source:"@site/tmp-docs/how-to/actions-conditions.md",sourceDirName:"how-to",slug:"/how-to/actions-conditions",permalink:"/docs/how-to/actions-conditions",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/actions-conditions.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Strong typing",permalink:"/docs/guides/strong-typing"},next:{title:"actions-execution",permalink:"/docs/how-to/actions-execution"}},p=[{value:"Using preset limits",id:"using-preset-limits",children:[],level:3},{value:"Create your own restrictions",id:"create-your-own-restrictions",children:[],level:3},{value:"Execute actions on specific pages only",id:"execute-actions-on-specific-pages-only",children:[],level:3},{value:"Connecting actions and restrictions in the application",id:"connecting-actions-and-restrictions-in-the-application",children:[],level:3}],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For each action, you can specify the execution conditions, this mechanism is described in detail on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/action"},"Action page"),". By default, a global action is executed once on the server for each user request, if the action does not have time to complete within a certain time, then its execution is transferred to the client."),(0,r.kt)("h3",{id:"using-preset-limits"},"Using preset limits"),(0,r.kt)("p",null,"Let's say we want to execute one action only on the server, and one only on the client, for this there are ",(0,r.kt)("inlineCode",{parentName:"p"},"onlyServer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onlyBrowser")," restrictions:"),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create actions"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { declareAction } from '@tramvai/core';\nimport { set } from '../store';\n\nexport const innerAction = declareAction({\n  name: 'innerAction',\n  fn() {\n    console.log('execute innerAction');\n    return this.dispatch(set('innerAction'));\n  },\n  // conditions not set - the action will be executed by default:\n  // if the action is defined as global (in an application, bundle or page),\n  // then the action will first try to execute on the server - if it succeeds, then it will not be executed again on the client\n  // if the action did not manage to be executed within the limit, then it will be launched on the client,\n  // repeated launches when switching to the page with this action will not be executed, because the last successful execution is remembered\n  // if the action is called explicitly through the context, then such an action will always be executed (the execution limit still affects,\n  // and the data may not always be available with ssr, but the action will always try to execute)\n});\n\nexport const innerServerAction = declareAction({\n  name: 'innerServerAction',\n  fn() {\n    console.log('execute innerServerAction');\n    return this.dispatch(set('innerServerAction'));\n  },\n  // this action can only be executed on the server\n  conditions: {\n    onlyServer: true,\n  },\n});\n\nexport const innerBrowserAction = declareAction({\n  name: 'innerBrowserAction',\n  fn() {\n    console.log('execute innerBrowserAction');\n    return this.dispatch(set('innerBrowserAction'));\n  },\n  // this action can only be executed on the browser\n  conditions: {\n    onlyBrowser: true,\n  },\n});\n\n"))))),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use actions"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { declareAction } from '@tramvai/core';\nimport { set } from '../store';\nimport { innerAction, innerBrowserAction, innerServerAction } from './inner';\n\nexport const pageServerAction = declareAction({\n  name: 'pageServerAction',\n  async fn() {\n    console.log('execute pageServerAction');\n    await this.executeAction(innerAction);\n    await this.executeAction(innerServerAction);\n    await this.executeAction(innerBrowserAction);\n    return this.dispatch(set('pageServerAction'));\n  },\n  conditions: {\n    pageServer: true,\n  },\n});\n\nexport const pageBrowserAction = declareAction({\n  name: 'pageBrowserAction',\n  async fn() {\n    console.log('execute pageBrowserAction');\n    await this.executeAction(innerAction);\n    await this.executeAction(innerServerAction);\n    await this.executeAction(innerBrowserAction);\n    return this.dispatch(set('pageBrowserAction'));\n  },\n  // this action can only be executed on the browser\n  conditions: {\n    onlyBrowser: true,\n  },\n});\n\nexport const pageAlwaysAction = declareAction({\n  name: 'pageAlwaysAction',\n  async fn() {\n    console.log('execute pageAlwaysAction');\n    return this.dispatch(set('pageAlwaysAction'));\n  },\n  conditions: {\n    always: true,\n  },\n});\n\n// this action is only executed in the browser, on page load and on every SPA transition\nexport const pageBrowserAlwaysAction = declareAction({\n  name: 'pageBrowserAlwaysAction',\n  async fn() {\n    console.log('execute pageBrowserAlwaysAction');\n    return this.dispatch(set('pageBrowserAlwaysAction'));\n  },\n  conditions: {\n    always: true,\n    onlyBrowser: true,\n  },\n});\n\n"))))),(0,r.kt)("h3",{id:"create-your-own-restrictions"},"Create your own restrictions"),(0,r.kt)("p",null,"To do this, you need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionCondition")," interface, and add a new limiter to the DI, via the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTION_CONDITIONALS")," token:"),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create a delimiter"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ActionCondition } from '@tramvai/module-common';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\n\nexport const condition = ({\n  pageService,\n}: {\n  pageService: typeof PAGE_SERVICE_TOKEN;\n}): ActionCondition => {\n  return {\n    key: 'custom',\n    fn: (checker) => {\n      if (checker.conditions.custom) {\n        const { pathname } = pageService.getCurrentUrl();\n        console.log(pathname);\n        if (pathname !== '/custom/') {\n          checker.forbid();\n        }\n      }\n    },\n  };\n};\n\n"))))),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create an action with this constraint"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { declareAction } from '@tramvai/core';\nimport { set } from '../store';\n\nexport const customAction = declareAction({\n  name: 'customAction',\n  fn() {\n    console.log('execute customAction');\n    return this.dispatch(set('customAction'));\n  },\n  // you can set your own options, which are then used in their conditions checks\n  conditions: {\n    custom: true,\n  },\n});\n\n"))))),(0,r.kt)("h3",{id:"execute-actions-on-specific-pages-only"},"Execute actions on specific pages only"),(0,r.kt)("p",null,"To do this, we use the static property ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," for the component that is used on these pages:"),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Page component"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import reduceObj from '@tinkoff/utils/object/reduce';\nimport React from 'react';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\nimport { useSelector } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\nimport { store } from '../store';\nimport {\n  pageBrowserAction,\n  pageServerAction,\n  pageAlwaysAction,\n  pageBrowserAlwaysAction,\n} from '../actions/page';\nimport { customAction } from '../actions/custom';\n\nexport function Page() {\n  const state = useSelector(store, (x) => x.actionTest);\n  const pageService = useDi(PAGE_SERVICE_TOKEN);\n\n  return (\n    <div>\n      <button type=\"button\" onClick={() => pageService.navigate({ url: '/custom/' })}>\n        Navigate To custom\n      </button>\n      {reduceObj(\n        (acc, v, k) => {\n          return acc.concat(\n            <div>\n              {k} loaded from {v}\n            </div>\n          );\n        },\n        [],\n        state\n      )}\n    </div>\n  );\n}\n\nPage.actions = [\n  pageServerAction,\n  pageBrowserAction,\n  pageAlwaysAction,\n  pageBrowserAlwaysAction,\n  customAction,\n];\n\n"))))),(0,r.kt)("h3",{id:"connecting-actions-and-restrictions-in-the-application"},"Connecting actions and restrictions in the application"),(0,r.kt)("p",null,"Let's create an application that connects the actions, constraints, and components from the previous examples:"),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Application entry point"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, createBundle, provide } from '@tramvai/core';\nimport { ACTION_CONDITIONALS } from '@tramvai/module-common';\nimport { PAGE_SERVICE_TOKEN, ROUTES_TOKEN } from '@tramvai/tokens-router';\n\nimport { store } from './store';\nimport { modules } from '../common';\nimport { condition } from './conditions/custom';\nimport { Page } from './components/Page';\n\nconst bundle = createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: Page,\n  },\n  reducers: [store],\n});\n\ncreateApp({\n  name: 'actions-conditions',\n  modules: [...modules],\n  providers: [\n    provide({\n      provide: ACTION_CONDITIONALS,\n      multi: true,\n      useFactory: condition,\n      deps: {\n        pageService: PAGE_SERVICE_TOKEN,\n      },\n    }),\n    provide({\n      provide: ROUTES_TOKEN,\n      multi: true,\n      useValue: {\n        name: 'custom',\n        path: '/custom/',\n      },\n    }),\n  ],\n  bundles: {\n    mainDefault: () => Promise.resolve({ default: bundle }),\n  },\n});\n\n"))))))}m.isMDXComponent=!0}}]);