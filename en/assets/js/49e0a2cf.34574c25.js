(self.webpackChunk=self.webpackChunk||[]).push([[5402],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7438:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>d});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],u={id:"api",title:"API"},s=void 0,p={unversionedId:"features/react-query/api",id:"features/react-query/api",isDocsHomePage:!1,title:"API",description:"A library for handling requests in React components. Based on react-query.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/features/react-query/api.md",sourceDirName:"features/react-query",slug:"/features/react-query/api",permalink:"/en/docs/features/react-query/api",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/react-query/api.md",version:"current",frontMatter:{id:"api",title:"API"},sidebar:"docs",previous:{title:"Using @tramvai/react-query library",permalink:"/en/docs/how-to/react-query-usage"},next:{title:"Automatic migrations",permalink:"/en/docs/features/migration"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Api",id:"api",children:[{value:"createQuery",id:"createquery",children:[]},{value:"useQuery",id:"usequery",children:[]},{value:"createInfiniteQuery",id:"createinfinitequery",children:[]},{value:"useInfiniteQuery",id:"useinfinitequery",children:[]},{value:"createMutation",id:"createmutation",children:[]},{value:"useMutation",id:"usemutation",children:[]}]},{value:"How-to",id:"how-to",children:[]}],l={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A library for handling requests in React components. Based on ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-query"),"."),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,"For the library to work, the module ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/references/modules/react-query"},"@tramvai/module-react-query")," must be added to the tramvai application"),(0,i.kt)("h2",{id:"api"},"Api"),(0,i.kt)("h3",{id:"createquery"},"createQuery"),(0,i.kt)("p",null,"Allows you to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," object that can later be used in components using ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),". Used to execute single data retrieval requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: 'base',\n  fn: async (_, { apiClient }) => {\n    const { payload } = await apiClient.get('api/base');\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n")),(0,i.kt)("h4",{id:"unique-query-parameters"},"Unique query parameters"),(0,i.kt)("p",null,"To create a generic ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," that takes parameters for a query, you must return a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),",\nyou can read more about this in the official documentation section ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/query-keys"},"Query Keys")),(0,i.kt)("p",null,"As a parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," you can use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a string, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"key: 'query-name'")),(0,i.kt)("li",{parentName:"ul"},"an array where any serializable data can be used as elements, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"key: ['query-name', false, { bar: 'baz }]")),(0,i.kt)("li",{parentName:"ul"},"a function that takes the parameters with which ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," is called and returns a string - ",(0,i.kt)("inlineCode",{parentName:"li"},"key: (options) => 'query-name'")),(0,i.kt)("li",{parentName:"ul"},"a function that accepts parameters, with which ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," is called, and returns an array, where any serializable data can be used as elements - ",(0,i.kt)("inlineCode",{parentName:"li"},"key: (options) => ['query-name', options, { bar: 'baz' }]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createQuery, useQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: (id: number) => ['user', id],\n  fn: async (id, { apiClient }) => {\n    const { payload } = await apiClient.get(`api/user/${id}`);\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n\nexport function Component({ id }) {\n  const { data, isLoading } = useQuery(query, id);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n")),(0,i.kt)("h3",{id:"usequery"},"useQuery"),(0,i.kt)("p",null,"React hook for working with ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," object"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438\u0437 react-query")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useQuery } from '@tramvai/react-query';\n\nexport function Component() {\n  const { data, isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n")),(0,i.kt)("h3",{id:"createinfinitequery"},"createInfiniteQuery"),(0,i.kt)("p",null,"Creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteQuery")," object that can later be used in components using ",(0,i.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery"),". It is used to execute queries to obtain a sequence of data that can be loaded as the component runs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createInfiniteQuery } from '@tramvai/react-query';\n\nconst query = createInfiniteQuery({\n  key: 'list',\n  fn: async (_, start = 0, { apiClient }) => {\n    const { payload } = await apiClient.get<Response>('api/list', {\n      query: {\n        count: 30,\n        start,\n      },\n    });\n\n    return payload;\n  },\n  getNextPageParam: (page: Response) => {\n    return page.nextPage;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n")),(0,i.kt)("h3",{id:"useinfinitequery"},"useInfiniteQuery"),(0,i.kt)("p",null,"React hook for working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteQuery")," object"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useInfiniteQuery"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438\u0437 react-query")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useInfiniteQuery } from '@tramvai/react-query';\n\nexport function Component() {\n  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(query);\n\n  if (isLoading) {\n    return 'loading...';\n  }\n\n  return (\n    <div>\n      <div>\n        {data.pages.map((page) => {\n          return page.list.map((entry) => {\n            return <div key={entry}>{entry}</div>;\n          });\n        })}\n      </div>\n      {hasNextPage && (\n        <button type=\"button\" onClick={() => fetchNextPage()}>\n          Load more\n        </button>\n      )}\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"createmutation"},"createMutation"),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," object that can later be used in components using ",(0,i.kt)("inlineCode",{parentName:"p"},"useMutation"),". Used to send and modify data in the api."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createMutation } from '@tramvai/react-query';\n\nconst mutation = createMutation({\n  key: 'post',\n  fn: async (_, data: string, { apiClient }) => {\n    const { payload } = await apiClient.post('api/post', {\n      body: {\n        data,\n      },\n    });\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n")),(0,i.kt)("h3",{id:"usemutation"},"useMutation"),(0,i.kt)("p",null,"React hook for working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," object"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438\u0437 react-query")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useMutation } from '@tramvai/react-query';\n\nexport function Component() {\n  const { isLoading, mutate } = useMutation(mutation);\n\n  if (isLoading) {\n    return 'loading...';\n  }\n\n  return (\n    <button type=\"button\" onClick={() => mutate('test')}>\n      Send data\n    </button>\n  );\n}\n")),(0,i.kt)("h2",{id:"how-to"},"How-to"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/docs/how-to/react-query-usage"},"Examples of using @tramvai/react-query")))}d.isMDXComponent=!0}}]);