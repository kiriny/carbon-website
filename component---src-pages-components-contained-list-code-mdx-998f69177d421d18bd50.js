"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[91391],{28399:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r=a(88650),l=a.n(r),o=a(1597),s=a(64905),c=a(76902),i=a(75900),m=a.n(i);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:c}=a||r,i=`${l}/edit/${c}${s}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:i},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===r,c=new RegExp(`${r}/?(#.*)?$`),i=a.replace(c,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${i}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=h,E=a(17680),f=a(75387),v=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:r,Title:i}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=t,{tabs:v,title:k,theme:w,description:P,keywords:T,date:N}=m,{interiorTheme:x}=(0,f.Z)(),{site:{pathPrefix:C}}=(0,o.useStaticQuery)("2456312558"),D=C?r.pathname.replace(C,""):r.pathname,L=v?D.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",Z=w||x;return n.createElement(c.Z,{tabs:v,homepage:!1,theme:Z,pageTitle:k,pageDescription:P,pageKeywords:T,titleType:h},n.createElement(d,{title:i?n.createElement(i,null):k,label:"label",tabs:v,theme:Z}),v&&n.createElement(b,{title:k,slug:D,tabs:v,currentTab:L}),n.createElement(E.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(y,{date:N})),n.createElement(p.Z,{pageContext:t,location:r,slug:D,tabs:v,currentTab:L}),n.createElement(s.Z,null))}},38596:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return E}});var n=a(45987),r=(a(67294),a(64983)),l=a(28399),o=a(92716);const s=["components"],c={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=i("PageDescription"),d=i("Row"),u=i("Column"),p=i("ResourceCard"),g=i("MdxIcon"),h={_frontmatter:c},b=l.Z;function E(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,r.kt)(b,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Preview the contained list component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,r.kt)("h2",null,"Documentation"),(0,r.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-containedlist--default",mdxType:"ResourceCard"},(0,r.kt)(g,{name:"react",mdxType:"MdxIcon"})))),(0,r.kt)("h2",null,"Live demo"),(0,r.kt)(o.default,{mdxType:"ContainedListComponentDemo"}))}E.isMDXComponent=!0}}]);