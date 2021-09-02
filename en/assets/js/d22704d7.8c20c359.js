(self.webpackChunk=self.webpackChunk||[]).push([[6670],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2245:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],p={id:"server",title:"server"},o=void 0,s={unversionedId:"references/modules/server",id:"references/modules/server",isDocsHomePage:!1,title:"server",description:"\u041e\u0434\u0438\u043d \u0438\u0437 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 Tramvai \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432. \u0412 \u044d\u0442\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0438 \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432\u0441\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043e\u0442\u0432\u0435\u0442\u0430\u043c\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c.",source:"@site/tmp-docs/references/modules/server.md",sourceDirName:"references/modules",slug:"/references/modules/server",permalink:"/en/docs/references/modules/server",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/server.md",version:"current",frontMatter:{id:"server",title:"server"},sidebar:"docs",previous:{title:"seo",permalink:"/en/docs/references/modules/seo"},next:{title:"browser-timings",permalink:"/en/docs/references/libs/browser-timings"}},c=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:[]},{value:"Explanation",id:"explanation",children:[{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",children:[]},{value:"\u041f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",id:"\u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",children:[]},{value:"\u0420\u0430\u0437\u0434\u0430\u0447\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432",id:"\u0440\u0430\u0437\u0434\u0430\u0447\u0430-\u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445-\u0444\u0430\u0439\u043b\u043e\u0432",children:[]},{value:"PAPI",id:"papi",children:[]},{value:"\u042d\u043c\u0443\u043b\u044f\u0446\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u0441\u0435\u0442\u044c\u044e/\u0431\u044d\u043a\u0435\u043d\u0434\u0430\u043c\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",id:"\u044d\u043c\u0443\u043b\u044f\u0446\u0438\u044f-\u043f\u0440\u043e\u0431\u043b\u0435\u043c-\u0441-\u0441\u0435\u0442\u044c\u044e\u0431\u044d\u043a\u0435\u043d\u0434\u0430\u043c\u0438-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",children:[]},{value:"\u041b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",id:"\u043b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432-\u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435",children:[]},{value:"Health checks",id:"health-checks",children:[]},{value:"\u041c\u0435\u0442\u0440\u0438\u043a\u0438",id:"\u043c\u0435\u0442\u0440\u0438\u043a\u0438",children:[]},{value:"\u041f\u0440\u043e\u0433\u0440\u0435\u0432 \u043a\u044d\u0448\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u043f\u0440\u043e\u0433\u0440\u0435\u0432-\u043a\u044d\u0448\u0435\u0439-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:[]}]},{value:"\u041e\u0442\u043b\u0430\u0434\u043a\u0430",id:"\u043e\u0442\u043b\u0430\u0434\u043a\u0430",children:[]},{value:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b",id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435-\u0442\u043e\u043a\u0435\u043d\u044b",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041e\u0434\u0438\u043d \u0438\u0437 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 Tramvai \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432. \u0412 \u044d\u0442\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0438 \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432\u0441\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043e\u0442\u0432\u0435\u0442\u0430\u043c\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c."),(0,i.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/module-server")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @tramvai/module-server\n")),(0,i.kt)("p",null,"\u0418 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { ServerModule } from '@tramvai/module-server';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [ServerModule],\n});\n")),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("h3",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),(0,i.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u043c\u043e\u0434\u0443\u043b\u044f \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e-\u0431\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c commandLine \u0443 tramvai \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u0431\u0440\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441 RESPONSE_MANAGER_TOKEN"),(0,i.kt)("h3",{id:"\u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"},"\u041f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),(0,i.kt)("p",null,"\u0412 server \u043c\u043e\u0434\u0443\u043b\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0440\u043b\u043e\u0432 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chimurai/http-proxy-middleware"},"http-proxy-middleware"),". \u042d\u0442\u0430 \u0444\u0438\u0447\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u0432 \u0434\u0435\u0432 \u0440\u0435\u0436\u0438\u043c\u0435, \u0442\u0430\u043a \u0438 \u043d\u0430 \u043f\u0440\u043e\u0434\u0435"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432 \u043a\u043e\u0440\u043d\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy.conf.js")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy.conf.json")," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442-\u043c\u0430\u043f\u043f\u0438\u043d\u0433 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043b\u0438\u0431\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d PROXY_CONFIG_TOKEN."),(0,i.kt)("h4",{id:"\u0444\u043e\u0440\u043c\u0430\u0442-\u043f\u0440\u043e\u043a\u0441\u0438-\u0444\u0430\u0439\u043b\u0430"},"\u0424\u043e\u0440\u043c\u0430\u0442 \u043f\u0440\u043e\u043a\u0441\u0438-\u0444\u0430\u0439\u043b\u0430:"),(0,i.kt)("h5",{id:"\u043e\u0431\u044a\u0435\u043a\u0442-\u043a\u043b\u044e\u0447-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"},"\u041e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u044e\u0447-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const testStand = 'https://example.org';\n\nmodule.exports = {\n  // \u043a\u043b\u044e\u0447 - path pattern \u0434\u043b\u044f express \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0432 app.use\n  // \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439, \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0443\u0440\u043b\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0441 /login/\n  '/login/': testStand,\n  // \u0438\u043b\u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0430 \u0434\u043b\u044f [http-proxy](https://github.com/chimurai/http-proxy-middleware#http-proxy-options)\n  '/test/': {\n    target: testStand,\n    auth: true,\n    xfwd: true,\n    ...\n  }\n};\n")),(0,i.kt)("h5",{id:"\u043e\u0431\u044a\u0435\u043a\u0442-\u0441\u043e-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438-context-\u0438-target"},"\u041e\u0431\u044a\u0435\u043a\u0442 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 context \u0438 target"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // context - \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u0435\u043d \u043e\u043f\u0446\u0438\u0438 \u0434\u043b\u044f [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#context-matching)\n  context: ['/login/', '/registration/', '/auth/papi/'],\n  target: 'https://example.org',\n  // \u0440\u0430\u0437\u043d\u044b\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438\n  changeOrigin: true,\n};\n")),(0,i.kt)("h5",{id:"\u043c\u0430\u0441\u0441\u0438\u0432-\u0441\u043e-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438-context-\u0438-target"},"\u041c\u0430\u0441\u0441\u0438\u0432 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 context \u0438 target"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "context": ["/a/", "/b/*/c/"],\n    "target": "https://example.org"\n  }\n]\n')),(0,i.kt)("h5",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-\u0442\u043e\u043a\u0435\u043d\u0430-proxy_config_token"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0442\u043e\u043a\u0435\u043d\u0430 PROXY_CONFIG_TOKEN"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Scope, provide } from '@tramvai/core';\nimport { PROXY_CONFIG_TOKEN } from '@tramvai/tokens-server';\n\n[\n  provide({\n    provide: PROXY_CONFIG_TOKEN,\n    scope: Scope.SINGLETON,\n    useValue: {\n      context: ['/a/', '/b/*/c/'],\n      target: 'https://example.org',\n    },\n    multi: true,\n  }),\n];\n")),(0,i.kt)("h3",{id:"\u0440\u0430\u0437\u0434\u0430\u0447\u0430-\u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445-\u0444\u0430\u0439\u043b\u043e\u0432"},"\u0420\u0430\u0437\u0434\u0430\u0447\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432"),(0,i.kt)("p",null,"\u0412 module-server \u0432\u0441\u0442\u0440\u043e\u0435\u043d \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0437\u0434\u0430\u0447\u0438 \u0444\u0430\u0439\u043b\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432 \u043a\u043e\u0440\u043d\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u043c\u0438"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u0440\u0430\u0437\u0434\u0430\u0442\u044c sw.js \u0444\u0430\u0439\u043b \u0438\u0437 \u043a\u043e\u0440\u043d\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430:")," \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0430\u043f\u043a\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u043c \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},"sw.js"),". \u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043c\u044b \u0441\u043c\u043e\u0436\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u0443\u0440\u043b\u0430 http://localhost:3000/sw.js. \u0422\u0430\u043a-\u0436\u0435 \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043d\u0443\u0436\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 CD, \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e \u0431\u044b \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043f\u0430\u043a\u0443 public \u043d\u0430 \u0441\u0442\u0435\u043d\u0434\u044b."),(0,i.kt)("p",null,"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u0430\u043a-\u0436\u0435 \u0438 \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d\u0435. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432 \u0434\u043e\u043a\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043f\u043a\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"public")),(0,i.kt)("h3",{id:"papi"},"PAPI"),(0,i.kt)("p",null,"Papi - API \u0440\u043e\u0443\u0442\u044b \u0434\u043b\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.\n\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/features/papi/introduction"},"Papi")),(0,i.kt)("h3",{id:"\u044d\u043c\u0443\u043b\u044f\u0446\u0438\u044f-\u043f\u0440\u043e\u0431\u043b\u0435\u043c-\u0441-\u0441\u0435\u0442\u044c\u044e\u0431\u044d\u043a\u0435\u043d\u0434\u0430\u043c\u0438-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"},"\u042d\u043c\u0443\u043b\u044f\u0446\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u0441\u0435\u0442\u044c\u044e/\u0431\u044d\u043a\u0435\u043d\u0434\u0430\u043c\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,i.kt)("p",null,"(\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0432 dev \u0440\u0435\u0436\u0438\u043c\u0435)"),(0,i.kt)("p",null,"\u041d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u0432\u0441\u0435\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0441\u0442\u0430\u0440\u0442\u0430\u043d\u0443\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),(0,i.kt)("li",{parentName:"ul"},"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c post-\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"/private/papi/debug-http-request")," \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0438 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl --location --request POST 'http://localhost:3000/tincoin/private/papi/debug-http-request' \\\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'delay=2000'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0435\u0440\u0435\u0441\u0431\u043e\u0440\u043a\u0438 \u043d\u0430\u0434\u043e \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043a papi \u0441\u043d\u043e\u0432\u0430."),(0,i.kt)("li",{parentName:"ul"},"\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0430\u0439\u043c\u0430\u0443\u0442 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0432\u0448\u0438\u0441\u044c \u043a \u0442\u043e\u043c\u0443 \u0436\u0435 papi \u043c\u0435\u0442\u043e\u0434\u043e\u043c delete")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl --location --request DELETE 'http://localhost:3000/tincoin/private/papi/debug-http-request'\n")),(0,i.kt)("h3",{id:"\u043b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432-\u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435"},"\u041b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,i.kt)("p",null,"\u0412 \u0434\u0435\u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," \u0434\u043b\u044f nodejs \u043b\u043e\u0433\u0433\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e\u0434 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"node-debug.request"),". \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0435 \u0431\u044b\u043b\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e \u043b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u044f\u0432\u043d\u043e."),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u043b\u043e\u0433\u0438, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG_ENABLE")," \u043a\u043b\u044e\u0447 ",(0,i.kt)("inlineCode",{parentName:"p"},"node-debug.request")),(0,i.kt)("h3",{id:"health-checks"},"Health checks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"/healthz"))," - \u043f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0442\u0434\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"/readyz"))," - \u043f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0442\u0434\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"OK"))),(0,i.kt)("h3",{id:"\u043c\u0435\u0442\u0440\u0438\u043a\u0438"},"\u041c\u0435\u0442\u0440\u0438\u043a\u0438"),(0,i.kt)("p",null,"\u0412 \u043c\u043e\u0434\u0443\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d \u043c\u043e\u0434\u0443\u043b\u044c \u043c\u0435\u0442\u0440\u0438\u043a. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c, \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/references/modules/metrics"},"\u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043c\u0435\u0442\u0440\u0438\u043a")),(0,i.kt)("h3",{id:"\u043f\u0440\u043e\u0433\u0440\u0435\u0432-\u043a\u044d\u0448\u0435\u0439-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u041f\u0440\u043e\u0433\u0440\u0435\u0432 \u043a\u044d\u0448\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0412 \u043c\u043e\u0434\u0443\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d \u043c\u043e\u0434\u0443\u043b\u044c \u043f\u0440\u043e\u0433\u0440\u0435\u0432\u0430 \u043a\u044d\u0448\u0435\u0439. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0432\u0443 \u043a\u044d\u0448\u0435\u0439, \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/references/modules/cache-warmup"},"\u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 cache-warmup")),(0,i.kt)("h2",{id:"\u043e\u0442\u043b\u0430\u0434\u043a\u0430"},"\u041e\u0442\u043b\u0430\u0434\u043a\u0430"),(0,i.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043b\u043e\u0433\u0433\u0435\u0440\u044b \u0441 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\u043c\u0438: ",(0,i.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"server:static"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"server:webapp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"server:node-debug:request")),(0,i.kt)("h2",{id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435-\u0442\u043e\u043a\u0435\u043d\u044b"},"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/docs/references/tokens/server-tokens"},"\u0441\u0441\u044b\u043b\u043a\u0430")))}d.isMDXComponent=!0}}]);