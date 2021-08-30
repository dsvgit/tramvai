(self.webpackChunk=self.webpackChunk||[]).push([[4624],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>s});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),s=a,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},836:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>u,default:()=>d});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],p={id:"create-app",title:"createApp"},c=void 0,l={unversionedId:"references/tramvai/create-app",id:"references/tramvai/create-app",isDocsHomePage:!1,title:"createApp",description:"createApp - \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f, \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",source:"@site/tmp-docs/references/tramvai/create-app.md",sourceDirName:"references/tramvai",slug:"/references/tramvai/create-app",permalink:"/docs/references/tramvai/create-app",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/create-app.md",version:"current",frontMatter:{id:"create-app",title:"createApp"},sidebar:"docs",previous:{title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0443\u0440\u043b\u0430 \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/docs/how-to/server-add-path-handler"},next:{title:"createBundle",permalink:"/docs/references/tramvai/create-bundle"}},u=[{value:"createApp({ modules, bundles, providers })",id:"createapp-modules-bundles-providers-",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",children:[]}],m={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," - \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f, \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,o.kt)("h2",{id:"createapp-modules-bundles-providers-"},"createApp({ modules, bundles, providers })"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"modules")," - \u043c\u0430\u0441\u0441\u0438\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c\u0438 ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/module"},"\u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438")," \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bundles")," - \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u044b\u043c\u0438 \u0431\u0430\u043d\u0434\u043b\u0430\u043c\u0438 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438. \u041a\u043b\u044e\u0447 - \u0438\u043d\u0434\u0435\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0431\u0430\u043d\u0434\u043b\u0430, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 - ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 bundle"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"providers")," - \u043c\u0430\u0441\u0441\u0438\u0432 \u0441 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0432 DI (\u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432 \u043c\u043e\u0434\u0443\u043b\u0435\u0439) \u0438 \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0442\u043e\u043a\u0435\u043d\u043e\u0432"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"actions")," - \u043c\u0430\u0441\u0441\u0438\u0432 \u0441 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u043c\u0438 ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/action"},"\u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0431\u0430\u043d\u0434\u043b\u043e\u0432 \u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp, provide } from '@tramvai/core';\nimport { RouterModule } from '@tramvai/module-router';\nimport { RenderModule } from '@tramvai/module-render';\nimport { ServerModule } from '@tramvai/module-server';\n\ncreateApp({\n  name: 'my-awesome-app',\n  modules: [RouterModule, RenderModule, ServerModule],\n  providers: [\n    provide({\n      provide: 'options',\n      useValue: {},\n    }),\n  ],\n  bundles: {\n    mainDefault: () => import(/* webpackChunkName: \"mainDefault\" */ './bundles/mainDefault'),\n  },\n  actions: [loadDepositConfig],\n});\n")),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f createApp \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/command-line-runner"},"\u0421ommandLineRunner")," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."))}d.isMDXComponent=!0}}]);