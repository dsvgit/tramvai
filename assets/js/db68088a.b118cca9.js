(self.webpackChunk=self.webpackChunk||[]).push([[8262],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),s=o,k=c["".concat(u,".").concat(s)]||c[s]||m[s]||l;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5053:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>u,metadata:()=>d,toc:()=>p,default:()=>c});var n=r(2122),o=r(9756),l=(r(7294),r(3905)),a=["components"],i={id:"core-modules",title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"},u=void 0,d={unversionedId:"get-started/core-modules",id:"get-started/core-modules",isDocsHomePage:!1,title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439",description:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c tramvai, \u0431\u0435\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.",source:"@site/tmp-docs/get-started/core-modules.md",sourceDirName:"get-started",slug:"/get-started/core-modules",permalink:"/docs/get-started/core-modules",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/get-started/core-modules.md",version:"current",frontMatter:{id:"core-modules",title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"},sidebar:"docs",previous:{title:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",permalink:"/docs/get-started/app-structure"},next:{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 tramvai",permalink:"/docs/concepts/overview"}},p=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-\u043c\u043e\u0434\u0443\u043b\u044f",children:[]},{value:"CommonModule",id:"commonmodule",children:[]},{value:"RenderModule",id:"rendermodule",children:[]},{value:"RouterModule",id:"routermodule",children:[]},{value:"ServerModule",id:"servermodule",children:[]},{value:"HttpClientModule",id:"httpclientmodule",children:[]},{value:"ErrorIntercepterModule (optional)",id:"errorinterceptermodule-optional",children:[]},{value:"LogModule (optional)",id:"logmodule-optional",children:[]},{value:"SeoModule (optional)",id:"seomodule-optional",children:[]},{value:"CacheWarmupModule (optional)",id:"cachewarmupmodule-optional",children:[]},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0441\u0441\u044b\u043b\u043a\u0438",children:[]}],m={toc:p};function c(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"tramvai"),", \u0431\u0435\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.\n\u041d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u043a\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0441 \u043a\u0440\u0430\u0442\u043a\u0438\u043c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c, \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/docs/references/modules/common"},"modules"),".\n\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u043e\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435 \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"optional")," \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f, \u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445."),(0,l.kt)("h3",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-\u043c\u043e\u0434\u0443\u043b\u044f"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f"),(0,l.kt)("p",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u044f \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0448\u0430\u0433\u043e\u0432:"),(0,l.kt)("h4",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u044f"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u044f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @tramvai/module-common\n")),(0,l.kt)("h4",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CommonModule } from '@tramvai/module-common';\n\ncreateApp({\n  name: 'new-app',\n  modules: [\n    CommonModule,\n    // ...\n  ],\n  // ...\n});\n\n")),(0,l.kt)("h3",{id:"commonmodule"},"CommonModule"),(0,l.kt)("p",null,"\u0421\u0430\u043c\u044b\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u0432\u0441\u0435\u0433\u0434\u0430 \u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0441\u0430\u043c\u044b\u043c \u043f\u0435\u0440\u0432\u044b\u043c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 (\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432 \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0432 DI - \u0447\u0435\u043c \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0438\u0436\u0435 \u0442\u0435\u043c \u0432\u044b\u0448\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0435\u0433\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 CommonModule \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0434\u0440\u0443\u0433\u0438\u043c \u043c\u043e\u0434\u0443\u043b\u044f\u043c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043a\u0430\u043a\u0443\u044e-\u043b\u0438\u0431\u043e \u0431\u0430\u0437\u043e\u0432\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c tramvai)."),(0,l.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432 \u0441\u0435\u0431\u0435:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u044d\u043a\u0448\u0435\u043d\u043e\u0432"),(0,l.kt)("li",{parentName:"ul"},"\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0431\u0430\u043d\u0434\u043b\u043e\u0432"),(0,l.kt)("li",{parentName:"ul"},"\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043a\u0435\u0448\u0435\u0439 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,l.kt)("li",{parentName:"ul"},"\u0440\u0430\u043d\u043d\u0435\u0440 \u043a\u043e\u043c\u043c\u0430\u043d\u0434"),(0,l.kt)("li",{parentName:"ul"},"\u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},"\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"),(0,l.kt)("li",{parentName:"ul"},"\u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043b\u043e\u0433\u0433\u0435\u0440"),(0,l.kt)("li",{parentName:"ul"},"\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"),(0,l.kt)("li",{parentName:"ul"},"pubsub"),(0,l.kt)("li",{parentName:"ul"},"\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,l.kt)("li",{parentName:"ul"},"state-manager")),(0,l.kt)("h3",{id:"rendermodule"},"RenderModule"),(0,l.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0440\u0435\u043d\u0434\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0420\u0435\u043d\u0434\u0435\u0440\u0438\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 React \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 html-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443. \u041d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u0433\u0438\u0434\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u0435\u0440\u0441\u0442\u043a\u0443 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0440\u0435\u043d\u0434\u0435\u0440 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445 \u0440\u043e\u0443\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,l.kt)("h3",{id:"routermodule"},"RouterModule"),(0,l.kt)("p",null,"\u0420\u043e\u0443\u0442\u0438\u043d\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0440\u043e\u0443\u0442\u0435, \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043f\u0430-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044b \u0438 \u0442.\u043f. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, RenderModule \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0435\u0433\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0430\u0434\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u044c). \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0440\u043e\u0443\u0442\u044b \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u043c\u0435\u0442\u043e\u0434 RouterModule.forRoot. \u0415\u0441\u043b\u0438 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0440\u043e\u0443\u0442\u044b \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u044b, \u0442\u043e \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u043e\u0434\u0443\u043b\u044c ApiClientModule \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0430\u0434\u043c\u0438\u043d\u043a\u0438."),(0,l.kt)("h3",{id:"servermodule"},"ServerModule"),(0,l.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u0441\u0442\u0430\u0440\u0442\u0443\u044e\u0449\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 express. \u0422\u0430\u043a\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 papi \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438"),(0,l.kt)("h3",{id:"httpclientmodule"},"HttpClientModule"),(0,l.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438."),(0,l.kt)("h3",{id:"errorinterceptermodule-optional"},"ErrorIntercepterModule (optional)"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u0438 \u043b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0430\u043a\u0438\u0445 \u043e\u0448\u0438\u0431\u043e\u043a."),(0,l.kt)("h3",{id:"logmodule-optional"},"LogModule (optional)"),(0,l.kt)("p",null,"\u041d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0442.\u043a. \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0438\u0437 CommonModule. \u041e\u0434\u043d\u0430\u043a\u043e \u0441 \u044d\u0442\u0438\u043c \u043c\u043e\u0434\u0443\u043b\u0435\u043c \u043b\u043e\u0433\u0438 \u0431\u0443\u0434\u0443\u0442 \u043b\u0443\u0447\u0448\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043b\u043e\u0433\u0438 \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u0430\u043f\u0438 \u043b\u043e\u0433\u043e\u0432."),(0,l.kt)("h3",{id:"seomodule-optional"},"SeoModule (optional)"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0435\u0442\u0430 \u0442\u0435\u0433\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u0440\u043e\u0443\u0442\u0430 \u0438\u043b\u0438 \u044f\u0432\u043d\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438."),(0,l.kt)("h3",{id:"cachewarmupmodule-optional"},"CacheWarmupModule (optional)"),(0,l.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u0440\u0435\u0432\u0430 \u043a\u0435\u0448\u0435\u0439 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u043f\u0440\u043e\u0434\u0435."),(0,l.kt)("h3",{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438"),(0,l.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u0435\u0440\u043c\u0438\u043d\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u044d\u043a\u0448\u0435\u043d"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/concepts/action"},"\u042d\u043a\u0448\u0435\u043d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/concepts/di"},"Dependency Injection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/features/state/overview"},"State management"))))}c.isMDXComponent=!0}}]);