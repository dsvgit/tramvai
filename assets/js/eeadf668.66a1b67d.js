"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[379],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7832:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={id:"bundle-optimization",title:"Bundle optimization"},l=void 0,c={unversionedId:"guides/bundle-optimization",id:"guides/bundle-optimization",title:"Bundle optimization",description:"@tramvai/cli use webpack for building an application, and configures most of the well-known optimizations for production builds - code minification and obfuscation, CSS and image optimization, code splitting, hashes for efficient static caching - and allows you to customize some optimization stages.",source:"@site/tmp-docs/guides/bundle-optimization.md",sourceDirName:"guides",slug:"/guides/bundle-optimization",permalink:"/docs/guides/bundle-optimization",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/guides/bundle-optimization.md",tags:[],version:"current",frontMatter:{id:"bundle-optimization",title:"Bundle optimization"},sidebar:"sidebar",previous:{title:"Assets",permalink:"/docs/guides/assets"},next:{title:"Client-side rendering",permalink:"/docs/guides/client-side-rendering"}},p=[{value:"Code Splitting",id:"code-splitting",children:[{value:"Granular Chunks",id:"granular-chunks",children:[],level:3},{value:"Common Chunk",id:"common-chunk",children:[],level:3},{value:"Disabling SplitChunksPlugin",id:"disabling-splitchunksplugin",children:[],level:3}],level:2}],m={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/references/cli/base"},"@tramvai/cli")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack")," for building an application, and configures most of the well-known optimizations for production builds - code minification and obfuscation, CSS and image optimization, code splitting, hashes for efficient static caching - and allows you to customize some optimization stages."),(0,o.kt)("h2",{id:"code-splitting"},"Code Splitting"),(0,o.kt)("p",null,"Providing the client with the minimum required JavaScript code is one of the most important things in optimizing web applications. Separating entry points when building bundles and dynamically importing modules and using these bans based on routing / custom actions are the main mechanisms for splitting code. When assembling many bundles and dynamic chunks, the problem of code duplication between them arises, which allows you to solve ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/split-chunks-plugin/"},"SplitChunksPlugin")),(0,o.kt)("p",null,"Tramvai applications have a number of features - a single entry point (",(0,o.kt)("inlineCode",{parentName:"p"},"platform.js")," at the exit), dynamic import at the level of each ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/bundle"},"bundle"),", a separate assembly of the vendor chunk. For an application that has several tramvai bundles for different pages, each page will load at least the ",(0,o.kt)("inlineCode",{parentName:"p"},"platform.js")," chunk with the common framework and modules code, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"{bundleName} .js")," chunk with the unique code for the page. Duplicates can be in chunks created under tramvai bundles (for example, ui-kit components), and it is desirable to move this code into common chunks."),(0,o.kt)("p",null,"The CLI offers three strategies for splitting code - one common chunk, many granular shared chunks, and disabling the SplitChunksPlugin."),(0,o.kt)("h3",{id:"granular-chunks"},"Granular Chunks"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Recommended default configuration"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://web.dev/granular-chunking-nextjs/"},"A detailed description of using the strategy in Next.js and Gatsby.js")),(0,o.kt)("p",null,"The strategy is enabled through the ",(0,o.kt)("inlineCode",{parentName:"p"},"granularChunks")," parameter, allows you to move the common code into many small chunks, for efficient caching of the common code, and loading only the necessary code on each page. The balance is achieved due to the fact that the common code between at least two (default settings) chunks is placed in a separate chunk with a unique name, and there will be such chunks from one for all the others, to one for every two chunks."),(0,o.kt)("p",null,"Disadvantages of this strategy: significantly more js scripts can be loaded on one page, up to several dozen, which does not significantly affect performance when using HTTP / 2; and less efficient gzip / brotli archiving, which is not so noticeable compared to the reduction in the amount of source code."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"granularChunksSplitNumber")," parameter allows you to override the default number of shared chunks (",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"), if for some reason you need to reduce the number of resulting chunks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "{appName}": {\n      "commands": {\n        "build": {\n          "configurations": {\n            "granularChunks": true,\n            "granularChunksSplitNumber": 3\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"common-chunk"},"Common Chunk"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Configuration good for applications with only one or few pages"))),(0,o.kt)("p",null,"The strategy is included in the CLI by default, all common code from bundles and dynamic chunks is moved to common-chunk.js. The ",(0,o.kt)("inlineCode",{parentName:"p"},"commonChunkSplitNumber")," parameter allows you to specify the minimum number of chunks this code should use in order to move it to common."),(0,o.kt)("p",null,"For applications with a lot of bundles, ",(0,o.kt)("inlineCode",{parentName:"p"},"common-chunk.js")," can include a huge amount of code that is not needed on every single page, and it is worth either increasing the ",(0,o.kt)("inlineCode",{parentName:"p"},"commonChunkSplitNumber")," or using the Granular Chunks strategy. Example configuration to increase the minimum number of chunks using shared code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "{appName}": {\n      "commands": {\n        "build": {\n          "configurations": {\n            "commonChunkSplitNumber": 5\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to choose a suitable number of ",(0,o.kt)("inlineCode",{parentName:"strong"},"commonChunkSplitNumber"),"?")," Alternatively, the number can be calculated using the formulas ",(0,o.kt)("inlineCode",{parentName:"p"},"commonChunkSplitNumber = bundles / 3")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"commonChunkSplitNumber = bundles / 2"),", where bundles is the number of tramvai bundles that are connected to a specific application, but most likely each application will be better viewed separately."),(0,o.kt)("h3",{id:"disabling-splitchunksplugin"},"Disabling SplitChunksPlugin"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not recommended configuration"))),(0,o.kt)("p",null,"For applications that have only one tramvai bundle for all pages, or separate the bundle for the desktop and mobile versions, in most cases, code separation is not required, and it is worth setting the option ",(0,o.kt)("inlineCode",{parentName:"p"},'"commonChunk": false'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "{appName}": {\n      "commands": {\n        "build": {\n          "configurations": {\n            "commonChunk": false\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why not leave the common chunk if it doesn't interfere?")," The problem is in third-party libraries that can use dynamic ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," under the hood, while the application may not use this code, but it may end up in the common chunk, which will be loaded on every page."),(0,o.kt)("p",null,"Also, if your application is serving multiple pages and separating the code at the page component level via ",(0,o.kt)("a",{parentName:"p",href:"/docs/how-to/how-create-async-component"},"@tramvai/react lazy"),", it makes sense to consider other strategies, since duplicates will appear in dynamic chunks of pages."))}d.isMDXComponent=!0}}]);