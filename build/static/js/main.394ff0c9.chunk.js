(this["webpackJsonpnested-accordion"]=this["webpackJsonpnested-accordion"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"id":"/AccordionSchema","type":"object","properties":{"open":{"type":"boolean"},"title":{"type":"string","required":true},"content":{"type":"array","items":{"$ref":"/AccordionSection"}}}}')},15:function(e){e.exports=JSON.parse('{"id":"/AccordionSection","type":"object","properties":{"title":{"type":"string"},"subtitle":{"type":"string"},"color":{"type":"string"},"sectionColor":{"type":"string"},"background":{"type":"string"},"columns":{"type":"number"},"fullWidth":{"type":"boolean"},"expandable":{"type":"boolean"},"content":{"type":"object","properties":{"title":{"type":"string"},"body":{"type":"string"},"urls":{"type":"object","properties":{"main":{"type":"string"},"readMore":{"type":"string"},"readCaseStudy":{"type":"string"}}},"variant":{"type":"string"}}},"sections":{"type":"array","items":{"$ref":"/AccordionSection"}}}}')},16:function(e){e.exports=JSON.parse('{"type":"array","items":{"$ref":"/AccordionSchema"},"required":true}')},27:function(e,t,r){"use strict";r.r(t);var n,c,o=r(1),i=r.n(o),l=r(8),s=r.n(l),a=r(4),d=r(3),u=["title","titleId"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function f(e,t){var r=e.title,i=e.titleId,l=b(e,u);return o.createElement("svg",p({width:31,height:32,viewBox:"0 0 31 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},l),r?o.createElement("title",{id:i},r):null,n||(n=o.createElement("rect",{x:30.541,y:.0668945,width:30,height:30,rx:15,transform:"rotate(90 30.541 0.0668945)",fill:"#F8F9FA"})),c||(c=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.1641 14.2669L15.5406 19.0669L10.9172 14.2669L12.0731 13.0669L15.5406 16.6669L19.0082 13.0669L20.1641 14.2669Z",fill:"black"})))}var j=o.forwardRef(f),h=(r.p,r(0));function m(e){return Object(h.jsx)("span",{className:"icon",children:e.icon})}function v(e){var t=e.arrow,r=void 0===t||t,n=e.parent,c=void 0!==n&&n,i=e.isOpen,l=void 0!==i&&i,s=e.fullWidth,a=void 0!==s&&s,u=e.style,p=void 0===u?{}:u,b=e.background,f=e.color,v=e.title,y=e.children,g=Object(o.useRef)(null);return Object(h.jsxs)("div",Object(d.a)(Object(d.a)({ref:g},e["data-section"]?{"data-section":e["data-section"]}:{}),{},{className:["accordion",c?"parent":"",f?"themed":"",l?"is-open":"is-closed",a?"full-width":""].join(" ").trim(),style:Object(d.a)(Object(d.a)({background:b||f+"1a",color:f},p),a?{flex:"100%"}:{}),children:[Object(h.jsxs)("div",{className:"title",onClick:function(){g.current&&(g.current.classList.contains("is-closed")?(g.current.classList.add("is-open"),g.current.classList.remove("is-closed"),"Applications"===g.current.getAttribute("data-section")&&document.querySelectorAll("[data-section=Applications]").forEach((function(e){e.classList.remove("is-closed"),e.classList.add("is-open")}))):(g.current.classList.remove("is-open"),g.current.classList.add("is-closed")))},children:[Object(h.jsx)("b",{style:{color:f},children:v}),r&&Object(h.jsx)(m,{icon:Object(h.jsx)(j,{})})]}),Object(h.jsx)("div",{className:"content",children:y})]}))}var y=r(14),g=r(15),O=r(16),x=new(0,r(17).Validator);function w(e){return x.validate(e,O)}x.addSchema(y,"/AccordionSchema"),x.addSchema(g,"/AccordionSection");var S=i.a.createContext(null);function C(){var e=Object(o.useContext)(S);if(!e)return null;if(null===e||void 0===e?void 0:e.current){var t,r=e.current,n=r.title,c=r.body,i=r.variant,l=void 0===i?"simple":i,s=r.urls,a=s.sources,d=s.readCaseStudy,u=e.setCurrent,p=null===(t=a.find((function(e){return e.toLowerCase().indexOf("read more")>=0})))||void 0===t?void 0:t.replace("Read more:","");return Object(h.jsx)("div",{className:"detail-card-container",onClick:function(e){var t=e.currentTarget;"fixed"===window.getComputedStyle(t).position&&u(void 0)},children:Object(h.jsxs)("div",{id:"detail-card",className:[l,d?"has-case-study":""].join(" ").trim(),children:[Object(h.jsx)("h1",{children:n}),Object(h.jsx)("p",{children:c}),Object(h.jsxs)("div",{className:"urls",children:[p&&Object(h.jsx)("a",{href:p,children:"Read More"}),a.filter((function(e){return e.toLowerCase().indexOf("read more")<0})).map((function(e,t){var r=e.match(/(https?:\/\/[^ ]*)/);return r&&(r=r[1].match(/(?:^https?:\/\/([^\/]+)(?:[\/,]|$)|^(.*)$)/)),Object(h.jsx)("a",{href:e.substr(e.indexOf(":")+1).trim(),children:r&&r[1]},t)}))]}),d&&Object(h.jsx)("a",{href:d,className:"read-case-study",children:"Read Case Study"})]})})}return null}var L=function(e){if(!(window.innerWidth<1433)){var t,r=document.querySelector("#detail-card");if(e instanceof HTMLElement&&(t=e.getBoundingClientRect().top-document.body.getBoundingClientRect().top),r instanceof HTMLElement){var n=document.querySelector(".item.selected");t=window.scrollY&&n&&window.scrollY>n.getBoundingClientRect().top?window.scrollY+30:null===n||void 0===n?void 0:n.getBoundingClientRect().top,r.style.top=t+"px",r.style.right="0px"}}};var k=function(){var e=Object(o.useState)(),t=Object(a.a)(e,2),r=t[0],n=t[1],c=Object(o.useState)(),l=Object(a.a)(c,2),s=l[0],d=l[1],u=Object(o.useState)(),p=Object(a.a)(u,2),b=p[0],f=p[1];return Object(o.useEffect)((function(){return fetch("/accordion_data.json").then((function(e){return e.json()})).then((function(e){w(e).errors.length?f(w(e).errors[0].stack):n(e)})),window.addEventListener("scroll",L),function(){}}),[]),Object(h.jsx)(S.Provider,{value:{current:s,setCurrent:d},children:Object(h.jsxs)("div",{className:"wrapper",children:[b&&Object(h.jsx)("b",{children:b}),r&&!b&&function e(t){if(!r)return null;if(t>=r.length)return null;var n=r[t];return Object(h.jsxs)(v,{title:n.title,parent:!0,isOpen:n.open,"data-section":n.title,children:[n.content&&n.content.map((function(e,t){return i.a.createElement(e.expandable?v:i.a.Fragment,{arrow:!1,key:t,title:e.title,color:e.color,background:e.background,isOpen:e.open,fullWidth:e.fullWidth,style:{flex:e.columns||1},"data-section":n.title},e.sections&&Object(h.jsx)("ul",{className:"category-items",style:{gridTemplateColumns:"repeat(".concat(e.columns,",1fr)"),gap:16},children:e.sections.map((function(t,r){var n,c={background:t.background||t.color||e.sectionColor,border:"3px solid",borderColor:"",color:t.color},o=e.color;return c.background!==t.background&&(c.background+="80"),(null===(n=t.selected)||void 0===n?void 0:n.color)?(c.borderColor=t.selected.color,o=t.selected.color):c.background&&(c.borderColor=c.background),Object(h.jsxs)("li",{className:"item",style:c,"data-color":o,"data-initial-color":e.color,onClick:function(e){var r=e.currentTarget;r.classList.contains("selected")?(r.classList.remove("selected"),d(void 0)):(document.querySelectorAll(".item.selected").forEach((function(e){e.classList.remove("selected")})),r.classList.add("selected"),r.style.color=r.getAttribute("data-color")+"",d(t.content)),document.querySelectorAll(".item").forEach((function(e){var t=e;t.classList.contains("selected")||(t.style.color=t.getAttribute("data-initial-color")+"")})),setTimeout((function(){L(r)}),0)},children:[Object(h.jsx)("h1",{children:t.title}),Object(h.jsx)("h2",{children:t.subtitle})]},r)}))}))})),e(t+1)]},t)}(0),Object(h.jsx)(C,{})]})})},A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),o(e),i(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("nested-accordion")),A()}},[[27,1,2]]]);
//# sourceMappingURL=main.394ff0c9.chunk.js.map