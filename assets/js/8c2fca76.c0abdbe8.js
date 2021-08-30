(self.webpackChunk=self.webpackChunk||[]).push([[830],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3719:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>p,toc:()=>s,default:()=>d});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),c=["components"],a={id:"error-interceptor",title:"error-interceptor"},l=void 0,p={unversionedId:"references/modules/error-interceptor",id:"references/modules/error-interceptor",isDocsHomePage:!1,title:"error-interceptor",description:"\u041c\u043e\u0434\u0443\u043b\u044c-\u043e\u0431\u0435\u0440\u0442\u043a\u0430 \u043d\u0430\u0434 @tinkoff/error-handlers",source:"@site/tmp-docs/references/modules/error-interceptor.md",sourceDirName:"references/modules",slug:"/references/modules/error-interceptor",permalink:"/docs/references/modules/error-interceptor",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/error-interceptor.md",version:"current",frontMatter:{id:"error-interceptor",title:"error-interceptor"},sidebar:"docs",previous:{title:"env",permalink:"/docs/references/modules/env"},next:{title:"http-client",permalink:"/docs/references/modules/http-client"}},s=[{value:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 tramvai",id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-tramvai",children:[]},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0431\u043e\u0442\u044b",children:[]}],u={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c-\u043e\u0431\u0435\u0440\u0442\u043a\u0430 \u043d\u0430\u0434 ",(0,i.kt)("a",{parentName:"p",href:"../libs/error-handlers"},"@tinkoff/error-handlers")),(0,i.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-tramvai"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 tramvai"),(0,i.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0443\u0431\u043b\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442 @tinkoff/error-handlers \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0435"),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0431\u043e\u0442\u044b"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b"),(0,i.kt)("p",null,"\u041d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"unhandledRejection")," \u0438 \u0432\u043d\u0435\u0437\u0430\u043f\u043d\u044b\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"death"),", \u0437\u0430\u0442\u0435\u043c \u043e\u0448\u0438\u0431\u043a\u0443 \u043a\u0438\u0434\u0430\u0435\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c."))}d.isMDXComponent=!0}}]);