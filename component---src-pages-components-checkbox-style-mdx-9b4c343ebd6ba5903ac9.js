"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[86627],{28399:function(t,e,a){a.d(e,{Z:function(){return x}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(64905),m=a(76902),p=a(75900),o=a.n(p);var c=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var g=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:m}=a||l,p=`${r}/edit/${m}${d}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},s=a(56328),k=a(51721);let u=function(t){function e(){return t.apply(this,arguments)||this}return(0,k.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),d=e===l,m=new RegExp(`${l}/?(#.*)?$`),p=a.replace(m,e);return n.createElement("li",{key:t,className:o()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component);var b=u,N=a(17680),h=a(75387),A=a(50041);var y=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=t=>{let{pageContext:e,children:a,location:l,Title:p}=t;const{frontmatter:o={},relativePagePath:k,titleType:u}=e,{tabs:A,title:x,theme:f,description:w,keywords:C,date:v}=o,{interiorTheme:E}=(0,h.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),R=S?l.pathname.replace(S,""):l.pathname,B=A?R.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",L=f||E;return n.createElement(m.Z,{tabs:A,homepage:!1,theme:L,pageTitle:x,pageDescription:w,pageKeywords:C,titleType:u},n.createElement(c,{title:p?n.createElement(p,null):x,label:"label",tabs:A,theme:L}),A&&n.createElement(b,{title:x,slug:R,tabs:A,currentTab:B}),n.createElement(N.Z,{padded:!0},a,n.createElement(g,{relativePagePath:k}),n.createElement(y,{date:v})),n.createElement(s.Z,{pageContext:e,location:l,slug:R,tabs:A,currentTab:B}),n.createElement(d.Z,null))}},50455:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return k}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},p=m("Row"),o=m("Column"),c=m("Caption"),g={_frontmatter:d},s=r.Z;function k(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(s,Object.assign({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:unchecked"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:checked"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"checkmark"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))))),(0,l.kt)(p,{mdxType:"Row"},(0,l.kt)(o,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAABjElEQVQ4y7WUP2vCQBjG30TrtYuxWl4jGLMJHbroZ/BrOCpBEHHwsygugqvg4ldwFoSD/MPznB10EZ1SLhCw9tJoSw9+HLx39/DmeXIHIBmImMhD4z8FU4iYRcQ8Ir4hYjpRcLvdfmM8Hodr1Wo1VS6XXyqVSsYwDFKr1RRRn8/n0nMCadHzPDidTjCZTKDdbkOn04FWqwWz2QyOxyP4vv+jILmFMRbOnucRSilxXZc4jkM2m82XdRlCUL2Fc646jqMGQSBQKKVhjTGmyvZfI237cDjAdDqNbFa63S4sl0vY7XbAGIv93FgP6/U6aJoGxWJRpPuh63pe1/WsUG82m48LXi4XGA6HUYdpAFBFp4vFAvb7faKg1EPbtkP/rvF9/y4PpSlzzolt22S1Wj2LWSBSjxKOS1raNqUUgiAI/79GowG9Xg8sy4J+vw+u6wLnPDYcaXEwGITmGYaRKZVKOdM0M+K2mKb5NBqN4Hw+w3q9lgsm3OVXRHxHxBwiFhBR+9UDcc9r8xdB5RHBTx/tARh+LDevAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Checkbox states",title:"Checkbox states",src:"/static/221266be16a2467c77cf5e984b244609/3cbba/checkbox-style-1.png",srcSet:["/static/221266be16a2467c77cf5e984b244609/7fc1e/checkbox-style-1.png 288w","/static/221266be16a2467c77cf5e984b244609/a5df1/checkbox-style-1.png 576w","/static/221266be16a2467c77cf5e984b244609/3cbba/checkbox-style-1.png 1152w","/static/221266be16a2467c77cf5e984b244609/92c65/checkbox-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"inner fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Error icon"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warning"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Warning message"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Warning icon"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-warning"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"inner fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$black"))))),(0,l.kt)(p,{mdxType:"Row"},(0,l.kt)(o,{colLg:12,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAEF0lEQVQ4y02TW0hcVxSG176cc+aWcS7qDIm9JqbEC70JLc1DIS3SCp1kmlIb8qA2pqalStTaJDWptmJiFIxRawlO1USwFAoBaaKo41Si0IdgqI6OzHjO2XPUOjbxAtb4YGSXMyi4YL38a6+91vezNwA0g9vTCxIAJDjcoMf6+jpEo4yGw7MI9oQWjYKiqGhOi1LOOeTVhcDqTAGL2RCvFxYWAqR474N0rNdpSS+0OUQwORLdhp7uX2A5ptIffQ+x+51Lh5Kef9VqsxpMelPfqIw454hmNSY4M/NesgFI9kS3RZIk6vF4ADh/BjnlI+SDzyqoJ+c9WlT0JdGnM1URQmFG3j5ZK37kzaUnPz5Bh/wBkBWG1578I7yW24Xf9ZaLBae95NPcU7S2thbrfRCZVYXtjXkdQU/9MqqqKlVVZmRMFXe0uL64uKjXREVRjVsbS2RPDW9ubhJZlgX4e2IS/IERevyElwKA7ll80sLCApkOhZDfP+x4MyuL7up6rq2tYv9wQPxzZMTV19dnGhgYMPf390uhUAggGo2icDiMfT4frqmpwQ0NDSQQCOi6qKoqGRsbo01NTURH6ujoQPogxpg4MTGBRkdHRb/fLwwNDQl+v59qmoaAMUYVRaF71icbGxtEURSjjre1tbUXjczOzoqM6Xaw3R68m4wxAR6Nj8Pw4BBNO3LEAgAmSZLMOvrOYSgrLTXus1jMGGNd1z2F6VCIzASDKDs7e99OjwUhZFxZWQGIqiqKzM/hqgsXacXZL+jX+fnClW8v4IWFBVGbmyMb28/QpeJiWpJfQIvz8sny8jKJRCLxi7t9PlJeeJaWnimk5wo+p1MzIQRM06gcnBLa798TL3bfFnuYHEeRZdmoyrJ4ubLSWH27U7o+2C/oWLKiiIuxmPFuR6dQfOWy8dofveJ3Pd3iA3mWPonFKMx4T8G07YC9ye5KzrM6Eq8nJNuBc5j6b51MVVajuv0vHipxuFxl1kTnI8BSsLhMtwPqAExVSQdeKbDY7MW2JFcJUENXWQVAkHO0dv485Xd+I/yvEOb1reRBaxtimiZq0ajuI+LbHPGWTrL4VSmZmZwkM4zFkfnqU8zHJjG/c5fw2AoaD4cRrMY0euNekH5T3yxV32yUrra3S9uckyhjxnA4Ih7LLTKV/lBjqGptlsaYSp9ubgqPlxaN1fU/idmnz5lvdvnE8rprho5fe8R/l5Yo3Lr6IXx/xmzJSLUlG4wJTqfdnggAcR8nHg6i99+ypux32dxWqy1RFKjluCcnvvXRNJCOvuE8iKnV4bTbki1mi/XntjYAPg7Agy+T3xtTMUiHcWZGGtGfjTY3T1cfq4hzjPI+ycDPvXCYmEwG0tJ8g0TUVap/W85fJwCpODP9IElPT0ctLS3wP4BlIRdorMduAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Checkbox interactive states",title:"Checkbox interactive states",src:"/static/1096fd23c277d77efe12a6243859988a/3cbba/checkbox-style-2.png",srcSet:["/static/1096fd23c277d77efe12a6243859988a/7fc1e/checkbox-style-2.png 288w","/static/1096fd23c277d77efe12a6243859988a/a5df1/checkbox-style-2.png 576w","/static/1096fd23c277d77efe12a6243859988a/3cbba/checkbox-style-2.png 1152w","/static/1096fd23c277d77efe12a6243859988a/0b124/checkbox-style-2.png 1728w","/static/1096fd23c277d77efe12a6243859988a/0c3f5/checkbox-style-2.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Checkbox labels and group labels should be sentence case, with only the first\nword in a phrase and any proper nouns capitalized. Checkbox labels and group\nlabels should not exceed three words."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$helper-text-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warning message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"height & width"),(0,l.kt)("td",{parentName:"tr",align:null},"16px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border inset"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox item"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABCUlEQVQoz2NgwAJUVFQY+BkYGLgYGBjs09MZ1AwMGESFhBjExMUZREVFGcTExBiIBhfVUxmUlZUZBBkYGHgYGBhskhIZVPR0KTPQwtmeQdVch8HDwITRMzJSxN7ZWVhCVJRNVEyMmZ+fn3QDraXUGEKgfOemBl1lS0sZIR4eUXFJSR6QYSQb+F+niuGWYSHbAT4v3pSqVit5SwtZYW4ecXFJST7yDAz+z/DLezLjFAZxZveSCk0ZaytJYT4+YXEJCS4xcsLwm3Ypw3+GVAbvgFQGhpo8VobGWl6GI/sYuQN8GdjioslwoW49w3/pEoZc0zAGhgojBoaFcxikGBgYRNTUGAQMDfAaCACjyjiJV3z3bAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for a checkbox group",title:"Structure and spacing measurements for a checkbox group",src:"/static/5ee7077ad2ce922821b35ba3e0ef71ef/3cbba/checkbox-style-3.png",srcSet:["/static/5ee7077ad2ce922821b35ba3e0ef71ef/7fc1e/checkbox-style-3.png 288w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/a5df1/checkbox-style-3.png 576w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/3cbba/checkbox-style-3.png 1152w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/392b1/checkbox-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(c,{mdxType:"Caption"},"Structure and spacing measurements for a checkbox group | px / rem"),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACI0lEQVQoz3WS3UvTcRjFP9NlkTXLRM3p5k/T4UvDTdlKkfky23RTbLMI51oKLb2Yb9OGyUx8SSdEbqnhWKkoXWRdJGREEFho0FV20VX9A0FX/QHf0ATrogPn6oEP5+EcnpXd4kVpJw8q25k2edgq9vE1rx+hGOOzppeQycOMycN8RQdTVR7WDF6+5fjZLuxmV9PLrqaPf7R1vo2dYjfR3CZWzjkRuBAI5MGF/Xu0zkvE4mXJ3EXU7uOH5zGIXzz/sCMzoaApx4Ar00hEcvBQcsJ2QRufCq4TSzbL1xUWOeIdiB4Yvo9QwrKli7n6TlYtPvlKsz9B9L+OR7xk8/1HqomnMcdA69/AqO0NUdvbo7P2CWPI7tUv2vxFi9Y+NWKD7/lXGTd0M13mJ3xxTDOpd+unkqul9Zsh7ebyRqmX9FOB/Ia0oNqasprbKlvLdUHkSoBw84A8NrtsjczGXPPhmHvm3lwdvna5EIILLe3cSDHSk1GdUJ+pO6mB44PDk5lDS09LpLOFpy+r9EnXsoyKsOSQ7aVk9IiO4DE9AYgPQdwIxL0CWZLVQXpqEWZtLR1p5fQqa2hU6sgjkUd3pv8UIERcrdZEW3oZYcmx/zZ3E8sJKioY5AQjwMBeEchJqWlElVpIg/4SnVmVDKjMONUGtJzhSeAA+PMLVboq3Gn6Q+BEto3xbBtBtZXbajN+VS2j6gbsyhJqMopZkFoOJxEc+r8P9BujpqcVj4K1NAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for vertical and horizontal checkbox groupings",title:"Structure and spacing measurements for vertical and horizontal checkbox groupings",src:"/static/282c552b238bb87062c7bda46de63357/3cbba/checkbox-style-4.png",srcSet:["/static/282c552b238bb87062c7bda46de63357/7fc1e/checkbox-style-4.png 288w","/static/282c552b238bb87062c7bda46de63357/a5df1/checkbox-style-4.png 576w","/static/282c552b238bb87062c7bda46de63357/3cbba/checkbox-style-4.png 1152w","/static/282c552b238bb87062c7bda46de63357/392b1/checkbox-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(c,{mdxType:"Caption"},"Structure and spacing measurements for vertical and horizontal checkbox groupings | px / rem"))}k.isMDXComponent=!0}}]);