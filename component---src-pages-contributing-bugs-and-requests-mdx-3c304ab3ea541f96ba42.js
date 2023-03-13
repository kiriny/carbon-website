"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[33817],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),r=a(88650),s=a.n(r),o=a(1597),i=a(64905),l=a(76902),c=a(75900),u=a.n(c);var m=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:i,branch:l}=a||r,c=`${s}/edit/${l}${i}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=a(56328),h=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),i=t===r,l=new RegExp(`${r}/?(#.*)?$`),c=a.replace(l,t);return n.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var g=b,k=a(17680),f=a(75387),y=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:u={},relativePagePath:h,titleType:b}=t,{tabs:y,title:w,theme:E,description:v,keywords:C,date:P}=u,{interiorTheme:T}=(0,f.Z)(),{site:{pathPrefix:x}}=(0,o.useStaticQuery)("2456312558"),L=x?r.pathname.replace(x,""):r.pathname,q=y?L.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",H=E||T;return n.createElement(l.Z,{tabs:y,homepage:!1,theme:H,pageTitle:w,pageDescription:v,pageKeywords:C,titleType:b},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:H}),y&&n.createElement(g,{title:w,slug:L,tabs:y,currentTab:q}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(N,{date:P})),n.createElement(d.Z,{pageContext:t,location:r,slug:L,tabs:y,currentTab:q}),n.createElement(i.Z,null))}},59806:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return d}});var n=a(45987),r=(a(67294),a(64983)),s=a(28399);const o=["components"],i={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=l("AnchorLinks"),u=l("AnchorLink"),m={_frontmatter:i},p=s.Z;function d(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,r.kt)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(u,{mdxType:"AnchorLink"},"Checking for known issues"),(0,r.kt)(u,{mdxType:"AnchorLink"},"Creating an issue"),(0,r.kt)(u,{mdxType:"AnchorLink"},"Requests for comment"),(0,r.kt)(u,{mdxType:"AnchorLink"},"Need more help?")),(0,r.kt)("h2",null,"Checking for known issues"),(0,r.kt)("h3",null,"GitHub"),(0,r.kt)("p",null,"We use GitHub to track our bugs. If you have a bug to report or wish to request\na new feature, please check the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues"},"existing issues")," before\nopening a new one. There may already be something similar in the works."),(0,r.kt)("h3",null,"Carbon website"),(0,r.kt)("p",null,"Please take some time to explore the content on this website before opening an\nissue. The site is comprehensive and most guidelines and components are well\ndocumented."),(0,r.kt)("h2",null,"Creating an issue"),(0,r.kt)("h3",null,"GitHub issues"),(0,r.kt)("p",null,"Report bugs, request features, and leave feedback with a GitHub issue. If you’re\nunsure which repo to use, please open an issue in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon"},"Carbon monorepo"),"."),(0,r.kt)("h4",null,"Carbon repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-website/issues/new/choose"},"Carbon website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon"},"Carbon monorepo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IBM/carbon-components-angular/issues/new"},"Carbon Angular")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-components-vue/issues/new"},"Carbon Vue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-charts/issues/new"},"Carbon charts (beta)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-design-kit/issues/new"},"Carbon design kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-icons/issues/new"},"Carbon icons"))),(0,r.kt)("h3",null,"GitHub pull requests"),(0,r.kt)("p",null,"If you have a specific fix or contribution, start by generating a pull request\nin the appropriate ",(0,r.kt)("a",{parentName:"p",href:"/developing/dev-resources#github-repos"},"Carbon repo"),". Here\nare detailed\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/wiki/Creating-a-PR-through-github.com-UI"},"instructions"),"\nfor forking the repo and opening a pull request."),(0,r.kt)("h2",null,"Requests for comment"),(0,r.kt)("p",null,"For changes that are larger in scale, an RFC (request for comment) may be\nappropriate. Read more about our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/rfcs"},"RFC process"),"."),(0,r.kt)("h2",null,"Need more help?"),(0,r.kt)("p",null,"If you have more questions about issues or requesting features, there are\nmultiple ways to reach us at ",(0,r.kt)("a",{parentName:"p",href:"/help/contact-us"},"Contact us"),"."))}d.isMDXComponent=!0}}]);