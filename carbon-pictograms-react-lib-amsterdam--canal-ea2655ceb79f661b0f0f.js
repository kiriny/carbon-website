"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[80858,37965,66095,420,69602,78364],{49998:function(e,t,r){var n=r(95752),h=r(45697),c=r(67294);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(h),l=a(c);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,h=function(e,t){if(null==e)return{};var r,n,h={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(h[r]=e[r]);return h}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(h[r]=e[r])}return h}var d=["className","children","tabIndex"],b=["tabindex"],p=l.default.forwardRef((function(e,t){var r=e.className,h=e.children,c=e.tabIndex,a=s(e,d),i=n.getAttributes(u(u({},a),{},{tabindex:c})),o=i.tabindex,v=s(i,b);return r&&(v.className=r),null!=o&&(v.tabIndex=o),t&&(v.ref=t),l.default.createElement("svg",v,h)}));p.displayName="Icon",p.propTypes={"aria-hidden":i.default.string,"aria-label":i.default.string,"aria-labelledby":i.default.string,children:i.default.node,className:i.default.string,height:i.default.oneOfType([i.default.number,i.default.string]),preserveAspectRatio:i.default.string,tabIndex:i.default.string,viewBox:i.default.string,width:i.default.oneOfType([i.default.number,i.default.string]),xmlns:i.default.string},p.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=p,t._extends=f,t._objectWithoutProperties=s},60845:function(e,t,r){var n=r(49998),h=r(67294);function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(95752),r(45697);var a,i=c(h),l=["children"],o=i.default.forwardRef((function(e,t){var r=e.children,h=n._objectWithoutProperties(e,l);return i.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},h),a||(a=i.default.createElement("path",{d:"M5.5,2.5C5.5,2.224,5.724,2,6,2s0.5,0.224,0.5,0.5S6.276,3,6,3S5.5,2.776,5.5,2.5z M1,25.64H0.64\tv0.721H1c2.559,0,4.64,2.081,4.64,4.64v0.36h0.72V31C6.36,28.045,3.956,25.64,1,25.64z M25.64,31v0.36h0.721V31\tc0-2.559,2.081-4.64,4.64-4.64h0.36v-0.72H31C28.045,25.64,25.64,28.045,25.64,31z M16,25.64c-2.956,0-5.36,2.405-5.36,5.36v0.36\th0.72V31c0-2.559,2.082-4.64,4.64-4.64s4.64,2.081,4.64,4.64v0.36h0.721V31C21.36,28.045,18.955,25.64,16,25.64z M31.36,9v15\tc0,0.199-0.161,0.36-0.36,0.36H1c-0.199,0-0.36-0.161-0.36-0.36V11c0-0.199,0.161-0.36,0.36-0.36h0.796L4.64,5.9V4\tc0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v1.9l2.844,4.74h0.436V7c0-0.199,0.161-0.36,0.36-0.36h0.64V5\tc0-0.199,0.161-0.36,0.36-0.36h0.64V3c0-0.199,0.161-0.36,0.36-0.36h1.64V1c0-0.199,0.161-0.36,0.36-0.36h2\tc0.199,0,0.36,0.161,0.36,0.36v1.64H19c0.199,0,0.36,0.161,0.36,0.36v1.64H20c0.199,0,0.36,0.161,0.36,0.36v1.64H21\tc0.199,0,0.36,0.161,0.36,0.36v1.64h0.481c1.39-1.468,1.707-3.474,1.777-4.28H23V3.64h0.676c0.175-1.13,1.146-2,2.324-2\ts2.149,0.87,2.324,2H29v0.72h-0.618c0.07,0.806,0.387,2.812,1.777,4.28H31C31.199,8.64,31.36,8.801,31.36,9z M24.403,3.64h3.194\tC27.432,2.909,26.78,2.36,26,2.36S24.568,2.909,24.403,3.64z M22.786,8.64h6.428c-1.226-1.597-1.499-3.498-1.558-4.28h-3.312\tC24.285,5.142,24.012,7.043,22.786,8.64z M21.36,9.36v5.28h9.279V9.36H21.36z M12.36,6.64h2.28V6c0-0.75,0.61-1.36,1.36-1.36\tc0.75,0,1.36,0.61,1.36,1.36v0.64h2.279V5.36H19c-0.199,0-0.36-0.161-0.36-0.36V3.36H17c-0.199,0-0.36-0.161-0.36-0.36V1.36h-1.28V3\tc0,0.199-0.161,0.36-0.36,0.36h-1.64V5c0,0.199-0.161,0.36-0.36,0.36h-0.64V6.64z M16.64,6c0-0.353-0.287-0.64-0.64-0.64\tS15.36,5.647,15.36,6v0.64h1.28V6z M2.636,10.64H4.64V10c0-0.75,0.61-1.36,1.36-1.36S7.36,9.25,7.36,10v0.64h2.005L6.691,6.185\tC6.687,6.178,6.687,6.169,6.683,6.162C6.672,6.141,6.666,6.118,6.659,6.095C6.653,6.071,6.646,6.048,6.645,6.024\tC6.644,6.015,6.64,6.008,6.64,6V4.36H5.36V6c0,0.008-0.004,0.015-0.005,0.024C5.354,6.048,5.347,6.071,5.341,6.095\tC5.334,6.118,5.328,6.141,5.317,6.162C5.313,6.169,5.313,6.178,5.309,6.185L2.636,10.64z M6.64,10c0-0.353-0.287-0.64-0.64-0.64\tS5.36,9.647,5.36,10v0.64h1.28C6.64,10.64,6.64,10,6.64,10z M1.36,23.64h2.28v-5h4.72v5h2.28V11.36H1.36V23.64z M6.36,23.64h1.28\tv-4.28H6.36V23.64z M5.64,19.36H4.36v4.279h1.28C5.64,23.639,5.64,19.36,5.64,19.36z M18.64,19.36h-1.28v4.279h1.279L18.64,19.36\tL18.64,19.36z M20.64,23.64V7.36h-9.28v16.28h5.28v-5h2.72v5C19.36,23.64,20.64,23.64,20.64,23.64z M28.64,17.36h-1.28v6.279h1.279\tL28.64,17.36L28.64,17.36z M30.64,23.64v-8.28h-9.28v8.28h5.279v-7h2.721v7H30.64z M5.36,17.36H2.64v-4.72h2.72V17.36z M4.64,13.36\tH3.36v3.28h1.28V13.36z M9.36,17.36H6.64v-4.72h2.72V17.36z M8.64,13.36H7.36v3.28h1.28V13.36z M12.64,18.64h2.72v3.721h-2.72V18.64\tz M13.36,21.64h1.28v-2.28h-1.28V21.64z M16.64,12.64h2.72v4.72h-2.72V12.64z M17.36,16.64h1.279v-3.28H17.36V16.64z M12.64,12.64\th2.72v4.72h-2.72V12.64z M13.36,16.64h1.28v-3.28h-1.28V16.64z M22.64,16.64h2.721v5.72H22.64V16.64z M23.36,21.64h1.279v-4.28\tH23.36V21.64z M27.36,13.36h-2.72v-2.72h2.721L27.36,13.36L27.36,13.36z M26.64,11.36h-1.28v1.28h1.279L26.64,11.36L26.64,11.36z M29.36,11h-0.72v2h0.721L29.36,11L29.36,11z M25.64,5v2h0.721V5H25.64z M23.36,11h-0.72v2h0.721L23.36,11L23.36,11z M16.64,8.64\th2.72v2.72h-2.72V8.64z M17.36,10.64h1.279V9.36H17.36V10.64z M12.64,8.64h2.72v2.72h-2.72V8.64z M13.36,10.64h1.28V9.36h-1.28\tV10.64z"})),r)}));e.exports=o}}]);