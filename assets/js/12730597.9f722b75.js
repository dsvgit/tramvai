"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,l=f["".concat(u,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(l,a(a({ref:t},p),{},{components:n})):r.createElement(l,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},u=void 0,c={unversionedId:"references/tokens/router",id:"references/tokens/router",title:"router",description:"Tramvai tokens used for integration and extending routing module.",source:"@site/tmp-docs/references/tokens/router.md",sourceDirName:"references/tokens",slug:"/references/tokens/router",permalink:"/docs/references/tokens/router",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tokens/router.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"render",permalink:"/docs/references/tokens/render"},next:{title:"server",permalink:"/docs/references/tokens/server"}},p={},d=[{value:"Tokens",id:"tokens",level:2}],f={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tramvai tokens used for integration and extending routing module."),(0,i.kt)("h2",{id:"tokens"},"Tokens"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createToken } from '@tinkoff/dippy';\nimport type {\n  AbstractRouter,\n  NavigationGuard,\n  Route,\n  Navigation,\n  NavigationRoute,\n  NavigateOptions,\n  UpdateCurrentRouteOptions,\n  HistoryOptions,\n} from '@tinkoff/router';\nimport type { TramvaiComponent } from '@tramvai/react';\n\n/**\n * @description\n * Token to access the router instance\n */\nexport const ROUTER_TOKEN = createToken<AbstractRouter>('router router');\n\n/**\n * @description\n * Token for defining static routes\n */\nexport const ROUTES_TOKEN = createToken<Route | Route[]>('router routes', { multi: true });\n/**\n * @description\n * Token for providing guard handlers for page transitions\n */\nexport const ROUTER_GUARD_TOKEN = createToken<NavigationGuard>('router guard', { multi: true });\n\n/**\n * @description\n * Encapsulates the logic of working with the router - contains methods for getting the configuration of the route and performing navigation\n */\nexport const PAGE_SERVICE_TOKEN = createToken<PageService>('router pageService');\n\n/**\n * @description\n * Managers registration for additions related to pages and bundles\n */\nexport const PAGE_REGISTRY_TOKEN = createToken<PageRegistry>('router pageRegistry');\n\n/**\n * @description\n * Hook to resolve route dynamically\n */\nexport const ROUTE_RESOLVE_TOKEN = createToken<RouteResolve>('router routeResolve');\n\n/**\n * @description\n * Hook to transform route config\n */\nexport const ROUTE_TRANSFORM_TOKEN = createToken<RouteTransform>('router routeTransform', {\n  multi: true,\n});\n\n/**\n * @description\n * Flag for SPA-transitions, indicating that actions must be executed before or after a route update in the stor\n */\nexport const ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN = createToken<'before' | 'after'>(\n  'router spaRunMode'\n);\n\nexport const LINK_PREFETCH_MANAGER_TOKEN =\n  createToken<LinkPrefetchManager>('link prefetch manager');\n\nexport const LINK_PREFETCH_HANDLER_TOKEN = createToken<(route: Route) => Promise<void>>(\n  'link prefetch handler',\n  { multi: true }\n);\n\nexport const ROUTER_MODE_TOKEN = createToken<'spa' | 'no-spa'>('router mode');\n\nexport type PageServiceComponentType =\n  | 'page'\n  | 'layout'\n  | 'nestedLayout'\n  | 'header'\n  | 'footer'\n  | 'errorBoundary';\n\nexport interface PageService {\n  getCurrentRoute(): NavigationRoute;\n  getCurrentUrl(): ReturnType<AbstractRouter['getCurrentUrl']>;\n  getConfig(route?: Route): Route['config'];\n  getContent(route?: Route): Record<string, any>;\n  getMeta(route?: Route): { seo: Record<string, string>; analytics: Record<string, string> };\n\n  navigate(options: string | NavigateOptions): Promise<void>;\n  updateCurrentRoute(options: UpdateCurrentRouteOptions): Promise<void>;\n  back(options?: HistoryOptions): Promise<void>;\n  forward(): Promise<void>;\n  go(to: number, options?: HistoryOptions): Promise<void>;\n\n  addComponent(name: string, component: TramvaiComponent, route?: Route): void;\n  getComponent(name: string, route?: Route): TramvaiComponent | undefined;\n\n  resolveComponentFromConfig(\n    property: PageServiceComponentType,\n    route?: Route\n  ): TramvaiComponent | undefined;\n}\n\nexport interface PageRegistry {\n  resolve(route: Route): Promise<void>;\n}\n\nexport type RouteResolve = (navigation: Navigation) => Promise<Route | void>;\n\nexport type RouteTransform = (route: Route) => Route;\n\nexport interface LinkPrefetchManager {\n  prefetch(url: string): Promise<void>;\n}\n\n"))))}m.isMDXComponent=!0}}]);