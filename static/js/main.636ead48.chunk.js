(this["webpackJsonpcn-cats-website"]=this["webpackJsonpcn-cats-website"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),i=(n(11),n(12),n(2)),u=n.n(i),o=n(4),j=n(5),f=n(0);var l=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(j.a)(a,2),i=s[0],l=s[1];Object(c.useEffect)((function(){p(),b()}),[]);var p=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.thecatapi.com/v1/images/search");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n[0].url),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://randomuser.me/api/");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l(n.results[0].name.first),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:n,alt:""}),Object(f.jsx)("h3",{children:i}),Object(f.jsx)("button",{children:"Price"})]})};var p=function(){var e=new Array(12).fill();return Object(f.jsx)("div",{className:"cats-on-sale",children:e.map((function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(l,{})},e)}))})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.636ead48.chunk.js.map