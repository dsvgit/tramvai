"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3580],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(7462),r=t(7294),o=t(6010),i=t(2466),l=t(6550),s=t(1980),p=t(7392),c=t(12);function u(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:u(t);return function(e){var n=(0,p.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function k(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,l.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function f(e){var n,t,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,u=d(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:u})})),w=f[0],b=f[1],v=k({queryString:s,groupId:p}),h=v[0],g=v[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),t=(0,c.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),y=N[0],x=N[1],S=function(){var e=null!=h?h:y;return m({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){S&&b(S)}),[S]),{selectedValue:w,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),x(e)}),[g,x,u]),tabValues:u}}var w=t(2389);const b="tabList__CuJ",v="tabItem_LNqP";function h(e){var n=e.className,t=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,c=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),a=p[t].value;a!==l&&(u(n),s(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;t=null!=(o=c[i])?o:c[c.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},p.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function g(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function N(e){var n=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(g,(0,a.Z)({},e,n)))}function y(e){var n=(0,w.Z)();return r.createElement(N,(0,a.Z)({key:String(n)},e))}},5898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(4866),l=t(5162),s=["components"],p={id:"pwa",title:"PWA (Progressive Web App)"},c=void 0,u={unversionedId:"features/pwa",id:"features/pwa",title:"PWA (Progressive Web App)",description:"Introduction",source:"@site/tmp-docs/03-features/017-pwa.md",sourceDirName:"03-features",slug:"/features/pwa",permalink:"/docs/features/pwa",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/017-pwa.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{id:"pwa",title:"PWA (Progressive Web App)"},sidebar:"sidebar",previous:{title:"Papi (API Routes)",permalink:"/docs/features/papi"},next:{title:"Introduction to tramvai",permalink:"/docs/concepts/overview"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Workbox",id:"workbox",level:3},{value:"Webmanifest",id:"webmanifest",level:3},{value:"Meta",id:"meta",level:3},{value:"Icons",id:"icons",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Service Worker",id:"service-worker",level:3},{value:"Registration scope",id:"registration-scope",level:4},{value:"Source and output filenames",id:"source-and-output-filenames",level:4},{value:"Precaching",id:"precaching",level:3},{value:"Control precached assets",id:"control-precached-assets",level:4},{value:"Webmanifest",id:"webmanifest-1",level:3},{value:"Output filename",id:"output-filename",level:4},{value:"Content",id:"content",level:4},{value:"Icons",id:"icons-1",level:3},{value:"Sizes",id:"sizes",level:4},{value:"Output directory",id:"output-directory",level:4},{value:"Meta",id:"meta-1",level:3},{value:"How to",id:"how-to",level:2},{value:"How to send messages to Service Worker?",id:"how-to-send-messages-to-service-worker",level:3},{value:"How to disable Service Worker generation in development mode?",id:"how-to-disable-service-worker-generation-in-development-mode",level:3},{value:"How to precache webmanifest and critical assets?",id:"how-to-precache-webmanifest-and-critical-assets",level:3}],k={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," provides complete support for ",(0,o.kt)("a",{parentName:"p",href:"https://web.dev/progressive-web-apps/"},"Progressive Web Apps")," (PWA) features. "),(0,o.kt)("p",null,"Main PWA features separated into a few modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#workbox"},"Workbox")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#webmanifest"},"Webmanifest")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#meta"},"Meta")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#icons"},"Icons"))),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("h3",{id:"workbox"},"Workbox"),(0,o.kt)("p",null,"Workbox module based on awesome ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/workbox/"},"workbox")," library."),(0,o.kt)("p",null,"This module responsible for ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"},"Service Worker")," (SW) generation and registration. For SW generation, we use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/#type-InjectManifest"},(0,o.kt)("inlineCode",{parentName:"a"},"InjectManifest")," workbox webpack plugin"),". On the client-side, we use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/workbox/modules/workbox-window/"},(0,o.kt)("inlineCode",{parentName:"a"},"workbox-window")," library")," for SW registration."),(0,o.kt)("p",null,"Main purpose of ",(0,o.kt)("inlineCode",{parentName:"p"},"InjectManifest")," integration is to inject information about application assets to source SW file. It allows us to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/workbox/modules/workbox-precaching/"},"precache all critical application assets"),"."),(0,o.kt)("p",null,"Service Worker generation process is integrated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," development server. It means that you don't need always to run ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," command to generate SW, but this behavior is configurable."),(0,o.kt)("p",null,"For production build, SW will be generated in client build directory with other assets. If you have enabled ",(0,o.kt)("a",{parentName:"p",href:"/docs/how-to/how-enable-modern"},"modern build"),", then SW will be generated for  both modern (with ",(0,o.kt)("inlineCode",{parentName:"p"},".modern.js")," suffix) and legacy bundles."),(0,o.kt)("h3",{id:"webmanifest"},"Webmanifest"),(0,o.kt)("p",null,"Another important part of PWA is ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},"Web Application Manifest"),"."),(0,o.kt)("p",null,"This module allows you to generate webmanifest file as part of the build process. Generated file can have ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".webmanifest")," extension."),(0,o.kt)("p",null,"On application pages, webmanifest will be automatically connected through ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag with rel ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest"),"."),(0,o.kt)("p",null,"All webmanifest configuration is placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai.json")," configuration file."),(0,o.kt)("h3",{id:"meta"},"Meta"),(0,o.kt)("p",null,"This module simplifies the process of adding ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gokulkrishh/awesome-meta-and-manifest"},"PWA specific meta tags")," to the application pages."),(0,o.kt)("p",null,"All PWA meta configuration basically is placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai.json")," configuration file."),(0,o.kt)("h3",{id:"icons"},"Icons"),(0,o.kt)("p",null,"PWA can be installed on endless set of devices, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons"},"and all of them can have different requirements for installed app or startup screen icons"),"."),(0,o.kt)("p",null,"This module allows you to generate all required icons for PWA and automatically connect them to the webmanifest."),(0,o.kt)("p",null,"For source image processing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lovell/sharp"},(0,o.kt)("inlineCode",{parentName:"a"},"sharp"))," library is used."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"First, you need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/module-progressive-web-app")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx tramvai add @tramvai/module-progressive-web-app\n")),(0,o.kt)("p",null,"Then, connect ",(0,o.kt)("inlineCode",{parentName:"p"},"TramvaiPwaModule")," from this package to ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApp } from '@tramvai/core';\nimport { TramvaiPwaModule } from '@tramvai/module-progressive-web-app';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [TramvaiPwaModule],\n});\n")),(0,o.kt)("p",null,"At last, you need to create source Service Worker file, by default it should be named ",(0,o.kt)("inlineCode",{parentName:"p"},"src/sw.ts"),", and contain minimum boilerplate for better typings and workbox integration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/sw.ts"',title:'"src/sw.ts"'},'/// <reference lib="webworker" />\n\ndeclare const self: ServiceWorkerGlobalScope;\n\n// `self.__WB_MANIFEST` type is provided by `workbox-precaching` package, so `any` cast can we removed after this package import\nconst manifest = (self as any).__WB_MANIFEST;\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"service-worker"},"Service Worker"),(0,o.kt)("p",null,"For SW generation, you need to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.workbox.enabled")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai.json")," configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "workbox": {\n        "enabled": true\n      }\n    }\n  }\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/references/cli/start#react-hot-refresh"},"Hot refresh")," is not working correctly with ",(0,o.kt)("inlineCode",{parentName:"p"},"InjectManifest")," plugin. If you want to devlop SW locally, better to disable hot refresh in ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai.json"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hotRefresh": {\n    "enabled": false\n  }\n}\n'))),(0,o.kt)("h4",{id:"registration-scope"},"Registration scope"),(0,o.kt)("p",null,"Default ",(0,o.kt)("a",{parentName:"p",href:"https://web.dev/learn/pwa/service-workers/#scope"},"Service Worker scope")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),". Registration scope can be changed by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.sw.scope")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "sw": {\n        "scope": "/myapp/"\n      },\n      "workbox": {\n        "enabled": true\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"This parameter will be used for SW registration and injected in generated webmanifest file."),(0,o.kt)("h4",{id:"source-and-output-filenames"},"Source and output filenames"),(0,o.kt)("p",null,"By default, from ",(0,o.kt)("inlineCode",{parentName:"p"},"src/sw.ts")," file will be generated ",(0,o.kt)("inlineCode",{parentName:"p"},"${output.client}/sw.js"),". SW source and output filenames can be changed by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.sw.src")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.sw.dest")," options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "sw": {\n        "src": "service-worker.ts",\n        "dest": "service-worker.js"\n      },\n      "workbox": {\n        "enabled": true\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"precaching"},"Precaching"),(0,o.kt)("p",null,"Simple way to precache all application assets is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"workbox-precaching")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/sw.ts"',title:'"src/sw.ts"'},"/// <reference lib=\"webworker\" />\n\nimport { precacheAndRoute } from 'workbox-precaching';\n\ndeclare const self: ServiceWorkerGlobalScope;\n\nprecacheAndRoute(self.__WB_MANIFEST);\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"self.__WB_MANIFEST")," will contain all application processed assets - JS and CSS files, fonts, images."),(0,o.kt)("h4",{id:"control-precached-assets"},"Control precached assets"),(0,o.kt)("p",null,"For large applications, it is unnecessary to precache all assets."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exclude")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"include")," options allow you to pass regexp for assets filtering, for example include only JS and CSS files or exclude all images:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "workbox": {\n        "include": ["\\\\.js$", "\\\\.css$"],\n        // do not use include and exclude options together\n        "exclude": ["\\\\.{png|jpg|jpeg|svg|gif}$"]\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Also you can specify JS and CSS chunks that should be included (",(0,o.kt)("inlineCode",{parentName:"p"},"chunks"),") or excluded (",(0,o.kt)("inlineCode",{parentName:"p"},"excludeChunks"),"):"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Only JS and CSS assets will be included with ",(0,o.kt)("inlineCode",{parentName:"p"},"chunks")," option")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "workbox": {\n        "chunks": ["react", "platform"],\n        // do not use chunks and excludeChunks options together\n        "excludeChunks": ["some-lazy-chunk"]\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"For custom assets, which is not included in build process, ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalManifestEntries")," option is available:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "workbox": {\n        "additionalManifestEntries": [\n          "static/offline.html",\n          // better way to pass object with file revision, it is important for cache invalidation\n          {\n            "url": "static/offline.html",\n            "revision": "1234567890"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"webmanifest-1"},"Webmanifest"),(0,o.kt)("p",null,"For webmanifest generation, you need to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.webmanifest.enabled")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai.json")," configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "webmanifest": {\n        "enabled": true\n      }\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"output-filename"},"Output filename"),(0,o.kt)("p",null,"By default, will be generated ",(0,o.kt)("inlineCode",{parentName:"p"},"${output.client}/manifest.[hash].json")," file. Filename can be changed by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.webmanifest.dest")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "webmanifest": {\n        "enabled": true,\n        "dest": "manifest.webmanifest"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"[hash]")," pattern will be used in filename, it will be replaced with manifest content hash, it is useful for cache invalidation."),(0,o.kt)("h4",{id:"content"},"Content"),(0,o.kt)("p",null,"All another ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.webmanifest")," options will be passed directly to generated webmanifest. For example, from this configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "webmanifest": {\n        "enabled": true,\n        "name": "tincoin",\n        "start_url": "/",\n        "display": "standalone"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"This webmanifest will be created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // scope borrowed from `experiments.pwa.sw.scope`\n  "scope": "/",\n  "name": "tincoin",\n  "start_url": "/",\n  "display": "standalone"\n}\n')),(0,o.kt)("p",null,"Also, ",(0,o.kt)("inlineCode",{parentName:"p"},"theme_color")," property will be borrowed from ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.meta.themeColor"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"icons")," will be automatically generated from ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.icons")," configuration."),(0,o.kt)("h3",{id:"icons-1"},"Icons"),(0,o.kt)("p",null,"First, you need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"sharp")," library:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev sharp\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev sharp\n")))),(0,o.kt)("p",null,"Then, provide path to your source icon in ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.icons.src"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "icons": {\n        // relative to "root" directory\n        "src": "images/pwa-icon.png"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"After application build, this set of icons will be generated and added to webmanifest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "src": "ASSETS_PREFIX/dist/client/pwa-icons/36x36.png",\n    "sizes": "36x36",\n    "type": "image/png"\n  },\n  {\n    "src": "ASSETS_PREFIX/dist/client/pwa-icons/48x48.png",\n    "sizes": "48x48",\n    "type": "image/png"\n  },\n  {\n    "src": "ASSETS_PREFIX/dist/client/pwa-icons/72x72.png",\n    "sizes": "72x72",\n    "type": "image/png"\n  },\n  {\n    "src": "ASSETS_PREFIX/dist/client/pwa-icons/96x96.png",\n    "sizes": "96x96",\n    "type": "image/png"\n  },\n  {\n    "src": "ASSETS_PREFIX/dist/client/pwa-icons/144x144.png",\n    "sizes": "144x144",\n    "type": "image/png"\n  },\n  {\n    "src": "ASSETS_PREFIX/dist/client/pwa-icons/192x192.png",\n    "sizes": "192x192",\n    "type": "image/png"\n  },\n  {\n    "src": "ASSETS_PREFIX/dist/client/pwa-icons/512x512.png",\n    "sizes": "512x512",\n    "type": "image/png"\n  }\n]\n')),(0,o.kt)("h4",{id:"sizes"},"Sizes"),(0,o.kt)("p",null,"Default set of icon sizes - ",(0,o.kt)("inlineCode",{parentName:"p"},"[36, 48, 72, 96, 144, 192, 512]"),"."),(0,o.kt)("p",null,"You can change it by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.icons.sizes")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "icons": {\n        "src": "images/pwa-icon.png",\n        "sizes": [512]\n      }\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"output-directory"},"Output directory"),(0,o.kt)("p",null,"Default output directory is ",(0,o.kt)("inlineCode",{parentName:"p"},"${output.client}/pwa-icons"),", it can be changed by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.icons.dest")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "icons": {\n        "src": "images/pwa-icon.png",\n        "dest": "icons"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"meta-1"},"Meta"),(0,o.kt)("p",null,"Meta tags depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.meta")," limited set of options, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "meta": {\n        "themeColor": "#ffdd2d",\n        "viewport": "width=device-width, initial-scale=1"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"how-to-send-messages-to-service-worker"},"How to send messages to Service Worker?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"workbox-window")," library provides ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/workbox/modules/workbox-window/#window-to-service-worker-communication"},(0,o.kt)("inlineCode",{parentName:"a"},"messageSW"))," method as a wrapper around ",(0,o.kt)("inlineCode",{parentName:"p"},"postMessage")," API."),(0,o.kt)("p",null,"Workbox instance can be obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"PWA_WORKBOX_TOKEN"),", but use it with caution, because it will be available only in browser environment, and not all browsers support Service Workers."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"workbox-window")," will register Service Worker at ",(0,o.kt)("inlineCode",{parentName:"p"},"commandLineListTokens.init")," stage, so you can use it only after this stage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide, optional, commandLineListTokens } from '@tramvai/core';\n\n// import this provider only in browser environment\nconst provider = provide({\n  provide: commandLineListTokens.listen,\n  useFactory: ({ workbox }) => {\n    return async function sendMessageToSW() {\n      const wb = await workbox?.();\n\n      // wb can be `null` if Service Worker is not supported or registration failed\n      const swVersion = await wb?.messageSW({ type: 'GET_VERSION' });\n\n      console.log('Service Worker version:', swVersion);\n    };\n  },\n  deps: {\n    workbox: optional(PWA_WORKBOX_TOKEN),\n  },\n});\n")),(0,o.kt)("p",null,"And appropriate message handler in Service Worker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/sw.ts"',title:'"src/sw.ts"'},"/// <reference lib=\"webworker\" />\n\nimport { precacheAndRoute } from 'workbox-precaching';\n\ndeclare const self: ServiceWorkerGlobalScope;\n\nconst SW_VERSION = '1.0.0';\n\nself.addEventListener('message', (event) => {\n  if (event.data.type === 'GET_VERSION') {\n    event.ports[0].postMessage(SW_VERSION);\n  }\n});\n\nprecacheAndRoute(self.__WB_MANIFEST);\n")),(0,o.kt)("h3",{id:"how-to-disable-service-worker-generation-in-development-mode"},"How to disable Service Worker generation in development mode?"),(0,o.kt)("p",null,"You may want to disable Service Worker in development mode most of time, except when you develop SW specific features. You can pass this object to ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.workbox.enabled")," option, and SW will be generated only for production build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "workbox": {\n        "enabled": {\n          "production": true,\n          "development": false\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"how-to-precache-webmanifest-and-critical-assets"},"How to precache webmanifest and critical assets?"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.workbox.include")," option to precache webmanifest and critical assets. ",(0,o.kt)("inlineCode",{parentName:"p"},"experiments.pwa.workbox.chunks")," will always exclude webmanifest, so we need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"include")," with some boilerplate regexp for assets hashes and without:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experiments": {\n    "pwa": {\n      "workbox": {\n        "include": [\n          // react framework chunk\n          "react\\\\.([\\\\w\\\\d]+?\\\\.)?js$",\n          // tramvai framework chunk\n          "platform\\\\.([\\\\w\\\\d]+?\\\\.)?(js|css)$",\n          // workbox-window chunk\n          "tramvai-workbox-window\\\\.([\\\\w\\\\d]+?\\\\.)?chunk.js$",\n          // webmanifest\n          "manifest\\\\.[\\\\w\\\\d]+?\\\\.webmanifest$"\n        ]\n      }\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);