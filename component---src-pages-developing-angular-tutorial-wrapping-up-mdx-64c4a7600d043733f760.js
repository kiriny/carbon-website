"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[18546],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var l=a(67294),n=a(88650),r=a.n(n),s=a(1597),o=a(64905),i=a(76902),c=a(75900),d=a.n(c);var m=e=>{let{title:t,theme:a,tabs:n=[]}=e;return l.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:i}=a||n,c=`${r}/edit/${i}${o}/src/pages${t}`;return r?l.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"cds--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),o=t===n,i=new RegExp(`${n}/?(#.*)?$`),c=a.replace(i,t);return l.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},l.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},l.createElement("nav",{"aria-label":e},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(l.Component);var E=h,b=a(17680),v=a(75387),f=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?l.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(f.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:n,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:h}=t,{tabs:f,title:w,theme:P,description:k,keywords:N,date:T}=d,{interiorTheme:x}=(0,v.Z)(),{site:{pathPrefix:C}}=(0,s.useStaticQuery)("2456312558"),D=C?n.pathname.replace(C,""):n.pathname,Z=f?D.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",$=P||x;return l.createElement(i.Z,{tabs:f,homepage:!1,theme:$,pageTitle:w,pageDescription:k,pageKeywords:N,titleType:h},l.createElement(m,{title:c?l.createElement(c,null):w,label:"label",tabs:f,theme:$}),f&&l.createElement(E,{title:w,slug:D,tabs:f,currentTab:Z}),l.createElement(b.Z,{padded:!0},a,l.createElement(u,{relativePagePath:g}),l.createElement(y,{date:T})),l.createElement(p.Z,{pageContext:t,location:n,slug:D,tabs:f,currentTab:Z}),l.createElement(o.Z,null))}},46246:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var l=a(45987),n=(a(67294),a(64983)),r=a(28399);const s=["components"],o={},i=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const d={_frontmatter:o},m=r.Z;function u(e){let{components:t}=e,a=(0,l.Z)(e,s);return(0,n.kt)(m,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Thanks for completing our tutorial and helping us improve it along the way. If\nyou want to show the world your new skills, you can share your deployed\napplication and showcase the five pull requests you have completed with the\ngreen ",(0,n.kt)("inlineCode",{parentName:"p"},"status: approved")," label.")))}u.isMDXComponent=!0}}]);