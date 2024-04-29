"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7093],{7804:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=s(5893),r=s(1151);s.p;var i=s(4866),o=s(5162),a=s(2991);const l={title:"A Simple Example of a Workflow",sidebar_position:6},c="A Simple Example of a Workflow",d={id:"How-to/Asana Workflows/example_wfl",title:"A Simple Example of a Workflow",description:"Purpose",source:"@site/docs/How-to/Asana Workflows/example_wfl.md",sourceDirName:"How-to/Asana Workflows",slug:"/How-to/Asana Workflows/example_wfl",permalink:"/KershiaMukoro.github.io/docs/How-to/Asana Workflows/example_wfl",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"A Simple Example of a Workflow",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Quick Start Guide: Creating Rules in Asana",permalink:"/KershiaMukoro.github.io/docs/How-to/Asana Workflows/quickstart_rules"},next:{title:"Information Security Policy Documents",permalink:"/KershiaMukoro.github.io/docs/category/information-security-policy-documents"}},u={},h=[{value:"Purpose",id:"purpose",level:2},{value:"Audience",id:"audience",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Example Workflow",id:"example-workflow",level:2},{value:"Initiation",id:"initiation",level:3},{value:"Production",id:"production",level:3},{value:"Review",id:"review",level:3},{value:"Approval",id:"approval",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Revisions",id:"revisions",level:3},{value:"Done",id:"done",level:3},{value:"Error Handling and Troubleshooting",id:"error-handling-and-troubleshooting",level:2},{value:"Insufficient Task Details",id:"insufficient-task-details",level:3},{value:"Missed Deadlines",id:"missed-deadlines",level:3},{value:"Incorrect Task Assignments",id:"incorrect-task-assignments",level:3},{value:"Technology Issues",id:"technology-issues",level:3}];function p(e){const n={admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"a-simple-example-of-a-workflow",children:"A Simple Example of a Workflow"}),"\n",(0,t.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this workflow is to clearly define each step of the project lifecycle, assigning responsibilities and setting expectations for all involved. The workflow is tailored for project managers and creative leads looking to enhance efficiency, improve communication, and ensure timely delivery of project deliverables."}),"\n",(0,t.jsx)(n.h2,{id:"audience",children:"Audience"}),"\n",(0,t.jsx)(n.p,{children:"This workflow is intended for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Project Managers (PMs):"})," Responsible for overseeing the project's progress, monitoring tasks' deadlines, ensuring communication between team members is clear and effective, and the quality of the output meets client expectations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Creative Leads (CLs):"})," Guide the creative aspects of the project, make decisions on the creative direction, and ensure the quality of the output meets internal and client expectations."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enhance Collaboration:"})," With clearly defined roles and responsibilities, team members can collaborate more effectively, ensuring smooth transitions between different phases of the project."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Increase Transparency:"})," The use of status updates and @mentions keeps everyone informed about task progress and changes, fostering an environment of transparency."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Streamline Processes:"})," Automated task movements based on status updates reduce manual work and potential errors, allowing the team to focus on their core responsibilities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improve Project Tracking:"})," Clearly outline each phase of the project, making it easier to track overall progress and identify any bottlenecks early on."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-workflow",children:"Example Workflow"}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"info",children:(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["In this example, Asana moves tasks based on the ",(0,t.jsx)(n.strong,{children:"Status"})," custom field."]})})}),"\n",(0,t.jsx)(n.h3,{id:"initiation",children:"Initiation"}),"\n",(0,t.jsx)(n.p,{children:"Start of workflow."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," The Project Manager (PM) creates tasks, writes instructions, and adds resources to tasks.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," PM ",(0,t.jsx)(n.strong,{children:"@mentions"})," and assigns the tasks to the relevant Creative Lead (CL).",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"3."})," CL reviews tasks then takes the following actions:"]}),"\n",(0,t.jsx)(n.admonition,{title:"Actions",type:"tip",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(o.Z,{value:"Sufficient",label:"Sufficient Instructions",default:!0,children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," CL @mentions the PM with an assignee for the task.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," PM sets the following fields:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Due Date"}),"\n",(0,t.jsx)(n.li,{children:"Creative Team"}),"\n",(0,t.jsx)(n.li,{children:"Assignee"}),"\n",(0,t.jsxs)(n.li,{children:["Status: ",(0,t.jsx)(n.strong,{children:"Production"})]}),"\n"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"3."})," Asana moves the task into the Production section."]})]}),(0,t.jsx)(o.Z,{value:"Insufficient",label:"Insufficient Instructions",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," CL ",(0,t.jsx)(n.strong,{children:"@mentions"})," PM with adjustments and resources needed.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," CL sets ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Insufficient."}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"3."})," Asana reassigns task to PM and leaves a comment."]})})]})}),"\n",(0,t.jsx)(n.h3,{id:"production",children:"Production"}),"\n",(0,t.jsx)(n.p,{children:"Work in progress."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Assignees work on tasks.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," Assignees set ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Review"})," upon completing the task.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"3."})," Asana removes assignee, notifies CL, and moves task into the Review section."]}),"\n",(0,t.jsx)(n.h3,{id:"review",children:"Review"}),"\n",(0,t.jsx)(n.p,{children:"First QC check."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Asana generates an ",(0,t.jsx)(n.strong,{children:"Approval Request"}),", assigns a CL, and sets due date.\r\n",(0,t.jsx)(n.strong,{children:"2."})," CL reviews completed work then takes the following actions:"]}),"\n",(0,t.jsx)(n.admonition,{title:"Actions",type:"tip",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(o.Z,{value:"Approved",label:"Approved",default:!0,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Check mark request ",(0,t.jsx)(n.strong,{children:"Approved"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," Asana sets ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Approval"}),", notifies PM, and moves task into the Review section."]})}),(0,t.jsx)(o.Z,{value:"NOT Approved",label:"NOT Approved",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Check mark request ",(0,t.jsx)(n.strong,{children:"NOT Approved"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," @mention assignee and PM with adjustments, and reassign task back to assignee.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," Set ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Production"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"3."})," Asana moves task back to the Production section."]})})]})}),"\n",(0,t.jsx)(n.h3,{id:"approval",children:"Approval"}),"\n",(0,t.jsx)(n.p,{children:"Second QC Check."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Asana generates an ",(0,t.jsx)(n.strong,{children:"Approval Request"}),", assigns PM, and sets due date.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," PM reviews completed work then takes the following actions:"]}),"\n",(0,t.jsx)(n.admonition,{title:"Actions",type:"tip",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(o.Z,{value:"Approved",label:"Approved",default:!0,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Check mark request ",(0,t.jsx)(n.strong,{children:"Approved"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," Asana sets ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Evaluation"}),", generates a subtask assigned to PM, and sets due date.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"3."})," PM submits work to the customer then marks subtask complete.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"4."})," Asana moves task to the Evaluation section."]})}),(0,t.jsx)(o.Z,{value:"NOT Approved",label:"NOT Approved",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Check mark request ",(0,t.jsx)(n.strong,{children:"NOT Approved"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," @mention assignee and CL with adjustments, and reassign task back to assignee.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"3."})," Update due date and set ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Production"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"4."})," Asana moves task back to the Production section."]})})]})}),"\n",(0,t.jsx)(n.h3,{id:"evaluation",children:"Evaluation"}),"\n",(0,t.jsx)(n.p,{children:"Customer reviews work and provides feedback."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Asana assigns task to PM and sets due date for customer's review.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," PM takes one of the following actions:"]}),"\n",(0,t.jsx)(n.admonition,{title:"Actions",type:"tip",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(o.Z,{value:"Modifications Requested",label:"Revision",default:!0,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Set ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Revision"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," Asana moves the task to the Revisions section."]})}),(0,t.jsx)(o.Z,{value:"No Modifications",label:"Done",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," PM marks the task ",(0,t.jsx)(n.strong,{children:"Complete"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," Asana sets ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Done"})," and moves task to the Done section."]})})]})}),"\n",(0,t.jsx)(n.h3,{id:"revisions",children:"Revisions"}),"\n",(0,t.jsx)(n.p,{children:"Customer requests modifications to deliverable."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Asana generates a subtask assigned to PM and adjusts due date.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," PM processes customer's feedback and updates task instructions with revisions.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"3."})," PM sets due date, reassigns task, and updates ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.strong,{children:"Production"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"4."})," Asana moves task to the Production section."]}),"\n",(0,t.jsx)(n.h3,{id:"done",children:"Done"}),"\n",(0,t.jsx)(n.p,{children:"Work on deliverables complete."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1."})," Asana moves tasks marked as complete to this section.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"2."})," End of workflow."]}),"\n",(0,t.jsx)(n.h2,{id:"error-handling-and-troubleshooting",children:"Error Handling and Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"During the lifecycle of a project, various issues may arise that can disrupt the smooth flow of tasks. Here are some common issues you might encounter in this workflow, along with guidance on how to handle them:"}),"\n",(0,t.jsx)(n.h3,{id:"insufficient-task-details",children:"Insufficient Task Details"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Problem:"})," A task may occasionally be assigned with insufficient details, leading to confusion or delays."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Creative Leads should use the \u201cInsufficient Instructions\u201d status to flag these tasks. It triggers a notification to the Project Manager to add the required details. Always specify what additional information is needed to avoid back-and-forth communication."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"missed-deadlines",children:"Missed Deadlines"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Problem:"})," Tasks may not be completed on time, impacting subsequent phases of the project."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Set realistic deadlines and use Asana\u2019s reminder features to keep tasks on track. If a deadline is missed, reassess the task\u2019s timeline and update the due date accordingly. Communicate openly about delays in the designated Asana comment sections to keep all stakeholders informed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"incorrect-task-assignments",children:"Incorrect Task Assignments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Problem:"})," Tasks mistakenly assigned to the wrong team member, causing delays or incorrect work."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Regularly review task assignments during team meetings. If a task is found to be incorrectly assigned, the Project Manager should immediately reassign it to the correct individual and update the status to reflect the change."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"technology-issues",children:"Technology Issues"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Problem:"})," Users may experience technical difficulties with Asana, such as login problems or syncing issues."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Ensure all team members have access to Asana\u2019s support resources. Create a quick reference guide with solutions to common technical problems and share it with the team. For persistent issues, contact Asana\u2019s technical support team."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\xa0",(0,t.jsx)(n.br,{}),"\n","\xa0"]}),"\n",(0,t.jsx)(a.Z,{})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},2991:(e,n,s)=>{s.d(n,{Z:()=>g});s(7294);var t=s(512),r=s(3438),i=s(3692),o=s(8824),a=s(3919),l=s(5999),c=s(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(5893);function h(e){let{href:n,children:s}=e;return(0,u.jsx)(i.Z,{href:n,className:(0,t.Z)("card padding--lg",d.cardContainer),children:s})}function p(e){let{href:n,icon:s,title:r,description:i}=e;return(0,u.jsxs)(h,{href:n,children:[(0,u.jsxs)(c.Z,{as:"h2",className:(0,t.Z)("text--truncate",d.cardTitle),title:r,children:[s," ",r]}),i&&(0,u.jsx)("p",{className:(0,t.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function m(e){let{item:n}=e;const s=(0,r.LM)(n),t=function(){const{selectMessage:e}=(0,o.c)();return n=>e(n,(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return s?(0,u.jsx)(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function x(e){let{item:n}=e;const s=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,r.xz)(n.docId??void 0);return(0,u.jsx)(p,{href:n.href,icon:s,title:n.label,description:n.description??t?.description})}function j(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(x,{item:n});case"category":return(0,u.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function f(e){let{className:n}=e;const s=(0,r.jA)();return(0,u.jsx)(g,{items:s.items,className:n})}function g(e){const{items:n,className:s}=e;if(!n)return(0,u.jsx)(f,{...e});const i=(0,r.MN)(n);return(0,u.jsx)("section",{className:(0,t.Z)("row",s),children:i.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(j,{item:e})},n)))})}},5162:(e,n,s)=>{s.d(n,{Z:()=>o});s(7294);var t=s(512);const r={tabItem:"tabItem_Ymn6"};var i=s(5893);function o(e){let{children:n,hidden:s,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>w});var t=s(7294),r=s(512),i=s(2466),o=s(6550),a=s(469),l=s(1980),c=s(7392),d=s(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:s,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(5893);function v(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),r=a[s].value;r!==t&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(n))}},8824:(e,n,s)=>{s.d(n,{c:()=>c});var t=s(7294),r=s(2263);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(n,s)=>function(e,n,s){const t=e.split("|");if(1===t.length)return t[0];t.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const r=s.select(n),i=s.pluralForms.indexOf(r);return t[Math.min(i,t.length-1)]}(s,n,e)}}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);