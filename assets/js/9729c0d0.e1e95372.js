"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,T=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(T,a(a({ref:t},l),{},{components:n})):r.createElement(T,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c=void 0,p={unversionedId:"references/tokens/http-client",id:"references/tokens/http-client",title:"http-client",description:"Tramvai tokens used for integration and extending @tramvai/module-http-client",source:"@site/tmp-docs/references/tokens/http-client.md",sourceDirName:"references/tokens",slug:"/references/tokens/http-client",permalink:"/docs/references/tokens/http-client",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tokens/http-client.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"core",permalink:"/docs/references/tokens/core"},next:{title:"metrics",permalink:"/docs/references/tokens/metrics"}},l={},f=[{value:"Tokens",id:"tokens",level:2}],u={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tramvai tokens used for integration and extending ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/module-http-client")),(0,i.kt)("h2",{id:"tokens"},"Tokens"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createToken } from '@tinkoff/dippy';\nimport type { BaseHttpClient, HttpClient } from '@tramvai/http-client';\nimport type { TinkoffRequestOptions, Agent } from '@tramvai/tinkoff-request-http-client-adapter';\n\nexport type HttpClientFactoryOptions = TinkoffRequestOptions & { name: string };\n\n/**\n * @description\n * Factory of HTTP clients with minimal base settings\n */\nexport const HTTP_CLIENT_FACTORY =\n  createToken<(options: HttpClientFactoryOptions) => HttpClient>('HTTP_CLIENT_FACTORY');\n\n/**\n * @description\n * Default options for factory of HTTP clients\n */\nexport const DEFAULT_HTTP_CLIENT_FACTORY_OPTIONS = createToken<Partial<HttpClientFactoryOptions>>(\n  'DEFAULT_HTTP_CLIENT_FACTORY_OPTIONS'\n);\n\n/**\n * @description\n * Universal HTTP client for arbitrary requests\n */\nexport const HTTP_CLIENT = createToken<HttpClient>('HTTP_CLIENT');\n\n/**\n * @description\n * Global HTTP and HTTPS agents for all clients\n * https://nodejs.org/dist/latest-v16.x/docs/api/http.html#class-httpagent\n */\nexport const HTTP_CLIENT_AGENT = createToken<{\n  http: Agent;\n  https: Agent;\n}>('HTTP_CLIENT_AGENT');\n\n/**\n * @description\n * List of HTTP headers that are proxied from app request to all of the backend API\n */\nexport const API_CLIENT_PASS_HEADERS = createToken<string | string[]>('apiClientPassHeaders', {\n  multi: true,\n});\n\n/**\n * @description\n * Internal api for app server.\n * Uses the value of `APP_INFO_TOKEN` from di for constructing the request address\n */\nexport const PAPI_SERVICE = createToken<BaseHttpClient>('papi service');\n\n/**\n * @description\n * Enable or disable circuit breaker\n */\nexport const DISABLE_CIRCUIT_BREAKER = createToken<boolean>('disable circuit breaker');\n\n"))))}d.isMDXComponent=!0}}]);