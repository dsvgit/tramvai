(self.webpackChunk=self.webpackChunk||[]).push([[3466],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},879:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>p,toc:()=>s,default:()=>d});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={id:"how-create-action",title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043a\u0448\u0435\u043d?"},l=void 0,p={unversionedId:"how-to/how-create-action",id:"how-to/how-create-action",isDocsHomePage:!1,title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043a\u0448\u0435\u043d?",description:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u0435\u0439\u0441\u0430",source:"@site/tmp-docs/how-to/how-create-action.md",sourceDirName:"how-to",slug:"/how-to/how-create-action",permalink:"/docs/how-to/how-create-action",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/how-create-action.md",version:"current",frontMatter:{id:"how-create-action",title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043a\u0448\u0435\u043d?"},sidebar:"docs",previous:{title:"How to create a bundle?",permalink:"/docs/how-to/how-create-bundle"},next:{title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a papi?",permalink:"/docs/how-to/how-create-papi"}},s=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u044d\u043a\u0448\u0435\u043d\u0430",children:[]},{value:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",id:"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435-\u0434\u043b\u044f-\u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",children:[]},{value:"\u0427\u0442\u043e \u0435\u0449\u0435 \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c",id:"\u0447\u0442\u043e-\u0435\u0449\u0435-\u0441\u0442\u043e\u0438\u0442-\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u0435\u0439\u0441\u0430: \u0443 \u043d\u0430\u0441 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430\u0445 \u043f\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u043c. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u044d\u0442\u0438 \u0447\u0438\u0441\u043b\u0430 \u0447\u0430\u0441\u0442\u043e \u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0438 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u043c\u0435\u0442\u043e\u0434 \u0432 API, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0445\u043e\u0434\u0438\u0442\u044c \u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,a.kt)("li",{parentName:"ul"},"\u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c SEO \u0438 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 HTML \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435")),(0,a.kt)("p",null,"\u041c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u044d\u0442\u0430\u043f\u044b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u0430"),(0,a.kt)("li",{parentName:"ol"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438")),(0,a.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u044d\u043a\u0448\u0435\u043d\u0430"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u0430"),(0,a.kt)("p",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"createAction")," \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 api \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createAction } from '@tramvai/core';\nimport { loadDepositConfig } from './deposit/reducer';\n\nexport const loadDepositAction = createAction({\n  name: 'load-deposit-config',\n  fn: async (context, payload, deps) => {\n    const data = await deps.apiClient.request({ method: 'deposit_config ' });\n    return context.dispatch(loadDepositConfig(data));\n  },\n  deps: {\n    apiClient: 'tinkoffApiClient',\n  },\n});\n")),(0,a.kt)("p",null,"\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u044d\u043a\u0448\u0435\u043d, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"tinkoffApiClient"),", \u044d\u0442\u043e\u0442 \u044d\u043a\u0448\u0435\u043d \u0434\u0435\u043b\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u043e\u0440."),(0,a.kt)("h2",{id:"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435-\u0434\u043b\u044f-\u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),(0,a.kt)("p",null,"\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u044d\u043a\u0448\u0435\u043d \u0438 \u0445\u043e\u0442\u0438\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435. \u041d\u0430\u043c \u0432\u0430\u0436\u043d\u043e, \u0447\u0442\u043e \u0431\u044b \u044d\u043a\u0448\u0435\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043e\u0436\u0438\u0434\u0430\u043b\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0435\u0433\u043e \u0432 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," \u043d\u0443\u0436\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import react, { Component } from 'react';\nimport { loadDepositAction } from './loadDepositAction';\nimport { DepositInfo } from './DepositInfo';\n\nclass DepositPage extends Component {\n  static actions = [loadDepositAction];\n  render() {\n    return (\n      <div>\n        <DepositInfo />\n      </div>\n    );\n  }\n}\n")),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e, \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0440\u043e\u0443\u0442\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u044d\u043a\u0448\u0435\u043d \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043a DepositPage \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435"),(0,a.kt)("h2",{id:"\u0447\u0442\u043e-\u0435\u0449\u0435-\u0441\u0442\u043e\u0438\u0442-\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c"},"\u0427\u0442\u043e \u0435\u0449\u0435 \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/references/tramvai/create-action"},"\u041e createAction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/action"},"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u044d\u043a\u0448\u0435\u043d\u044b"))))}d.isMDXComponent=!0}}]);