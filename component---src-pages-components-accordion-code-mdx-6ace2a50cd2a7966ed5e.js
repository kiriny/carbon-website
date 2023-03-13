"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[3256],{28399:function(e,t,o){o.d(t,{Z:function(){return T}});var n=o(67294),a=o(88650),c=o.n(a),r=o(1597),s=o(64905),l=o(76902),i=o(75900),m=o.n(i);var d=e=>{let{title:t,theme:o,tabs:a=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":a.length,"PageHeader-module--dark-mode--WCeH8":"dark"===o})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:o}=e;const{site:{siteMetadata:{repository:a}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:c,subDirectory:s,branch:l}=o||a,i=`${c}/edit/${l}${s}/src/pages${t}`;return c?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:i},"Edit this page on GitHub"))):null},u=o(56328),h=o(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:o}=this.props,a=o.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=c()(e,{lower:!0,strict:!0}),s=t===a,l=new RegExp(`${a}/?(#.*)?$`),i=o.replace(l,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${i}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var y=g,b=o(17680),v=o(75387),f=o(50041);var k=e=>{let{date:t}=e;const o=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",o.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var T=e=>{let{pageContext:t,children:o,location:a,Title:i}=e;const{frontmatter:m={},relativePagePath:h,titleType:g}=t,{tabs:f,title:T,theme:w,description:E,keywords:x,date:C}=m,{interiorTheme:P}=(0,v.Z)(),{site:{pathPrefix:N}}=(0,r.useStaticQuery)("2456312558"),A=N?a.pathname.replace(N,""):a.pathname,D=f?A.split("/").filter(Boolean).slice(-1)[0]||c()(f[0],{lower:!0}):"",I=w||P;return n.createElement(l.Z,{tabs:f,homepage:!1,theme:I,pageTitle:T,pageDescription:E,pageKeywords:x,titleType:g},n.createElement(d,{title:i?n.createElement(i,null):T,label:"label",tabs:f,theme:I}),f&&n.createElement(y,{title:T,slug:A,tabs:f,currentTab:D}),n.createElement(b.Z,{padded:!0},o,n.createElement(p,{relativePagePath:h}),n.createElement(k,{date:C})),n.createElement(u.Z,{pageContext:t,location:a,slug:A,tabs:f,currentTab:D}),n.createElement(s.Z,null))}},60857:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return s},default:function(){return v}});var n=o(45987),a=(o(67294),o(64983)),c=o(28399);const r=["components"],s={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},i=l("PageDescription"),m=l("Row"),d=l("Column"),p=l("ResourceCard"),u=l("MdxIcon"),h=l("ComponentDemo"),g=l("ComponentVariant"),y={_frontmatter:s},b=c.Z;function v(e){let{components:t}=e,o=(0,n.Z)(e,r);return(0,a.kt)(b,Object.assign({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i,{mdxType:"PageDescription"},(0,a.kt)("p",null,"Preview the accordion component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,a.kt)("h2",null,"Documentation"),(0,a.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-accordion--default",mdxType:"ResourceCard"},(0,a.kt)(u,{name:"react",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-accordion--basic",mdxType:"ResourceCard"},(0,a.kt)(u,{name:"angular",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvaccordion--default",mdxType:"ResourceCard"},(0,a.kt)(u,{name:"vue",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-accordion--default",mdxType:"ResourceCard"},(0,a.kt)(u,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,a.kt)("h2",null,"Live demo"),(0,a.kt)(h,{components:[{id:"accordion",label:"Accordion"}],mdxType:"ComponentDemo"},(0,a.kt)(g,{id:"accordion",knobs:{Accordion:["align","disabled"],AccordionItem:["open","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-accordion--accordion",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-accordion--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvaccordion--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-accordion--default"},mdxType:"ComponentVariant"},'\n  <Accordion>\n    <AccordionItem title="Title 1"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>\n    <AccordionItem title="Title 2"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>\n    <AccordionItem title="Title 3"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>\n  </Accordion>\n  ')))}v.isMDXComponent=!0}}]);