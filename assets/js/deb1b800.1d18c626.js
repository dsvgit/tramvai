(self.webpackChunk=self.webpackChunk||[]).push([[9272],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9535:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>c,toc:()=>s,default:()=>m});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={id:"overview",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},u=void 0,c={unversionedId:"features/state/overview",id:"features/state/overview",isDocsHomePage:!1,title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"State - \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0432 tramvai \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",source:"@site/tmp-docs/features/state/overview.md",sourceDirName:"features/state",slug:"/features/state/overview",permalink:"/docs/features/state/overview",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/state/overview.md",version:"current",frontMatter:{id:"overview",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},sidebar:"docs",previous:{title:"router",permalink:"/docs/references/libs/router"},next:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 tramvai",permalink:"/docs/features/state/tramvai-integration"}},s=[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",children:[]},{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438",children:[]},{value:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",id:"\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",children:[]},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:[]},{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u043f\u0440\u0438\u043c\u0435\u0440",children:[]}],p={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"State")," - \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,i.kt)("h2",{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redux-like \u0441\u0442\u0435\u0439\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440"),(0,i.kt)("li",{parentName:"ul"},"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430, \u043f\u043e\u0445\u043e\u0436\u0430\u044f \u043d\u0430 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pauldijou/redux-act"},"redux-act"),", \u0434\u043b\u044f \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044f boilerplate \u043a\u043e\u0434\u0430"),(0,i.kt)("li",{parentName:"ul"},"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"react")," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"useSelector")),(0,i.kt)("li",{parentName:"ul"},"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432. \u041c\u043e\u0436\u043d\u043e \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440 \u0438\u043b\u0438 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439."),(0,i.kt)("li",{parentName:"ul"},"\u0422\u043e\u0447\u0435\u0447\u043d\u044b\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0439 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432. \u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0442\u0440\u043e\u043d\u0443\u0442\u044b\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"useSelector"),", \u0430 \u043d\u0435 \u0432\u0441\u0435."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 SSR \u0440\u0435\u0436\u0438\u043c\u0430.")),(0,i.kt)("h2",{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438"},"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0421\u0442\u043e\u0440 - \u041a\u043b\u0430\u0441\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432, \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430"),(0,i.kt)("li",{parentName:"ul"},"\u0420\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u044b - \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u044b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c \u0442\u043e, \u043a\u0430\u043a \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435"),(0,i.kt)("li",{parentName:"ul"},"\u042d\u0432\u0435\u043d\u0442\u044b - \u0441\u043e\u0431\u044b\u0442\u0438\u044f, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432"),(0,i.kt)("li",{parentName:"ul"},"\u042d\u043a\u0448\u0435\u043d\u044b - \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u0430\u0439\u0434-\u044d\u0444\u0444\u0435\u043a\u0442\u044b \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u043e\u0440\u0435. \u041f\u043e\u0445\u043e\u0436\u0438 \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"redux-thunk"))),(0,i.kt)("h2",{id:"\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041d\u0435\u043b\u044c\u0437\u044f \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u0430\u0445. \u0418\u043d\u0430\u0447\u0435 \u0438\u0437-\u0437\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0439 \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432 \u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445"),(0,i.kt)("li",{parentName:"ul"},"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u044b \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u043d\u044c\u0448\u0435 \u0438 \u0434\u043e \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f. \u0418\u043d\u0430\u0447\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch(userLoadInformation())")," \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440 \u0435\u0449\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0438 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,i.kt)("li",{parentName:"ul"},"\u041d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u043e\u0440\u0430\u0445. \u0422\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442, \u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u041b\u0443\u0447\u0448\u0435 \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b."),(0,i.kt)("li",{parentName:"ul"},"\u0420\u0430\u0437\u0431\u0438\u0432\u0430\u0442\u044c \u043d\u0430 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u044b. \u0418\u043d\u0430\u0447\u0435 \u0443 \u043d\u0430\u0441 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438 \u043b\u044e\u0431\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0440\u0430\u0441\u0447\u0435\u0442\u044b \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432.")),(0,i.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @tramvai/state\n")),(0,i.kt)("h2",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u043f\u0440\u0438\u043c\u0435\u0440"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createReducer, createEvent } from '@tramvai/state';\n\nexport const userLoadInformation = createEvent('user load information');\nexport const userAddInformation = createEvent('user add information');\n\nconst userReducer = createReducer('user', {\n  info: {},\n})\n  .on(userLoadInformation, (state, info) => ({ info }))\n  .on(userAddInformation, (state, { name, info }) => ({\n    ...state,\n    state: {\n      ...state.info,\n      [name]: info,\n    },\n  }));\n")))}m.isMDXComponent=!0}}]);