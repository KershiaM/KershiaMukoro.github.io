"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2428],{4552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"How-to/Asana Workflows/basics","title":"Workflow Basics","description":"The guides assume that you are familiar with Asana\'s basic operations and functions.","source":"@site/docs/How-to/Asana Workflows/basics.md","sourceDirName":"How-to/Asana Workflows","slug":"/How-to/Asana Workflows/basics","permalink":"/KershiaMukoro.github.io/docs/How-to/Asana Workflows/basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Workflow Basics","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Asana Workflows","permalink":"/KershiaMukoro.github.io/docs/category/asana-workflows"},"next":{"title":"Map Out a Workflow in 5 Simple Steps","permalink":"/KershiaMukoro.github.io/docs/How-to/Asana Workflows/map_your_wfl"}}');var s=n(4848),a=n(8453),o=n(1470),i=n(9365),l=n(5871);const c={title:"Workflow Basics",sidebar_position:2},u="Understanding Workflow Basics",d={},h=[{value:"What is a Workflow?",id:"what-is-a-workflow",level:3},{value:"Your Asana Toolkit",id:"your-asana-toolkit",level:3},{value:"Fixed-deadline Project Characteristics",id:"fixed-deadline-project-characteristics",level:3}];function f(e){const t={admonition:"admonition",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"understanding-workflow-basics",children:"Understanding Workflow Basics"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"The guides assume that you are familiar with Asana's basic operations and functions."})})})}),"\n",(0,s.jsx)(t.h3,{id:"what-is-a-workflow",children:"What is a Workflow?"}),"\n",(0,s.jsx)(t.p,{children:"A workflow outlines a step-by-step process for how tasks should be completed to achieve a specific goal. Asana's built-in automation tools and workflows streamline task management, save time, increase consistency, and improve team collaboration across your projects."}),"\n",(0,s.jsx)(t.h3,{id:"your-asana-toolkit",children:"Your Asana Toolkit"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Rules:"})," Automate project actions with rules."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Templates:"})," A ready-to-use project framework."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Projects:"})," Organize tasks, monitor progress, and manage deadlines."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Tasks:"})," Individual work items within a project, its own deadline, assignee, and instructions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Subtasks:"})," Break larger tasks into smaller tasks."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Custom fields:"})," Add specific information to tasks and projects, such as priority levels or budgets."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Forms:"})," Collect information from team members or external parties for new tasks or projects."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Integrations:"})," Connect Asana with other applications to centralize communication or with time-tracking tools to monitor productivity."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"fixed-deadline-project-characteristics",children:"Fixed-deadline Project Characteristics"}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(i.A,{value:"Key features of Fixed-Deadline Projects",label:"Key features of Fixed-Deadline Projects",default:!0,children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Start, progress, and finish within a set timeframe."}),"\n",(0,s.jsx)(t.li,{children:"Each project involves a distinct set of tasks."}),"\n",(0,s.jsx)(t.li,{children:"Tasks are executed in sequence to meet a set deadline."}),"\n",(0,s.jsx)(t.li,{children:"Target a specific deliverable or deadline."}),"\n"]})}),(0,s.jsx)(i.A,{value:"Examples of Fixed-Deadline Projects",label:"Examples of Fixed-Deadline Projects",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Marketing campaigns"}),"\n",(0,s.jsx)(t.li,{children:"Website redesigns"}),"\n",(0,s.jsx)(t.li,{children:"Conference planning and execution"}),"\n",(0,s.jsx)(t.li,{children:"Grant application submissions"}),"\n"]})})]}),"\n",(0,s.jsx)(t.p,{children:"\xa0"}),"\n",(0,s.jsx)(l.A,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),s=n(4164),a=n(6972),o=n(8774),i=n(4586);const l=["zero","one","two","few","many","other"];function c(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function h(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}var f=n(6654),m=n(1312),p=n(1107);const b={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function g(e){let{href:t,children:n}=e;return(0,x.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",b.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:a}=e;return(0,x.jsxs)(g,{href:t,children:[(0,x.jsxs)(p.A,{as:"h2",className:(0,s.A)("text--truncate",b.cardTitle),title:r,children:[n," ",r]}),a&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",b.cardDescription),title:a,children:a})]})}function w(e){let{item:t}=e;const n=(0,a.Nr)(t),r=function(){const{selectMessage:e}=h();return t=>e(t,(0,m.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function v(e){let{item:t}=e;const n=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.cC)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(v,{item:t});case"category":return(0,x.jsx)(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,a.$S)();return(0,x.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(y,{...e});const r=(0,a.d1)(t);return(0,x.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(k,{item:e})},t)))})}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),s=n(4164),a=n(3104),o=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:s}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??p;return f({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);