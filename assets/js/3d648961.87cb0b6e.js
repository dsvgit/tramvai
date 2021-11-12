(self.webpackChunk=self.webpackChunk||[]).push([[5231],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=s,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5472:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>m});var r=t(2122),s=t(9756),a=(t(7294),t(3905)),i=["components"],o={id:"minicss",title:"minicss"},l=void 0,c={unversionedId:"references/libs/minicss",id:"references/libs/minicss",isDocsHomePage:!1,title:"minicss",description:"css-loader plugin which generates short css class names. Details in the article",source:"@site/tmp-docs/references/libs/minicss.md",sourceDirName:"references/libs",slug:"/references/libs/minicss",permalink:"/docs/references/libs/minicss",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/minicss.md",version:"current",frontMatter:{id:"minicss",title:"minicss"},sidebar:"docs",previous:{title:"mocker",permalink:"/docs/references/libs/mocker"},next:{title:"pubsub",permalink:"/docs/references/libs/pubsub"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Setup",id:"setup",children:[]},{value:"How does it work",id:"how-does-it-work",children:[]}],d={toc:p};function m(e){var n=e.components,t=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"css-loader")," plugin which generates short css class names. Details in the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/denisx/reduce-bundle-size-via-one-letter-css-classname-hash-strategy-10g6"},"article")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install using yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @tinkoff/minicss-class-generator\n")),(0,a.kt)("p",null,"or npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tinkoff/minicss-class-generator\n")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Define options ",(0,a.kt)("inlineCode",{parentName:"p"},"localIdentName")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"getLocalIdent")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"css-loader")," config inside your webpack config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"({\n  loader: 'css-loader',\n  options: {\n    modules: {\n      getLocalIdent: createGenerator(),\n      localIdentName: '[minicss]',\n    },\n  },\n});\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"localIdentName")," it is possible to pass any template which is accepted by css-loader. E.g. if you want to add the origin filename and the className pass ",(0,a.kt)("inlineCode",{parentName:"p"},"[name]__[local]_[minicss]")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"localIdentName")),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,a.kt)("p",null,"Plugin generate unique key for a className using formula ",(0,a.kt)("inlineCode",{parentName:"p"},"${order}${contentHash}")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"contentHash")," is a hash of the source file content and ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," - ordered key of class definition inside source file. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"contentHash")," from source allows to generate less unique string and allows to reuse the same ",(0,a.kt)("inlineCode",{parentName:"p"},"contentHash")," for every className that leads for better data compression with gzip/brotli. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," helps sustain uniqueness for every className in single source file."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[hash:base64:5]\nfile: Button.css\n .2hlLi\n .32BZU\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[minicss]\nfile: Button.css\n .abhUzy\n .bbhUzy\n")))}m.isMDXComponent=!0}}]);