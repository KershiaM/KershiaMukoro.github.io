"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[997],{7261:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>A,contentTitle:()=>C,default:()=>W,frontMatter:()=>S,metadata:()=>E,toc:()=>H});var t=a(5893),i=a(1151);const r=a.p+"assets/images/pikes_peak_snow-783ba298ba17c4dfdb9b1f30d0496f29.jpg";var s=a(7294),o=a(512),l=a(2466),c=a(6550),d=a(469),h=a(1980),u=a(7392),p=a(12);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:i}}=e;return{value:n,label:a,attributes:t,default:i}}))}(a);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function f(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:a}=e;const t=(0,c.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,h._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=g(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,c]=k({queryString:a,groupId:t}),[h,u]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,p.Nk)(a);return[t,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),m=(()=>{const e=l??h;return f({value:e,tabValues:i})?e:null})();(0,d.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),u(e)}),[c,u,i]),tabValues:i}}var b=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:n,block:a,selectedValue:i,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),h=e=>{const n=e.currentTarget,a=c.indexOf(n),t=s[a].value;t!==i&&(d(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...r,className:(0,o.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=y(e);return(0,t.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,t.jsx)(w,{...e,...n}),(0,t.jsx)(x,{...e,...n})]})}function P(e){const n=(0,b.Z)();return(0,t.jsx)(j,{...e,children:m(e.children)},String(n))}const T={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)(T.tabItem,i),hidden:a,children:n})}const S={title:"Pikes Peak",sidebar_position:1},C="Surviving High Altitudes: Pikes Peak",E={id:"Wandering the Wilds/Pikes Peak",title:"Pikes Peak",description:"Pikes Peak, also known as \"America's Mountain\", is a famous fourteener located in the Rocky Mountains of Colorado. Standing at an elevation of 14,115 feet, Pikes Peak offers breathtaking views and a sense of accomplishment for those who reach its summit. In this article, I want to share my tips and experiences with fellow hikers who are planning to tackle Pikes Peak. Whether you're a beginner or an experienced hiker, my hope is that this article will provide valuable insights and make your hike up Pikes Peak more enjoyable. So lace up your hiking boots and let's explore Pikes Peak together!",source:"@site/docs/Wandering the Wilds/Pikes Peak.md",sourceDirName:"Wandering the Wilds",slug:"/Wandering the Wilds/Pikes Peak",permalink:"/KershiaMukoro.github.io/Wandering the Wilds/Pikes Peak",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Pikes Peak",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Resume",permalink:"/KershiaMukoro.github.io/"}},A={},H=[{value:"Hazards and Hiking Essentials",id:"hazards-and-hiking-essentials",level:2},{value:"Altitude Sickness",id:"altitude-sickness",level:3},{value:"Rapid Temperature Changes",id:"rapid-temperature-changes",level:3},{value:"My Experience Hiking Pikes Peak",id:"my-experience-hiking-pikes-peak",level:2},{value:"Challenges Faced and How I Overcame Them",id:"challenges-faced-and-how-i-overcame-them",level:3},{value:"The Importance of Being Prepared",id:"the-importance-of-being-prepared",level:3},{value:"Happy Hiking!",id:"happy-hiking",level:2}];function V(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"surviving-high-altitudes-pikes-peak",children:"Surviving High Altitudes: Pikes Peak"}),"\n",(0,t.jsx)(n.p,{children:"Pikes Peak, also known as \"America's Mountain\", is a famous fourteener located in the Rocky Mountains of Colorado. Standing at an elevation of 14,115 feet, Pikes Peak offers breathtaking views and a sense of accomplishment for those who reach its summit. In this article, I want to share my tips and experiences with fellow hikers who are planning to tackle Pikes Peak. Whether you're a beginner or an experienced hiker, my hope is that this article will provide valuable insights and make your hike up Pikes Peak more enjoyable. So lace up your hiking boots and let's explore Pikes Peak together!"}),"\n",(0,t.jsx)("img",{src:r,alt:"pikes_peak_snow",style:{width:500}}),"\n",(0,t.jsx)(n.h2,{id:"hazards-and-hiking-essentials",children:"Hazards and Hiking Essentials"}),"\n",(0,t.jsx)(n.p,{children:"Before embarking on any hike, it is important to consider the potential hazards and safety precautions that need to be taken. This is especially crucial when attempting a challenging summit like Pikes Peak. Prioritize safety by preparing mentally and physically, staying hydrated, and learning emergency procedures to significantly reduce risks on challenging hikes like Pikes Peak. Educate yourself about potential hazards and how to mitigate them to ensure a safe adventure. Always put safety first in any hiking endeavor."}),"\n",(0,t.jsxs)(P,{children:[(0,t.jsx)(I,{value:"Gear and Clothing Essentials",label:"Gear and Clothing Essentials",default:!0,children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sturdy Hiking Boots:"})," Comfortable and supportive footwear with good traction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Layers of Clothing:"})," Dress in moisture-wicking base layers, insulating layers, and a waterproof and windproof outer layer to adapt to changing weather conditions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Backpack:"})," A comfortable backpack to carry essentials, with adjustable straps and padding."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Trekking Poles:"})," Optional but helpful for stability and reducing strain on your knees."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hat and Sunglasses:"})," To protect from sun exposure at higher altitudes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gloves:"})," Warm and waterproof gloves to keep your hands protected."]}),"\n"]})}),(0,t.jsx)(I,{value:"Navigation and Safety Essentials",label:"Navigation and Safety Essentials",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AllTrails App:"})," Download the AllTrails app for real-time trail maps, GPS tracking, and trail details."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GPS Device:"})," Optional but useful for tracking your progress."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"First Aid Kit:"})," A comprehensive kit with bandages, antiseptic wipes, pain relievers, and essential medical supplies."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Emergency Whistle:"})," A whistle to signal for help in emergencies."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Headlamp or Flashlight:"})," With extra batteries for low-light or nighttime situations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sunscreen and Lip Balm:"})," To protect your skin from UV rays and dryness."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Personal Locator Beacon (PLB):"})," Optional but recommended for remote areas."]}),"\n"]})}),(0,t.jsx)(I,{value:"Food and Hydration Essentials",label:"Food and Hydration Essentials",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Water and Water Treatment:"})," Carry plenty of water and a water purification method to refill from natural sources if needed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Energy Snacks:"})," High-energy snacks like energy bars, trail mix, and dried fruits."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Meals:"})," Lightweight, dehydrated meals or packed meals for sustenance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cooking Gear:"})," If planning to cook, a portable stove and cookware for meal preparation."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h3,{id:"altitude-sickness",children:"Altitude Sickness"}),"\n",(0,t.jsx)(n.p,{children:"One of the most common hazards hikers face on Pikes Peak is altitude sickness. As you ascend to higher altitudes, the air becomes thinner and oxygen levels decrease, which can lead to symptoms such as headaches, nausea, and dizziness. It is important to be aware of these symptoms and take necessary breaks or descend if needed."}),"\n",(0,t.jsx)(n.h3,{id:"rapid-temperature-changes",children:"Rapid Temperature Changes"}),"\n",(0,t.jsx)(n.p,{children:"Rapid temperature changes present another hazard to keep in mind. On Pikes Peak, the climate can shift swiftly, causing temperatures to drop as much as four degrees for every 1,000 feet you climb. This drop can pose risks to hikers who haven't prepared with the right clothing and gear. Packing warm layers and staying informed about the weather forecast are key steps before embarking on your hike. Be aware that hypothermia can occur even in temperatures as high as the mid-50s, while heat exhaustion and heat stroke also pose risks in warmer conditions."}),"\n",(0,t.jsx)(n.p,{children:"Now that we have covered preparation, let's dive into my own adventures hiking Pikes Peak!"}),"\n",(0,t.jsx)(n.h2,{id:"my-experience-hiking-pikes-peak",children:"My Experience Hiking Pikes Peak"}),"\n",(0,t.jsx)(n.h3,{id:"challenges-faced-and-how-i-overcame-them",children:"Challenges Faced and How I Overcame Them"}),"\n",(0,t.jsx)(n.p,{children:"My hike up Pikes Peak came with its fair share of challenges. On my first attempt, warm temperatures hit 79 degrees Fahrenheit, leading my companion to run out of water halfway. This incident underscored the crucial need for proper hydration and reminded us of the mountain's unpredictable weather. Despite this setback, we managed to reach Barr Camp to refill our water and press on."}),"\n",(0,t.jsx)(n.p,{children:"In November 2023, the challenges intensified. A friend suffered severe altitude sickness and couldn't continue past the A-frame shelter. Initially planning to descend via the Cog Railway, his condition forced us to choose between continuing alone or turning back to hike an extra 7 miles. Prioritizing safety over convenience, we opted to return on foot. This decision was complicated as darkness fell and the cold set in, revealing my underestimation of how quickly my body would cool. I had to contact Search and Rescue, hindered by my gloves making it hard to use my phone."}),"\n",(0,t.jsx)(n.p,{children:"Despite these obstacles, we made it back to Barr Camp, greeted by warmth and a chance to recover by the fire. This journey taught me valuable lessons about preparation, the necessity of accessible warm clothing, and the importance of understanding both my own and my companions' limits before starting an outdoor adventure."}),"\n",(0,t.jsx)(n.h3,{id:"the-importance-of-being-prepared",children:"The Importance of Being Prepared"}),"\n",(0,t.jsx)(n.p,{children:"The Importance of Being Prepared\r\nMy journey up Pikes Peak underscored the critical role of preparation for any hike. Ensuring you have sufficient water and snacks, the right gear and clothing, and a well-understood route can make or break your hiking experience."}),"\n",(0,t.jsx)(n.p,{children:"A lifesaver in my pack is my life straw, a compact and light filter that lets me safely drink from any water source. This tool has prevented dehydration on several occasions, proving indispensable for outdoor activities."}),"\n",(0,t.jsx)(n.p,{children:"Planning your route in advance is also key. This means familiarizing yourself with the trail's length, elevation gain, possible weather scenarios, and locations of emergency exits or shelters."}),"\n",(0,t.jsx)(n.p,{children:"Understanding your physical limits and those of your hiking partners is another essential aspect of preparation. Conditions like altitude sickness and fatigue can significantly affect your hike, so it's important to consider these risks beforehand."}),"\n",(0,t.jsx)(n.p,{children:"In essence, thorough preparation is vital for a safe and enjoyable hike. It not only safeguards your health but could also be crucial in aiding fellow hikers. Therefore, always review your gear, pack ample water and snacks, and study your trail before setting off on any outdoor adventure. Remember, being ready for the unexpected can dramatically enhance your hiking experience."}),"\n",(0,t.jsx)(n.h2,{id:"happy-hiking",children:"Happy Hiking!"}),"\n",(0,t.jsx)(n.p,{children:"Hiking Pikes Peak is an incredible experience and remains one of my most cherished adventures. The breathtaking views, challenging terrain, and sense of accomplishment upon reaching the summit make every step worthwhile. From the Barr Trail to the summit, every step offers its own unique challenges and rewards. With proper preparation, determination, and a passion for adventure, anyone can conquer this iconic mountain. But don't just take my word for it, lace up your hiking boots and go experience it for yourself! For a more detailed account of each trip, make sure to check out my blog. Happy hiking!"})]})}function W(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(V,{...e})}):V(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);