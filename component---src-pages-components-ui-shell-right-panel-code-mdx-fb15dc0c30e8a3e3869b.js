"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[3611],{28399:function(e,t,a){a.d(t,{Z:function(){return k}});var l=a(67294),r=a(88650),o=a.n(r),n=a(1597),s=a(64905),i=a(76902),c=a(75900),m=a.n(c);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return l.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,n.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:i}=a||r,c=`${o}/edit/${i}${s}/src/pages${t}`;return o?l.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"cds--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),s=t===r,i=new RegExp(`${r}/?(#.*)?$`),c=a.replace(i,t);return l.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},l.createElement(n.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},l.createElement("nav",{"aria-label":e},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(l.Component);var w=h,b=a(17680),y=a(75387),v=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?l.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(v.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=t,{tabs:v,title:k,theme:E,description:x,keywords:T,date:P}=m,{interiorTheme:N}=(0,y.Z)(),{site:{pathPrefix:C}}=(0,n.useStaticQuery)("2456312558"),R=C?r.pathname.replace(C,""):r.pathname,D=v?R.split("/").filter(Boolean).slice(-1)[0]||o()(v[0],{lower:!0}):"",M=E||N;return l.createElement(i.Z,{tabs:v,homepage:!1,theme:M,pageTitle:k,pageDescription:x,pageKeywords:T,titleType:h},l.createElement(d,{title:c?l.createElement(c,null):k,label:"label",tabs:v,theme:M}),v&&l.createElement(w,{title:k,slug:R,tabs:v,currentTab:D}),l.createElement(b.Z,{padded:!0},a,l.createElement(p,{relativePagePath:g}),l.createElement(f,{date:P})),l.createElement(u.Z,{pageContext:t,location:r,slug:R,tabs:v,currentTab:D}),l.createElement(s.Z,null))}},52165:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return w}});var l=a(45987),r=(a(67294),a(64983)),o=a(28399);const n=["components"],s={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=i("PageDescription"),m=i("Row"),d=i("Column"),p=i("ResourceCard"),u=i("MdxIcon"),g={_frontmatter:s},h=o.Z;function w(e){let{components:t}=e,a=(0,l.Z)(e,n);return(0,r.kt)(h,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Preview the UI shell right panel in React. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,r.kt)("h2",null,"Documentation"),(0,r.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-ui-shell--header-base-w-actions-and-right-panel",mdxType:"ResourceCard"},(0,r.kt)(u,{name:"react",mdxType:"MdxIcon"}))),(0,r.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(p,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-ui-shell--right-panel-with-router",mdxType:"ResourceCard"},(0,r.kt)(u,{name:"angular",mdxType:"MdxIcon"})))),(0,r.kt)("h2",null,"Demo"),(0,r.kt)("h2",null,"Right panel"),(0,r.kt)(m,{mdxType:"Row"},(0,r.kt)(d,{mdxType:"Column"},(0,r.kt)("iframe",{loading:"lazy",src:"https://codesandbox.io/embed/right-panel-clc2m?fontsize=1&hidenavigation=1&view=preview",title:"right-panel",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),(0,r.kt)("h2",null,"Right panel with switcher"),(0,r.kt)(m,{mdxType:"Row"},(0,r.kt)(d,{mdxType:"Column"},(0,r.kt)("iframe",{loading:"lazy",src:"https://codesandbox.io/embed/right-panel-with-switcher-3zpq1?fontsize=14&hidenavigation=1&view=preview",title:"right-panel-with-switcher",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}w.isMDXComponent=!0}}]);