"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[41749],{28399:function(t,e,a){a.d(e,{Z:function(){return h}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(64905),p=a(76902),s=a(75900),m=a.n(s);var g=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var c=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:p}=a||l,s=`${r}/edit/${p}${d}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},o=a(56328),u=a(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,u.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),d=e===l,p=new RegExp(`${l}/?(#.*)?$`),s=a.replace(p,e);return n.createElement("li",{key:t,className:m()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${s}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component);var b=k,N=a(17680),A=a(75387),f=a(50041);var y=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var h=t=>{let{pageContext:e,children:a,location:l,Title:s}=t;const{frontmatter:m={},relativePagePath:u,titleType:k}=e,{tabs:f,title:h,theme:x,description:w,keywords:v,date:C}=m,{interiorTheme:E}=(0,A.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),B=S?l.pathname.replace(S,""):l.pathname,T=f?B.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",z=x||E;return n.createElement(p.Z,{tabs:f,homepage:!1,theme:z,pageTitle:h,pageDescription:w,pageKeywords:v,titleType:k},n.createElement(g,{title:s?n.createElement(s,null):h,label:"label",tabs:f,theme:z}),f&&n.createElement(b,{title:h,slug:B,tabs:f,currentTab:T}),n.createElement(N.Z,{padded:!0},a,n.createElement(c,{relativePagePath:u}),n.createElement(y,{date:C})),n.createElement(o.Z,{pageContext:e,location:l,slug:B,tabs:f,currentTab:T}),n.createElement(d.Z,null))}},92294:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return b}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},p=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},s=p("Caption"),m=p("Row"),g=p("Column"),c=p("Tabs"),o=p("Tab"),u={_frontmatter:d},k=r.Z;function b(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(k,Object.assign({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-strong")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inline select"),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-helper"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))))),(0,l.kt)(s,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(m,{mdxType:"Row"},(0,l.kt)(g,{colLg:8,mdxType:"Column"},(0,l.kt)(c,{mdxType:"Tabs"},(0,l.kt)(o,{label:"Default",mdxType:"Tab"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAiUlEQVQoz71SiwrDIAzs/3+nIoIi+MAH6g0LHW6ka8faBY4IyV0OkwUXx3KbYO/9mc9i5pEO5+I7kQqqRjr03qPW+kJsrX3ncG6y1kIIASklOOcwxiCEsA4aGPUY43lBrTUYY1BKre8hMAQ3OOeQUjoW3HLOGaWUw41+/EOq4act753NnpO/HfYDnPloVirtTxoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Select interactive states",title:"Select interactive states",src:"/static/b5bf9e1e416726e01be0016e99bb5d0e/3cbba/select-style-color-fixed.png",srcSet:["/static/b5bf9e1e416726e01be0016e99bb5d0e/7fc1e/select-style-color-fixed.png 288w","/static/b5bf9e1e416726e01be0016e99bb5d0e/a5df1/select-style-color-fixed.png 576w","/static/b5bf9e1e416726e01be0016e99bb5d0e/3cbba/select-style-color-fixed.png 1152w","/static/b5bf9e1e416726e01be0016e99bb5d0e/92c65/select-style-color-fixed.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(o,{label:"Fluid",mdxType:"Tab"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAfElEQVQoz82S2wqAIBBE+/9v9E1fvaDiFZxwQagI66GohcOKDOOw64KHa3nNsLVGbM9XDO004VEwqzPtacIYI5xz1EspyDkjpbSj1jpPuDWUUoIxBs45hBBQStED1lrqxhiEEO4bdrHWmujm3aTfDbz3lPK7GT665d997BV8CWfqGcAa+AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Select interactive states",title:"Select interactive states",src:"/static/0d3f1155269c666ebcaafd6a9ccabb06/3cbba/select-style-color-fluid.png",srcSet:["/static/0d3f1155269c666ebcaafd6a9ccabb06/7fc1e/select-style-color-fluid.png 288w","/static/0d3f1155269c666ebcaafd6a9ccabb06/a5df1/select-style-color-fluid.png 576w","/static/0d3f1155269c666ebcaafd6a9ccabb06/3cbba/select-style-color-fluid.png 1152w","/static/0d3f1155269c666ebcaafd6a9ccabb06/92c65/select-style-color-fluid.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hover"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field-hover")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Invalid"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Error icon"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warning"),(0,l.kt)("td",{parentName:"tr",align:null},"Warning message"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Warning icon"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-warning"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Input text"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},"`$text-disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Field (fluid)"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-subtle")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Chevron icon"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Denotes a contextual color token that will change values based on the layer it\nis placed on.")),(0,l.kt)(m,{mdxType:"Row"},(0,l.kt)(g,{colLg:12,mdxType:"Column"},(0,l.kt)(c,{mdxType:"Tabs"},(0,l.kt)(o,{label:"Default",mdxType:"Tab"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABYklEQVQ4y5VT0Y6DIBD0/z+vT9emTWviVaultWJRBHYuC+Lh5S7taSZswjI7C7MZEeHVxznv5mUcOOdwv9/xeDyglMI4jh7DMPi9mMxx13V+zxizQiy4EJ7PZ+R5jqIo0DSNR13XmKZpUaC1xmazweFw8AKEEBDi5lfe84TvtBNzWElZlr6YlNKr9ZAS1to1IXOGtmghcJTE3HpS2IsgYD645GXzLpw1qwO/KeTfWAv6u5VAOGjCLr9id6px/GxRisGjqBWk4kehIMYYXD62qPZ7iNMJz0uNvijQbXewSsVHIVgHqNGiVxP6wfg4wlgKhKzQOeirwHipMTZXGKUC+h5k7M9HiY3QGskdhraTDlN83yHhlWffM3bgyeIBNjSD/cTei6DkBRnsv7ZtZ3NbTJOG1so7YjE2J/JUMCGvcVIY6aQw2Ow8BFVVQcoe6inRyxvsnJf9Z5YZrJoNzmssls7yF5Nj/Qng3fH/AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Select interactive states",title:"Select interactive states",src:"/static/c98bf86495eafeaef0d7ed894cd77d10/3cbba/select-style-states-fixed.png",srcSet:["/static/c98bf86495eafeaef0d7ed894cd77d10/7fc1e/select-style-states-fixed.png 288w","/static/c98bf86495eafeaef0d7ed894cd77d10/a5df1/select-style-states-fixed.png 576w","/static/c98bf86495eafeaef0d7ed894cd77d10/3cbba/select-style-states-fixed.png 1152w","/static/c98bf86495eafeaef0d7ed894cd77d10/0b124/select-style-states-fixed.png 1728w","/static/c98bf86495eafeaef0d7ed894cd77d10/0c3f5/select-style-states-fixed.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(o,{label:"Fluid",mdxType:"Tab"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABhElEQVQ4y42TzU+DMBjG+f/P3kw8efLqXY3evGjMDsZM6wTGyvimo5W+7WPKgLFNM0keStJfn/ereNZanHoc81/Ocx/GGMRxjCiKkCQJsiwbpbXeM52xGI+vEZ5Z3unpI8fLZ46250bDIAjAGEMYhliv151ckLZtR0NjLa7u5zi7nuHiLsDFrY/zGx+XDwGk2nLeqXKGfTNwlgDoIw2ct4Wc4d/qYGP2Av9KDj0kY9EoDak0VGsgvwnqm7pVU2/q3kQQPIbIMsiihCwKyNwpB0m16+FGWbwxjtd5ABYkiBKBVSLgryoUgvrSAas1ovk7vhgDD0JURYFKCOTLJdqymg7FQirqsmz6LLeZGhBNyiaCimNIHkOuOGSaQZUVmnAJaprDodjfuzMM5aCHR8Pb9dDi1J0dgk6NrbEgok6GaAzmDQfqukZZlhBCYLPZjHIHpqacc/i+jzRNO9bJnR240bBpmm7TrVLKUS6jQ8PFYtGbJqhrgargID252P/9lw9L32lX8g/+K/XXBvQASAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Select interactive states",title:"Select interactive states",src:"/static/1a914400a0ee45650101e0edae617857/3cbba/select-style-states-fluid.png",srcSet:["/static/1a914400a0ee45650101e0edae617857/7fc1e/select-style-states-fluid.png 288w","/static/1a914400a0ee45650101e0edae617857/a5df1/select-style-states-fluid.png 576w","/static/1a914400a0ee45650101e0edae617857/3cbba/select-style-states-fluid.png 1152w","/static/1a914400a0ee45650101e0edae617857/0b124/select-style-states-fluid.png 1728w","/static/1a914400a0ee45650101e0edae617857/0c3f5/select-style-states-fluid.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Select text should be set in sentence case, with only the first word in a phrase\nand any proper nouns capitalized. Select text should be three words or less."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$helper-text"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warning message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("h3",null,"Default select"),(0,l.kt)("h4",null,"Default"),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input text"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-09"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chevron icon"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"State icon"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.02777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAABeklEQVQ4y62UW6+bMBCE8/9/Uh+rvle9PVQJHJLQklMgMTaXAF5/FUSkDglpVR1LY1u2dj3eGXvFG7fVNHHOXccJ/vp/JBx7/Hg/+SM8OnD1Z9Fdk4pYRP7OcNybJb67ct850szgnNwEisgIK0JtLWe57LvZoSv/akM7d5YvPw7Eux1xHBNFEXmeY4zBaM1Jaz6EWz7tE6ha3JTYZzgmHCbiaExNkKVkxyNFUYwoy5K6rmnqmrKq+Pr6SpAfwcpdLe8YinOYtkW3LUvVa/qezlrmsTc1HKLdVBRfZZGH6jLNlxj6o0WQZ2ZzLDrgTmXbCnl0oFcK0WZEXxR0StFrTZWkFPGB2pjlK19Eufiw/6XIwi3bMCR+eSFab8iTBJOmGKXYff7Gx3fv2YTRc2NffWjOlOEeHYTo72uK9YZqH9OeFN1Jkf1MCIKQOEmei3Ktoy/MoOSMwaBt44TG2tERLBnbf0puegE+ZqrOifzTb3ODhQ/jIcO3/A9/A74wO7cL6f9YAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for default select",title:"Structure and spacing measurements for default select",src:"/static/e25bb0b4e8802fbc61ab9148ca5b3d5f/3cbba/select-style-structure-default-fixed.png",srcSet:["/static/e25bb0b4e8802fbc61ab9148ca5b3d5f/7fc1e/select-style-structure-default-fixed.png 288w","/static/e25bb0b4e8802fbc61ab9148ca5b3d5f/a5df1/select-style-structure-default-fixed.png 576w","/static/e25bb0b4e8802fbc61ab9148ca5b3d5f/3cbba/select-style-structure-default-fixed.png 1152w","/static/e25bb0b4e8802fbc61ab9148ca5b3d5f/92c65/select-style-structure-default-fixed.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Structure and spacing measurements for default select | px / rem"),(0,l.kt)("h4",null,"Inline"),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input text"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chevron icon"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAo0lEQVQoz62Tyw7CIBBF+f/PM251UxJII2poqwyva9AGsfEBsWzmBiYnhwwwrLxYTVOMMdcyVwM/AVKKi/Nqw7I5Z3JAaDQsrZQxmIhgnMXVWfT9EedhSk0vptVX3iiFPe8gpAQXAlsusJMHxNOYgUvoV0OuNUYi+BBwsRad1pDD0GZYAsk7hDmnapwDeX+HPaD/DuW5MUMbh/Iu/3qLbO2fcgOXOmiEatH6hgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for default inline select",title:"Structure and spacing measurements for default inline select",src:"/static/eb3a2b005bb2e6f541c4d82b66544fd6/3cbba/select-style-structure-inline-fixed.png",srcSet:["/static/eb3a2b005bb2e6f541c4d82b66544fd6/7fc1e/select-style-structure-inline-fixed.png 288w","/static/eb3a2b005bb2e6f541c4d82b66544fd6/a5df1/select-style-structure-inline-fixed.png 576w","/static/eb3a2b005bb2e6f541c4d82b66544fd6/3cbba/select-style-structure-inline-fixed.png 1152w","/static/eb3a2b005bb2e6f541c4d82b66544fd6/92c65/select-style-structure-inline-fixed.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Structure and spacing measurements for default inline select | px / rem"),(0,l.kt)("h3",null,"Fluid select"),(0,l.kt)("h4",null,"Default"),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / .25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input text"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / .25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-09"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chevron icon"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"State icon"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.02777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAABrUlEQVQ4y62U227aQBCGef/XitSLKFKrEEWghAbb2MEnjA97sL3rrzIEMNgpveisRrMrzfyafw474z/LbPjouu5s/1WHcWfAa6D7gEenQ8AIdHab3dHzdLucsUxnOcoQC96+JEoytNRoVaOEQlTyoKqSrLKcl2xPc4+yNR2tgrkT8+vHM858xdvPJe7rmtSJSdYRmRPztHB5WLiItIDWfLGfoHyi5hc5fhKT5XvKokBUFVorlFI0WuNkOxZRRJ0LMHYMeEW5A922yLbt2U+Ksfbgc6r4iPLU6DBo0a1e+f61y90XaWvp2pau6bU52vZGjTmgn+NuKQ9H4NMPSDc+OknQSYqKE0QUIaL4YGUc43setVLjLg8fp9ub5/GyeicIQ9wgIExTKq0ppaAUgqrWLMMQWZRXm3XJsDWYSmNUA0KznP/GWTpknkv80Y+MS77dUux2FPs9ubdh8fBI6YbfdNlYrKyxPaCqWb9vSD8+abdbtOej/QC1DdHpDp1l6E2A8/yKFPJYRwYZ3na1F2kN5s6v0levsfb7Tble/sviT6odj8tobKa+r8m5vOPzBwHdNiIFHIV5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for Inline Select",title:"Structure and spacing measurements for Inline Select",src:"/static/b5df77233a31a3fe4cdb3405d85fcbd2/3cbba/select-style-structure-default-fluid.png",srcSet:["/static/b5df77233a31a3fe4cdb3405d85fcbd2/7fc1e/select-style-structure-default-fluid.png 288w","/static/b5df77233a31a3fe4cdb3405d85fcbd2/a5df1/select-style-structure-default-fluid.png 576w","/static/b5df77233a31a3fe4cdb3405d85fcbd2/3cbba/select-style-structure-default-fluid.png 1152w","/static/b5df77233a31a3fe4cdb3405d85fcbd2/92c65/select-style-structure-default-fluid.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Structure and spacing measurements for fluid select | px / rem"),(0,l.kt)("h2",null,"Size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Height (px / rem)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input"),(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAA20lEQVQ4y8VUiwqDMBDz/79TQfAxtbWlr7txxyqdtLOywYRQFRqTXGqDyQUAx5q7r7ma84t0cyT7hPOepqQwhFCl6Kw+S0hk8zyjEAK3bUOtNVprGcYYhtcGIdxQuCwLjuOIwzAwqVLqwL7v6KVGeLkoEpZsfG3Ze8+qnHNsn55pTQE+ZFtQtNz3PXZdh23bcp5SSs405mofEoNx96ZMCgmk8Iw0v0vCaPOntaHpximTTapOOmUn1FuOVbWZpolJ13XlDCPoA45rAwh/qU3NGa46y9dyMPs3ShU+AcH6ox+zhLqUAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for select",title:"Sizes for select",src:"/static/b59c092dfae3a389f8fb1048c045426a/3cbba/select-style-default-size.png",srcSet:["/static/b59c092dfae3a389f8fb1048c045426a/7fc1e/select-style-default-size.png 288w","/static/b59c092dfae3a389f8fb1048c045426a/a5df1/select-style-default-size.png 576w","/static/b59c092dfae3a389f8fb1048c045426a/3cbba/select-style-default-size.png 1152w","/static/b59c092dfae3a389f8fb1048c045426a/392b1/select-style-default-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Sizes for default select | px / rem"),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAn0lEQVQoz7WSjQqDMAyEff833SYTbU1/ktwNnUMZOhBcIbR8uYMrScOLT3PaAaw3QCz1RmCDDcSO4Ez9TPgRnAu/JDQzai6sQehSCLVZoKq0qjPXkIishIM+eaqy9CMtJHoqa8LpkXJmGiLDo6MOQs91booI0ygM946p7ekxE+pUU0ocGW9P5nag9UK4//HL1w5lY/5egyOOIz4lvHqxX5ihGYGBwKAyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for select",title:"Sizes for select",src:"/static/9348d2c3d58bc8a2060bf406c6841908/3cbba/select-style-inline-size.png",srcSet:["/static/9348d2c3d58bc8a2060bf406c6841908/7fc1e/select-style-inline-size.png 288w","/static/9348d2c3d58bc8a2060bf406c6841908/a5df1/select-style-inline-size.png 576w","/static/9348d2c3d58bc8a2060bf406c6841908/3cbba/select-style-inline-size.png 1152w","/static/9348d2c3d58bc8a2060bf406c6841908/392b1/select-style-inline-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Sizes for inline select | px / rem"))}b.isMDXComponent=!0}}]);