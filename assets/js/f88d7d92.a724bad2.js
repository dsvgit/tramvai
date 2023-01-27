"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},d=void 0,s={unversionedId:"references/libs/webpack-dedupe-plugin",id:"references/libs/webpack-dedupe-plugin",title:"webpack-dedupe-plugin",description:"Module deduplication plugin for webpack.",source:"@site/tmp-docs/references/libs/webpack-dedupe-plugin.md",sourceDirName:"references/libs",slug:"/references/libs/webpack-dedupe-plugin",permalink:"/docs/references/libs/webpack-dedupe-plugin",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/webpack-dedupe-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"user-agent",permalink:"/docs/references/libs/user-agent"},next:{title:"autoscroll",permalink:"/docs/references/modules/autoscroll"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"dedupeStrategy",id:"dedupestrategy",level:4},{value:"ignoreDedupe",id:"ignorededupe",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Module deduplication plugin for webpack."),(0,a.kt)("p",null,"Internally webpack treats modules from different directories as completely different modules, and in result bundle there will be all these modules as separate entries which leads to duplication and bundle size increase. This module allows to leave only one of these modules based on chosen strategy."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\nconst { createDedupePlugin } = require('@tinkoff/webpack-dedupe-plugin')\n\nmodule.exports = {\n  ...\n  plugins: [\n    createDedupePlugin(dedupeStrategy, ignoreDedupe)\n  ]\n}\n\n")),(0,a.kt)("h4",{id:"dedupestrategy"},"dedupeStrategy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"equality"')," - uses strict version comparison. Dedupes modules in ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," with equal package version that are imported from different sources. E.g. imports for ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/package/index.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/nested-package/node_modules/package/index.js")," are deduped into a single ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/package/index.js")," import whilst without dedupe it will bundle two files as separate modules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"semver"')," - compares version of packages based on semver. It can dedupe all of the imports with the same major version and any of the minor and patch versions. E.g. next versions will be deduped: from ",(0,a.kt)("inlineCode",{parentName:"li"},"1.14.0")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"1.16.2")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"1.16.2"),", from ",(0,a.kt)("inlineCode",{parentName:"li"},"0.14.1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"0.16.5")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.16.5"),", whilst versions ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0.2")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0.5")," will be left without deduplication."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false")," - disable deduplication, by default")),(0,a.kt)("h4",{id:"ignorededupe"},"ignoreDedupe"),(0,a.kt)("p",null,"List of regular expressions that specify which modules should not be deduplicated."))}m.isMDXComponent=!0}}]);