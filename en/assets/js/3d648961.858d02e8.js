"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5231],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2346:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>u});var r=t(3117),a=t(102),i=(t(7294),t(3905)),s=["components"],o={id:"minicss",title:"minicss"},l=void 0,c={unversionedId:"references/libs/minicss",id:"references/libs/minicss",title:"minicss",description:"css-loader plugin which generates short css class names. Details in the article",source:"@site/tmp-docs/references/libs/minicss.md",sourceDirName:"references/libs",slug:"/references/libs/minicss",permalink:"/en/docs/references/libs/minicss",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/minicss.md",tags:[],version:"current",frontMatter:{id:"minicss",title:"minicss"},sidebar:"docs",previous:{title:"module-loader-client",permalink:"/en/docs/references/libs/module-loader-client"},next:{title:"pubsub",permalink:"/en/docs/references/libs/pubsub"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"How does it work",id:"how-does-it-work",children:[],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"css-loader")," plugin which generates short css class names. Details in the ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/denisx/reduce-bundle-size-via-one-letter-css-classname-hash-strategy-10g6"},"article")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install using yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @tinkoff/minicss-class-generator\n")),(0,i.kt)("p",null,"or npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tinkoff/minicss-class-generator\n")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Define options ",(0,i.kt)("inlineCode",{parentName:"p"},"localIdentName")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"getLocalIdent")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"css-loader")," config inside your webpack config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"({\n  loader: 'css-loader',\n  options: {\n    modules: {\n      getLocalIdent: createGenerator(),\n      localIdentName: '[minicss]',\n    },\n  },\n});\n")),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"localIdentName")," it is possible to pass any template which is accepted by css-loader. E.g. if you want to add the origin filename and the className pass ",(0,i.kt)("inlineCode",{parentName:"p"},"[name]__[local]_[minicss]")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"localIdentName")),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,i.kt)("p",null,"Plugin generate unique key for a className using formula ",(0,i.kt)("inlineCode",{parentName:"p"},"${order}${contentHash}")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"contentHash")," is a hash of the source file content and ",(0,i.kt)("inlineCode",{parentName:"p"},"order")," - ordered key of class definition inside source file. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"contentHash")," from source allows to generate less unique string and allows to reuse the same ",(0,i.kt)("inlineCode",{parentName:"p"},"contentHash")," for every className that leads for better data compression with gzip/brotli. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"order")," helps sustain uniqueness for every className in single source file."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[hash:base64:5]\nfile: Button.css\n .2hlLi\n .32BZU\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[minicss]\nfile: Button.css\n .abhUzy\n .bbhUzy\n")))}u.isMDXComponent=!0}}]);