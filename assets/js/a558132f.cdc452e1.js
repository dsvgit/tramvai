(self.webpackChunk=self.webpackChunk||[]).push([[8829],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=l(r),d=s,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3685:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>l,toc:()=>f,default:()=>u});var n=r(2122),s=r(9756),i=(r(7294),r(3905)),o=["components"],a={id:"safe-strings",title:"safe-strings"},c=void 0,l={unversionedId:"references/libs/safe-strings",id:"references/libs/safe-strings",isDocsHomePage:!1,title:"safe-strings",description:"Utility kit for a safe string encoding/decoding",source:"@site/tmp-docs/references/libs/safe-strings.md",sourceDirName:"references/libs",slug:"/references/libs/safe-strings",permalink:"/docs/references/libs/safe-strings",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/safe-strings.md",version:"current",frontMatter:{id:"safe-strings",title:"safe-strings"},sidebar:"docs",previous:{title:"router",permalink:"/docs/references/libs/router"},next:{title:"tinkoff-request-http-client-adapter",permalink:"/docs/references/libs/tinkoff-request-http-client-adapter"}},f=[{value:"<code>safeParseJSON</code>",id:"safeparsejson",children:[]},{value:"<code>safeStringify</code>",id:"safestringify",children:[]},{value:"<code>safeStringiyfJSON</code>",id:"safestringiyfjson",children:[]},{value:"<code>removeXss</code>",id:"removexss",children:[]}],p={toc:f};function u(e){var t=e.components,r=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Utility kit for a safe string encoding/decoding"),(0,i.kt)("h2",{id:"safeparsejson"},(0,i.kt)("inlineCode",{parentName:"h2"},"safeParseJSON")),(0,i.kt)("p",null,"Tries to parse json and if it successful returns it, otherwise returns second argument as default value."),(0,i.kt)("h2",{id:"safestringify"},(0,i.kt)("inlineCode",{parentName:"h2"},"safeStringify")),(0,i.kt)("p",null,"Converts object to json with a replacement of insecure symbols that allows to insert result string in the response html"),(0,i.kt)("h2",{id:"safestringiyfjson"},(0,i.kt)("inlineCode",{parentName:"h2"},"safeStringiyfJSON")),(0,i.kt)("p",null,"Converts object to json with a circular reference handling"),(0,i.kt)("h2",{id:"removexss"},(0,i.kt)("inlineCode",{parentName:"h2"},"removeXss")),(0,i.kt)("p",null,"Removes possible xss strings"))}u.isMDXComponent=!0}}]);