"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3287],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2999:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>m,default:()=>p});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],l={id:"migrate",title:"@tramvai/tools-migrate"},s=void 0,c={unversionedId:"references/tools/migrate",id:"references/tools/migrate",title:"@tramvai/tools-migrate",description:"Tool for executing code migrations for the tramvai modules.",source:"@site/tmp-docs/references/tools/migrate.md",sourceDirName:"references/tools",slug:"/references/tools/migrate",permalink:"/docs/references/tools/migrate",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tools/migrate.md",tags:[],version:"current",frontMatter:{id:"migrate",title:"@tramvai/tools-migrate"},sidebar:"docs",previous:{title:"@tramvai/build",permalink:"/docs/references/tools/build"},next:{title:"@tramvai/tools-check-versions",permalink:"/docs/references/tools/check-versions"}},m=[{value:"How to",id:"how-to",children:[{value:"Disable migrations",id:"disable-migrations",children:[],level:3},{value:"Add new migration",id:"add-new-migration",children:[],level:3}],level:2},{value:"How to",id:"how-to-1",children:[{value:"Write migration",id:"write-migration",children:[{value:"Transformation",id:"transformation",children:[],level:4}],level:3}],level:2}],d={toc:m};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tool for executing code migrations for the tramvai modules."),(0,i.kt)("p",null,"How does it work:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in published module folder ",(0,i.kt)("inlineCode",{parentName:"li"},"__migrations__")," contains migrations files for the execution"),(0,i.kt)("li",{parentName:"ul"},"found migrations that were have not been executed before are running"),(0,i.kt)("li",{parentName:"ul"},"migrations can change files ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tramvai.json")," and project source code"),(0,i.kt)("li",{parentName:"ul"},"after migration run information about executed migrations is added to file ",(0,i.kt)("inlineCode",{parentName:"li"},".tramvai-migrate-applied.json")," to the project root"),(0,i.kt)("li",{parentName:"ul"},"all of the changed files after migrations should be added and committed to remote repository")),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"disable-migrations"},"Disable migrations"),(0,i.kt)("p",null,"To disable migration add environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"SKIP_TRAMVAI_MIGRATIONS"),"."),(0,i.kt)("h3",{id:"add-new-migration"},"Add new migration"),(0,i.kt)("p",null,"You can add new migration with command ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn generate:migration"),". You will need to specify package name for the migration and the migration name itself."),(0,i.kt)("p",null,"Also add to this package's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," folder with the built migrations to the field ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," if it wasn't specified before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"files": [\n    "lib",\n    "__migrations__"\n],\n')),(0,i.kt)("p",null,"Migration is a function that accepts special api using which it implements changes to the source code or configs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface Api {\n  packageJSON: PackageJSON; // object represented root package.json\n  tramvaiJSON: TramvaiJSON; // object represented tramvai.json\n  transform: (transformer: Transform, pathTransformer?: PathTransformer) => Promise<void>; // function that accepts transform function for `jscodeshift` and transform function for the file renames\n}\n")),(0,i.kt)("p",null,"Code transformations is done with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift"},"jscodeshift")),(0,i.kt)("h2",{id:"how-to-1"},"How to"),(0,i.kt)("h3",{id:"write-migration"},"Write migration"),(0,i.kt)("h4",{id:"transformation"},"Transformation"),(0,i.kt)("p",null,"Rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prefer to return ",(0,i.kt)("inlineCode",{parentName:"li"},"null | undefined")," or original source from the transform function in cases when migration doesn't change source code. Otherwise it will lead to unnecessary fs writing."),(0,i.kt)("li",{parentName:"ul"},"Prefer to use embedded methods of collections returned by call ",(0,i.kt)("inlineCode",{parentName:"li"},"j(source)")," to make searches and transforms")))}p.isMDXComponent=!0}}]);