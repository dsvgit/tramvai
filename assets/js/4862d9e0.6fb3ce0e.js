"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[792],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,m=u["".concat(s,".").concat(c)]||u[c]||v[c]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>v});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={},s=void 0,p={unversionedId:"references/modules/env",id:"references/modules/env",title:"env",description:"The env module is used to retrieve global application environment variables in runtime and pass these parameters to the client.",source:"@site/tmp-docs/references/modules/env.md",sourceDirName:"references/modules",slug:"/references/modules/env",permalink:"/docs/references/modules/env",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/env.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"dns-cache",permalink:"/docs/references/modules/dns-cache"},next:{title:"error-interceptor",permalink:"/docs/references/modules/error-interceptor"}},d={},v=[{value:"Installation",id:"installation",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Dynamically generated list of used env variables",id:"dynamically-generated-list-of-used-env-variables",level:3},{value:"Validation of environment variables values",id:"validation-of-environment-variables-values",level:3},{value:"Functionality works on the server and in the browser",id:"functionality-works-on-the-server-and-in-the-browser",level:3},{value:"Priority of obtaining values for env variables",id:"priority-of-obtaining-values-for-env-variables",level:3},{value:"API",id:"api",level:2},{value:"How to",id:"how-to",level:2},{value:"How to read data in an application",id:"how-to-read-data-in-an-application",level:3},{value:"How you can simply pass parameters in local development",id:"how-you-can-simply-pass-parameters-in-local-development",level:3},{value:"Peculiarities of using env.developmen.js in production builds",id:"peculiarities-of-using-envdevelopmenjs-in-production-builds",level:4},{value:"How to pass env parameters to the application during the deploys",id:"how-to-pass-env-parameters-to-the-application-during-the-deploys",level:3},{value:"How to view all env variables of an application",id:"how-to-view-all-env-variables-of-an-application",level:3},{value:"How to make an ENV variable optional?",id:"how-to-make-an-env-variable-optional",level:3}],u={toc:v};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The env module is used to retrieve global application environment variables in runtime and pass these parameters to the client.\nWith a pre-defined list of variables used by the application, dynamically extended and validated at application startup"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Already supplied inside ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/module-common")," and does not need to be installed if module-common is connected."),(0,r.kt)("p",null,"Otherwise, you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/module-environment")),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("h3",{id:"dynamically-generated-list-of-used-env-variables"},"Dynamically generated list of used env variables"),(0,r.kt)("p",null,"All the parameters used in the application are registered by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENV_USED_TOKEN")," token in the DI and it is assumed that each module individually registers only the env parameters it needs. In this case, when a module is connected, there will be automatic validation of all passed parameters that are necessary for the application to work"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\n\n@Module({\n  providers: [\n    provide({\n      provide: ENV_USED_TOKEN,\n      useValue: [\n        { key: 'DEBUG_MODULE' },\n        { key: 'DEBUG_MODULE_URL' },\n      ],\n      multi: true,\n    }),\n  ],\n})\nexport class MyModule {}\n")),(0,r.kt)("p",null,"In the above example, the module registers several env tokens, which will be initialized and will be available in ",(0,r.kt)("inlineCode",{parentName:"p"},"environmentManager.get('DEBUG_MODULE')"),". In doing so, the ",(0,r.kt)("inlineCode",{parentName:"p"},"optional")," parameter has been passed, which indicates that the variables are not required for the application to work."),(0,r.kt)("h3",{id:"validation-of-environment-variables-values"},"Validation of environment variables values"),(0,r.kt)("p",null,"When the application starts, it checks the tokens that were registered in the DI and passed to env at startup. If all required env variables have not been passed to the application, the application will crash."),(0,r.kt)("p",null,"It is also possible to write validators for env values, which will run when the application is initialized."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\n\n@Module({\n  providers: [\n    provide({\n      provide: ENV_USED_TOKEN,\n      useValue: [\n        {\n          key: 'MY_ENV',\n          validator: (env) => {\n            if (!env.includes('https')) {\n              return 'Incorrect link format. The link should contain https';\n            }\n          },\n        },\n      ],\n      multi: true,\n    }),\n  ],\n})\nexport class MyModule {}\n")),(0,r.kt)("h3",{id:"functionality-works-on-the-server-and-in-the-browser"},"Functionality works on the server and in the browser"),(0,r.kt)("p",null,"All env variables will be available both on the server and in the browser without any additional actions or settings. Env variables that have ",(0,r.kt)("inlineCode",{parentName:"p"},"dehydrate: true")," are automatically passed to the browser"),(0,r.kt)("h3",{id:"priority-of-obtaining-values-for-env-variables"},"Priority of obtaining values for env variables"),(0,r.kt)("p",null,"Since it is possible to overwrite the values of the variables, the variables are replaced according to certain rules"),(0,r.kt)("p",null,"The replacement rules are arranged in order of priority, from lower to higher:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parameters set in tokens ",(0,r.kt)("inlineCode",{parentName:"li"},"{ key: 'ENV_PARAM', value: 'env value' }")),(0,r.kt)("li",{parentName:"ul"},"Parameters written in ",(0,r.kt)("inlineCode",{parentName:"li"},"env.development.js")," file"),(0,r.kt)("li",{parentName:"ul"},"Passing application launch parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"MY_ENV=j node server.js"))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Exported tokens and TS interface"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createToken } from '@tinkoff/dippy';\n\nexport interface EnvironmentManager {\n  get(name: string): string | undefined;\n  getInt(name: string, def: number): number;\n  getAll(): Record<string, string>;\n  update(result: Record<string, string>): void;\n  clientUsed(): Record<string, string>;\n  updateClientUsed(result: Record<string, string>): void;\n}\n\n/**\n * @description\n * Instance that used for managing env data on the server and on the client\n */\nexport const ENV_MANAGER_TOKEN = createToken<EnvironmentManager>('environmentManager');\n\n/**\n * @description\n * List of envs that are used by the module or the app.\n * All of the envs specified by that token will be accessible in the code through `environmentManager`\n * ENV_USED_TOKEN format:\n    - `key` - id of the env. At that id the value of the env will be accessible through `environmentManager` and will be loaded from the external sources.\n    - `value` - default low-priority value for env `key`\n    - `optional` - is current env is optional. If `true` the app can work as usual event if the env value were not provided, if `false` - the app will fail to run without env value\n    - `validator` - validation function for passed env value. In case this function returns string it will be used as error message and validation will fail\n    - `dehydrate` - if `false` then env value will not be passed to client and this env can be used only on server\n *\n * @example\n  ```tsx\n  interface EnvParameter {\n    key: string;\n    value?: string;\n    optional?: boolean;\n    validator?: (value: string) => boolean | string;\n    dehydrate?: boolean;\n  }\n  ```\n */\nexport interface EnvParameter {\n  key: string;\n  value?: string;\n  optional?: boolean;\n  validator?: (value: string) => boolean | string;\n  dehydrate?: boolean;\n}\n\nexport const ENV_USED_TOKEN = createToken<EnvParameter[]>('envUsed', { multi: true });\n\n"))))),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"how-to-read-data-in-an-application"},"How to read data in an application"),(0,r.kt)("p",null,"Suppose we registered the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_API")," used by env with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENV_USED_TOKEN")," token, now we need to connect environmentManager in the application and read the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\n\n@Module({\n  providers: [\n    provide({\n      provide: 'MY_SERVICE',\n      useClass: class MyService {\n        constructor({ environmentManager }) {\n          console.log(environmentManager.get('CONFIG_API'));\n        }\n      },\n      deps: {\n        environmentManager: ENV_MANAGER_TOKEN,\n      },\n    }),\n  ],\n})\nexport class MyModule {}\n")),(0,r.kt)("p",null,"This code will work both on the server and in the browser"),(0,r.kt)("h3",{id:"how-you-can-simply-pass-parameters-in-local-development"},"How you can simply pass parameters in local development"),(0,r.kt)("p",null,"To do this, create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"env.development.js")," in the root of the project and write all env variables for the application. When the application is initialized, this file will be read."),(0,r.kt)("h4",{id:"peculiarities-of-using-envdevelopmenjs-in-production-builds"},"Peculiarities of using env.developmen.js in production builds"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://12factor.net/ru/config"},"twelve factors")," application stores the configuration in environment variables, so by default when ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV === 'production'")," EnvironmentManger will not read the ",(0,r.kt)("inlineCode",{parentName:"p"},"env.development.js")," file."),(0,r.kt)("p",null,"If you want to test the application locally with ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV=production"),", you can pass the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"DANGEROUS_UNSAFE_ENV_FILES='true'")," so that EnvironmentManger will read the ",(0,r.kt)("inlineCode",{parentName:"p"},"env.development.js")," file and not have to enter all variables by hand."),(0,r.kt)("h3",{id:"how-to-pass-env-parameters-to-the-application-during-the-deploys"},"How to pass env parameters to the application during the deploys"),(0,r.kt)("p",null,"To do this, pass env parameters when starting the application. For example in Docker you can do this with the parameter -e ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -e MY_ENV_VAR=/ my-image"),"."),(0,r.kt)("h3",{id:"how-to-view-all-env-variables-of-an-application"},"How to view all env variables of an application"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This method allows you to see only client variables")),(0,r.kt)("p",null,"To get a list of variables, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"/papi/apiList")," method"),(0,r.kt)("p",null,"Request example: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/${appName}/papi/apiList")),(0,r.kt)("h3",{id:"how-to-make-an-env-variable-optional"},"How to make an ENV variable optional?"),(0,r.kt)("p",null,"To do this, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"optional: true")," parameter. For example { key: 'DEBUG_MODULE', optional: true }"))}c.isMDXComponent=!0}}]);