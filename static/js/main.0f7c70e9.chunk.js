(this.webpackJsonpimage_search=this.webpackJsonpimage_search||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(9),a(1)),m=function(){var e=(new Date).toLocaleTimeString(),t=Object(n.useState)(e),a=Object(o.a)(t,2),l=a[0],c=a[1];return setInterval((function(){e=(new Date).toLocaleTimeString(),c(e)}),1e3),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"clock_style"}," ",l," "))},u=(new Date).getHours(),i="";i=u>=1&&u<12?"Good Morning":u>=12&&u<19?"Good Afternooon":"Good Night";var s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"displayGreeting"},"Hello there!!! ",i))},g=function(e){var t="https://source.unsplash.com/500x500/?".concat(e.name);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"5px"}},r.a.createElement("img",{src:t,alt:"random image"})))},E=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"searchresults"},r.a.createElement("h3",null," Showing image as per You type  "),r.a.createElement("input",{type:"text",placeholder:"Search Anything Here",onChange:function(e){var t=e.target.value;l(t)},value:a}),r.a.createElement(g,{name:a})))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"maincontainer"},r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(E,null)))};c.a.render(r.a.createElement(h,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.0f7c70e9.chunk.js.map