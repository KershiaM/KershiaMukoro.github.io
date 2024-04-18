"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27],{6284:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(5893),t=i(1151);const r={title:"Practical Examples",sidebar_position:4},o=void 0,a={id:"Nmap User Guide/practical_examples",title:"Practical Examples",description:"1. Identifying Unknown Devices on Your Network",source:"@site/docs/Nmap User Guide/practical_examples.md",sourceDirName:"Nmap User Guide",slug:"/Nmap User Guide/practical_examples",permalink:"/KershiaMukoro.github.io/docs/Nmap User Guide/practical_examples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Practical Examples",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using Nmap",permalink:"/KershiaMukoro.github.io/docs/Nmap User Guide/using-nmap"},next:{title:"Expanding Your Nmap Toolkit",permalink:"/KershiaMukoro.github.io/docs/Nmap User Guide/expand_toolkit"}},c={},l=[{value:"1. <strong>Identifying Unknown Devices on Your Network</strong>",id:"1-identifying-unknown-devices-on-your-network",level:3},{value:"2. Checking for Open Ports on a Server",id:"2-checking-for-open-ports-on-a-server",level:3},{value:"3. Detecting the Operating System of a Remote Host",id:"3-detecting-the-operating-system-of-a-remote-host",level:3},{value:"4. Finding Vulnerabilities with Nmap Scripting Engine",id:"4-finding-vulnerabilities-with-nmap-scripting-engine",level:3},{value:"5. Monitoring Network Traffic Flow",id:"5-monitoring-network-traffic-flow",level:3},{value:"6. Scanning a Range of IPs for a Specific Service",id:"6-scanning-a-range-of-ips-for-a-specific-service",level:3}];function d(e){const n={br:"br",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h3,{id:"1-identifying-unknown-devices-on-your-network",children:["1. ",(0,s.jsx)(n.strong,{children:"Identifying Unknown Devices on Your Network"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Scenario"}),": You have noticed unusual network activity and want to identify all devices connected to your network."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Command"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nmap -sn 192.168.1.0/24\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Explanation:"})," This command performs a ping sweep over your entire subnet to list devices that are online. It helps with quickly identifying all active IPs without performing a deep scan, which is useful for an initial investigation.\r\n\xa0",(0,s.jsx)(n.br,{}),"\n","\xa0"]}),"\n",(0,s.jsx)(n.h3,{id:"2-checking-for-open-ports-on-a-server",children:"2. Checking for Open Ports on a Server"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Scenario:"})," Before deploying a new application, you want to ensure no unnecessary ports are open on the server."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nmap -T4 -F 192.168.1.100\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Explanation:"})," This command scans the most common ports quickly (-T4 for faster execution and -F for fast mode). It\u2019s ideal for routine checks to ensure that only essential ports are open, reducing potential vulnerabilities.\r\n\xa0",(0,s.jsx)(n.br,{}),"\n","\xa0"]}),"\n",(0,s.jsx)(n.h3,{id:"3-detecting-the-operating-system-of-a-remote-host",children:"3. Detecting the Operating System of a Remote Host"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Scenario:"})," You need to verify the operating system of a remote machine to ensure compliance with your IT infrastructure policies."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nmap -O --osscan-guess 192.168.1.101\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Explanation:"})," This command performs an OS detection. The ",(0,s.jsx)(n.code,{children:"--osscan-guess"})," option tells Nmap to take its best guess if uncertain. OS detection is useful for compliance or troubleshooting.\r\n\xa0",(0,s.jsx)(n.br,{}),"\n","\xa0"]}),"\n",(0,s.jsx)(n.h3,{id:"4-finding-vulnerabilities-with-nmap-scripting-engine",children:"4. Finding Vulnerabilities with Nmap Scripting Engine"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Scenario:"})," You suspect a device might be vulnerable to a specific exploit and want to check it using Nmap\u2019s scripting capabilities."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nmap --script=vuln 192.168.1.102\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Explanation:"})," This command uses Nmap\u2019s built-in vulnerability scanning scripts to check for common vulnerabilities. It is a powerful way to proactively find and mitigate potential security issues.\r\n\xa0",(0,s.jsx)(n.br,{}),"\n","\xa0"]}),"\n",(0,s.jsx)(n.h3,{id:"5-monitoring-network-traffic-flow",children:"5. Monitoring Network Traffic Flow"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Scenario:"})," You need to track how traffic flows through your network to identify potential bottlenecks or unauthorized activity."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nmap --traceroute 192.168.1.103\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Explanation:"})," This command traces the path that packets take to reach the host. It is useful for diagnosing network routing issues and optimizing network paths.\r\n\xa0",(0,s.jsx)(n.br,{}),"\n","\xa0"]}),"\n",(0,s.jsx)(n.h3,{id:"6-scanning-a-range-of-ips-for-a-specific-service",children:"6. Scanning a Range of IPs for a Specific Service"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Scenario:"})," You need to find all printers (usually on port 9100) in a large subnet."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nmap -p 9100 192.168.1.0/24\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Explanation:"})," This command scans for a specific port across an entire subnet, helping to quickly locate all devices offering that service, such as printers"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);