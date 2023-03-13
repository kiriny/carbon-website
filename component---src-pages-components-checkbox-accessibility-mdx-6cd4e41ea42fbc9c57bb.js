"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[33192],{28399:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(67294),i=a(88650),c=a.n(i),o=a(1597),s=a(64905),r=a(76902),l=a(75900),d=a.n(l);var m=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:c,subDirectory:s,branch:r}=a||i,l=`${c}/edit/${r}${s}/src/pages${t}`;return c?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},b=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=c()(e,{lower:!0,strict:!0}),s=t===i,r=new RegExp(`${i}/?(#.*)?$`),l=a.replace(r,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var u=h,k=a(17680),A=a(75387),f=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:a,location:i,Title:l}=e;const{frontmatter:d={},relativePagePath:g,titleType:h}=t,{tabs:f,title:x,theme:w,description:E,keywords:v,date:N}=d,{interiorTheme:C}=(0,A.Z)(),{site:{pathPrefix:T}}=(0,o.useStaticQuery)("2456312558"),L=T?i.pathname.replace(T,""):i.pathname,S=f?L.split("/").filter(Boolean).slice(-1)[0]||c()(f[0],{lower:!0}):"",z=w||C;return n.createElement(r.Z,{tabs:f,homepage:!1,theme:z,pageTitle:x,pageDescription:E,pageKeywords:v,titleType:h},n.createElement(m,{title:l?n.createElement(l,null):x,label:"label",tabs:f,theme:z}),f&&n.createElement(u,{title:x,slug:L,tabs:f,currentTab:S}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(y,{date:N})),n.createElement(b.Z,{pageContext:t,location:i,slug:L,tabs:f,currentTab:S}),n.createElement(s.Z,null))}},96640:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return k}});var n=a(45987),i=(a(67294),a(64983)),c=a(28399);const o=["components"],s={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},l=r("PageDescription"),d=r("AnchorLinks"),m=r("AnchorLink"),p=r("Row"),b=r("Column"),g=r("Caption"),h={_frontmatter:s},u=c.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,i.kt)(u,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard checkbox component, Carbon already incorporates accessibility.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(m,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),(0,i.kt)("h3",null,"Keyboard interactions"),(0,i.kt)("p",null,"Each checkbox can be reached by ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," and selected with ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," independently.\nThis matches the established HTML interaction pattern."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABXklEQVQoz53RTUsCURQG4Hcmv6GctDl3PhwpgzIXRlAuwgETaZwysRRSkqgfkEt/QEHqTCRCQUHQolUE7fp9hloSFeH0wnu53MXD4VzgW0zNxrbSGTbH2jBUa/g2aD4yujvKCGwPm5NaLkPtzJuaNTMCbewXD52Dx6l7NCvPqK7exsorvTdDtUqGYsHQWrzPEwARDTsxaHpfYLIbn5mue0rlvVClUhFqtRqn6zoajYZz8CnRRy/e59LqmSQzlYiJ9HGEiYifGPxcPkIAgkAm0mQaW6aBRkQ/QMbY3/AY5AFfGNhQ6lFhzq8Jop8xkhQaxSnYgcwieIj3+aRcWEgoW5sJOcvCYjDESBL+NWEx1nUDOneSeqSjtbvXncWLKqYQiMpLs0Q06LQkSZODpma7d6PXrri3hox4Lhiy5VlnpwBh/MOCIDgCeVOz/YXYFZcVL5GXu0jSAbgv4AD7DXwHNdVZPeN6PN8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of checkbox keyboard interaction",title:"example of checkbox keyboard interaction",src:"/static/c6b238dfb5066c81d6ebf3242e9bfe47/3cbba/checkbox-accessibility-1.png",srcSet:["/static/c6b238dfb5066c81d6ebf3242e9bfe47/7fc1e/checkbox-accessibility-1.png 288w","/static/c6b238dfb5066c81d6ebf3242e9bfe47/a5df1/checkbox-accessibility-1.png 576w","/static/c6b238dfb5066c81d6ebf3242e9bfe47/3cbba/checkbox-accessibility-1.png 1152w","/static/c6b238dfb5066c81d6ebf3242e9bfe47/92c65/checkbox-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(g,{mdxType:"Caption"},"Carbon checkboxes retain expected interactions."))),(0,i.kt)("h3",null,"Grouping"),(0,i.kt)("p",null,"For groups of checkboxes, Carbon already provides the code for screen readers to\nproperly detect the set of checkboxes and announce the group label."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABV0lEQVQoz73TS0sCURQH8H9gLiqy0rn3ztx7dR6J+EgzfE7kq0BHKiIXgVC0KKN3izSLNtEmlOobBH3TUPoA48YDB87qx/8cOMA0qmi1kbNaKOnXqEUvsBd/Qz30joYYwpEDOHIIRwzdg7Z5grxxhFLoFtuROxxEB2gZPziUv2jKz//+dg82smeoZ09RTzz4du2OuV+4DzaNj3lHfM05cuAZJ5QTJFxlOVhsAxmtvWyq69JgKU4IISZLswrve6viGTa/dA9KGoGgFrLa8YJf8fn9ylLATxYVg6ZYmXdnK/wJBe3cPciJAZUEEWU1SgkzKFFZgKxoBk2KCu95q6KPotZxDwoSnuHEhEUzUqdriZi6o4RZnsfVulYVL56aeMUmv3EPqkSCEQ6dJsGIQIjGoNEgwsxGmT+iwnuT3XC07ggyaXo86ywJTk1E2BbKvIvRDW1+NZWfwB8XHTtTzONnEgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"checkbox items with group label",title:"checkbox items with group label",src:"/static/fccdf4ef4e7e510ca66f609b924d3d29/3cbba/checkbox-accessibility-2.png",srcSet:["/static/fccdf4ef4e7e510ca66f609b924d3d29/7fc1e/checkbox-accessibility-2.png 288w","/static/fccdf4ef4e7e510ca66f609b924d3d29/a5df1/checkbox-accessibility-2.png 576w","/static/fccdf4ef4e7e510ca66f609b924d3d29/3cbba/checkbox-accessibility-2.png 1152w","/static/fccdf4ef4e7e510ca66f609b924d3d29/92c65/checkbox-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(g,{mdxType:"Caption"},"Carbon handles the accessibility of grouped checkboxes."))),(0,i.kt)("h2",null,"Design recommendations"),(0,i.kt)("p",null,"Design annotations are needed for the following instances."),(0,i.kt)("h3",null,"Meaningful order"),(0,i.kt)("p",null,"Checkboxes can appear in multiple columns. If there is a meaningful order to the\nitems (such as days of the week), annotate whether the tab order is by row or by\ncolumn. See\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/toolkit/design/ux/navigation/#tab-order"},"Specify the tab order"),"."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABhUlEQVQoz6XOPW/TQBjA8XwNOoSBL0C7dODTIbFQVWJC6sqMkEApKAkMbSJVHZBYkKo2Lz7ncs691fY99t35bMeH7LTlZQLxe5Z79OgvXc//h573PgzQ9Ox8cnY+nUym/6KNX7463nvyeP/Z4dOD/X6//6iz9xd6PnPf3nx89/z1hxcnn96+H335PBqOdobD4cP7D+PxeDAY9IolY8en9GjAjk7LlWy8b+ptWZZ1XXvvm3Zrp/md915r3X67aGrCNiTmTAqVpreUr+YBXmNKaRLHAkcYhfJWpr9QSlFKu9jY+ferMEBiQ5WMVZIur2cIIUY2SsYxFbOraxIRrTUAZJ08z4UQbVyW5deLS3QzD2aLKIoUwOpmEc6XOECQQSwkWixJRJRS2b2fceFcFGLJuOwopSTlgnEhhQJQMpaMc8F3MXSyLOOct7FzzhaFNibPcq21c86Vd5xzxhpttLUWAIwxrlNVVZqmdzHnHGO8Xq+TJNlut9WDugIAQgjuWGt316ZpAOAHNsYpCwGZptQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"checkboxes with instruction to ‘navigate in columns'",title:"checkboxes with instruction to ‘navigate in columns'",src:"/static/7116fe667ffb43001d32035185cd1592/3cbba/checkbox-accessibility-3.png",srcSet:["/static/7116fe667ffb43001d32035185cd1592/7fc1e/checkbox-accessibility-3.png 288w","/static/7116fe667ffb43001d32035185cd1592/a5df1/checkbox-accessibility-3.png 576w","/static/7116fe667ffb43001d32035185cd1592/3cbba/checkbox-accessibility-3.png 1152w","/static/7116fe667ffb43001d32035185cd1592/92c65/checkbox-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(g,{mdxType:"Caption"},"Annotate if there is meaningful navigation order in rows of checkboxes."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Checkboxes are grouped using ",(0,i.kt)("inlineCode",{parentName:"li"},"<fieldset>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<legend>"),"."),(0,i.kt)("li",{parentName:"ul"},"A tri-state checkbox that is partially checked (indeterminate) has\n",(0,i.kt)("inlineCode",{parentName:"li"},"aria-checked")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"mixed"'),". See\n",(0,i.kt)("a",{parentName:"li",href:"https://carbondesignsystem.com/components/checkbox/usage/#behaviors"},"Behaviors"),"\non the Usage tab for details."),(0,i.kt)("li",{parentName:"ul"},"See the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox"},"ARIA authoring practices"),"\nfor more considerations.")))}k.isMDXComponent=!0}}]);