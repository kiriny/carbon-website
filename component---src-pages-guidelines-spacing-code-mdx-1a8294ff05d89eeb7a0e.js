"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[64558],{28399:function(t,e,a){a.d(e,{Z:function(){return C}});var n=a(67294),r=a(88650),l=a.n(r),i=a(1597),o=a(64905),d=a(68636),p=a(75900),m=a.n(p);var s=t=>{let{title:e,theme:a,tabs:r=[]}=t;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var c=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:d}=a||r,p=`${l}/edit/${d}${o}/src/pages${e}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},k=a(56328),g=a(51721);let N=function(t){function e(){return t.apply(this,arguments)||this}return(0,g.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=e.map((t=>{const e=l()(t,{lower:!0,strict:!0}),o=e===r,d=new RegExp(`${r}/?(#.*)?$`),p=a.replace(d,e);return n.createElement("li",{key:t,className:m()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},e}(n.Component);var u=N,f=a(17680),b=a(75387),y=a(50041);var h=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var C=t=>{let{pageContext:e,children:a,location:r,Title:p}=t;const{frontmatter:m={},relativePagePath:g,titleType:N}=e,{tabs:y,title:C,theme:E,description:w,keywords:x,date:v}=m,{interiorTheme:T}=(0,b.Z)(),{site:{pathPrefix:$}}=(0,i.useStaticQuery)("2456312558"),P=$?r.pathname.replace($,""):r.pathname,L=y?P.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",D=E||T;return n.createElement(d.Z,{tabs:y,homepage:!1,theme:D,pageTitle:C,pageDescription:w,pageKeywords:x,titleType:N},n.createElement(s,{title:p?n.createElement(p,null):C,label:"label",tabs:y,theme:D}),y&&n.createElement(u,{title:C,slug:P,tabs:y,currentTab:L}),n.createElement(f.Z,{padded:!0},a,n.createElement(c,{relativePagePath:g}),n.createElement(h,{date:v})),n.createElement(k.Z,{pageContext:e,location:r,slug:P,tabs:y,currentTab:L}),n.createElement(o.Z,null))}},36197:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return y}});var n=a(45987),r=(a(67294),a(64983)),l=a(28399);const i=["components"],o={},d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},p=d("PageDescription"),m=d("InlineNotification"),s=d("AnchorLinks"),c=d("AnchorLink"),k=d("Row"),g=d("Column"),N=d("ResourceCard"),u=d("MdxIcon"),f={_frontmatter:o},b=l.Z;function y(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,r.kt)(b,Object.assign({},f,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(p,{mdxType:"PageDescription"},(0,r.kt)("p",null,"The Carbon layout package helps teams build consistent experiences through\nspacing and alignment.")),(0,r.kt)(m,{mdxType:"InlineNotification"},(0,r.kt)("p",null,"If you’re using ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/react"),", you probably don’t need need to install the\nlayout package separately. See our ",(0,r.kt)("a",{parentName:"p",href:"/developing/frameworks/react/"},"Carbon React"),"\nguide to start building.")),(0,r.kt)(s,{mdxType:"AnchorLinks"},(0,r.kt)(c,{mdxType:"AnchorLink"},"Get started"),(0,r.kt)(c,{mdxType:"AnchorLink"},"Usage"),(0,r.kt)(c,{mdxType:"AnchorLink"},"Resources")),(0,r.kt)("h2",null,"Get started"),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/layout")," in your project, you will need to run the following\ncommand using ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -S @carbon/layout\n")),(0,r.kt)("p",null,"If you prefer ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"Yarn"),", use the following command\ninstead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @carbon/layout\n")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/layout")," package provides spacing tokens and conversion utilities\nfor the Carbon Design System. You can access these tokens and helpers by writing\nthe following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/layout';\n\n.selector {\n  margin-bottom: layout.$spacing-05;\n  width: layout.rem(24px);\n  height: layout.rem(24px);\n}\n")),(0,r.kt)("h4",null,"API"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Export"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"!default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-01")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-02")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-03")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-04")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-05")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-06")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-07")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-08")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-09")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-10")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-11")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-12")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-13")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing ")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$fluid-spacing-01")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$fluid-spacing-02")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$fluid-spacing-03")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$fluid-spacing-04")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$fluid-spacing ")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@function em")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@function rem")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$base-font-size")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"✅")))),(0,r.kt)("h3",null,"Configuration"),(0,r.kt)("p",null,"You can configure parts of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/layout")," package that are ",(0,r.kt)("inlineCode",{parentName:"p"},"!default")," with\nSass Modules. For example, you can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"$base-font-size")," by writing the\nfollowing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/layout' with ($base-font-size: 18px);\n")),(0,r.kt)("h2",null,"Resources"),(0,r.kt)(k,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(N,{subTitle:"Carbon layout package",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/layout",mdxType:"ResourceCard"},(0,r.kt)(u,{name:"bee",mdxType:"MdxIcon"}))),(0,r.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(N,{subTitle:"Layout package demo",href:"https://carbon-elements.netlify.app/layout/examples/preview/",mdxType:"ResourceCard"},(0,r.kt)(u,{name:"bee",mdxType:"MdxIcon"})))))}y.isMDXComponent=!0}}]);